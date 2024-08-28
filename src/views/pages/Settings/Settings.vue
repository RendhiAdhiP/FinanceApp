<template>
    <section class="flex w-full flex-col gap-4">
        <div class="flex flex-wrap gap-8">
            <div class="flex w-64 flex-col gap-1">
                <span class="text-sm font-medium">Languange Settings</span>
                <span class="text-xs font-normal text-custom-greyscale-400">
                    Display the app in your selected language.
                </span>
            </div>
            <div class="flex w-52 items-center gap-3">
                <Select v-model="Languages.language">
                    <SelectTrigger inForm="true" class="h-10 w-full rounded-[10px] border px-4">
                        <SelectValue :placeholder="Languages.language
                            ? Languages.language
                            : Languages.defaultLanguage
                            " defaultFlag="true" showFlag="true" :flag="Languages.flag" class="mr-2 text-xs" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel class="text-xs lg:text-sm">Language</SelectLabel>
                            <SelectItem v-for="c in Language" :value="c.language" inForm="true" :flag="c.flag_icon">
                                <li class="list-none" :key="c.id">
                                    {{ c.language }}
                                </li>
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
        <div class="h-[1px] w-full bg-custom-greyscale-50"></div>

        <div class="flex flex-wrap gap-8">
            <div class="flex w-64 flex-col gap-1">
                <span class="text-sm font-medium">Theme</span>
                <span class="text-xs font-normal text-custom-greyscale-400">
                    Set unique code that appears on all LOGO communications from
                    us to you
                </span>
            </div>
            <div class="flex flex-col items-center gap-3">
                <Select v-model="data.selectedTheme">
                    <SelectTrigger inForm="true" class="w-full rounded-[10px] border">
                        <SelectValue :placeholder="data.selectedTheme" :class="[
                            'mr-2 text-xs',
                            data.selectedTheme
                                ? 'text-custom-greyscale-700'
                                : 'text-custom-greyscale-400',
                        ]" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel class="text-sm">Theme</SelectLabel>
                            <SelectItem v-for="(item, index) in data.theme" :key="index" :value="item" inForm="true">
                                <li class="list-none">
                                    {{ item }}
                                </li>
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
        <div class="h-[1px] w-full bg-custom-greyscale-50"></div>

        <div class="flex flex-wrap gap-8">
            <div class="flex w-64 flex-col gap-1">
                <span class="text-sm font-medium">Web Contacts</span>
                <span class="text-xs font-normal text-custom-greyscale-400">
                    Set unique code that appears on all LOGO communications from
                    us to you
                </span>
            </div>
            <div class="flex flex-col items-center gap-3">
                <div class="flex flex-col items-center gap-3">
                    <div
                        class="flex h-8 cursor-pointer items-center gap-2 rounded-[8px] border border-solid border-[#DFE1E7] px-4 py-[6px] md:py-2 lg:py-[6px]">
                        <p class="text-xs font-medium text-custom-greyscale-900">
                            Open Web Contacts
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-[1px] w-full bg-custom-greyscale-50"></div>

        <div class="flex flex-wrap gap-8">
            <div class="flex w-64 flex-col gap-1">
                <span class="text-sm font-medium">API Token</span>
                <span class="text-xs font-normal text-custom-greyscale-400">
                    Set unique code that appears on all LOGO communications from
                    us to you
                </span>
            </div>
            <div class="flex flex-col items-center gap-3">
                <div class="flex flex-col items-center gap-3">
                    <div
                        class="flex h-8 cursor-pointer items-center gap-2 rounded-[8px] border border-solid border-[#DFE1E7] px-4 py-[6px] md:py-2 lg:py-[6px]">
                        <p class="text-xs font-medium text-custom-greyscale-900">
                            Open API Token
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-[1px] w-full bg-custom-greyscale-50"></div>

        <div class="flex flex-wrap gap-8">
            <div class="flex w-64 flex-col gap-1">
                <span class="text-sm font-medium">Secure Communication Code</span>
                <span class="text-xs font-normal text-custom-greyscale-400">
                    Set unique code that appears on all LOGO communications from
                    us to you
                </span>
            </div>
            <div class="flex flex-col items-center gap-3">
                <div
                    class="flex h-8 cursor-pointer items-center gap-2 rounded-[8px] border border-solid border-[#DFE1E7] px-4 py-[6px] md:py-2 lg:py-[6px]">
                    <p class="text-xs font-medium text-custom-greyscale-900">
                        Create Communication Code
                    </p>
                </div>
            </div>
        </div>
        <div class="h-[1px] w-full bg-custom-greyscale-50"></div>

        <div class="flex flex-wrap gap-8">
            <div class="flex w-64 flex-col gap-1">
                <span class="text-sm font-medium">Languange Settings</span>
                <span class="text-xs font-normal text-custom-greyscale-400">
                    Display the app in your selected language.
                </span>
            </div>
            <div class="flex items-center gap-3">
                <div
                    class="flex h-8 cursor-pointer items-center rounded-[8px] bg-custom-alerterror-100 px-4 py-[6px] md:py-2 lg:py-[6px]">
                    <p class="text-xs font-medium text-custom-greyscale-0">
                        Close
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { watch } from 'vue'
import { Language } from '@/lib/countries'

const Languages = ref({
    defaultLanguage: Language[3].language,
    language: '',
    flag: {
        type: String,
        default: Language[3].flag_icon,
    },
})

watch(
    () => Languages.value.language,
    (newVal, oldVal) => {
        if (newVal !== oldVal) {
            const findFlag = Language.find((c) => c.language === newVal)
            if (findFlag) {
                Languages.value.flag = findFlag.flag_icon
            }
        }
    }
)

const data = ref({
    theme: ['Light Mode', 'Dark Mode'],
    selectedTheme: 'Light Mode',
})
</script>

<style lang="scss" scoped></style>
