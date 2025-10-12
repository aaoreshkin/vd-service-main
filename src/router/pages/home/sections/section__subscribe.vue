<script setup lang="ts"></script>

<template>
  <section scheme-container>
    <h2>Подпишитесь <small>на наши соц.сети</small></h2>

    <ul>
      <li>
        <a href="https://dzen.ru/vdservice77" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" style="max-width: 26px">
            <path fill="currentColor"
              d="M9.543 9.543C8.286 10.84 8.194 12.457 8.086 16c3.303 0 5.583-.011 6.76-1.154C15.989 13.669 16 11.28 16 8.086c-3.543.114-5.16.2-6.457 1.457ZM0 8.086c0 3.194.011 5.583 1.154 6.76C2.331 15.989 4.611 16 7.914 16c-.114-3.543-.2-5.16-1.457-6.457C5.16 8.286 3.543 8.194 0 8.086ZM7.914 0c-3.297 0-5.583.011-6.76 1.154C.011 2.331 0 4.72 0 7.914c3.543-.114 5.16-.2 6.457-1.457C7.714 5.16 7.806 3.543 7.914 0Zm1.629 6.457C8.286 5.16 8.194 3.543 8.086 0c3.303 0 5.583.011 6.76 1.154C15.989 2.331 16 4.72 16 7.914c-3.543-.114-5.16-.2-6.457-1.457Z" />
          </svg>
        </a>
      </li>

      <li>
        <a href="https://t.me/vdservice77" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 14" style="max-width: 26px">
            <path fill="currentColor"
              d="M1.1 5.708c4.295-1.871 7.159-3.105 8.592-3.7C13.783.305 14.633.01 15.188 0c.121-.002.394.028.57.171.15.121.19.285.21.4.02.114.044.375.025.58-.222 2.33-1.181 7.982-1.67 10.592-.206 1.104-.613 1.474-1.006 1.51-.856.079-1.505-.565-2.334-1.108-1.297-.85-2.03-1.38-3.288-2.209-1.455-.959-.512-1.485.317-2.346.217-.226 3.987-3.655 4.06-3.966.01-.038.018-.183-.069-.26-.086-.077-.213-.05-.305-.03-.13.03-2.201 1.4-6.214 4.108-.588.404-1.12.6-1.598.59-.526-.011-1.538-.297-2.29-.542-.923-.3-1.656-.458-1.592-.968.033-.265.398-.536 1.096-.814Z" />
          </svg>
        </a>
      </li>

      <li>
        <a href="https://vk.com/vdservice77" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 8">
            <path fill="currentColor"
              d="M6.512 7.525C2.864 7.525.784 5.03.699.87h1.834c.059 3.051 1.403 4.342 2.47 4.608V.87h1.722V3.5C7.776 3.387 8.885 2.187 9.26.864h1.717A5.081 5.081 0 0 1 8.64 4.187a5.265 5.265 0 0 1 2.736 3.338H9.483C9.077 6.261 8.064 5.28 6.725 5.147v2.378h-.213Z" />
          </svg>
        </a>
      </li>

      <li>
        <a href="https://www.youtube.com/@vdservice77" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path fill="currentColor"
              d="M15.6 2.1c-.2-.7-.7-1.2-1.4-1.4C13 .4 7.9.4 7.9.4s-5 0-6.3.3C.9.9.4 1.4.2 2.1 0 3.4 0 6 0 6s0 2.6.3 3.9c.2.7.7 1.2 1.4 1.4 1.2.3 6.3.3 6.3.3s5 0 6.3-.3c.7-.2 1.2-.7 1.4-1.4C16 8.6 16 6 16 6s0-2.6-.4-3.9ZM6.4 8.4V3.6L10.6 6 6.4 8.4Z" />
          </svg>
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 100px;

  h2 {
    color: var(--color__scheme);

    small {
      display: block;
      font-size: 18px;
      color: var(--color__text);
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 40px;

    li {
      svg {
        aspect-ratio: 1;
        width: 32px;
      }
    }
  }
}
</style>
