<template>
    <main class="flex justify-center">
        <form @submit.prevent="handleSetAcountType" class="form-style">
            <FormIcon
                pathIcon="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" />
            <FormHeader title="What kind of account would you open today?">
                <template v-slot:desc>
                    You can add another account later on, too..
                </template>
            </FormHeader>
            <FormField v-slot="{ value, handleChange }" type="checkbox" name="personal">
                <FormItem
                    :class="`{{ formValues.personal == true ? 'bg-custom-greyscale-700' : 'bg-custom-greyscale-100' }}`"
                    class="relative flex flex-row items-start gap-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                        <Checkbox :checked="value" @update:checked="handleChange" class="absolute right-3" />
                    </FormControl>
                    <div class="flex items-center gap-3">
                        <div
                            class="flex h-6 w-6 items-center justify-center rounded-full border border-solid border-custom-greyscale-100 md:h-12 md:w-12">
                            <Icon width="20" height="20"
                                Icon="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
                        </div>
                        <div class="flex w-[320px] flex-col gap-1">
                            <FormLabel class="text-sm md:text-base">Personal</FormLabel>
                            <FormDescription class="text-xs">
                                Send, spend, and receive around the world for
                                less
                            </FormDescription>
                            <FormMessage />
                        </div>
                    </div>
                </FormItem>
            </FormField>
            <FormField v-slot="{ value, handleChange }" type="checkbox" name="bussines">
                <FormItem class="relative flex flex-row items-start gap-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                        <Checkbox :checked="value" @update:checked="handleChange" class="absolute right-3" />
                    </FormControl>
                    <div class="flex items-center gap-3">
                        <div
                            class="flex h-6 w-6 items-center justify-center rounded-full border border-solid md:h-12 md:w-12">
                            <Icon width="20" height="20"
                                Icon="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
                        </div>
                        <div class="flex w-[320px] flex-col gap-1">
                            <FormLabel class="text-sm md:text-base">Bussines</FormLabel>
                            <FormDescription class="text-xs">
                                Do business or freelance work internationally
                            </FormDescription>
                            <FormMessage />
                        </div>
                    </div>
                </FormItem>
            </FormField>
            <Button type="submit" :variant="variantBtn"> Submit </Button>
        </form>
    </main>
</template>

<script setup>
import { handleError, ref, watch } from 'vue'
import { h } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import Nav from '@/components/navbar-auth/Nav.vue'
import Footer from '@/components/footer-auth/Footer.vue'
import { Button } from '@/components/ui/button'
import FormIcon from '@/components/ui/form/FormIcon.vue'
import Icon from '@/components/icon/Icon.vue'

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormHeader,
} from '@/components/ui/form'

let variantBtn = ref('default')

import { Checkbox } from '@/components/ui/checkbox'
const toast = () => '@/components/ui/toast'

const formSchema = toTypedSchema(
    z.object({
        bussines: z.boolean().default(false).optional(),
        personal: z.boolean().default(false).optional(),
    })
)

const { handleSubmit } = useForm({
    validationSchema: formSchema,
    initialValues: {
        personal: false,
        bussines: false,
    },
})

const borderColor = ref({
    bussines: 'border-custom-greyscale-100',
    personal: 'border-custom-greyscale-100',
})


const emit = defineEmits(['setAccountType'])

const handleSetAcountType = handleSubmit((values) => {
    toast({
        title: 'You submitted the following values:',
        description: h(
            'pre',
            { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
            h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))
        ),
    })
    emit('setAccountType', values)
})

</script>

<style lang="scss" scoped></style>
