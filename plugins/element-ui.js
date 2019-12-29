import Vue from 'vue'
import Element from 'element-ui'
import VueLuxon from 'vue-luxon'
import locale from 'element-ui/lib/locale/lang/en'

export default () => {
  Vue.use(Element, { locale })
  Vue.use(VueLuxon)
}
