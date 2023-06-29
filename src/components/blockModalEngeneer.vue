<template>
  <div v-show="isModalVisible">
    <Modal
        @close="closeModal"
        class="modal-no-footer modal-no-header modal-engeneer"
    >
      <template v-slot:header>

      </template>
      <template v-slot:body>
        <template v-if="!formSubmited">
          <h2>Вызвать инженера</h2>
          <div class="div-sub-h2">
            Введите контакты и мы начнём решать Ваши задачи.
          </div>
       <!--   <form id="dataFormSendName">
            <input type="text" name="person_name" required placeholder="Имя">
            <input type="tel" name="phone_number" required placeholder="+7 (000) 000-00-00" maxlength="18" data-tel-input="true">
            <div class="div-checkbox">
              <input id="agreePersonal1" type="checkbox" required>
              <label for="agreePersonal1">Я согласен на обработку персональных данных</label>
            </div>
            <button type="submit" class="btn btn-modal">Вызвать</button>
          </form> -->
          <form ref="form" @submit.prevent="sendEmail">
            <input type="text" name="personName" required placeholder="Имя">
            <input type="tel" name="phoneNumber" required placeholder="+7 (000) 000-00-00" maxlength="18" data-tel-input="true">
            <button type="submit" class="btn btn-modal btn-modal-status" value="Send">Отправить</button>
          </form>
          <div class="div-sub-btn">
            Это бесплатно!
          </div>
        </template>
        <template v-else>
          <div class="accept-mess">
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
            <a @click="closeModal" class="return-back">
              Вернуться на сайт
            </a>
          </div>
        </template>
      </template>
      <template v-slot:footer>

      </template>
    </Modal>
  </div>
</template>
<script>
import Modal from "@/elements/modalElement";
import axios from "axios";
import emailjs from "@emailjs/browser";

export default {
  name: 'blockModalEngeneer',
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
      formSubmited: false,
      serviceId: process.env.VUE_APP_SERVICE_ID,
      templateId: process.env.VUE_APP_TEMPLATE_PHONE_NAME,
      publicKey: process.env.VUE_APP_PUBLIC_KEY_MAIL
    };
  },
  mounted() {
    // this.sendPhone()
  },
  methods: {
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
    sendPhone(){
      const tokenBot = process.env.VUE_APP_TELEGRAM_BOT;
      const chanelId = process.env.VUE_APP_TELEGRAM_ID_CHANNEL;
      const URI_API = `https://api.telegram.org/${tokenBot}/sendMessage`;
      const formSubmitStatus = (state) => this.formSubmited = state;
      document.querySelector('#dataFormSendName').addEventListener("submit", function (el) {
        let message = "<b>Уведомление</b> \n";
        el.preventDefault();
        message += "<b>Имя: </b>" + this.person_name.value + "\n";
        message += "<b>Номер Телефона: </b>" + this.phone_number.value;
        axios.post(URI_API, {
          chat_id: chanelId,
          parse_mode: "html",
          text: message,
        });
        formSubmitStatus(true);
      })
    },
    sendEmail() {
      document.querySelector('.btn-modal-status').setAttribute('disabled','disabled');
      emailjs.sendForm( this.serviceId, this.templateId, this.$refs.form, this.publicKey)
        .then((result) => {
          this.formSubmited = true;
          document.querySelector('.btn-modal-status').removeAttribute('disabled');
        }, (error) => {
          console.log('FAILED...', error.text);
        });
    }
  }
}
</script>