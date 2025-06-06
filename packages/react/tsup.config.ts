import { optionsCJS, optionsESM } from '@kubb/config-tsup'

import { defineConfig } from 'tsup'

export default defineConfig([
  {
    ...optionsCJS,
    entry: {
      index: 'src/index.ts',
      types: 'src/types.ts',
      devtools: 'src/devtools.ts',
      'jsx-runtime': './src/jsx-runtime.ts',
    },
    noExternal: ['auto-bind', /react/],
  },
  {
    ...optionsESM,
    entry: {
      index: 'src/index.ts',
      types: 'src/types.ts',
      devtools: 'src/devtools.ts',
      'jsx-runtime': './src/jsx-runtime.ts',
    },
    noExternal: [/react/],
  },
])
