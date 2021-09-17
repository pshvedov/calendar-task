<template>
  <div class="calendar-header">
    <a class="calendar-nav" @click="onPrevMonth"><img class="calendar-nav-icon" src="../../assets/prev.svg"></a>
    <span class="calendar-title">{{ month }} {{ year }}</span>
    <a class="calendar-nav" @click="onNextMonth"><img class="calendar-nav-icon" src="../../assets/next.svg"></a>
  </div>  
</template>

<script>
import { computed } from 'vue';

import { getMonthName } from './utils';

export default {
  name: 'CalendarHeader',
  props: {
    date: Date,
  },
  setup(props, { emit }) {
    const onPrevMonth = () => emit('prev');
    const onNextMonth = () => emit('next');

    const month = computed(() => getMonthName(props.date.getMonth()));
    const year = computed(() => props.date.getFullYear());

    return {
      month,
      year,
      onPrevMonth,
      onNextMonth,
    };
  },
}
</script>

<style>
.calendar-header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  border-top: 1px solid #f0f0f3;
  height: 60px;
}

.calendar-title {
  line-height: 60px;
  width: 71%;
  text-align: center;
}

.calendar-nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 14.2%;
  line-height: 60px;
  text-align: center;
  cursor: pointer;
}

.calendar-nav:hover {
  background: #fcf9fc;
}

.calendar-nav-icon {
  display: flex;
  flex: 1 1 auto;
  align-self: center;
  width: 20px;
  height: 36px;
}
</style>