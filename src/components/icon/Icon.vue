<template>
    <svg v-if="iconColor == 'normal'" :width="sizeIcon" :class="['w-full', customClassIcon]" :height="sizeIcon"
        viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
        <path :d="Icon" :class="[, fillCollorIcon ? fillCollorIcon : 'normal']" />
    </svg>
    <svg v-else-if="iconColor == 'success'" :width="sizeIcon" :height="sizeIcon" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path :d="Icon" class="success" />
    </svg>
    <svg v-else-if="iconColor == 'disabled'" :width="sizeIcon" :height="sizeIcon" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path :d="Icon" class="disabled" />
    </svg>
</template>

<script setup>
import { defineProps, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
    Icon: {
        type: String,
        required: true,
    },
    w: {
        type: String,
        default: '24',
    },
    h: {
        type: String,
        default: '24',
    },
    iconColor: {
        type: String,
        default: 'normal',
    },
    iconFooter: {
        type: String,
        default: 'false',
    },
    progresIcon: {
        type: String,
        default: 'false',
    },
    sidebarButton: {
        type: String,
        default: 'false',
    },
    customClassIcon: {
        type: String,
        default: '',
    },
    fillCollorIcon: {
        type: String,
        default: '',
    },
})

const sizeIcon = ref('16')
const widthScreen = ref(window.innerWidth)

const updateWidth = () => {
    widthScreen.value = window.innerWidth
    if (widthScreen.value < 768) {
        sizeIcon.value = 16
        if (props.progresIcon == 'true') {
            sizeIcon.value = 16
        } else {
            sizeIcon.value = 20
        }

        if (props.iconFooter == 'true') {
            sizeIcon.value = 18
        }
    } else {
        sizeIcon.value = 24
        if (props.iconFooter == 'true') {
            sizeIcon.value = 18
        }
        if (props.progresIcon == 'true') {
            sizeIcon.value = 18
        }
        if (props.sidebarButton == 'true') {
            sizeIcon.value = 16
        }
    }
}

onMounted(() => {
    updateWidth()
    window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
    updateWidth()
    window.removeEventListener('resize', updateWidth)
})
</script>

<style lang="scss" scoped>
.normal {
    fill: #1a1b25;
}

.success {
    fill: #40c4aa;
}

.disabled {
    fill: #818898;
}
</style>
