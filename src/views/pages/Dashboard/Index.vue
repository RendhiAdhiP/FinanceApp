<script setup>
import Sidebar from '@/components/sidebar/sidebar.vue'
import Button from '@/components/ui/button/Button.vue'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Countries } from '@/lib/countries.js'
import {
    computed,
    inject,
    onMounted,
    onUnmounted,
    provide,
    ref,
    watch,
} from 'vue'
import { Platform } from '@/lib/data'
import DashboardLayout from '@/Layouts/DashboardLayout.vue'
import HeaderDashboard from '@/components/dashboard/HeaderDashboard.vue'


const options = ref({
    chart: {
        id: 'bar-chart',
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    colors: ['#E5EFFF', '#666D80'],
    xaxis: {
        categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
    },
    yaxis: {},
    legend: {
        show: false,
        itemStyle: {
            position: 'absolute',
            top: '-100px',
        },
        markers: {
            enabled: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 4,
            colors: {
                ranges: [
                    {
                        from: 0,
                        to: 0,
                    },
                ],
            },
        },
    },
    tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            const category = w.globals.labels[dataPointIndex]
            const outcomeValue = series[0][dataPointIndex]
            const incomeValue = series[1][dataPointIndex]

            return `
                    <div
                        class="flex flex-col border-none bg-custom-greyscale-700 gap-1 px-2 py-2  rounded-[4px] text-white font-medium text-xs min-w-[120px]">
                        <span class="category">${category}</span>
                        <div class="w-full bg-custom-greyscale-500 h-[1px] rounded"></div>
                        <div class="flex flex-col gap-1">
                            <div class="flex justify-between">
                                <!-- <div class="w-1 h-1 border border-solid border-custom-greyscale-700"></div> -->
                                <div class="flex items-center gap-1">
                                    <div
                                        class=" border-[2px] w-[6px] h-[6px] border-solid border-custom-greyscale-800 rounded-md">
                                    </div>
                                    <span>${outcomeValue}</span>
                                </div>
                                <div class="flex items-center">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path class="fill-[#40C4AA]"
                                            d="M12.9999 7.82843V20H10.9999V7.82843L5.6359 13.1924L4.22168 11.7782L11.9999 4L19.7781 11.7782L18.3639 13.1924L12.9999 7.82843Z"
                                            fill="black" />
                                    </svg>
                                    <span class="text-[#40C4AA]">77,8%</span>
                                </div>
                            </div>
                            <div class="flex justify-between">
                                <div class="flex items-center gap-1">
                                    <div class=" border-[2px] w-[6px] h-[6px] border-solid border-[#99C0FF] rounded-md">
                                    </div>
                                    <span>${incomeValue}</span>
                                </div>
                                <div class="flex items-center">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path class="fill-custom-alerterror-50"
                                            d="M12.9999 16.1716L18.3639 10.8076L19.7781 12.2218L11.9999 20L4.22168 12.2218L5.6359 10.8076L10.9999 16.1716V4H12.9999V16.1716Z"
                                            fill="black" />
                                    </svg>
                                    <span class="text-custom-alerterror-50">12,2%</span>
                                </div>

                            </div>
                        </div>
                    </div>
          `
        },
    },
})

const series = ref([
    {
        name: 'Outcome',
        data: [330, 140, 245, 150, 149, 260, 170, 391],
    },
    {
        name: 'Icome',
        data: [232, 430, 435, 500, 239, 430, 740, 1041],
    },
])

const lineOptions = ref({
    chart: {
        height: 350,
        type: 'area',
        toolbar: {
            show: false, 
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
        width: 2, 
        colors: ['#1A1B25'], 
    },
    fill: {
        colors: ['#9747FF'], 
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
        },
    },
    xaxis: {
        labels: {
            show: false, 
        },
        axisBorder: {
            show: false, 
        },
        axisTicks: {
            show: false, 
        },
    },
    yaxis: {
        opposite: true, 
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm',
        },
    },
    legend: {
        position: 'right', 
        horizontalAlign: 'center',
    },
    grid: {
        yaxis: {
            lines: {
                show: false, 
            },
        },
    },
})

const lineSeries = ref([
    {
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100],
    },
])

const dashboard️Currency = ref({
    country: Countries,
    defaultCurrency: 'United States',
    currency: 'US Dolar',
    flag: {
        type: String,
        default: Countries[24].flag_icon,
    },
})

const ID_CARD_NUMBER = ref([3, 2, 1, 4, 3, 5, 6, 4, 3, 6, 5, 3, 6, 3, 4, 5, 4])

const formattedIdCardNumber = computed(() => {
    return ID_CARD_NUMBER.value.map((num, i, arr) => {
        return i < arr.length - 4 ? '' : num
    })
})



const placeholder = 'US Dolar'
provide('dflag', dashboard️Currency.value.flag)

const Platforms = Platform

