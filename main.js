import './style.css';
import { defineCustomElement } from 'vue';
import CurrentTime from './components/CurrentTime.ce.vue';
import Profile from './components/CustomProfile.vue';

const CurrentTimeComponent = defineCustomElement(CurrentTime);

const ProfileComponent = defineCustomElement(Profile);

customElements.define('current-time', CurrentTimeComponent);
customElements.define('custom-profile', ProfileComponent);

document
  .querySelector('current-time')
  .addEventListener('datechange', recordTime);

function recordTime(event) {
  console.log(event.detail[0].value);
}
