import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
import "../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "iview/dist/styles/iview.css";

import Vue from "vue";
import VueRouter from "vue-router";
import iview from "iview";
import App from './App.vue';
import routes from './routes';

// only needed if you use ag-grid enterprise features
import "ag-grid-enterprise";
// import {LicenseManager} from "ag-grid-enterprise";
// LicenseManager.setLicenseKey("your license key");

Vue.use(VueRouter);
Vue.use(iview);

const router = new VueRouter({
    routes
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
