<template>
  <div class="calendar-day" :class="{ current: day.isCurrent }">
    <p class="calendar-date">{{ day.date }}</p>
    <p class="calendar-month" v-if="day.date === 1">{{ day.month }}</p>
  </div>
</template>

<script>
export default {
  name: 'CalendarDay',
  props: {
    day: Object,
  },
}
</script>

<style>

.calendar-day {
  display: flex;
  position: relative;
  justify-content: center;
  align-content: center;
  width: 14.2%;
  background: #fcf9fc;
  text-align: center;
}

.calendar-day.current {
  background: #fff;
}

.calendar-month {
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 60%;
  color: #79797b;
  margin: 0;
  text-transform: uppercase;
  text-align: center;
}

.calendar-day.current .calendar-month {
  color: #dedbde;
}
</style>