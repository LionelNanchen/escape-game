<script lang="ts">
import { defineComponent } from "vue";
import { Aim } from "@element-plus/icons-vue";
import Container from "../components/common/Container.vue";
import ResetButton from "../components/common/ResetButton.vue";
import MemoriesMatrix from "../components/memories/MemoriesMatrix.vue";

interface Data {
    startingMatrix: Matrix,
    answerMatrix: Matrix,
    answer: string,
}

export default defineComponent({
    components: { Container, ResetButton, Aim, MemoriesMatrix },
    data() {
        const data: Data = {
            startingMatrix: [
                [undefined, '⚾️', undefined, undefined, undefined],
                [undefined, undefined, undefined, undefined, '🎾'],
                [undefined, undefined, undefined, '⚽️', undefined],
                [undefined, undefined, undefined, '🪩', undefined],
                ['🏀', undefined, undefined, undefined, undefined],
            ],
            answerMatrix: [
                ['⚽️', undefined, undefined, undefined, undefined],
                [undefined, undefined, undefined, '🏀', undefined],
                [undefined, undefined, undefined, undefined, '🪩'],
                [undefined, undefined, '⚾️', undefined, undefined],
                [undefined, '🎾', undefined, undefined, undefined],
            ],
            answer: 'Z',
        };
        return data;
    },
});
</script>

<template>
    <Container>
        <MemoriesMatrix :startingMatrix="startingMatrix" :answerMatrix="answerMatrix" :answer="answer" />
        <!-- <el-card class="double-memories-card">
            <template #header>
                <div class="card-header">
                    <span class="card-header-title double-memories-message">{{ message }}</span>
                    <ResetButton :onReset="onReset" />
                </div>
            </template>
            <el-row justify="space-evenly" align="middle" v-for="(row, i) in matrix">
                <el-col :span="2" v-for="(cell, j) in row">
                    <el-button class="double-memories-cell" text circle :disabled="disableCell(cell)"
                        @click="() => onSelectCell(cell, i, j)">
                        <span v-if="cell" v-bind:style="cell === ball?.ball ? 'opacity: 0.5;' : ''">{{ cell }}</span>
                        <el-icon v-else><Aim /></el-icon>
                    </el-button>
                </el-col>
            </el-row>
            <el-row justify="center" style="margin-top: 12px">
                <el-button @click="onVerify" type="primary" round :disabled="!!ball">Vérifier</el-button>
            </el-row>
            <el-result v-if="verify === true" icon="success" title="Combinaison correcte" sub-title="Lettre: U" />
            <el-result v-else-if="verify === false" icon="error" title="Combinaison incorrecte" sub-title="Essaie encore" />
        </el-card> -->
    </Container>
</template>

<style scoped>
.double-memories-card {
    margin: 12px;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.double-memories-message {
    font-size: 20px;
    font-weight: bold;
}

.double-memories-cell {
    font-size: 22px;
}
</style>