<script lang="ts">
import { useRiddlesStore } from "@/stores";
import type { ElScrollbar } from "element-plus";
import { defineComponent, ref } from "vue";
import Header from "./Header.vue";
import RiddleSelect from "./RiddleSelect.vue";

interface Data {
    riddles: Riddle[] | undefined,
    currentRiddle: Riddle | undefined,
}

export default defineComponent({
    components: { Header, RiddleSelect },
    data() {
        const data: Data = {
            riddles: [],
            currentRiddle: undefined,
        };
        return data;
    },
    created() {
        // TODO: Handle Welcome page
        const path = window.location.pathname.split('/')[1];
        const store = useRiddlesStore();
        this.riddles = store.riddles;
        this.currentRiddle = this.riddles?.find((r: Riddle) => r.id === path);
    },
    mounted() {
        // Scroll to riddle select
        const width = (this.$refs.innerRef as HTMLDivElement).clientWidth;
        const index = this.currentRiddle?.index ?? 1;
        if (index > 4) {
            const offset = width * (this.currentRiddle?.index ?? 1) / 7;
            (this.$refs.scrollbarRef as InstanceType<typeof ElScrollbar>).setScrollLeft(offset);
        }
    },
    methods: {
        onChangeResponse(response: string) {
            if (this.currentRiddle) localStorage.setItem(this.currentRiddle?.id, response);
        }
    }
})
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <Header />
            </el-header>
            <el-main>
                <el-scrollbar ref="scrollbarRef">
                    <div ref="innerRef" class="riddles">
                        <RiddleSelect v-for="riddle in riddles" :riddle="riddle" :currentRiddle="currentRiddle" />
                    </div>
                </el-scrollbar>
                <div class="main">
                    <span class="riddle-index">Énigme {{ currentRiddle?.index }} - </span>
                    <span class="title">{{ currentRiddle?.title }}</span>
                    <div class="input-response">
                        <el-input v-if="currentRiddle" maxlength="1" show-word-limit type="text" placeholder="Réponse"
                            :value="currentRiddle?.response" v-model="currentRiddle.response" @change="onChangeResponse" />
                    </div>
                </div>
                <slot />
            </el-main>
        </el-container>
    </div>
</template>

<style scoped>
.common-layout {
    margin-bottom: 50px;
}
.main {
    margin: 12px;
}
.riddles {
    display: flex;
}
.riddle-index {
    font-size: 20px;
}

.title {
    font-size: 18px;
    font-weight: bold;
}
.input-response {
    margin-top: 6px;
    max-width: 140px;
}
</style>

<style>
.el-main {
    padding: 0px !important;
}
</style>