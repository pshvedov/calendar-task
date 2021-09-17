<template>
  <div class="calendar-wrapper">
    <calendar-header :date="date" @prev="onPrevMonth" @next="onNextMonth" />
    <calendar-grid :date="date" />
  </div>
</template>

<script>
import { ref } from 'vue';

import CalendarHeader from './CalendarHeader.vue';
import CalendarGrid from './CalendarGrid.vue';
import { getNextMonthDate, getPrevMonthDate } from './utils';

export default {
  name: 'Calendar',
  components: {
    CalendarHeader,
    CalendarGrid,
  },
  setup() {
    const date = ref(new Date());

    const onPrevMonth = () => {
      date.value = getPrevMonthDate(date.value);
    };
    const onNextMonth = () => {
      date.value = getNextMonthDate(date.value);
    };
    
    return {
      date,
      onPrevMonth,
      onNextMonth,
    };
  },
}
</script>

<style>
.calendar-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
