<script lang="ts">
import { useRiddlesStore } from "@/stores";
import { defineComponent } from "vue";
import Header from "./Header.vue";
import Riddle from "./Riddle.vue";

interface Data {
    riddles: Riddle[] | undefined,
    currentRiddle: Riddle | undefined,
}

export default defineComponent({
    components: { Header, Riddle },
    data() {
        const data: Data = {
            riddles: [],
            currentRiddle: undefined,
        };
        return data;
    },
    created() {
        const path = window.location.pathname.split('/')[1];
        const store = useRiddlesStore();
        this.riddles = store.riddles;
        this.currentRiddle = this.riddles?.find((r: Riddle) => r.id === path);
    },
})
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <Header />
            </el-header>
            <el-main>
                <el-scrollbar>
                    <div class="riddles">
                        <Riddle v-for="riddle in riddles" :riddle="riddle" :currentRiddle="currentRiddle" />
                    </div>
                </el-scrollbar>
                <div class="main">
                    <span class="riddle-index">Enigme {{ currentRiddle?.index }} - </span>
                    <span class="title">{{ currentRiddle?.title }}</span>
                    <div class="input-response">
                        <el-input v-if="currentRiddle" maxlength="1" show-word-limit type="text" placeholder="Réponse"
                            :value="currentRiddle?.response" v-model="currentRiddle.response" />
                    </div>
                </div>
                <slot />
            </el-main>
        </el-container>
    </div>
</template>

<style scoped>
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
    font-weight: bold;
}
.input-response {
    max-width: 140px;
}
</style>

<style>
.el-main {
    padding: 0px !important;
}
</style>