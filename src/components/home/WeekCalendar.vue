<template>
  <ul class="week-calendar">
    <li v-for="date in week" :key="date.day">
      <input
        type="radio"
        :name="date.weekday"
        :id="date.day"
        :value="{ date: date.fullDate, day: date.weekdayLong }"
        v-model="selectedDate"
        @change="getSelectedDate"
      />
      <label :for="date.day">
        <p>
          {{ date.weekday }}
        </p>
        <p>
          {{ date.day }}
        </p>
      </label>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["getSelectedDate"]);
let today = new Date();
today = {
  date: today.toLocaleDateString("en-GB"),
  day: today.toLocaleString("en-GB", { weekday: "long" }),
};
const selectedDate = ref(today);
const week = ref([]);

// Looping to get all days of the week.
for (let i = 0; i < 7; i++) {
  const day = new Date();
  day.setDate(day.getDate() + i);
  week.value.push({
    fullDate: day.toLocaleDateString("en-GB"),
    weekday: day.toLocaleString("en-GB", { weekday: "short" }),
    weekdayLong: day.toLocaleString("en-GB", { weekday: "long" }),
    day: day.toLocaleString("en-GB", { day: "numeric" }),
  });
}

//emitting fulldate for getting tasks from DB and weekday to display in progress cirlce
function getSelectedDate() {
  const value = selectedDate.value;
  emit("getSelectedDate", value);
}
</script>

<style lang="scss" scoped>
.week-calendar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
  height: 8rem;
  input[type="radio"] {
    display: none;

    & + label {
      font-size: 1.5rem;
      display: inline-block;
      text-align: center;
      border-radius: 10px;
      transition: all 0.2s;

      & p:first-child {
        color: var(--text-color-3);
      }
      & p:last-child {
        font-weight: 600;
      }
    }
    &:checked + label {
      background-color: var(--main-orange-color);
      color: var(--text-color-2);
      padding: 2rem 1rem;
      font-size: 1.5rem;
      & p:first-child {
        color: var(--text-color-2);
      }
    }
  }
}
</style>
