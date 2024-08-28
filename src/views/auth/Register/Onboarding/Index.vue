<template>
    <div class="container-content">
        <Nav nav-progres="true" :successStep2="Step.successStep2" :successStep3="Step.successStep3" />
        <ChoiceAccount v-if="Step.stepOne == true" @setAccountType="setAccountType" />
        <ChoiceCountry v-else-if="Step.stepTwo == true" @setCountry="setCountry" />
        <InputPhoneNumber v-else-if="Step.stepThree == true" @setPhoneNumber="setPhoneNumber"
            :codePhoneNumber="DataVerification.codePhoneNumber" :flag="DataVerification.flag" />
        <Verification2FA v-else-if="Step.stepFour == true" :phoneNumber="DataVerification.phoneNumber" />
        <Footer not-language-selection="true" />
    </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue'
import ChoiceAccount from './AccountType.vue'
import ChoiceCountry from './Country.vue'
import InputPhoneNumber from './PhoneNumber.vue'
import Verification2FA from './Verification2FA.vue'
import Nav from '@/components/navbar-auth/Nav.vue'
import Footer from '@/components/footer-auth/Footer.vue'

const Step = ref({
    stepOne: true,
    stepTwo: false,
    stepThree: false,
    stepFour: false,
    successStep2: false,
    successStep3: false,
})

const DataVerification = ref({
    accountType: {
        Array: [null],
    },
    country: null,
    codePhoneNumber: null,
    flag: null,
    phoneNumber: null,
    verificationCode: null,
})

const setAccountType = (data) => {
    DataVerification.value.accountType = data
    console.log(DataVerification.value.accountType)
    console.log(DataVerification.value)
    Step.value.stepOne = false
    Step.value.stepTwo = true
    Step.value.successStep2 = true
    console.log(Step.value.successStep2)
}

const setCountry = (data) => {
    DataVerification.value.country = data.value.selectedCountry
    DataVerification.value.codePhoneNumber = data.value.codePhoneNumber
    DataVerification.value.flag = data.value.flag
    console.log(DataVerification.value.country)
    console.log(DataVerification.value.codePhoneNumber)
    console.log(DataVerification.value)
    Step.value.stepTwo = false
    Step.value.stepThree = true
    Step.value.successStep3 = true
}
const setPhoneNumber = (data) => {
    DataVerification.value.phoneNumber = data
    Step.value.stepThree = false
    Step.value.stepFour = true
    console.log(DataVerification.value.phoneNumber)
}
</script>

<style lang="scss" scoped></style>
