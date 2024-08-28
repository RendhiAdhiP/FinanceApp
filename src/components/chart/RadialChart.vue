<template>
    <div class="radial-chart-container">
        <svg :width="size" :height="halfSize" viewBox="0 0 36 18" class="circular-chart">
            <g v-for="(segment, index) in segments" :key="index" :transform="segment.transform">
                <path :d="segment.path" :stroke="segment.color" stroke-width="1.5" fill="none" />
            </g>
        </svg>
        <div class="spent-amount text-center">
            <p class="spent-label">Spent</p>
            <p class="spent-value">{{ formattedValue }}</p>
        </div>
    </div>
</template>

<script>
import { computed, defineComponent } from 'vue'

export default defineComponent({
    name: 'RadialChart',
    props: {
        size: {
            type: Number,
            default: 150,
        },
        value: {
            type: Number,
            default: 0,
        },
    },
    setup(props) {
        const formattedValue = computed(() => {
            return new Intl.NumberFormat().format(props.value)
        })

        const halfSize = computed(() => props.size / 2)

        const segments = computed(() => {
            const segmentCount = 30 
            const segmentColors = [
                '#000000',
                '#1A1A1A',
                '#333333',
                '#4D4D4D',
                '#666666',
                '#808080',
                '#999999',
                '#B3B3B3',
                '#CCCCCC',
                '#E5E5E5',
            ]

            return Array.from({ length: segmentCount }, (_, i) => {
                const angle = (i / segmentCount) * 180
                const colorIndex = Math.floor(
                    (i / segmentCount) * segmentColors.length
                )
                return {
                    transform: `rotate(${angle}, 18, 18)`,
                    path: 'M18 0.5 A 17.5 17.5 0 0 1 18 35.5',
                    color: segmentColors[colorIndex] || '#CCCCCC',
                }
            })
        })

        return {
            formattedValue,
            segments,
            halfSize,
        }
    },
})
</script>

<style scoped>
.radial-chart-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.circular-chart {
    max-width: 100%;
    color: #1f2937;
}

.spent-label {
    font-size: 1rem;
    color: #3b414e;
    /* Tailwind gray-500 */
}

.spent-value {
    font-size: 1.5rem;
    font-weight: bold;
    color: #1f2937;
    /* Tailwind gray-800 */
}
</style>
