import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@fortawesome/fontawesome-free/css/all.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faBook, faCartShopping, faTrash)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'faSvg',
    },
});
