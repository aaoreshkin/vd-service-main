<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { findArticle, services, type Block } from '@/services'
import { useProvider } from '@/stores'

const route = useRoute()
const provider = useProvider()

const article = computed(() => findArticle(String(route.params.slug)))

// глава собирает свои подпункты: они, списки и фото занимают правую колонку рядом с текстом
const chapters = computed(() => {
  const rows = (article.value?.blocks ?? []).reduce<{ block: Block; subs: Block[]; photo?: string }[]>((acc, block) => {
    if (block.sub && acc.length) acc[acc.length - 1].subs.push(block)
    else acc.push({ block, subs: [] })

    return acc
  }, [])

  const photos = article.value?.photos?.slice(1) ?? []
  const free = rows.flatMap((row, index) => (row.block.items || row.subs.length ? [] : [index]))
  const slots = free.length ? free : rows.map((_, index) => index)

  photos.forEach((photo, index) => {
    const slot = Math.round(((index + 0.5) * slots.length) / photos.length)

    rows[slots[Math.min(slot, slots.length - 1)]].photo = photo
  })

  return rows
})

const related = computed(() => {
  const current = Math.max(
    services.findIndex((el) => el.slug === article.value?.slug),
    0,
  )

  return [1, 2, 3].map((offset) => services[(current + offset) % services.length])
})
</script>

