<<<<<<< HEAD
<script lang="ts">
import AppSubmenu from './AppSubmenu.vue';
=======
<template>
  <div class="layout-menu-container">
    <AppSubmenu :items="model" class="layout-menu" :root="true" @menuitem-click="onMenuItemClick" />
  </div>
</template>

<script lang="ts">
import AppSubmenu from './AppSubmenu.vue'
>>>>>>> 2d5dea2 (Initial commit)

export default {
  components: {
    AppSubmenu
  },
  props: {
    model: {
      type: Array,
      default: () => ([])
    }
  },
  emits: ['menuitem-click'],
  computed: {
<<<<<<< HEAD
    darkTheme() {
      return this.$appState.darkTheme;
    }
  },
  methods: {
    onMenuItemClick(event) {
      this.$emit('menuitem-click', event);
    },
    bannerImage() {
      return this.$appState.darkTheme ? '/images/banner-primeblocks-dark.png' : '/images/banner-primeblocks.png';
    }
  }
};
</script>

<template>
  <div class="layout-menu-container">
    <AppSubmenu :items="model" class="layout-menu" :root="true" @menuitem-click="onMenuItemClick" />
  </div>
</template>

=======
    darkTheme () {
      return this.$appState.darkTheme
    }
  },
  methods: {
    onMenuItemClick (event) {
      this.$emit('menuitem-click', event)
    },
    bannerImage () {
      return this.$appState.darkTheme ? '/images/banner-primeblocks-dark.png' : '/images/banner-primeblocks.png'
    }
  }
}
</script>

>>>>>>> 2d5dea2 (Initial commit)
<style scoped>

</style>
