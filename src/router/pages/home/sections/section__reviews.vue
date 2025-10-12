<script setup lang="ts"></script>

<template>
  <section>
    <div scheme-container>
      <article>
        <h2>Мы всегда рады вашей <br />обратной связи!</h2>
        <p>Прочитайте, что о нас пишут наши клиенты</p>
      </article>

      <div class="reviews">
        <iframe style="width: 100%; height: 100%; border: 1px solid #e6e6e6; box-sizing: border-box"
          src="https://yandex.ru/maps-reviews-widget/16554355977?comments"></iframe><a
          href="https://yandex.ru/maps/org/vd_servis/16554355977/" target="_blank" style="
            box-sizing: border-box;
            text-decoration: none;
            color: #b3b3b3;
            font-size: 10px;
            font-family:
              YS Text,
              sans-serif;
            padding: 0 20px;
            position: absolute;
            bottom: 8px;
            width: 100%;
            text-align: center;
            left: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: block;
            max-height: 14px;
            white-space: nowrap;
            padding: 0 16px;
            box-sizing: border-box;
          ">ВД-Сервис на карте Москвы — Яндекс Карты</a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.reviews {
  width: 560px;
  height: 800px;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
}

section {
  background: url('/Ellipse 15.png') no-repeat center bottom;
  background-size: cover;
  position: relative;
  padding: clamp(40px, 12vw, 250px) 0;

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    align-items: center;
    justify-content: space-between;

    h2 {
      line-height: 1.4;
    }
  }
}
</style>
