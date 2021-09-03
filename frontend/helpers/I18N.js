import VueI18n from "vue-i18n";
import Vue from "vue"
import fa from "../languages/fa.js"
import I18N from "vue-i18n";
Vue.use(I18N);
const languages = {
    fa: fa
};


export default new VueI18n({
    locale:"fa", // set locale
    fallbackLocale:"fa",
    messages:languages, // set locale messages
})
