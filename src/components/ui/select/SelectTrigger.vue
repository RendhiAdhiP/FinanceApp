<script setup>
import { computed } from 'vue'
import { SelectIcon, SelectTrigger, useForwardProps } from 'radix-vue'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import Icon from '../../icon/Icon.vue'

const props = defineProps({
    disabled: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false },
    inForm: { type: null, required: false, default: false },
    phoneNumberInput: { type: null, required: false, default: true },
    SelectLanguage: { type: Boolean, required: false, default: false },
})

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
    <SelectTrigger
        v-if="
            SelectLanguage == 'false' &&
            phoneNumberInput == false &&
            inForm == 'true'
        "
        v-bind="forwardedProps"
        :class="
            cn(
                'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-0 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
                props.class
            )
        "
    >
        <slot />
        <SelectIcon as-child>
            <ChevronDown class="h-4 w-4 opacity-50" />
        </SelectIcon>
    </SelectTrigger>

    <SelectTrigger
        v-else-if="
            (SelectLanguage == 'false' && phoneNumberInput == true) ||
            inForm == 'true'
        "
        v-bind="forwardedProps"
        :class="
            cn(
                'flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-0 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
                props.class
            )
        "
    >
        <slot />
        <SelectIcon as-child>
            <ChevronDown class="h-4 w-4 opacity-50" />
        </SelectIcon>
    </SelectTrigger>

    <SelectTrigger
        v-if="inForm == 'false' && SelectLanguage == 'true'"
        v-bind="forwardedProps"
        :class="
            cn(
                'flex h-10 w-full items-center justify-between gap-1 rounded-md border border-input bg-background px-3 py-0 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
                props.class
            )
        "
    >
        <SelectIcon as-child>
            <Icon
                w="20"
                h="20"
                iconFooter="true"
                Icon="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"
            />
        </SelectIcon>
        <slot />
        <SelectIcon as-child>
            <ChevronDown class="h-4 w-4 opacity-50" />
        </SelectIcon>
    </SelectTrigger>
</template>
