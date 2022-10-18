<<<<<<< HEAD
import defu from 'defu';
import serialize from 'serialize-javascript';
import { addTemplate, defineNuxtModule, importModule, resolvePath, useLogger } from '@nuxt/kit';
import type { RouteRecordRaw } from 'vue-router';

export interface ModuleOptions {
  path?: string;
  fileName?: string;
  parsePages?: boolean;
=======
import defu from 'defu'
import serialize from 'serialize-javascript'
import { addTemplate, defineNuxtModule, importModule, resolvePath, useLogger } from '@nuxt/kit'
import type { RouteRecordRaw } from 'vue-router'

export interface ModuleOptions {
  path?: string
  fileName?: string
  parsePages?: boolean
>>>>>>> 2d5dea2 (Initial commit)
}

export type RouteRaw = RouteRecordRaw & {
  file
};

<<<<<<< HEAD
const logger = useLogger('nuxt:router');
const DEFAULTS = {
  fileName: 'routes.ts',
  parsePages: false
};

export function addComponentToRoutes(routes: RouteRaw[]) {
=======
const logger = useLogger('nuxt:router')
const DEFAULTS = {
  fileName: 'routes.ts',
  parsePages: false
}

export function addComponentToRoutes (routes: RouteRaw[]) {
>>>>>>> 2d5dea2 (Initial commit)
  return routes.map(route => ({
    ...route,
    children: route.children ? addComponentToRoutes(route.children as RouteRaw[]) : [],
    component: `{() => import('${route.file}')}`
<<<<<<< HEAD
  }));
=======
  }))
>>>>>>> 2d5dea2 (Initial commit)
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'router-module',
    configKey: 'routerModule'
  },
  defaults: DEFAULTS,
  hooks: {
<<<<<<< HEAD
    'build:before': function ({ nuxt }) {
      logger.info('Building routes!');
=======
    'build:before' ({ nuxt }) {
      logger.info('Building routes!')
>>>>>>> 2d5dea2 (Initial commit)
      const options = defu(
        (nuxt.options.routerModule || {}),
        {
          ...DEFAULTS,
          path: nuxt.options.srcDir
        }
<<<<<<< HEAD
      );
=======
      )
>>>>>>> 2d5dea2 (Initial commit)

      addTemplate({
        filename: 'routes.mjs',
        getContents: async () => {
          const { createRoutes } = await importModule(options.fileName, {
            paths: options.path
<<<<<<< HEAD
          });
          const pages = createRoutes().map((route) => {
            return { ...route, file: route.component };
          });
          await nuxt.callHook('pages:extend', pages);
          const serializedRoutes: Partial<RouteRecordRaw> = addComponentToRoutes(pages);

          return `export default ${serialize(serializedRoutes)}`;
        }
      });
    }
  },
  async setup(options, nuxt) {
    const routerFilePath = await resolvePath(`${options.path}/${options.fileName}`, {
      cwd: nuxt.options.rootDir,
      extensions: ['.mjs', '.ts']
    });

    nuxt.hook('builder:watch', async (event, path) => {
      const pathPattern = new RegExp(`^(${routerFilePath}|${nuxt.options.srcDir}/views)/`);
      if (event !== 'change' && path.match(pathPattern)) {
        await nuxt.callHook('builder:generateApp');
      }
    });
  }
});

declare module '@nuxt/schema' {
  interface NuxtConfig {
    routerModule?: ModuleOptions;
  }
  interface NuxtOptions {
    routerModule?: ModuleOptions;
=======
          })
          const pages = createRoutes().map((route) => {
            return { ...route, file: route.component }
          })
          await nuxt.callHook('pages:extend', pages)
          const serializedRoutes: Partial<RouteRecordRaw> = addComponentToRoutes(pages)

          return `export default ${serialize(serializedRoutes)}`
        }
      })
    }
  },
  async setup (options, nuxt) {
    const routerFilePath = await resolvePath(`${options.path}/${options.fileName}`, {
      cwd: nuxt.options.rootDir,
      extensions: ['.mjs', '.ts']
    })

    nuxt.hook('builder:watch', async (event, path) => {
      const pathPattern = new RegExp(`^(${routerFilePath}|${nuxt.options.srcDir}/views)/`)
      if (event !== 'change' && path.match(pathPattern)) {
        await nuxt.callHook('builder:generateApp')
      }
    })
  }
})

declare module '@nuxt/schema' {
  interface NuxtConfig {
    routerModule?: ModuleOptions
  }
  interface NuxtOptions {
    routerModule?: ModuleOptions
>>>>>>> 2d5dea2 (Initial commit)
  }
}
