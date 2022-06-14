<script lang="ts">
import { defineComponent } from "vue";
import Container from "../components/common/Container.vue";
import { RefreshLeft } from '@element-plus/icons-vue';
import ResetButton from '../components/common/ResetButton.vue';
import moment, { type Moment } from "moment";
import { riddles } from "@/utils";

interface Data {
    accessTime: Moment
    accessible: boolean,
    countdown: number,
    interval: NodeJS.Timer | undefined,
}

export default defineComponent({
    components: { Container, RefreshLeft, ResetButton },
    data() {
        const data: Data = {
            accessTime: moment(riddles[2].availableTime, "HH:mm").add(1, "years"),
            accessible: false,
            countdown: 0,
            interval: undefined,
        };
        return data;
    },
    created() {
        this.checkTime();
        this.interval = setInterval(this.checkTime, 1000);
    },
    beforeUnmount() {
        this.clearInterval();
    },
    methods: {
        clearInterval() {
            console.log(this.interval);
            if (this.interval) {
                clearInterval(this.interval)
                this.interval = undefined;
            }
        },
        checkTime() {
            const deviceTime = moment();
            this.countdown = this.accessTime.diff(deviceTime, "seconds");
            if (this.countdown < 0) this.accessible = true;
        }
    },
    computed: {
        inaccessibleMessage(): string {
            return `Revenez dans ${this.countdown.toLocaleString()} seconde${this.countdown > 1 ? 's' : ''}`;
        }
    }
})

</script>

<template>
    <Container>
        <el-card class="time-travel-card">
            <template #header>
                <div class="card-header">
                    <span class="card-header-title">🚀🧑‍🚀</span>
                </div>
            </template>
            <el-result v-if="accessible" icon="success" title="Bienvenu dans le future" sub-title="😱 Ooooooooooo 🛸" />
            <el-result v-else icon="error" title="Cet énigme sera accessible dans une année" :sub-title="inaccessibleMessage" />
        </el-card>
    </Container>
</template>

<style scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.card-header-title {
    font-weight: bold;
}

.time-travel-card {
    margin: 12px
}
</style>