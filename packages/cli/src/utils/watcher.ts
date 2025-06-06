import { createLogger } from '@kubb/core/logger'
import { colors } from 'consola/utils'

export async function startWatcher(path: string[], cb: (path: string[]) => Promise<void>): Promise<void> {
  const { watch } = await import('chokidar')
  const logger = createLogger()

  const ignored = '**/{.git,node_modules}/**'

  const watcher = watch(path, {
    ignorePermissionErrors: true,
    ignored,
  })
  watcher.on('all', (type, file) => {
    logger?.emit('info', colors.yellow(colors.bold(`Change detected: ${type} ${file}`)))

    try {
      cb(path)
    } catch (_e) {
      logger?.emit('warning', colors.red('Watcher failed'))
    }
  })
}
