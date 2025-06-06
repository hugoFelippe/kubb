import { normalize, relative } from 'node:path'

import fs from 'fs-extra'
import { switcher } from 'js-runtime'

function slash(path: string, platform: 'windows' | 'mac' | 'linux' = 'linux') {
  const isWindowsPath = /^\\\\\?\\/.test(path)
  const normalizedPath = normalize(path)

  if (['linux', 'mac'].includes(platform) && !isWindowsPath) {
    // linux and mac
    return normalizedPath.replaceAll(/\\/g, '/').replace('../', '')
  }

  // windows
  return normalizedPath.replaceAll(/\\/g, '/').replace('../', '')
}

export function getRelativePath(rootDir?: string | null, filePath?: string | null, platform: 'windows' | 'mac' | 'linux' = 'linux'): string {
  if (!rootDir || !filePath) {
    throw new Error(`Root and file should be filled in when retrieving the relativePath, ${rootDir || ''} ${filePath || ''}`)
  }

  const relativePath = relative(rootDir, filePath)

  // On Windows, paths are separated with a "\"
  // However, web browsers use "/" no matter the platform
  const slashedPath = slash(relativePath, platform)

  if (slashedPath.startsWith('../')) {
    return slashedPath
  }

  return `./${slashedPath}`
}

const reader = switcher(
  {
    node: async (path: string) => {
      return fs.readFile(path, { encoding: 'utf8' })
    },
    bun: async (path: string) => {
      const file = Bun.file(path)

      return file.text()
    },
  },
  'node',
)

const syncReader = switcher(
  {
    node: (path: string) => {
      return fs.readFileSync(path, { encoding: 'utf8' })
    },
    bun: () => {
      throw new Error('Bun cannot read sync')
    },
  },
  'node',
)

export async function read(path: string): Promise<string> {
  return reader(path)
}

export function readSync(path: string): string {
  return syncReader(path)
}