<template>
  <div v-if="article" class="page">
    <header scheme-container class="hero">
      <div>
        <router-link :to="{ path: '/', hash: '#services' }" class="back">Назад к услугам</router-link>

        <h1>{{ article.headline ?? article.title }}</h1>

        <p v-if="article.lead" class="lead">{{ article.lead }}</p>

        <button type="button" @click="provider.open(`Заявка: ${article.title}`)">
          <icon__arrow />

          Записаться

          <icon__forward />
        </button>
      </div>

      <img v-if="article.photos" :src="article.photos[0]" :alt="article.title" class="hero__photo" decoding="async" />
    </header>

    <section scheme-container class="layout">
      <article>
        <section v-for="(row, index) in chapters" :key="index" class="chapter">
          <div class="chapter__text">
            <h3>{{ row.block.heading }}</h3>

            <p v-for="(paragraph, i) in row.block.text" :key="i">{{ paragraph }}</p>

            <p v-if="row.block.after">{{ row.block.after }}</p>
          </div>

          <div v-if="row.block.items || row.subs.length || row.photo" class="chapter__extra">
            <component :is="row.block.ordered ? 'ol' : 'ul'" v-if="row.block.items">
              <li v-for="(item, i) in row.block.items" :key="i">{{ item }}</li>
            </component>

            <div v-for="sub in row.subs" :key="sub.heading" class="sub">
              <h4>{{ sub.heading }}</h4>

              <p v-for="(paragraph, i) in sub.text" :key="i">{{ paragraph }}</p>

              <ul v-if="sub.items">
                <li v-for="(item, i) in sub.items" :key="i">{{ item }}</li>
              </ul>
            </div>

            <img
              v-if="row.photo"
              :src="row.photo"
              :alt="article.title"
              class="chapter__photo"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
      </article>
    </section>

    <section scheme-container class="cta">
      <div class="cta__card">
        <div>
          <h3>Оставить заявку</h3>

          <p>
            {{ article.cta ?? 'Оставьте номер — мастер свяжется с вами, уточнит детали и подберёт удобное время.' }}
          </p>
        </div>

        <div class="cta__actions">
          <button type="button" @click="provider.open(`Заявка: ${article.title}`)">
            <icon__arrow />

            Записаться

            <icon__forward />
          </button>

          <a href="tel:+74953239972">+7 (495) 323-99-72</a>
        </div>
      </div>
    </section>

    <section scheme-container class="related">
      <h3>Другие услуги</h3>

      <ul>
        <li v-for="service in related" :key="service.slug">
          <router-link :to="`/services/${service.slug}`">
            <span>0{{ service.id }}</span>

            <h4>{{ service.title }}</h4>

            <p>{{ service.description }}</p>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.page {
  // 680px при Manrope 17px — около 76 знаков в строке, дальше читаемость падает
  --column: 680px;
  --gap: clamp(20px, 4vw, 40px);

  background-image:
    radial-gradient(900px 700px at 22% 340px, #3a68dd33 0%, rgba(58, 104, 221, 0) 100%),
    radial-gradient(800px 600px at 78% 120px, #325fec3d 0%, rgba(50, 95, 236, 0) 100%);
  background-repeat: no-repeat;
  padding-bottom: 120px;

  p,
  li {
    font-size: 17px;
  }

  p {
    color: color-mix(in srgb, var(--color__text) 80%, transparent);
    line-height: 1.7;
  }

  h1,
  h3 {
    text-wrap: balance;
  }

  // глобальный line-height у h3 задан через vw и на узких экранах строки почти смыкаются
  h3 {
    line-height: 1.25;
  }

  img {
    border-radius: var(--radius__primary);
    object-fit: cover;
    width: 100%;
  }
}

.hero {
  align-items: end;
  display: grid;
  gap: var(--gap);
  grid-template: auto / minmax(0, 1fr) auto;
  padding-top: 200px;

  h1 {
    margin: 28px 0 20px;
  }

  .back {
    border-bottom: 1px solid color-mix(in srgb, var(--color__text) 20%, transparent);
    color: color-mix(in srgb, var(--color__text) 60%, transparent);
    font:
      normal 400 14px / 1.4 'Oswald Variable',
      sans-serif;
    letter-spacing: 0.12em;
    padding-bottom: 6px;
    text-transform: uppercase;
    width: fit-content;

    &:hover {
      border-color: var(--color__scheme);
      color: var(--color__scheme);
    }
  }

  .lead {
    color: color-mix(in srgb, var(--color__text) 92%, transparent);
    font-size: clamp(17px, 4vw, 20px);
    line-height: 1.7;
    max-width: var(--column);
  }

  button {
    margin-top: 40px;
  }

  &__photo {
    aspect-ratio: 4 / 5;
    height: min(600px, 42vw);
    width: auto;
  }
}

.hero:not(:has(.hero__photo)) {
  grid-template: auto / 1fr;
}

.layout {
  padding-top: 100px;

  article {
    counter-reset: chapter;
  }
}

// глава — строка сетки: слева текст читаемой ширины, справа её списки, подпункты и фото
.chapter {
  align-items: start;
  display: grid;
  gap: 40px 60px;
  grid-template: auto / minmax(0, var(--column)) minmax(0, 1fr);

  & + & {
    border-top: 1px solid color-mix(in srgb, var(--color__text) 12%, transparent);
    margin-top: 64px;
    padding-top: 64px;
  }

  &__text {
    display: grid;
    gap: 16px;

    h3 {
      counter-increment: chapter;

      &::before {
        color: var(--color__scheme);
        content: counter(chapter, decimal-leading-zero);
        display: block;
        font:
          normal 400 14px / 1.4 'Oswald Variable',
          sans-serif;
        letter-spacing: 0.12em;
        margin-bottom: 10px;
      }
    }
  }

  &__extra {
    display: grid;
    gap: 20px;

    > ul {
      display: grid;
      gap: 12px;
      grid-template: auto / repeat(auto-fit, minmax(280px, 1fr));

      li {
        border: 1px solid color-mix(in srgb, var(--color__text) 15%, transparent);
        border-radius: var(--radius__primary);
        color: color-mix(in srgb, var(--color__text) 85%, transparent);
        line-height: 1.6;
        padding: 20px;

        &:hover {
          border-color: color-mix(in srgb, var(--color__scheme) 70%, transparent);
        }
      }
    }

    ol {
      counter-reset: step;
      display: grid;
      gap: 20px;

      li {
        color: color-mix(in srgb, var(--color__text) 80%, transparent);
        counter-increment: step;
        line-height: 1.7;
        padding-left: 52px;
        position: relative;

        &::before {
          color: var(--color__scheme);
          content: '0' counter(step);
          font:
            normal 400 22px / 1.24 'Oswald Variable',
            sans-serif;
          left: 0;
          position: absolute;
        }
      }
    }
  }

  &__photo {
    aspect-ratio: 16 / 9;
  }
}

.sub {
  background-color: color-mix(in srgb, var(--color__text) 4%, transparent);
  border-radius: var(--radius__primary);
  display: grid;
  gap: 16px;
  padding: 30px;

  h4 {
    color: var(--color__scheme);
    letter-spacing: 0.04em;
  }

  ul {
    display: grid;
    gap: 12px;

    li {
      color: color-mix(in srgb, var(--color__text) 80%, transparent);
      line-height: 1.6;
      padding-left: 24px;
      position: relative;

      &::before {
        color: var(--color__scheme);
        content: '—';
        left: 0;
        position: absolute;
      }
    }
  }
}

.cta {
  padding-top: 120px;

  &__card {
    align-items: center;
    background-color: color-mix(in srgb, var(--color__text) 6%, transparent);
    border-radius: var(--radius__primary);
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);
    justify-content: space-between;
    padding: 40px;
  }

  &__actions {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }

  h3 {
    margin-bottom: 12px;
  }

  p {
    max-width: 720px;
  }

  a {
    font:
      normal 400 20px / 1.4 'Oswald Variable',
      sans-serif;

    &:hover {
      color: var(--color__scheme);
    }
  }
}

.related {
  padding-top: 120px;

  h3 {
    margin-bottom: 24px;
  }

  ul {
    display: grid;
    gap: 20px;
    grid-template: auto / repeat(3, 1fr);
  }

  a {
    border: 1px solid color-mix(in srgb, var(--color__text) 15%, transparent);
    border-radius: var(--radius__primary);
    display: grid;
    gap: 12px;
    height: 100%;
    padding: 30px;

    &:hover {
      background-color: color-mix(in srgb, var(--color__scheme) 15%, transparent);
      border-color: color-mix(in srgb, var(--color__scheme) 70%, transparent);
      color: var(--color__text);
    }
  }

  span {
    color: color-mix(in srgb, var(--color__text) 50%, transparent);
    font:
      normal 400 14px / 1.4 'Oswald Variable',
      sans-serif;
    letter-spacing: 0.12em;
    margin-bottom: 20px;
  }

  p {
    color: color-mix(in srgb, var(--color__text) 70%, transparent);
    line-height: 1.6;
  }
}

button {
  background-color: var(--color__scheme);
  border-radius: var(--radius);
  cursor: pointer;
  display: flex;
  font:
    normal 400 20px / 1.6 'Oswald Variable',
    sans-serif;
  gap: 10px;
  padding: 12px 40px 12px 12px;
  place-items: center;
  text-transform: uppercase;

  &:hover {
    background-color: color-mix(in srgb, var(--color__scheme) 80%, transparent);
  }
}

@media only screen and (max-width: 1190px) {
  .hero {
    grid-template: auto / 1fr;
    padding-top: 160px;

    &__photo {
      aspect-ratio: 16 / 9;
      height: auto;
      max-width: 760px;
      width: 100%;
    }
  }

  .chapter {
    gap: 24px;
    grid-template: auto / 1fr;
  }

  .related ul {
    grid-template: auto / repeat(2, 1fr);
  }
}

@media only screen and (max-width: 580px) {
  .page {
    padding-bottom: 80px;
  }

  .hero {
    padding-top: 120px;

    h1 {
      margin: 24px 0 16px;
    }

    button {
      margin-top: 32px;
    }
  }

  .layout {
    padding-top: 60px;
  }

  .chapter + .chapter {
    margin-top: 40px;
    padding-top: 40px;
  }

  .sub {
    padding: 20px;
  }

  .cta {
    padding-top: 80px;

    &__card {
      padding: 24px;
    }
  }

  .related {
    padding-top: 80px;

    ul {
      grid-template: auto / 1fr;
    }
  }
}
</style>