const device = ref({
    isDesktop: false,
})

const variant = ref('custom')
const width = window.innerWidth

const updateDeviceType = () => {
    const width = window.innerWidth

    device.value.isDesktop = width > 1024
    if (device.value.isDesktop) {
        variant.value = 'custom'
    } else {
        variant.value = 'xs'
    }
}

const amount = ref(2190000)
const limit = ref(10000000)

const percentage = computed(() => {
    return (amount.value / limit.value) * 100
})

const selectedCurrencyExchange1 = ref({
    country: Countries,
    defaultCurrency: 'United States',
    currency: 'US Dolar',
    flag: {
        type: String,
        default: Countries[24].flag_icon,
    },
})
const selectedCurrencyExchange2 = ref({
    country: Countries,
    defaultCurrency: 'United States',
    currency: 'Korean Won',
    flag: {
        type: String,
        default: Countries[18].flag_icon,
    },
})

watch(
    () => selectedCurrencyExchange1.value.currency,
    (newVal, oldVal) => {
        if (newVal !== oldVal) {
            const findFlag = Countries.find((c) => c.currency === newVal)
            if (findFlag) {
                selectedCurrencyExchange1.value.flag = findFlag.flag_icon
            }
            
        }
    }
)
watch(
    () => selectedCurrencyExchange2.value.currency,
    (newVal, oldVal) => {
        if (newVal !== oldVal) {
            const findFlag = Countries.find((c) => c.currency === newVal)
            if (findFlag) {
                selectedCurrencyExchange2.value.flag = findFlag.flag_icon
            }
            
        }
    }
)

watch(
    () => dashboard️Currency.value.currency,
    (newVal, oldVal) => {
        if (newVal !== oldVal) {
            const findFlag = Countries.find((c) => c.currency === newVal)
            if (findFlag) {
                dashboard️Currency.value.flag = findFlag.flag_icon
            }
        }
    }
)

onMounted(() => {
    const card = document.getElementById('card')
    createBarChart(35, card, 100)
    updateDeviceType()
    window.addEventListener('resize', updateDeviceType)
})
onUnmounted(() => {
    updateDeviceType()
    window.addEventListener('resize', updateDeviceType)
})

function createBarChart(numBars, container, customRadius) {
    const svgNamespace = 'http://www.w3.org/2000/svg'
    const barWidth = 38
    const barHeight = 10
    const radius = customRadius || container.clientWidth / 2 - barWidth / 2
    const angleStep = 180 / (numBars - 1)
    const containerWidth = container.clientWidth
    const containerHeight = container.clientHeight

    for (let i = 0; i < numBars; i++) {
        const angle = 0 - i * angleStep 
        const bar = document.createElementNS(svgNamespace, 'svg')
        bar.setAttribute('width', barWidth)
        bar.setAttribute('height', barHeight)
        bar.setAttribute('viewBox', '0 0 45 10')
        bar.setAttribute('class', 'bar')

        
        const x =
            containerWidth / 2 + radius * Math.cos((angle * Math.PI) / 180)
        const y =
            containerHeight / 1.03 + radius * Math.sin((angle * Math.PI) / 180)

        
        bar.style.position = 'absolute'
        bar.style.left = `${x - barWidth / 2}px`
        bar.style.top = `${y - barHeight / 2}px`
        bar.style.transform = `rotate(${angle - 180}deg)`

        const path = document.createElementNS(svgNamespace, 'path')
        path.setAttribute(
            'd',
            'M0.394312 4.33553L0.375293 5.06698C0.315602 7.36255 2.19659 9.23695 4.49193 9.16922L41.1443 8.0876C42.8574 8.03704 44.2053 6.60725 44.1547 4.89408C44.1066 3.26374 42.8046 1.94887 41.1748 1.8847L4.55034 0.442607C2.32203 0.354867 0.45228 2.10625 0.394312 4.33553Z'
        )

        
        
        if (i > 19) {
            path.setAttribute('fill', '#000000') 
        } else if (i > 14) {
            path.setAttribute('fill', '#808080') 
        } else {
            path.setAttribute('fill', '#D3D3D3') 
        }

        bar.appendChild(path)
        container.appendChild(bar)
    }
}

</script>

