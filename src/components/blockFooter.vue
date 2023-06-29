<template>
  <div class="wrap-footer">
    <div class="container">
      <div class="menu-footer">
        <div class="dt dt1">
          <div class="div-img">
            <a href="/">
              <img draggable="false" src="../../src/assets/images/footer-text-logo.svg"  alt="">
            </a>
          </div>
          <div class="div-text">
            <adress>
              170034, г. Тверь, <br>
              пр-т Чайковского, д.28/2
            </adress>
          </div>
        </div>
        <div class="dt dt2">
          <div class="menu-list">
            <div class="menu-elem">
              <div class="div-header">
                КОНТАКТЫ
              </div>
              <a class="link-tel" href="tel:74822642200">
                <div class="div-src">
                  <img draggable="false" src="../../src/assets/images/ico-footer.svg" alt="">
                  <div class="src-text">+7 (4822) 64-22-00</div>
                </div>
              </a>
              <a href="mailto:klimat-tver@yandex.ru">
                <div class="div-src">
                    <img draggable="false" src="../../src/assets/images/ico-footer-3.svg" alt="">
                    <div class="src-text">klimat-tver@yandex.ru</div>
                </div>
              </a>
            </div>
            <div class="menu-elem">
              <div class="div-header">
                МЕНЮ
              </div>
              <div class="div-els-2">
                <a @click="$emit('openModal')">
                  <div class="div-text">
                    Вызвать инженера
                  </div>
                </a>
                <a class="link-dealers-work-footer">
                  <div class="div-text">
                    Мы - дилеры
                  </div>
                </a>
              </div>
              <a class="link-proc-work-footer">
                <div class="div-text">
                  Процесс работы
                </div>
              </a>
              <a class="link-obj-work-footer">
                <div class="div-text">
                  Объекты
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-text">
        <div class="dt dt1">
          <a class="link-var1" href="/policy/">Политика обработки персональных данных</a>
        </div>
        <div class="dt dt2">

        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>