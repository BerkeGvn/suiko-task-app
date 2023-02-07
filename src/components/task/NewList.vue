<template>
  <!-- form backdrop form transition animation & properly position form -->
  <div class="form-backdrop">
    <form @submit.prevent="submitNewList">
      <button class="cancel-button" @click.prevent="cancelSubmit">
        <span class="material-symbols-rounded"> close </span>
      </button>
      <label for="task-title">
        <span class="input-label-text"> List Title</span>
        <input
          placeholder="List Name"
          type="text"
          id="task-title"
          v-model.trim="listName"
          @focusout="isNameValid = true"
        />
        <span v-if="!isNameValid" class="input-label-error"
          >Please enter a list name</span
        >
      </label>
      <div class="color" @focusout="isColorValid = true">
        <p>Pick a color</p>
        <div class="color-picker">
          <input
            type="radio"
            name="yellow"
            id="yellow"
            value="#f6c445"
            v-model="color"
          />
          <label for="yellow"></label>
          <input
            type="radio"
            name="green"
            id="green"
            value="#b3c901"
            v-model="color"
          />
          <label for="green"> </label>
          <input
            type="radio"
            name="purple"
            id="purple"
            value="#a557ac"
            v-model="color"
          />
          <label for="purple"> </label>
          <input
            type="radio"
            name="pink"
            id="pink"
            value="#c20d84"
            v-model="color"
          />
          <label for="pink"> </label>
        </div>
        <span v-if="!isColorValid" class="input-label-error">
          Please pick a color
        </span>
      </div>

      <button class="create-button new-list-button">Create a new list</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["submitNewList", "cancelSubmit"]);

const listName = ref("");
const color = ref("");
const isNameValid = ref(true);
const isColorValid = ref(true);
const isFormValid = ref(true);

// with this function i check validation inside submit fucnction
function checkValidation() {
  isFormValid.value = true;
  if (listName.value <= 0) {
    isNameValid.value = false;
    isFormValid.value = false;
  }
  if (!color.value) {
    isColorValid.value = false;
    isFormValid.value = false;
  }
}

function submitNewList() {
  checkValidation();
  if (!isFormValid.value) {
    return console.log("err");
  } else {
    emit("submitNewList", { name: listName.value, color: color.value });
    listName.value = "";
    color.value = "";
  }
}
function cancelSubmit() {
  emit("cancelSubmit");
}
</script>

<style lang="scss" scoped>
.form-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  z-index: 10;
}
form {
  height: 70%;
  width: 100%;
  border-radius: 10px 10px 0 0;
  background-color: var(--background-color-1);
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;

  & .cancel-button {
    position: absolute;
    border: none;
    background-color: transparent;
    top: 1rem;
    right: 2rem;
  }
  & .input-label-text {
    margin-left: 1rem;
    font-weight: 500;
  }
  & .input-label-error {
    margin-left: 1rem;
    font-size: var(--small-font-size);
    color: rgba(255, 0, 0, 0.849);
  }
  & .new-list-button {
    width: 80%;
    font-size: var(--normal-font-size);
  }
  & .color {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    & p {
      font-weight: 500;
    }
    &-picker {
      display: flex;
      gap: 2rem;
    }
  }
  input[type="radio"] {
    display: none;

    & + label {
      display: inline-block;
      height: 6rem;
      width: 6rem;
      border-radius: 10px;
    }
    &#yellow + label {
      background-color: #f6c445;
    }
    &#green + label {
      background-color: #b3c901;
    }
    &#purple + label {
      background-color: #a557ac;
    }
    &#pink + label {
      background-color: #c20d84;
    }
    &:checked + label {
      border: 5px solid #122c6f;
    }
  }
}
</style>
