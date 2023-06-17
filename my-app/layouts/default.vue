<template>
  <div>
   <TheNavbar />
   <slot />
    <FooterView />
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue'
import FooterView from '~/components/FooterView.vue';
export default {
  components: TheNavbar,FooterView
}
</script>

<style></style>
