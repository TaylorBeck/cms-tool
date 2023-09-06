<template>
  <SideLayout @select-menu="(item) => selected = item">
    <component :is="menu[selected]" />
  </SideLayout>
</template>

<script setup>
import { shallowRef, ref } from 'vue';

import SideLayout from './components/SideLayout.vue';
import Summary from './components/Summary.vue';
import Settings from './components/Settings.vue';
import SignIn from './components/SignIn.vue';

const menu = shallowRef({
  "dashboard": Summary,
  "settings": Settings
});
const selected = ref("dashboard");
</script>

<style>
</style>
