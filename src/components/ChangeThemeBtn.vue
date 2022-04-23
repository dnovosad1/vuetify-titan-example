<template>
    <v-btn @click="toggleTheme">toggle theme</v-btn>
</template>

<script>
import { ref } from 'vue';

/* eslint-disable no-return-assign */
export default {
  setup() {
    const theme = ref('myCustomLightTheme');

    return {
      theme,
      toggleTheme: () => theme.value = theme.value === 'myCustomLightTheme' ? 'myCustomDarkTheme' : 'myCustomLightTheme',
    };
  },
};
</script>
