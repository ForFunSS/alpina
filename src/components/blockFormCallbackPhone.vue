<template>
  <div class="wrap-cont4">
    <div class="container container-phone-form">
      <div class="div-cont-form">
        <div class="dt_1">
          <h2 class="head-cont">
            ПРОЕКТИРУЕМ И МОНТИРУЕМ СТРОГО ПО:
          </h2>
          <div class="dt1">
            <div class="projecting-elems">
              <div class="el">
                <abbr title="Строительные нормы и правила">
                  СНИП
                </abbr>
              </div>
              <div class="el">
                <abbr title="Свод правил">
                  СП
                </abbr>
              </div>
              <div class="el">
                <abbr title="Правила устройства электроустановок">
                  ПУЭ
                </abbr>
              </div>
              <div class="el">
                <abbr title="государственный стандарт России">
                  ГОСТ Р
                </abbr>
              </div>
            </div>
            <div class="float-items">
              <div class="el">
                <div class="div-text">
                  ОКОНЧАТЕЛЬНУЮ СТОИМОСТЬ, ОТВЕСТВЕННОСТЬ <br>
                  И ГАРАНТИЮ ПРОПИСЫВАЕМ В ДОГОВОРЕ
                </div>
              </div>
              <div class="el">
                <div class="div-text">
                  РАССЧИТАЕМ ТОЧНУЮ СМЕТУ ПОД ОБЪЕКТ БЕЗ <br>
                  ДОПОЛНИТЕЛЬНЫХ ТРАТ
                </div>
              </div>
            </div>
            <div class="backgr-image invert-img-white">
              <img draggable="false"  src="../../src/assets/images/backg-doc-shield.svg" alt="">
            </div>
          </div>
        </div>
        <div class="dt_2">
          <div class="block-feedback-phone">
            <template v-if="!isFormPhoneSubmited">
              <img draggable="false"  src="../../src/assets/images/ico-phone-call.svg" alt="phone-call">
              <div class="div-title">
                НАЧНЕМ ОБСУЖДЕНИЕ ПРОЕКТА?
              </div>
              <div class="div-desc">
                Отправьте свой номер телефона <br>
                и мы вам перезвоним
              </div>
<!--              <form id="dataFormSendPhone">-->
<!--                <div class="div-input">-->
<!--                  <input type="tel" name="phone_number" required placeholder="+7 (000) 000-00-00" maxlength="18" data-tel-input="true">-->
<!--                </div>-->
<!--                <button type="submit" class="btn btn-2">Отправить</button>-->
<!--              </form>-->
              <form ref="form" @submit.prevent="sendEmail">
                <div class="div-input">
                  <input type="tel" name="phoneNumber" required placeholder="+7 (000) 000-00-00" maxlength="18" data-tel-input="true">
                </div>
                <button type="submit" class="btn btn-2 btn-send-phone" value="Send">Отправить</button>
              </form>
            </template>
            <template v-else>
              <div class="accept-mess accept-mess2 backg_white">
                <h2>Спасибо<br>
                  за Вашу заявку!
                </h2>
                <div class="sub-h2">
                  Мы свяжемся с Ваши в ближайшее время!
                </div>
                <div class="div-text">
                  А если у Вас “горит” и ждать нельзя,<br> скорее звоните нам:
                </div>
                <div class="text-src">
                  <img width="43" height="43" draggable="false" src="../../src/assets/images/ico-phone-call.svg" alt="">
                  <a class="unset-tt link-tel" href="tel:+74822642200" title="Позвонить"> +7 (4822) 64-22-00 </a>
                </div>
              </div>
            </template>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { phoneNumb } from "@/assets/globalFunc"
import emailjs from '@emailjs/browser';

export default {
  data(){
    return{
      isFormPhoneSubmited: false,
      serviceId: process.env.VUE_APP_SERVICE_ID,
      templateId: process.env.VUE_APP_TEMPLATE_ONLY_PHONE,
      publicKey: process.env.VUE_APP_PUBLIC_KEY_MAIL
    }
  },
  mounted() {
    phoneNumb()
  },
  methods: {
    sendPhone(){
      const tokenBot = process.env.VUE_APP_TELEGRAM_BOT;
      const chanelId = process.env.VUE_APP_TELEGRAM_ID_CHANNEL;
      const URI_API = `https://api.telegram.org/${tokenBot}/sendMessage`;
      const DOC_API = `https://api.telegram.org/${tokenBot}/sendDocument`;
      const formSubmitStatus = (state) => this.isFormPhoneSubmited = state;
      document.querySelector('#dataFormSendPhone').addEventListener("submit", function (el) {
        let message = "<b>Уведомление</b> \n";
        el.preventDefault();

        message += "<b>Номер Телефона: </b>" + this.phone_number.value;
        axios.post(URI_API, {
          chat_id: chanelId,
          parse_mode: "html",
          text: message,
        });
        const formData = new FormData();
        formData.append("chat_id", chanelId);

        axios.post(DOC_API, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        formSubmitStatus(true);
      })
    },
    sendEmail() {
      document.querySelector('.btn-send-phone').setAttribute('disabled','disabled');
      emailjs.sendForm( this.serviceId, this.templateId, this.$refs.form, this.publicKey)
          .then((result) => {
            this.isFormPhoneSubmited = true;
            document.querySelector('.btn-send-phone').setAttribute('disabled','disabled');
          }, (error) => {
            console.log('FAILED...', error.text);
          });
    }
  },
}

</script>