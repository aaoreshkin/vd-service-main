<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 14" width="27">
    <path
      class="arrow arrow-3"
      stroke="#fff"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.111"
      d="M19.722 12.556 25 7.278 19.722 2"
    />
    <path
      class="arrow arrow-2"
      stroke="#fff"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.111"
      d="m10.444 12.556 5.278-5.278L10.445 2"
    />
    <path
      class="arrow arrow-1"
      stroke="#fff"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.111"
      d="m1.167 12.556 5.277-5.278L1.167 2"
    />
  </svg>
</template>

<style lang="scss" scoped>
.arrow {
  animation: shimmer 1.5s ease-in-out infinite;
}

.arrow-1 {
  animation-delay: 0s;
}

.arrow-2 {
  animation-delay: 0.2s;
}

.arrow-3 {
  animation-delay: 0.4s;
}
</style>
