import { createRouter, createWebHistory } from 'vue-router'

import EmailAuth from '@/views/auth/Login/Email/Index.vue'
import ResetPssword from '@/views/auth/Login/Email/ResetPssword.vue'
import SuccessResetPassword from '@/views/auth/Login/Email/SuccessResetPassword.vue'
import Verified from '@/views/auth/Login/Email/Verified.vue'
import Dashboard from '@/views/pages/Dashboard/Index.vue'
import Amount from '@/views/pages/Dashboard/SendingMoney/Amount.vue'
import PersonalDetails from '@/views/pages/Dashboard/SendingMoney/PersonalDetails.vue'
import Recipient from '@/views/pages/Dashboard/SendingMoney/Recipient.vue'
import ReviewAndPay from '@/views/pages/Dashboard/SendingMoney/ReviewAndPay.vue'
import SuccessSendingMoney from '@/views/pages/Dashboard/SendingMoney/Success.vue'
import Balance from '@/views/pages/Balance/Index.vue'
import Transaction from '@/views/pages/Transaction/Index.vue'
import Cards from '@/views/pages/Cards/Index.vue'
import Onboarding from '@/views/pages/Cards/GettingPhysicalCards/Onboarding.vue'
import Address from '@/views/pages/Cards/GettingPhysicalCards/Address.vue'
import VerificationCard from '@/views/pages/Cards/GettingPhysicalCards/VerificationCard.vue'
import Payment from '@/views/pages/Cards/GettingPhysicalCards/Payment.vue'
import SuccessAddCard from '@/views/pages/Cards/GettingPhysicalCards/SuccessAddCard.vue'
import Recepients from '@/views/pages/Recepients/Index.vue'
import Integrations from '@/views/pages/Integrations/Index.vue'
import Settings from '@/views/pages/Settings/Index.vue'

const Register = () => import('../views/auth/Register/Index.vue')
const Login = () => import('@/views/auth/Login/Index.vue')
const AccountSetting = () => import('@/views/auth/Register/Onboarding/Index.vue')

const routes = [
    { path: '/', component: Login },

    { path: '/register', component: Register },
    { path: '/register/onboarding', component: AccountSetting },
    { path: '/register/email', component: EmailAuth },
    { path: '/register/email/verify', component: Verified },
    { path: '/reset-password', component: ResetPssword },
    { path: '/reset-password/success', component: SuccessResetPassword },

    { path: '/dashboard', component: Dashboard },

    { path: '/sending-money/amount', component: Amount },
    { path: '/sending-money/personal-details', component: PersonalDetails },
    { path: '/sending-money/recipient', component: Recipient },
    { path: '/sending-money/review-and-pay', component: ReviewAndPay },
    { path: '/sending-money/success', component: SuccessSendingMoney },

    { path: '/balance', component: Balance },
    { path: '/transactions', component: Transaction },

    { path: '/cards', component: Cards },
    { path: '/cards/add-card/onboarding', component: Onboarding },
    { path: '/cards/add-card/address', component: Address },
    { path: '/cards/add-card/verification', component: VerificationCard },
    { path: '/cards/add-card/payment', component: Payment },
    { path: '/cards/add-card/success', component: SuccessAddCard },

    { path: '/recepients', component: Recepients },
    { path: '/integrations', component: Integrations },
    { path: '/settings', component: Settings },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
