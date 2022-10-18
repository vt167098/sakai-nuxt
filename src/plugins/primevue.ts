<<<<<<< HEAD
import Ripple from 'primevue/ripple';
import Tooltip from 'primevue/tooltip';
import StyleClass from 'primevue/styleclass';
import ToastService from 'primevue/toastservice';
import BadgeDirective from 'primevue/badgedirective';
import ConfirmationService from 'primevue/confirmationservice';
import { createGlobalState, reactiveComputed, useLocalStorage } from '@vueuse/core';
import { defineNuxtPlugin, watch } from '#imports';

import CodeHighlight from '~/directives/code';

declare interface AppState {
  theme?: string;
  darkTheme?: boolean;
}

export default defineNuxtPlugin(({ vueApp: app }) => {
  app.use(ConfirmationService);
  app.use(ToastService);

  app.directive('tooltip', Tooltip);
  app.directive('ripple', Ripple);
  app.directive('code', CodeHighlight);
  app.directive('badge', BadgeDirective);
  app.directive('styleclass', StyleClass);
=======
import Ripple from 'primevue/ripple'
import Tooltip from 'primevue/tooltip'
import StyleClass from 'primevue/styleclass'
import ToastService from 'primevue/toastservice'
import BadgeDirective from 'primevue/badgedirective'
import ConfirmationService from 'primevue/confirmationservice'
import { createGlobalState, reactiveComputed, useLocalStorage } from '@vueuse/core'
import { defineNuxtPlugin, watch } from '#imports'

import CodeHighlight from '~/directives/code'

declare interface AppState {
  theme?: string
  darkTheme?: boolean
}

export default defineNuxtPlugin(({ vueApp: app }) => {
  app.use(ConfirmationService)
  app.use(ToastService)

  app.directive('tooltip', Tooltip)
  app.directive('ripple', Ripple)
  app.directive('code', CodeHighlight)
  app.directive('badge', BadgeDirective)
  app.directive('styleclass', StyleClass)
>>>>>>> 2d5dea2 (Initial commit)

  const appState = createGlobalState(
    () => useLocalStorage<AppState>('app-state', {
      theme: 'lara-light-indigo',
      darkTheme: false
    })
<<<<<<< HEAD
  )();

  watch(() => appState.value.theme, (theme) => {
    useAppTheme(theme!);
  }, { immediate: true });
=======
  )()

  watch(() => appState.value.theme, (theme) => {
    useAppTheme(theme)
  }, { immediate: true })
>>>>>>> 2d5dea2 (Initial commit)

  return {
    provide: {
      appState: reactiveComputed(() => appState.value)
    }
<<<<<<< HEAD
  };
});

declare module '#app' {
  interface NuxtApp {
    $appState: AppState;
=======
  }
})

declare module '#app' {
  interface NuxtApp {
    $appState: AppState
>>>>>>> 2d5dea2 (Initial commit)
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
<<<<<<< HEAD
    $appState: AppState;
    outsideClickListener?: ((event: Event) => void) | null;
=======
    $appState: AppState
>>>>>>> 2d5dea2 (Initial commit)
  }
}
