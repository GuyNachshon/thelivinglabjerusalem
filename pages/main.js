import {createApp} from 'vue'
import App from './App.vue'
import VueKinesis from "vue-kinesis";
import { createPinia } from 'pinia'

const pinia = createPinia()

const app = createApp(App);
app.use(VueKinesis);
app.use(pinia);
app.mount('#app')
