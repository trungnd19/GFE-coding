import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import GenerateTable from './components/generateTable/GenerateTable.vue'
import ContactForm from './components/ContactForm.vue'
import QRCode from './front-end-mentors/QRCode.vue'
import AccordionPage from './components/accordion/AccordionPage.vue'
import TemperatureConverter from './components/temperatureConverter/TemperatureConverter.vue'
import ProgressBarPage from './components/progressBar/ProgressBarPage.vue'
import Stopwatch from './components/stopwatch/Stopwatch.vue'
import ProgressBars from './components/progressBars/ProgressBars.vue'
import DigitalClock from './components/digitalClock/DigitalClock.vue'
import FlightBooker from './components/flightBooker/FlightBooker.vue'

const routes = [
  { path: '/generate-table', component: GenerateTable, name: 'generate-table' },
  { path: '/contact-form', component: ContactForm, name: 'contact-form' },
  { path: '/qr', component: QRCode, name: 'qr' },
  { path: '/accordion', component: AccordionPage, name: 'accordion' },
  { path: '/progress-bar', component: ProgressBarPage, name: 'progress-bar' },
  {
    path: '/temperature-converter',
    component: TemperatureConverter,
    name: 'temperature-converter'
  },
  { path: '/stopwatch', component: Stopwatch, name: 'stopwatch' },
  { path: '/progress-bar-moving', component: ProgressBars, name: 'progress-bar-moving' },
  { path: '/digital-clock', component: DigitalClock, name:'digital-clock' },
  { path: '/flight-booker', component: FlightBooker, name:'flight-booker' },
  { path: '/', component: GenerateTable }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
