<template>
  <div class="page background-blob calendar">
    <h2>Calendar</h2>
    <div class="test">
      <DatePicker
        locale="en-GB"
        is-expanded
        v-model="date"
        :model-config="modelConfig"
      >
      </DatePicker>
      <h2>
        {{ date }}
      </h2>
      <h2>
        {{ selectedDate[0] }}
      </h2>
      <h2>
        {{ selectedDate[1] }}
      </h2>
      <h2>
        {{ selectedDate[2] }}
      </h2>
    </div>
  </div>
</template>

<script setup>
import "v-calendar/dist/style.css";
import { DatePicker } from "v-calendar";
import { ref, computed } from "vue";
const date = ref(
  new Date().toLocaleString("en-gb", {
    year: "numeric",
    month: "long",
    weekday: "long",
  })
);
const modelConfig = ref({
  type: "string",
  mask: "DD/WWWW/MMMM/YYYY",
});
const selectedDate = computed(() => date.value.split("/"));
</script>

<style lang="scss" scoped>
.calendar {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.test {
  width: 90%;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
