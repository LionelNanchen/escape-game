<script lang="ts">
import router from '@/router'
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
    props: {
        riddle: { type: Object as PropType<Riddle>, required: true },
        currentRiddle: { type: Object as PropType<Riddle> },
    },
    methods: {
        onClick() {
            if (this.riddle.id !== this.currentRiddle?.id) {
                router.push(`/${this.riddle.id}`);
            }
        }
    }
})
</script>

<template>
    <div class="riddle" v-bind:class="(currentRiddle?.id === riddle.id) ? 'current-riddle' : ''" @click="onClick">
        <span v-if="riddle.response.length > 0">{{ riddle.response }}</span>
        <span v-else>{{ riddle.index }}</span>
    </div>
</template>

<style scoped>
.riddle {
    background-color: var(--el-fill-color);
    border-radius: 12px;
    margin: 12px;
    width: 75px;
    height: 75px;
    min-width: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.current-riddle {
    background-color: var(--el-color-primary-light-5);
}
</style>