<template>
    <DashboardLayout>
        <HeaderDashboard titleDashboard="Your Financial Dashboard" subTitle="View your financial data in one place"
            title-button="Exchange Rate" title-sheet=" Exchange Rate">
            <!-- Sheet Content "Exchange Rate" -->
            <div class="mt-5">
                <div class="flex flex-col gap-4">
                    <h3 class="text-sm text-custom-greyscale-400 lg:text-base">
                        CHANGE CURRENCY
                    </h3>
                    <Select v-model="selectedCurrencyExchange1.currency">
                        <SelectTrigger inForm="true" class="w-full border">
                            <SelectValue :placeholder="selectedCurrencyExchange1.currency
                                    ? selectedCurrencyExchange1.currency
                                    : placeholder
                                " defaultFlag="true" showFlag="true" :flag="selectedCurrencyExchange1.flag"
                                class="text-xs lg:text-sm" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel class="text-xs lg:text-sm">Countries</SelectLabel>
                                <SelectItem v-for="c in selectedCurrencyExchange1.country" :value="c.currency"
                                    inForm="true" :flag="c.flag_icon">
                                    <li class="list-none" :key="c.id">
                                        {{ c.currency }}
                                    </li>
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <div
                        class="flex h-8 w-8 items-center justify-center self-center rounded-full border border-solid border-custom-greyscale-100">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.9498 7.94975L10.5356 9.36396L8.00079 6.828L8.00004 20H6.00004L6.00079 6.828L3.46451 9.36396L2.05029 7.94975L7.00004 3L11.9498 7.94975ZM21.9498 16.0503L17 21L12.0503 16.0503L13.4645 14.636L16.0008 17.172L16 4H18L18.0008 17.172L20.5356 14.636L21.9498 16.0503Z"
                                fill="black" />
                        </svg>
                    </div>
                    <Select v-model="selectedCurrencyExchange2.currency">
                        <SelectTrigger inForm="true" class="w-full border">
                            <SelectValue :placeholder="selectedCurrencyExchange2.currency
                                    ? selectedCurrencyExchange2.currency
                                    : placeholder
                                " defaultFlag="true" showFlag="true" :flag="selectedCurrencyExchange2.flag"
                                class="text-xs lg:text-sm" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel class="text-xs lg:text-sm">Countries</SelectLabel>
                                <SelectItem v-for="c in selectedCurrencyExchange2.country" :value="c.currency"
                                    inForm="true" :flag="c.flag_icon">
                                    <li class="list-none" :key="c.id">
                                        {{ c.currency }}
                                    </li>
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <div class="flex flex-col">
                        <h3 class="px-5 py-2 text-sm font-medium text-custom-greyscale-400 lg:text-base">
                            DETAIL CURRENCY
                        </h3>
                        <div class="flex items-center justify-between px-4 py-2">
                            <h3 class="text-xs font-normal text-custom-greyscale-400">
                                DETAIL CURRENCY
                            </h3>
                            <svg width="24" height="24" class="h-4 w-4 lg:h-6 lg:w-6" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-custom-alertsuccess-200"
                                    d="M4.41085 14.5258L7.81249 11.1241L10.6409 13.9526L13.7978 10.7957L12.0049 9.00281H17.0049V14.0028L15.212 12.2099L10.6409 16.781L7.81249 13.9526L5.33834 16.4267C6.77158 18.5822 9.22233 20.0028 12.0049 20.0028C16.4232 20.0028 20.0049 16.4211 20.0049 12.0028C20.0049 7.58453 16.4232 4.00281 12.0049 4.00281C7.5866 4.00281 4.00488 7.58453 4.00488 12.0028C4.00488 12.8844 4.14747 13.7326 4.41085 14.5258ZM2.87288 16.084L2.86275 16.0739L2.86662 16.07C2.31276 14.8274 2.00488 13.4511 2.00488 12.0028C2.00488 6.47996 6.48204 2.00281 12.0049 2.00281C17.5277 2.00281 22.0049 6.47996 22.0049 12.0028C22.0049 17.5257 17.5277 22.0028 12.0049 22.0028C7.93574 22.0028 4.43426 19.5724 2.87288 16.084Z"
                                    fill="black" />
                            </svg>
                        </div>

                        <div class="mt-3 flex flex-col gap-2 rounded-[16px] border border-[#DFE1E7] p-2">
                            <apexchart class="w-full" type="area" :options="lineOptions" :series="lineSeries" />
                            <div class="-mt-4 h-[1px] w-full border border-[#DFE1E7]"></div>
                            <div class="flex justify-between px-4">
                                <p class="text-sm font-medium text-custom-greyscale-500">
                                    31 Jan
                                </p>
                                <p class="text-sm font-semibold">Today</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-between px-4">
                        <p class="text-sm font-normal text-custom-greyscale-500">
                            Per 1 USD
                        </p>
                        <p class="text-sm font-medium lg:text-base">
                            Per 1 Currency
                        </p>
                    </div>

                    <div class="flex justify-between px-4">
                        <p class="text-sm font-normal text-custom-greyscale-500">
                            Tax
                        </p>
                        <p class="text-sm font-medium lg:text-base">2%</p>
                    </div>

                    <div class="flex justify-between px-4">
                        <p class="text-sm font-normal text-custom-greyscale-500">
                            Exchange Fee
                        </p>
                        <p class="text-sm font-medium lg:text-base">1%</p>
                    </div>
                </div>

                <Button variant="outline" class="mt-5 w-full px-4 py-2 text-xs font-medium md:text-base">Change</Button>
            </div>

            <!-- End Sheet content -->
        </HeaderDashboard>

        <section class="w-full">
            <div class="flex flex-col items-center md:mt-12 md:flex-row md:justify-between lg:mt-0">
                <ul class="mb-2 flex w-[200px] px-[2px] py-[2px] text-sm font-medium text-custom-greyscale-500">
                    <li class="flex-1 rounded-[8px] py-1 text-center">12 M</li>
                    <li class="flex-1 rounded-[8px] py-1 text-center text-custom-greyscale-900">
                        1 M
                    </li>
                    <li class="flex-1 rounded-[8px] py-1 text-center">7 D</li>
                    <li class="flex-1 rounded-[8px] py-1 text-center">24 H</li>
                </ul>
                <div class="flex items-center gap-2">
                    <div
                        class="flex cursor-pointer items-center gap-2 rounded-[8px] border border-solid border-[#DFE1E7] px-4 py-2">
                        <svg width="20" height="20" class="w-[16px]" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"
                                fill="black" />
                        </svg>
                        <p class="text-xs font-medium text-custom-greyscale-900 md:text-sm">
                            8 Feb - 15 Feb 2024
                        </p>
                    </div>
                    <div
                        class="flex cursor-pointer items-center gap-2 rounded-[8px] border border-solid border-[#DFE1E7] px-4 py-2">
                        <svg width="20" height="20" class="w-[16px]" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" fill="black" />
                        </svg>
                        <p class="text-xs font-medium text-custom-greyscale-900 md:text-sm">
                            Filter
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section
            class="flex w-full flex-wrap gap-6 md:grid md:grid-cols-2 lg:grid-cols-[292px_292px_292px] lg:place-content-start xl:grid-cols-[302px_302px_302px]">
            <div
                class="flex flex-1 flex-col justify-between gap-4 rounded-[16px] border border-solid border-[#DFE1E7] px-4 py-4">
                <div class="flex justify-between">
                    <div class="flex items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.0004 16C14.2095 16 16.0004 14.2091 16.0004 12C16.0004 9.79086 14.2095 8 12.0004 8C9.79123 8 8.00037 9.79086 8.00037 12C8.00037 14.2091 9.79123 16 12.0004 16ZM21.0049 4.00293H3.00488C2.4526 4.00293 2.00488 4.45064 2.00488 5.00293V19.0029C2.00488 19.5552 2.4526 20.0029 3.00488 20.0029H21.0049C21.5572 20.0029 22.0049 19.5552 22.0049 19.0029V5.00293C22.0049 4.45064 21.5572 4.00293 21.0049 4.00293ZM4.00488 15.6463V8.35371C5.13065 8.017 6.01836 7.12892 6.35455 6.00293H17.6462C17.9833 7.13193 18.8748 8.02175 20.0049 8.3564V15.6436C18.8729 15.9788 17.9802 16.8711 17.6444 18.0029H6.3563C6.02144 16.8742 5.13261 15.9836 4.00488 15.6463Z"
                                fill="black" />
                        </svg>

                        <h3 class="text-sm font-medium">My Balance</h3>
                    </div>
                    <button
                        class="flex items-center gap-2 rounded-[8px] border border-solid border-[#DFE1E7] px-4 py-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2 11.9998C2 11.1353 2.1097 10.2964 2.31595 9.49631C3.40622 9.55283 4.48848 9.01015 5.0718 7.99982C5.65467 6.99025 5.58406 5.78271 4.99121 4.86701C6.18354 3.69529 7.66832 2.82022 9.32603 2.36133C9.8222 3.33385 10.8333 3.99982 12 3.99982C13.1667 3.99982 14.1778 3.33385 14.674 2.36133C16.3317 2.82022 17.8165 3.69529 19.0088 4.86701C18.4159 5.78271 18.3453 6.99025 18.9282 7.99982C19.5115 9.01015 20.5938 9.55283 21.6841 9.49631C21.8903 10.2964 22 11.1353 22 11.9998C22 12.8643 21.8903 13.7032 21.6841 14.5033C20.5938 14.4468 19.5115 14.9895 18.9282 15.9998C18.3453 17.0094 18.4159 18.2169 19.0088 19.1326C17.8165 20.3043 16.3317 21.1794 14.674 21.6383C14.1778 20.6658 13.1667 19.9998 12 19.9998C10.8333 19.9998 9.8222 20.6658 9.32603 21.6383C7.66832 21.1794 6.18354 20.3043 4.99121 19.1326C5.58406 18.2169 5.65467 17.0094 5.0718 15.9998C4.48848 14.9895 3.40622 14.4468 2.31595 14.5033C2.1097 13.7032 2 12.8643 2 11.9998ZM6.80385 14.9998C7.43395 16.0912 7.61458 17.3459 7.36818 18.5236C7.77597 18.8138 8.21005 19.0652 8.66489 19.2741C9.56176 18.4712 10.7392 17.9998 12 17.9998C13.2608 17.9998 14.4382 18.4712 15.3351 19.2741C15.7899 19.0652 16.224 18.8138 16.6318 18.5236C16.3854 17.3459 16.566 16.0912 17.1962 14.9998C17.8262 13.9085 18.8225 13.1248 19.9655 12.7493C19.9884 12.5015 20 12.2516 20 11.9998C20 11.7481 19.9884 11.4981 19.9655 11.2504C18.8225 10.8749 17.8262 10.0912 17.1962 8.99982C16.566 7.90845 16.3854 6.65378 16.6318 5.47605C16.224 5.18588 15.7899 4.93447 15.3351 4.72552C14.4382 5.52844 13.2608 5.99982 12 5.99982C10.7392 5.99982 9.56176 5.52844 8.66489 4.72552C8.21005 4.93447 7.77597 5.18588 7.36818 5.47605C7.61458 6.65378 7.43395 7.90845 6.80385 8.99982C6.17376 10.0912 5.17754 10.8749 4.03451 11.2504C4.01157 11.4981 4 11.7481 4 11.9998C4 12.2516 4.01157 12.5015 4.03451 12.7493C5.17754 13.1248 6.17376 13.9085 6.80385 14.9998ZM12 14.9998C10.3431 14.9998 9 13.6567 9 11.9998C9 10.343 10.3431 8.99982 12 8.99982C13.6569 8.99982 15 10.343 15 11.9998C15 13.6567 13.6569 14.9998 12 14.9998ZM12 12.9998C12.5523 12.9998 13 12.5521 13 11.9998C13 11.4475 12.5523 10.9998 12 10.9998C11.4477 10.9998 11 11.4475 11 11.9998C11 12.5521 11.4477 12.9998 12 12.9998Z"
                                fill="black" />
                        </svg>

                        <p class="text-xs font-medium">More Option</p>
                    </button>
                </div>
                <div class="rounded-[8px] border border-solid border-[#DFE1E7]">
                    <Select v-model="dashboard️Currency.currency">
                        <SelectTrigger inForm="true"
                            class="w-full rounded-none border-b border-l-0 border-r-0 border-t-0">
                            <SelectValue :placeholder="dashboard️Currency.currency
                                    ? dashboard️Currency.currency
                                    : placeholder
                                " defaultFlag="true" showFlag="true" :flag="dashboard️Currency.flag" class="text-sm" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel class="text-sm">Countries</SelectLabel>
                                <SelectItem v-for="c in dashboard️Currency.country" :value="c.currency" inForm="true"
                                    :flag="c.flag_icon">
                                    <li class="list-none" :key="c.id">
                                        {{ c.currency }}
                                    </li>
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <div class="flex flex-col gap-4 px-4 pb-4 pt-9">
                        <h4 class="text-4xl font-bold">$63,48,100</h4>
                        <div class="flex justify-between">
                            <p class="text-sm font-normal text-custom-alertsuccess-200">
                                15.43% Than last month
                            </p>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-custom-alertsuccess-200"
                                    d="M4.41085 14.5258L7.81249 11.1241L10.6409 13.9526L13.7978 10.7957L12.0049 9.00281H17.0049V14.0028L15.212 12.2099L10.6409 16.781L7.81249 13.9526L5.33834 16.4267C6.77158 18.5822 9.22233 20.0028 12.0049 20.0028C16.4232 20.0028 20.0049 16.4211 20.0049 12.0028C20.0049 7.58453 16.4232 4.00281 12.0049 4.00281C7.5866 4.00281 4.00488 7.58453 4.00488 12.0028C4.00488 12.8844 4.14747 13.7326 4.41085 14.5258ZM2.87288 16.084L2.86275 16.0739L2.86662 16.07C2.31276 14.8274 2.00488 13.4511 2.00488 12.0028C2.00488 6.47996 6.48204 2.00281 12.0049 2.00281C17.5277 2.00281 22.0049 6.47996 22.0049 12.0028C22.0049 17.5257 17.5277 22.0028 12.0049 22.0028C7.93574 22.0028 4.43426 19.5724 2.87288 16.084Z"
                                    fill="black" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="flex gap-4">
                    <RouterLink to="/sending-money/amount" class="flex-1">
                        <Button size="sm" class="flex w-full gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-custom-greyscale-0"
                                    d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                                    fill="black" />
                            </svg>
                            Send
                        </Button>
                    </RouterLink>
                    <Button size="sm" variant="outline" class="flex flex-1 gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="fill-custom-greyscale-800"
                                d="M9 13.589L17.6066 4.98242L19.0208 6.39664L10.4142 15.0032H18V17.0032H7V6.00324H9V13.589Z"
                                fill="black" />
                        </svg>
                        Request
                    </Button>
                </div>
            </div>
            <!-- Radial Chart -->

            <div
                class="relative flex h-auto flex-1 flex-col items-center gap-4 rounded-[16px] border border-[#DFE1E7] p-4">
                <div class="flex flex-wrap gap-6">
                    <div class="flex items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 12.3369 23.4855 12.6704 23.4571 13H21.9506C21.4489 18.0533 17.1853 22 12 22C6.47715 22 2 17.5228 2 12C2 6.81465 5.94668 2.5511 11 2.04938V0.542876C11.3296 0.514488 11.6631 0.5 12 0.5ZM11 4.06189C7.05369 4.55399 4 7.92038 4 12C4 16.4183 7.58172 20 12 20C16.0796 20 19.446 16.9463 19.9381 13H11V4.06189ZM13 2.552V11H21.448C20.9827 6.55197 17.448 3.01732 13 2.552Z"
                                fill="black" />
                        </svg>
                        <h4 class="text-sm font-medium">Spending Summary</h4>
                    </div>
                    <div class="flex-3 flex items-center gap-2 rounded-[8px] border border-[#DFE1E7] px-4 py-2">
                        <p class="text-xs font-medium">More Options</p>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.0001 13.1714L16.9499 8.22168L18.3641 9.63589L12.0001 15.9999L5.63623 9.63589L7.05044 8.22168L12.0001 13.1714Z"
                                fill="black" />
                        </svg>
                    </div>
                </div>
                <div class="h-[1px] w-full bg-[#DFE1E7]"></div>
                <div id="card" class="relative h-[120px] w-[280px]"></div>

                <div class="absolute top-[50%] flex flex-col items-center gap-2 font-medium">
                    <p class="text-xs text-custom-greyscale-500">Spent</p>
                    <p class="text-xl font-semibold">$16,654,450</p>
                </div>

                <div class="h-[1px] w-full bg-[#DFE1E7]"></div>
                <div class="flex gap-4 text-custom-greyscale-500">
                    <div v-for="(serie, index) in series" :key="index" class="flex cursor-pointer items-center gap-1">
                        <div :class="[
                            'h-[9px] w-[9px] rounded-[50%]',
                            `marker-color-${index}`,
                        ]"></div>
                        <span class="text-xs">{{ serie.name }}</span>
                    </div>
                    <div class="flex cursor-pointer items-center gap-1">
                        <div :class="[
                            'h-[9px] w-[9px] rounded-[50%]',
                            `bg-[#C1C7D0]`,
                        ]"></div>
                        <span class="text-xs">Other</span>
                    </div>
                </div>
                <div class="flex justify-between px-4 py-2 text-[#116B97]">
                    <p class="text-xs">
                        Your weekly spending limit is
                        <span class="font-medium">$2000</span>.
                    </p>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="fill-[#116B97]"
                            d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"
                            fill="black" />
                    </svg>
                </div>
            </div>

            <div
                class="flex h-auto w-full flex-1 flex-col gap-4 rounded-[16px] border border-[#DFE1E7] p-4 md:min-w-[350px] md:max-w-[390px]">
                <div class="flex justify-between">
                    <div class="flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979ZM20.0049 10.9998H4.00488V18.9998H20.0049V10.9998ZM20.0049 8.99979V4.99979H4.00488V8.99979H20.0049ZM14.0049 14.9998H18.0049V16.9998H14.0049V14.9998Z"
                                fill="black" />
                        </svg>
                        <h4 class="text-sm font-medium">My Cards</h4>
                    </div>
                    <div class="flex-3 flex items-center gap-2 rounded-[8px] border border-[#DFE1E7] px-4 py-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="black" />
                        </svg>

                        <p class="text-xs font-medium">More Options</p>
                    </div>
                </div>
                <div class="flex justify-center rounded-[8px] bg-custom-greyscale-50 p-[2px]">
                    <div
                        class="flex-1 cursor-pointer justify-center rounded-[8px] bg-custom-greyscale-25 py-1 text-center text-sm font-medium text-custom-greyscale-800 shadow-sm md:px-[37px]">
                        Virtual
                    </div>
                    <div
                        class="flex-1 cursor-pointer justify-center py-1 text-center text-sm font-medium text-custom-greyscale-500 md:px-[37px]">
                        Physical
                    </div>
                </div>
                <div class="relative flex h-[164px] w-full rounded-[12px] border border-[#DFE1E7]">
                    <div class="flex w-full justify-between">
                        <svg width="21" height="23" class="ml-5 mt-5" viewBox="0 0 21 23" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_470_4826)">
                                <path
                                    d="M14.9333 1C16.8687 4.1924 18.1333 8.31373 18.1333 12C18.1333 15.6863 16.8687 18.8076 14.9333 22M10.6666 3C12.1762 5.49007 12.8 9.12471 12.8 12C12.8 14.8753 12.1762 17.5099 10.6666 20M5.33332 5C6.42485 6.81967 7.46665 8.89883 7.46665 11C7.46665 13.1012 6.42485 15.1803 5.33332 17M1.06665 8C1.85331 9.13384 2.13332 10.6635 2.13332 12C2.13332 13.3365 1.85331 13.8662 1.06665 15"
                                    stroke="#666D80" stroke-width="2.44123" stroke-linecap="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_470_4826">
                                    <rect width="20.2667" height="23" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <img src="../../assets/Icon/art.png" class="relative h-24 md:h-32" alt="" />
                    </div>
                    <div class="absolute bottom-2 left-4 w-full">
                        <div class="flex items-center gap-16">
                            <p class="text-sm font-medium text-custom-greyscale-800">
                                Oliver Bearmann
                            </p>
                            <span class="text-xs font-normal">04/24</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <div v-for="(number, i) in formattedIdCardNumber" :key="i" :class="{
                                circle:
                                    i < formattedIdCardNumber.length - 4,
                            }" class="text-sm font-medium md:text-base">
                                {{ number }}
                            </div>
                            <div class="relative right-0 flex">
                                <div class="h-[17px] w-[17px] rounded-full bg-[#ED0006]/90"></div>
                                <div class="relative -ml-2 h-[17px] w-[17px] rounded-full bg-[#F9A000]/80"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col items-center gap-2">
                    <div class="flex w-full items-center justify-between">
                        <div class="text-sm font-normal text-custom-greyscale-800">
                            Spending Limit
                        </div>
                        <div class="text-sm font-semibold text-custom-greyscale-800">
                            $ {{ amount }}
                        </div>
                    </div>
                    <div class="h-[10px] w-full overflow-hidden rounded-[5px] bg-[#f0f0f0]">
                        <div class="h-full rounded-full bg-[#333]" :style="{
                            width: `${percentage}%`,
                        }"></div>
                    </div>
                </div>
            </div>
            <div
                class="flex w-full flex-1 flex-col gap-4 rounded-[16px] border border-[#DFE1E7] md:col-span-2 md:px-4 md:py-4">
                <div class="flex flex-wrap justify-between p-4">
                    <div class="mb-1 flex flex-1 items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979ZM20.0049 10.9998H4.00488V18.9998H20.0049V10.9998ZM20.0049 8.99979V4.99979H4.00488V8.99979H20.0049ZM14.0049 14.9998H18.0049V16.9998H14.0049V14.9998Z"
                                fill="black" />
                        </svg>
                        <p class="text-sm font-medium">Budget Overview</p>
                    </div>
                    <div class="flex flex-1 flex-wrap items-center gap-4 md:flex-nowrap">
                        <div v-for="(serie, index) in series" :key="index"
                            class="flex cursor-pointer items-center gap-1 text-custom-greyscale-500">
                            <div :class="[
                                'h-[9px] w-[9px] rounded-[50%]',
                                `marker-color-${index}`,
                            ]"></div>
                            <span class="text-xs">{{ serie.name }}</span>
                        </div>
                        <div class="flex items-center gap-2 rounded-[8px] border border-[#DFE1E7] px-1 py-2 md:ml-0">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.0001 13.1714L16.9499 8.22168L18.3641 9.63589L12.0001 15.9999L5.63623 9.63589L7.05044 8.22168L12.0001 13.1714Z"
                                    fill="black" />
                            </svg>

                            <p class="text-xs font-medium">More Options</p>
                        </div>
                    </div>
                </div>
                <div class="h-[1px] w-full bg-[#DFE1E7]"></div>
                <div class="flex items-center gap-3">
                    <div class="flex flex-1 items-center gap-2 border-r border-[#DFE1E7] px-4 py-2">
                        <div class="px-4 py-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 13.589L17.6066 4.98242L19.0208 6.39664L10.4142 15.0032H18V17.0032H7V6.00324H9V13.589Z"
                                    fill="black" />
                            </svg>
                        </div>
                        <div class="flex flex-col justify-start gap-1">
                            <p class="text-xs font-medium text-slate-500">
                                Incom
                            </p>
                            <p class="text-sm font-medium text-slate-900">
                                $17.843.33
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-1 items-center gap-2 px-4 py-2">
                        <div class="h-10 w-10 rounded-full bg-[#3381ff10] px-4 py-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                class="relative left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                                xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-[#3381FF]"
                                    d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                                    fill="black" />
                            </svg>
                        </div>
                        <div class="flex flex-col justify-start gap-1">
                            <p class="text-xs font-medium text-slate-500">
                                Expense
                            </p>
                            <p class="text-sm font-medium text-slate-900">
                                $14.256.55
                            </p>
                        </div>
                    </div>
                </div>
                <apexchart class="w-auto" type="bar" :options="options" :series="series"></apexchart>
            </div>

            <div
                class="flex h-max w-full flex-1 flex-col gap-4 rounded-[16px] border border-[#DFE1E7] p-4 md:col-span-2 md:min-w-[352px] lg:col-span-1">
                <div class="flex justify-between gap-6">
                    <div class="flex items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.37833 4.51335C7.14264 2.95113 9.46301 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 14.1277 21.3421 16.0978 20.212 17.7177L17.5049 12.0027H20.0049C20.0049 7.58447 16.4232 4.00275 12.0049 4.00275C9.76058 4.00275 7.73213 4.92691 6.27932 6.41544L5.37833 4.51335ZM18.6314 19.4921C16.8671 21.0544 14.5468 22.0027 12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 9.8778 2.66767 7.90766 3.79778 6.28776L6.50488 12.0027H4.00488C4.00488 16.421 7.5866 20.0027 12.0049 20.0027C14.2492 20.0027 16.2776 19.0786 17.7304 17.59L18.6314 19.4921ZM8.50488 14.0027H14.0049C14.281 14.0027 14.5049 13.7789 14.5049 13.5027C14.5049 13.2266 14.281 13.0027 14.0049 13.0027H10.0049C8.62417 13.0027 7.50488 11.8835 7.50488 10.5027C7.50488 9.12203 8.62417 8.00275 10.0049 8.00275H11.0049V7.00275H13.0049V8.00275H15.5049V10.0027H10.0049C9.72874 10.0027 9.50488 10.2266 9.50488 10.5027C9.50488 10.7789 9.72874 11.0027 10.0049 11.0027H14.0049C15.3856 11.0027 16.5049 12.122 16.5049 13.5027C16.5049 14.8835 15.3856 16.0027 14.0049 16.0027H13.0049V17.0027H11.0049V16.0027H8.50488V14.0027Z"
                                fill="black" />
                        </svg>
                        <h3 class="text-sm font-medium text-slate-900">
                            Recent Transactions
                        </h3>
                    </div>

                    <button
                        class="flex items-center gap-1 rounded-[8px] border border-solid border-[#DFE1E7] px-4 py-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.0001 13.1714L16.9499 8.22168L18.3641 9.63589L12.0001 15.9999L5.63623 9.63589L7.05044 8.22168L12.0001 13.1714Z"
                                fill="black" />
                        </svg>

                        <p class="text-xs font-medium">Last Week</p>
                    </button>
                </div>
                <div class="flex justify-center rounded-[8px] bg-custom-greyscale-50 p-[2px]">
                    <div class="flex-1 cursor-pointer py-1 text-center text-sm font-medium text-custom-greyscale-500">
                        Income
                    </div>
                    <div
                        class="flex-1 cursor-pointer rounded-[8px] bg-custom-greyscale-25 py-1 text-center text-sm font-medium text-custom-greyscale-800 shadow-sm">
                        Outcome
                    </div>
                    <div class="flex-1 cursor-pointer py-1 text-center text-sm font-medium text-custom-greyscale-500">
                        Pending
                    </div>
                </div>
                <div class="flex flex-col">
                    <div v-for="platform in Platform"
                        class="flex flex-wrap items-center justify-between gap-2 border-b border-[#DFE1E7] py-3 md:flex-nowrap">
                        <div class="flex w-full gap-2">
                            <div class="flex h-10 w-10  items-center justify-center rounded-full border border-[#DFE1E7]"
                                key="platform.id">
                                <img :src="platform.logo" class="" alt="" />
                            </div>
                            <div class="flex flex-col">
                                <h4 class="text-sm font-medium">
                                    {{ platform.title }}
                                </h4>
                                <p class="text-xs font-normal text-custom-greyscale-400">
                                    Montly
                                    {{ platform.app }}
                                    subscription
                                </p>
                            </div>
                        </div>

                        <div class="flex w-full">
                            <div
                                class="flex w-full items-center justify-around md:flex-col md:items-end md:justify-normal">
                                <p class="text-sm font-medium">
                                    {{ platform.payment }}
                                </p>
                                <p class="text-xs font-normal text-custom-greyscale-400">
                                    {{ platform.date }}
                                </p>
                            </div>

                            <div class="flex h-8 w-8 cursor-pointer items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.1715 12.0007L8.22168 7.05093L9.6359 5.63672L15.9999 12.0007L9.6359 18.3646L8.22168 16.9504L13.1715 12.0007Z"
                                        fill="black" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <Button variant="outline" class="w-full gap-2 rounded-[8px] shadow-sm">
                    See All
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                            fill="black" />
                    </svg>
                </Button>
            </div>
        </section>
    </DashboardLayout>
</template>

<style scoped>
#chart {
    max-width: 650px;
    margin: 35px auto;
}

.marker-color-0 {
    background-color: rgba(102, 161, 255, 1);
}

.marker-color-1 {
    background-color: rgba(26, 27, 37, 1);
}

.custom-rectangle {
    display: inline-block;
}

.bar {
    position: absolute;
    animation: fadeIn 1s ease forwards;
}
</style>
