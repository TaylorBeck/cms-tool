import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'

import "./assets/stylesheets/application.css";
import "primeflex/primeflex.css";

import StyleClass from 'primevue/styleclass';
import BadgeDirective from 'primevue/badgedirective'
import Ripple from 'primevue/ripple';

const app = createApp(App);

app.use(PrimeVue, { ripple: true });

app.directive('styleclass', StyleClass);
app.directive('badge', BadgeDirective);
app.directive('ripple', Ripple);

app.mount('#app');
