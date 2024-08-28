<script setup>
import { ref, watch, computed } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import Nav from '@/components/navbar-auth/Nav.vue'
import Footer from '@/components/footer-auth/Footer.vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import FormIcon from '@/components/ui/form/FormIcon.vue'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import FormHeader from '@/components/ui/form/FormHeader.vue'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Countries, Language } from '@/lib/countries.js'

const country = Countries
const language = Language

const data = ref({
    selectedCountry: 'Australia',
    codePhoneNumber: '',
    flag: '',
})

let flagIcon = ref('')
watch(
    () => data.value.selectedCountry,
    (newVal, oldVal) => {
        console.log(newVal, oldVal)
        if (newVal != oldVal) {
            const findFlag = country.find(
                (c) => c.country == data.value.selectedCountry
            )
            flagIcon.value = findFlag.flag_icon
            data.value.codePhoneNumber = findFlag.phone_code
            data.value.flag = findFlag.flag_icon
            console.log(flagIcon.value)
        }
    }
)

const emit = defineEmits(['setCountry'])


const handleSetCountry = () => {
    console.log('Form submitted!', data)
    emit('setCountry', data)
}
</script>

<template>
    <main class="flex justify-center">
        <form @submit.prevent="handleSetCountry" class="form-style">
            <FormIcon
                pathIcon="M3 3H12.382C12.7607 3 13.107 3.214 13.2764 3.55279L14 5H20C20.5523 5 21 5.44772 21 6V17C21 17.5523 20.5523 18 20 18H13.618C13.2393 18 12.893 17.786 12.7236 17.4472L12 16H5V22H3V3Z" />
            <FormHeader title="Your country of primary residence">
                <template v-slot:desc>
                    You can add another account later on, too.
                </template>
            </FormHeader>
            <div class="flex flex-col gap-1">
                <label for="" class="text-sm font-medium">Chosen country</label>
                <div class="">
                    <Select v-model="data.selectedCountry">
                        <SelectTrigger inForm="true" class="w-full">
                            <SelectValue :placeholder="data.selectedCountry" defaultFlag="true" showFlag="true"
                                :flag="flagIcon" class="text-sm" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel class="text-sm">Countries</SelectLabel>
                                <SelectItem v-for="c in country" :value="c.country" inForm="true" :flag="c.flag_icon">
                                    <li class="list-none" :key="c.id">
                                        {{ c.country }}
                                    </li>
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <Button type="submit" variant="default"> Submit </Button>
        </form>
    </main>
</template>

<style lang="scss" scoped></style>
