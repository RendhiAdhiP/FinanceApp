<script setup>
import { SelectValue } from 'radix-vue'
import australia from '../../../assets/Icon/Flag/australia.png'
import { inject, ref, watch } from 'vue'

const props = defineProps({
    placeholder: { type: String, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    showFlag: { type: null, required: false, default: false },
    flag: { type: null, required: true },
    defaultFlag: { type: Boolean, required: false },
})

let defaultFlag = ref(props.defaultFlag)

watch(
    () => props.defaultFlag,
    (newVal, oldVal) => {
        console.log(newVal, oldVal)
    }
)

const dflag = inject('dflag')


watch(
    () => props.flag,
    () => {
        console.log(props.flag)
        if (defaultFlag) {
            defaultFlag.value = false
        }
    }
)

</script>

<template>
    <div class="flex items-center gap-2">
        <img v-if="showFlag == 'true'" :src="flag" alt="" />
        <img
            v-show="defaultFlag == 'true'"
            :src="props.flag?.default || dflag?.default || australia"
            alt=""
        />
        <SelectValue v-bind="props">
            <slot />
            {{ props.placeholder }}
        </SelectValue>
    </div>
</template>
