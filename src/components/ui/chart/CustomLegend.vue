<template>
    <div class="custom-legend">
        <div @click="handleClick(0)" :class="{ active: activeLegend === 0 }">
            <span
                class="circle"
                :style="{
                    backgroundColor: 'rgba(26, 27, 37, 1)',
                }"
            ></span>
            Outcome
        </div>
        <div @click="handleClick(1)" :class="{ active: activeLegend === 1 }">
            <span
                class="circle"
                :style="{
                    backgroundColor: 'rgba(102, 161, 255, 1)',
                }"
            ></span>
            Income
        </div>
    </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

const props = defineProps({
    activeLegend: String,
})

const emits = defineEmits(['legendClick'])

const handleClick = (legend) => {
    emits('legendClick', legend)
}
</script>

<style>
.custom-legend {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.custom-legend div {
    cursor: pointer;
    margin: 0 10px;
    display: flex;
    align-items: center;
}

.custom-legend .circle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 5px;
}

.custom-legend .active {
    font-weight: bold;
}
</style>
