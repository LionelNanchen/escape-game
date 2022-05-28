<script lang="ts">
    import { defineComponent } from "vue";
    import Container from "../components/common/Container.vue";

    interface Data {
        columns: any[],
    }

    export default defineComponent({
        components: { Container },
        data() {
            const data: Data = {
                columns: [
                    ['X', '', '', '', ''],
                    ['', '', '', 'X', ''],
                    ['', '', '', '', 'X'],
                    ['', '', 'X', '', ''],
                    ['', 'X', '', '', ''],
                ]
            };
            return data;
        }
    });
</script>

<template>
    <Container>
        <el-card class="double-memories-card">
            <template #header>
                <div class="card-header">
                    <span class="card-header-title">⚽️🏀🥎🎾🏐⚾️🪹</span>
                </div>
            </template>
        </el-card>
        <el-card class="double-memories-card">
            <div v-for="column in columns">
                <div v-for="c in column">
                    {{ c }}
                </div>
            </div>
        </el-card>
    </Container>
</template>

<style scoped>
.double-memories-card {
    margin: 12px;
}
</style>