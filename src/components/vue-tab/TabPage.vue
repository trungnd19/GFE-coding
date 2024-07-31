<template>
  <div>
    <TabsWrapper>
        <Tab title="Tab 1"><FlightBooker/></Tab>
        <Tab title="Tab 2">Hello from tab 2</Tab>
        <Tab title="Tab 3">Hello from tab 3</Tab>
        <Tab title="Tab 4"><AsyncComp/></Tab>
    </TabsWrapper>
  </div>
</template>

<script setup lang="ts">
import FlightBooker from '../flightBooker/FlightBooker.vue';
import Stopwatch from '../stopwatch/Stopwatch.vue';
import TabsWrapper from './TabsWrapper.vue';
import Tab from './Tab.vue';
import { defineAsyncComponent } from 'vue';

const AsyncComp = defineAsyncComponent(() =>
  import('../stopwatch/Stopwatch.vue')
)
</script>

<style scoped></style>
