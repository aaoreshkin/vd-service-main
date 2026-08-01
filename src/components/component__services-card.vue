<script setup lang='ts'>
import type { Service } from '@/services'

const props = defineProps<{
    service: Service
}>()
</script>

<template>
    <router-link :to="`/services/${props.service.slug}`"
        :style="`background-image: url('${props.service.image}');`">
        <div class="content">
            <span>0{{ props.service.id }}</span>
            <h4>{{ props.service.title }}</h4>
            <p>{{ props.service.description }}</p>
        </div>
    </router-link>
</template>

<style scoped lang='scss'>
a {
    align-items: center;
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 20px;
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--color__text) 20%, transparent);
    display: flex;
    gap: 20px;
    justify-content: space-between;
    position: relative;
    transition: background 0.1s linear;

    &:hover {
        background-color: color-mix(in srgb, var(--color__scheme) 20%, transparent);
    }

    &:first-of-type,
    &:nth-last-of-type(2),
    &:nth-last-of-type(4) {
        background-color: color-mix(in srgb, var(--color__text) 100%, transparent);

        .content {
            color: #111;
        }

        p {
            color: #111;
        }

        span {
            color: color-mix(in srgb, #111 60%, transparent);
        }
    }

    // цвет текста живёт на .content, иначе глобальное правило a:hover перекрашивает карточку
    .content {
        color: var(--color__text);
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex: 1;
        padding: var(--padding);
    }

    span {
        color: color-mix(in srgb, var(--color__text) 60%, transparent);
        margin-bottom: 40px;
    }

    p {
        max-width: 280px;
        color: color-mix(in srgb, var(--color__text) 80%, transparent);
    }
}
</style>