<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Example from "./components/Example.vue";
import ExampleService from "./services/ExampleService.js";
const service = new ExampleService(5);

service.doAMap();

export default {
  components: {
    Example,
  },
};
</script>

<template>
  <Example />
</template>
