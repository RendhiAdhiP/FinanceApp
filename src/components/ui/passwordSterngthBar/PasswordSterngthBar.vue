<template>
    <div :class="`password-strength-bar`">
        <span :class="`h-[8px] w-[25%] rounded-md ${bar1}`"></span>
        <span :class="`h-[8px] w-[25%] rounded-md ${bar2}`"></span>
        <span :class="`h-[8px] w-[25%] rounded-md ${bar3}`"></span>
        <span :class="`h-[8px] w-[25%] rounded-md ${bar4}`"></span>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
    strengthLevel: {
        type: Number,
        required: true,
    },
})

let bar1 = ref('bg-custom-greyscale-50')
let bar2 = ref('bg-custom-greyscale-50')
let bar3 = ref('bg-custom-greyscale-50')
let bar4 = ref('bg-custom-greyscale-50')

watch(
    () => props.strengthLevel,
    (newVal, oldVal) => {

        if (newVal <= 1) {
            bar1.value = 'bg-custom-greyscale-50'
            bar2.value = 'bg-custom-greyscale-50'
            bar3.value = 'bg-custom-greyscale-50'
            bar4.value = 'bg-custom-greyscale-50'
        }
        if (newVal === 1) {
            bar1.value = 'bg-custom-alerterror-100'
            console.log(oldVal, 'to', newVal)
        }

        if (newVal === 2) {
            bar1.value = 'bg-custom-alertwarning-100'
            bar2.value = 'bg-custom-alertwarning-100'
            bar3.value = 'bg-custom-greyscale-50'
            bar4.value = 'bg-custom-greyscale-50'
            console.log(oldVal, 'to', newVal)
        }

        if (newVal === 3) {
            bar1.value = 'bg-custom-alertsuccess-100'
            bar2.value = 'bg-custom-alertsuccess-100'
            bar3.value = 'bg-custom-alertsuccess-100'
            bar4.value = 'bg-custom-greyscale-50'
            console.log(oldVal, 'to', newVal)
        }

        if (newVal === 4) {
            bar1.value = 'bg-custom-alertsuccess-100'
            bar2.value = 'bg-custom-alertsuccess-100'
            bar3.value = 'bg-custom-alertsuccess-100'
            bar4.value = 'bg-custom-alertsuccess-100'
            console.log(oldVal, 'to', newVal)
        }
    }
)
</script>

<style scoped>
.password-strength-bar {
    display: flex;
    gap: 4px;
}

.bar.filled {
    background-color: #76c7c0;
    /* Default to green */
}
</style>
