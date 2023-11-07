import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

// import '@/assets/homepage/vendor/aos/aos.css'
import '@/assets/homepage/vendor/bootstrap/css/bootstrap.min.css'
import '@/assets/homepage/vendor/bootstrap-icons/bootstrap-icons.css'
import '@/assets/homepage/vendor/boxicons/css/boxicons.css'
import '@/assets/homepage/vendor/glightbox/css/glightbox.css'
import '@/assets/homepage/vendor/remixicon/remixicon.css'
import '@/assets/homepage/vendor/swiper/swiper-bundle.min.css'
import '@/assets/homepage/css/style.css'
import '@/assets/log/css/style.css'
createApp(App).use(router).mount('#app')