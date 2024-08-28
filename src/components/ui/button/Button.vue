<script setup>
import { Primitive } from 'radix-vue'
import { buttonVariants } from '.'
import { cn } from '@/lib/utils'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
    variant: { type: null, required: false },
    size: { type: null, required: false },
    class: { type: null, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false, default: 'button' },
})

const sizeButton = ref('')
const widthScreen = ref(window.innerWidth)

const updateSize = () => {
    widthScreen.value = window.innerWidth
    if (widthScreen.value < 768) {
        sizeButton.value = 'sm'
        // console.log(sizeButton.value)
    } else {
        sizeButton.value = props.size ? props.size : 'lg'
        // console.log(sizeButton.value)
    }
}

onMounted(() => {
    updateSize()
    window.addEventListener('resize', updateSize)
})

onUnmounted(() => {
    updateSize()
    window.removeEventListener('resize', updateSize)
})

// const finalSize = computed(() => {
//   return props.size || sizeButton.value;
// });
</script>

<template>
    <Primitive
        :as="as"
        :as-child="asChild"
        :class="cn(buttonVariants({ variant, size: sizeButton }), props.class)"
    >
        <slot />
    </Primitive>
</template>
