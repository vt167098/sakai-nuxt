<<<<<<< HEAD
<script lang="ts">
export default {
  name: 'AppFooter',
  computed: {
    darkTheme() {
      return this.$appState.darkTheme;
    }
  },
  methods: {
    footerImage() {
      return this.$appState.darkTheme ? '/images/logo-white.svg' : '/images/logo-dark.svg';
    }
  }
};
</script>

=======
>>>>>>> 2d5dea2 (Initial commit)
<template>
  <div class="layout-footer">
    <img alt="Logo" :src="footerImage()" height="20" class="mr-2">
    by
    <span class="font-medium ml-2">PrimeVue</span>
  </div>
</template>

<<<<<<< HEAD
=======
<script lang="ts">
export default {
  name: 'AppFooter',
  computed: {
    darkTheme () {
      return this.$appState.darkTheme
    }
  },
  methods: {
    footerImage () {
      return this.$appState.darkTheme ? '/images/logo-white.svg' : '/images/logo-dark.svg'
    }
  }
}
</script>

>>>>>>> 2d5dea2 (Initial commit)
<style scoped>

</style>
