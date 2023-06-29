<template>
  <div class="wrap-cont6">
    <div class="container container-ready-objects">
      <div class="block-ready-object">
        <div class="dt dt1">
          <div class="h2-5-text">
            У ВАС ЕСТЬ ГОТОВЫЙ ПРОЕКТ?
          </div>
          <div class="div-text">
            Наш инженер бесплатно рассчитает стоимость реализации проекта и отправит Вам развернутую смету.
          </div>
          <div class="div-img">
            <img draggable="false"  src="../assets/images/backgr-ready-proj.png" alt="">
          </div>
        </div>
        <div class="dt dt2">
          <template v-if="this.formSubmitedModal">
            <div class="h4-text">
              <!-- ПРИКРЕПИТЕ ПРОЕКТ ОБЪЕКТА
               И ОСТАВЬТЕ НОМЕР ТЕЛЕФОНА -->
              ОСТАВЬТЕ НОМЕР ТЕЛЕФОНА
            </div>
            <!-- <form id="dataFormSendPhoneFile">
              <a href="Loremipsum" class="btn btn-small">Загрузить файлы</a>
              <input type="file" name="document" id="upload-file" @change='uploadFile()'>
              <label for="upload-file" class="btn btn-small" id="upload-file-title">Загрузить файлы</label>
              <div class="div-txt">
                Или отправьте нам на почту: <a href="mailto:klimat-tver@yandex.ru" class="unset-tt">klimat-tver@yandex.ru</a>
              </div>
              <div class="form-req">
                <div class="h5-text">
                  ВВЕДИТЕ ВАШ ТЕЛЕФОН
                </div>
                <div class="div-input">
                  <input type="tel" name="phone_number" required placeholder="+7 (000) 000-00-00" maxlength="18" data-tel-input="true">
                </div>
              </div>
              <div class="div-checkbox">
                <input id="agreePersonal" type="checkbox" required>
                <label for="agreePersonal">Я согласен на обработку персональных данных</label>
              </div>
              <div class="div-center">
                <button type="submit" class="btn btn-small btn-long">Отправить</button>
              </div>
            </form> -->
            <form ref="form" @submit.prevent="sendEmail">
              <div class="div-input">
                <div class="form-req">
                  <div class="h5-text">
                    ВВЕДИТЕ ВАШ ТЕЛЕФОН
                  </div>
                  <div class="div-input">
                    <input type="tel" name="phoneNumber" required placeholder="+7 (000) 000-00-00" maxlength="18" data-tel-input="true">
                  </div>
                </div>
              </div>
              <div class="div-checkbox">
                <input id="agreePersonal" type="checkbox" required>
                <label for="agreePersonal">Я согласен на обработку персональных данных</label>
              </div>
              <button type="submit" class="btn btn-small btn-long btn-send-phone-file" value="Send">Отправить</button>
            </form>
          </template>
          <template v-else>
            <div class="accept-mess accept-mess2">
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
                <img width="43" height="43" draggable="false" src="../../src/assets/images/ico-phone-2.svg" alt="">
                <a class="unset-tt link-tel" href="tel:+74822642200" title="Позвонить"> +7 (4822) 64-22-00 </a>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import emailjs from "@emailjs/browser";

export default {
  data(){
    return{
      formSubmitedModal: true,
      serviceId: process.env.VUE_APP_SERVICE_ID,
      templateId: process.env.VUE_APP_TEMPLATE_ONLY_PHONE,
      publicKey: process.env.VUE_APP_PUBLIC_KEY_MAIL
    }
  },
  mounted() {
    // this.sendPhone();
  },
  methods: {
    uploadFile(){
      document.getElementById("upload-file-title").innerHTML = document.getElementById("upload-file").files[0].name;
    },
    sendPhone(){
      const tokenBot = process.env.VUE_APP_TELEGRAM_BOT;
      const chanelId = process.env.VUE_APP_TELEGRAM_ID_CHANNEL;
      const URI_API = `https://api.telegram.org/${tokenBot}/sendMessage`;
      const DOC_API = `https://api.telegram.org/${tokenBot}/sendDocument`;
      const formSubmitStatus = (state) => this.formSubmitedModal = state;
      document.querySelector('#dataFormSendPhoneFile').addEventListener("submit", function (el) {
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
        formData.append("document", this.document.files[0]);
        axios.post(DOC_API, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        formSubmitStatus(true);
      })
    },
    repData() {
      this.$emit();
    },
    sendEmail() {
      document.querySelector('.btn-send-phone-file').setAttribute('disabled','disabled');
      emailjs.sendForm( this.serviceId, this.templateId, this.$refs.form, this.publicKey)
          .then((result) => {
            this.formSubmitedModal = false;
            document.querySelector('.btn-send-phone-file').removeAttribute('disabled');
          }, (error) => {
            console.log('FAILED...', error.text);
          });
    }
  }
}
</script>