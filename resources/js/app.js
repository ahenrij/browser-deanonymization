require('./bootstrap')
import { createApp } from 'vue'

import App from './components/App.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import router from './router'

export default createApp(App)
    .use(VueAxios, axios)
    .use(router)
    .mount("#app")
