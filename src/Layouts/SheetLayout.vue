<template>
    <Sheet>
        <SheetTrigger :class="[
            'flex items-center gap-2 rounded-[8px] border border-[#DFE1E7] px-2 py-2 text-xs font-medium md:px-4 md:py-2 md:text-base',
            customClass,
        ]">
            <svg v-show="props.icon != null" width="20" height="20" class="w-[16px]" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path :d="props.icon" fill="black" />
            </svg>
            <span class="text-xs font-medium md:text-sm">{{
                props.titleButton
                }}</span>
        </SheetTrigger>
        <SheetContent :class="[
            'overflow-x-hidden overflow-y-scroll rounded-md bg-custom-greyscale-0 px-4 lg:px-5',
            customClassSheetContent,
        ]">
            <SheetHeader>
                <SheetTitle class="h-[30px] text-base md:text-xl">{{
                    props.titleSheet
                    }}</SheetTitle>
            </SheetHeader>
            <slot> </slot>
        </SheetContent>
    </Sheet>
</template>

<script setup>
import Sheet from '@/components/ui/sheet/Sheet.vue'
import SheetContent from '@/components/ui/sheet/SheetContent.vue'
import SheetHeader from '@/components/ui/sheet/SheetHeader.vue'
import SheetTitle from '@/components/ui/sheet/SheetTitle.vue'
import SheetTrigger from '@/components/ui/sheet/SheetTrigger.vue'
import { watch } from 'vue'
import { ref, defineExpose } from 'vue'

const props = defineProps({
    titleSheet: {
        type: String,
        default: 'Title',
    },
    titleButton: {
        type: String,
        default: 'Description',
    },
    customClass: {
        type: String,
    },
    icon: null,
    defaultOpen: true,
    customClassSheetContent: {
        type: String,
    },
})

// console.log(props.defaultOpen)
// const openSheet = ref(false)

// watch(() => props.defaultOpen, () => {
//     // console.log(props.defaultOpen)
//     openSheet.value = props.defaultOpen
// })
</script>

<style lang="scss" scoped></style>
