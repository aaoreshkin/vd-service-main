<script setup lang="ts"></script>

<template>
  <header scheme-container>
    <nav>
      <ul>
        <li>Услуги</li>

        <li>О компании</li>

        <li>Задать вопрос</li>
      </ul>

      <icon-logo />

      <ul>
        <li style="visibility: hidden">Контакты</li>

        <li>
          <icon-whatsup />

          <icon-telegram />
        </li>

        <li>
          <strong> +7 (495) 323-99-72 </strong>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 999;

  nav {
    align-items: center;
    display: flex;
    gap: clamp(20px, 4vw, 60px);
    justify-content: space-between;
    margin-top: clamp(20px, 4vw, 60px);
    border-radius: var(--radius);
    padding: 20px 40px;
    background-color: color-mix(in srgb, var(--color__text) 3%, transparent);
    backdrop-filter: blur(40px);

    ul {
      align-items: center;
      display: flex;
      gap: clamp(20px, 3vw, 50px);

      li {
        font-weight: 500;
        text-transform: uppercase;

        strong {
          font-size: 18px;
        }

        &:has(svg:nth-child(2)) {
          align-items: center;
          display: inline-flex;
          gap: clamp(20px, 3vw, 40px);
        }
      }
    }
  }
}
</style>
