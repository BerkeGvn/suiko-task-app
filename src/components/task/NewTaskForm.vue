<template>
  <form @submit.prevent="submitTaskForm">
    <div class="category">
      <p class="input-label-text">Category</p>
      <ul
        @click="isCategoryValid = true"
        v-if="!route.query.list"
        class="category-list"
      >
        <li v-for="(category, index) in props.categories" :key="index">
          <input
            type="radio"
            :name="category"
            :id="category"
            :value="category"
            v-model="selectedCategory"
          />
          <label :for="category">
            {{ formatText(category) }}
          </label>
        </li>
      </ul>
      <!-- this will render if user comes from specific list -->
      <div v-else>
        <input
          type="radio"
          :name="selectedCategory"
          :id="selectedCategory"
          :value="selectedCategory"
          v-model="selectedCategory"
        />
        <label class="selected-category" :for="selectedCategory">
          {{ formatText(selectedCategory) }}
        </label>
      </div>

      <p v-if="!isCategoryValid" class="input-label-error">
        Please select a category
      </p>
    </div>
    <div class="input-area">
      <div class="title">
        <label
          @focusout="isTitleValid = true"
          class="input-label-text"
          for="title"
        >
          Task Title
          <input
            placeholder="Task name"
            type="text"
            id="title"
            v-model="taskTitle"
          />
        </label>
        <p v-if="!isTitleValid" class="input-label-error">
          Please enter a title
        </p>
      </div>
      <div class="description">
        <label
          @focusout="isDescValid = true"
          class="input-label-text"
          for="description"
        >
          Description
          <textarea
            placeholder="Write your task description here..."
            name="description"
            id="description"
            cols="30"
            rows="10"
            v-model="taskDesc"
          ></textarea>
        </label>
        <p v-if="!isDescValid" class="input-label-error">
          Please write a description
        </p>
      </div>
      <DatePicker locale="en-GB" v-model="date" :model-config="modelConfig">
        <template v-slot="{ inputValue, inputEvents }">
          <label class="input-label-text" @focusout="isDateValid = true"
            >Date
            <div class="date-pick-div">
              <span class="material-symbols-rounded calendar">
                calendar_month
              </span>
              <input
                class="date-input"
                :value="inputValue"
                v-on="inputEvents"
              />
            </div>
          </label>
          <p v-if="!isDateValid" class="input-label-error">
            Please pick a date
          </p>
        </template>
      </DatePicker>
    </div>
    <button class="create-button task-create-button">Create Task</button>
  </form>
</template>

<script setup>
import "v-calendar/dist/style.css";
import { DatePicker } from "v-calendar";
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";
import { formatText } from "../../assets/helpers";

const router = useRouter();
const route = useRoute();
const props = defineProps(["categories"]);
const emit = defineEmits(["submitTaskForm"]);

const selectedCategory = ref("");
const isCategoryValid = ref(true);
// if user comes from specific list, category automaticly selected as that list
if (route.query.list) {
  selectedCategory.value = route.query.list;
}

const date = ref(new Date().toLocaleDateString("en-GB"));
const isDateValid = ref(true);
const modelConfig = ref({
  type: "string",
  mask: "DD/MM/YYYY",
});

const taskTitle = ref("");
const isTitleValid = ref(true);

const taskDesc = ref("");
const isDescValid = ref(true);

const isFormValid = ref(true);

function validateForm() {
  isFormValid.value = true;

  if (!selectedCategory.value) {
    isCategoryValid.value = false;
    isFormValid.value = false;
  }
  if (taskTitle.value <= 0) {
    isTitleValid.value = false;
    isFormValid.value = false;
  }
  if (taskDesc.value <= 0) {
    isDescValid.value = false;
    isFormValid.value = false;
  }
  if (!date.value) {
    isDateValid.value = false;
    isFormValid.value = false;
  }
}

function submitTaskForm() {
  validateForm();
  if (!isFormValid.value) {
    return;
  } else {
    emit("submitTaskForm", {
      list: selectedCategory.value,
      title: taskTitle.value,
      desc: taskDesc.value,
      date: date.value,
    });
    router.replace(`/SelectedTask/${selectedCategory.value}`);
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/breakpoints.scss";
form {
  font-size: var(--normal-font-size);

  & .category {
    margin-bottom: 2rem;
    // error message closer to lists
    & p:last-child {
      margin-top: -1rem;
    }

    &-list {
      margin: 2rem 0;
      display: flex;
      gap: 2rem;
      white-space: nowrap;
      overflow-x: scroll;
      overflow-y: hidden;
      //hiding horizontal scrollbar
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    input[type="radio"] {
      display: none;

      & + label {
        display: inline-block;
        width: 100%;
        text-align: center;
        padding: 1rem 1rem;
        background-color: var(--background-color-2);
        border-radius: 10px;
      }
      &:checked + label {
        background-color: var(--main-orange-color);
        color: var(--text-color-2);
      }
      & + .selected-category {
        width: 30%;
      }
    }
  }

  & .input-area {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    & > * {
      width: 100%;
    }
    // to make calender icon inside the input
    .date-pick-div {
      display: flex;
      align-items: center;
      position: relative;
      & .calendar {
        position: absolute;
        padding-left: 1rem;
        color: var(--main-orange-color);
      }
      & .date-input {
        font-size: var(--normal-font-size);
        padding-left: 4rem;
      }
    }
  }
  & .task-create-button {
    font-size: var(--normal-font-size);
    margin-top: 2rem;
    font-weight: 500;
    width: 100%;
  }
  @media only screen and (min-width: $bp-medium) {
    min-width: 50%;
    background-color: #cfd4e2;
    border-radius: 10px;
    box-shadow: 1px 3px 6px #94979f;
    padding: 2rem 5rem 5rem 5rem;
  }
  @media only screen and (min-width: $bp-large) {
    min-width: 30%;
  }
}
</style>
