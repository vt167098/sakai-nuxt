import {
  addComponent,
  addPluginTemplate,
  defineNuxtModule,
  normalizeTemplate
<<<<<<< HEAD
} from '@nuxt/kit';
import serialize from 'serialize-javascript';
import { isArray, isObject } from '@whoj/utils';
import type { usePrimeVue } from 'primevue/config';
=======
} from '@nuxt/kit'
import serialize from 'serialize-javascript'
import { isObject, isArray } from '@whoj/utils'
import { usePrimeVue } from 'primevue/config'
>>>>>>> 2d5dea2 (Initial commit)

const primevueComponents = [
  'Accordion',
  'AccordionTab',
  'AutoComplete',
  'Avatar',
  'AvatarGroup',
  'Badge',
  'BlockUI',
  'Breadcrumb',
  'Button',
  'Calendar',
  'Card',
  'Carousel',
  'CascadeSelect',
  'Chart',
  'Checkbox',
  'Chip',
  'Chips',
  'ColorPicker',
  'Column',
  'ColumnGroup',
  'ConfirmDialog',
  'ConfirmPopup',
  'ContextMenu',
  'DataTable',
  'DataView',
  'DataViewLayoutOptions',
  'DeferredContent',
  'Dialog',
  'Divider',
  'Dock',
  'Dropdown',
  // 'Editor',
  'Fieldset',
  'FileUpload',
  // 'FullCalendar',
  'Galleria',
  'Image',
  'InlineMessage',
  'Inplace',
  'InputMask',
  'InputNumber',
  'InputSwitch',
  'InputText',
  'Knob',
  'Listbox',
  'MegaMenu',
  'Menu',
  'Menubar',
  'Message',
  'MultiSelect',
  'OrderList',
  'OrganizationChart',
  'OverlayPanel',
  'Paginator',
  'Panel',
  'PanelMenu',
  'Password',
  'PickList',
  'ProgressBar',
  'ProgressSpinner',
  'RadioButton',
  'Rating',
  'ScrollPanel',
  'ScrollTop',
  'SelectButton',
  'Sidebar',
  'Skeleton',
  'Slider',
  'SpeedDial',
  'SplitButton',
  'Splitter',
  'SplitterPanel',
  'Steps',
  'TabMenu',
  'TabPanel',
  'TabView',
  'Tag',
  'Terminal',
  'TerminalService',
  'Textarea',
  'TieredMenu',
  'Timeline',
  'Toast',
  'ToggleButton',
  'Toolbar',
  'Tree',
  'TreeSelect',
  'TreeTable',
  'TriStateCheckbox',
  'VirtualScroller'
<<<<<<< HEAD
] as const;

type PrimeVueConfig = ReturnType<typeof usePrimeVue>['config'];

type PrimevueComponents = typeof primevueComponents[number];

export interface PrimeVueOptions extends PrimeVueConfig {
  components?: {
    exclude?: Array<PrimevueComponents>,
    include?: Array<PrimevueComponents | { name: PrimevueComponents, global?: boolean }>,
    global?: boolean
  };
}

async function registerComponent(name: PrimevueComponents, global = true) {
=======
] as const

type PrimeVueConfig = ReturnType<typeof usePrimeVue>['config']

type PrimevueComponents = typeof primevueComponents[number]

export interface PrimeVueOptions extends PrimeVueConfig {
  components?: {
    exclude?: Array<PrimevueComponents>
    include?: Array<PrimevueComponents | { name: PrimevueComponents, global?: boolean }>
    global?: boolean
  }
}

async function registerComponent (name: PrimevueComponents, global = true) {
>>>>>>> 2d5dea2 (Initial commit)
  await addComponent({
    export: 'default',
    filePath: `primevue/${name.toLowerCase()}`,
    global: (['ConfirmDialog', 'ConfirmPopup', 'Toast', 'Tooltip'].includes(name) || global),
    name
<<<<<<< HEAD
  });
=======
  })
>>>>>>> 2d5dea2 (Initial commit)
}

export default defineNuxtModule<PrimeVueOptions>({
  meta: {
    configKey: 'primevue'
  },
  defaults: {
    components: {
      global: true
    },
    ripple: true,
    inputStyle: 'outlined'
  },
<<<<<<< HEAD
  async setup(options, nuxt) {
    addPluginTemplate(normalizeTemplate({
      filename: 'primevue.config.mjs',
      getContents() {
=======
  async setup (options, nuxt) {
    addPluginTemplate(normalizeTemplate({
      filename: 'primevue.config.mjs',
      getContents () {
>>>>>>> 2d5dea2 (Initial commit)
        return [
          'import PrimeVue from \'primevue/config\';',
          'import { defineNuxtPlugin } from \'#app\';',
          '',
          'export default defineNuxtPlugin(({ vueApp }) => {',
          `  vueApp.use(PrimeVue, ${serialize({ ...options, components: undefined })})`,
          '})'
<<<<<<< HEAD
        ].join('\n');
      }
    }));
=======
        ].join('\n')
      }
    }))
>>>>>>> 2d5dea2 (Initial commit)

    if (options.components.include) {
      for (const component of options.components.include) {
        if (isObject(component)) {
<<<<<<< HEAD
          await registerComponent(component.name, (component.global || options.components.global));
        } else {
          await registerComponent(component, options.components.global);
=======
          await registerComponent(component.name, (component.global || options.components.global))
        } else {
          await registerComponent(component, options.components.global)
>>>>>>> 2d5dea2 (Initial commit)
        }
      }
    } else {
      for (const component of primevueComponents) {
        if (!isArray(options.components.exclude) || !options.components.exclude.includes(component)) {
<<<<<<< HEAD
          await registerComponent(component, options.components.global);
=======
          await registerComponent(component, options.components.global)
>>>>>>> 2d5dea2 (Initial commit)
        }
      }
    }
  }
<<<<<<< HEAD
});
=======
})
>>>>>>> 2d5dea2 (Initial commit)
