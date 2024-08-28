<script setup>
import { useFormField } from './useFormField'
import { cn } from '@/lib/utils'

const props = defineProps({
    class: { type: null, required: false },
})

const { formDescriptionId } = useFormField()
</script>

<template>
    <p
        :id="formDescriptionId"
        :class="
            cn(
                'w-3/5 text-xs text-muted-foreground md:w-4/6 lg:w-5/6',
                props.class
            )
        "
    >
        <slot />
    </p>
</template>
