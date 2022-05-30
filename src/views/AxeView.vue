<script lang="ts">
import { defineComponent } from "vue";
import Container from "../components/common/Container.vue";
import TreeTrunk from "../assets/tree_trunk.jpeg";
import TreeTrunkCut from "../assets/tree_trunk_cut.jpeg";
import Axe1 from "../assets/axe_1.png";
import Axe2 from "../assets/axe_2.png";

interface Data {
    logs: number,
    isCutting: boolean,
}

export default defineComponent({
    components: { Container },
    data() {
        const data: Data = {
            logs: 0,
            isCutting: false,
        };
        return data;
    },
    methods: {
        time() {
            if (this.logs < 10) return 200;
            else if (this.logs < 15) return 400;
            else if (this.logs < 20) return 750;
            else if (this.logs < 30) return 1000;
            else return 2000;
        },
        onCut() {
            this.isCutting = true;
            setTimeout(() => {
                this.isCutting = false;
                ++this.logs;
            }, this.time());
        }
    },
    computed: {
        treeTrunk() {
            return this.logs < 10 ? TreeTrunk : TreeTrunkCut
        },
        axe() {
            return this.logs < 20 ? Axe1 : Axe2;
        },
    },
});
</script>

<template>
    <Container>
        <el-card class="axe-card">
            <template #header>
                <span style="font-weight: bold;">🪵 x {{ logs }}</span>
            </template>
            <div class="axe-card-content">
                <img style="width: 100%" :src="treeTrunk" fit="fill" />
                <el-button class="axe-button" round text :disabled="isCutting" @click="onCut">
                    <img :style="{ animationDuration: `${time() / 1000}s` }" v-bind:class="isCutting ? 'axe-cut-animation' : ''" class="axe-image" :src="axe" fit="fill" />
                </el-button>
            </div>
            <div style="margin-top: 12px">
                <el-alert v-if="logs >= 10 && logs < 20" title="Crac ... boom" type="warning" :closable="false"
                    effect="dark" show-icon />
                <el-alert v-if="logs >= 20 && logs < 30" title="Changement d'hache" type="warning" :closable="false"
                    effect="dark" show-icon />
                <el-alert v-if="logs >= 30 && logs < 100" title="Pas très utile ..." type="error" :closable="false" effect="dark"
                    show-icon />
                <el-alert v-if="logs >= 100" title="Persévérant ... mais inutile" type="error" :closable="false" effect="dark"
                    show-icon />
            </div>
        </el-card>
    </Container>
</template>

<style scoped>
img {
    max-width: 100%;
    height: auto;
    object-fit: fill;
}

.axe-card {
    margin: 12px;
}

.axe-card-content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.axe-button {
    height: 100%;
    padding: 0px;
    position: absolute;
    background-color: transparent !important;
    right: 10px;
}

.axe-image {
    height: 180px
}

.axe-cut-animation {
    animation-name: cut;
}

@keyframes cut {
    100% {
        transform: rotate(-90deg)
    }
}
</style>