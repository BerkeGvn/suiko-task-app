<template>
  <div class="base-lists">
    <router-link
      class="base-lists-personal list"
      :to="{
        name: 'SelectedTask',
        params: { listName: baseLists.personal.name },
      }"
    >
      <p>Personal</p>
      <span class="sub-text"
        >You have {{ baseLists.personal.length }} tasks</span
      >
    </router-link>

    <router-link
      class="base-lists-work list"
      :to="{
        name: 'SelectedTask',
        params: { listName: baseLists.work.name },
      }"
    >
      <div>
        <p>Work</p>
        <span class="sub-text">You have {{ baseLists.work.length }} tasks</span>
      </div>
    </router-link>

    <router-link
      class="base-lists-home list"
      :to="{
        name: 'SelectedTask',
        params: { listName: baseLists.home.name },
      }"
    >
      <p>Home</p>
      <span class="sub-text">You have {{ baseLists.home.length }} tasks</span>
    </router-link>
  </div>
  <router-link
    class="base-lists-custom list"
    v-for="list in customLists"
    :style="{ backgroundColor: list.color }"
    :key="list.id"
    :to="{
      name: 'SelectedTask',
      params: { listName: list.name },
    }"
  >
    <p>{{ formatText(list.name) }}</p>
    <span class="sub-text">You have {{ list.length }} tasks</span>

    <button class="delete-button" @click.prevent="deleteList(list.id)">
      <span class="material-symbols-rounded"> delete </span>
    </button>
  </router-link>
</template>

<script setup>
import { computed } from "vue";
import { formatText } from "../../assets/helpers";

const props = defineProps(["allTasks"]);
const emits = defineEmits(["deleteList"]);

// getting base lists with their name
const baseLists = computed(() => {
  const [personal, work, home] = props.allTasks;
  return { personal, work, home };
});

// getting custom lists for looping
const customLists = computed(() => props.allTasks.slice(3));

function deleteList(listId) {
  emits("deleteList", listId);
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/breakpoints.scss";
.list {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--text-color-2);
  font-weight: 500;
  transition: all 0.3s;
  & .sub-text {
    font-size: var(--small-font-size);
  }
  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 1px 2px 4px #616161;
  }
}
.base-lists {
  height: 30vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;
  grid-template-areas:
    "personal work"
    "personal home";

  &-personal {
    background-color: var(--main-blue-color);
    grid-area: personal;
    span {
      color: var(--light-blue-text-color);
    }
  }
  &-work {
    background-color: var(--main-red-color);
    grid-area: work;
    span {
      color: var(--light-red-text-color);
    }
  }
  &-home {
    background-color: var(--main-green-color);
    grid-area: home;
    span {
      color: var(--light-green-text-color);
    }
  }
  @media only screen and (min-width: $bp-medium) {
    height: 40vh;
  }
}

.base-lists-custom {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  position: relative;
  & button {
    position: absolute;
    left: 90%;
    top: 50%;
    transform: translateY(-50%);
    & span {
      color: var(--text-color-2);
    }
  }
}
</style>
