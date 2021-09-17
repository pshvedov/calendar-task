<template>
  <div class="calendar-grid">
    <div class="calendar-weekdays">
      <div v-for="(day, i) in weekdays" :key="i">{{ day }}</div>
    </div>
    <div class="calendar-days">
      <calendar-day v-for="(day, i) in days" :key="i" :day="day" />
    </div>
  </div>
</template>

<script>
import { readonly, computed } from 'vue';

import { WEEKDAYS, getCalendarGrid } from './utils';
import CalendarDay from './CalendarDay.vue';

export default {
  name: 'CalendarGrid',
  components: {
    CalendarDay,
  },
  props: {
    date: Date,
  },
  setup(props) {
    const weekdays = readonly([...WEEKDAYS]);
    const days = computed(() => getCalendarGrid(props.date));

    return {
      weekdays,
      days,
    }
  },
}
</script>

<style>
.calendar-grid {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}

.calendar-weekdays {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #f0f0f3;
}

.calendar-weekdays div {
  font-size: 60%;
  color: #bdbdbd;
  width: 14.2%;
  text-transform: uppercase;
  text-align: center;
}

.calendar-days {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

</style>