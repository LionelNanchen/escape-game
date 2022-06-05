<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import { useRiddlesStore } from "./stores";
import { RiddleId } from "./utils";

export default defineComponent({
  components: { RouterView },
  created() {
    // Update stored riddles responses from local storage
    const store = useRiddlesStore();
    Object.values(RiddleId).forEach((id: RiddleId) => store.updateResponse(id, localStorage.getItem(id) ?? ""))
  },
})
</script>

<template>
  <RouterView />
</template>