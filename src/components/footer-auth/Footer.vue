<template>
    <footer class="flex-between-center">
        <h6 v-if="copyright == true" class="text-sm text-custom-greyscale-500 md:text-base">
            ©2024 financial dashboard️
        </h6>
        <h6 v-else class="text-sm text-custom-greyscale-500">Dashboard️</h6>
        <div v-if="notLanguageSelection == true" class="">
            <Select v-model="selectedItem">
                <SelectTrigger inForm="false" SelectLanguage="true">
                    <SelectValue :placeholder="selectedItem" showFlag="false" class="text-xs" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Language</SelectLabel>
                        <SelectItem v-for="lang in country" :key="lang.id" :value="lang.language_code">
                            {{ lang.language }}
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
        <div v-else
            class="flex h-8 cursor-pointer items-center justify-center gap-2 rounded-[6px] border border-solid border-custom-greyscale-100 px-2 py-1">
            <Icon w="20" h="20" iconColor="normal" icon-footer="true"
                Icon="M19.9381 8H21C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8ZM3 10V14H4V10H3ZM20 10V14H21V10H20ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z" />
            <p class="text-xs font-medium">Get Help</p>
        </div>
    </footer>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import Icon from '../icon/Icon.vue'
import { Language } from '@/lib/countries'


let porps = defineProps({
    notLanguageSelection: {
        type: Boolean,
        default: true,
    },
    copyright: {
        type: Boolean,
        default: true,
    },
})

const country = Language
const selectedItem = ref('ENG')




</script>
