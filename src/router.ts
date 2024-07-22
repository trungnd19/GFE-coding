import { createMemoryHistory, createRouter } from 'vue-router'
import GenerateTable from './components/generateTable/GenerateTable.vue'
import ContactForm from './components/ContactForm.vue'
import QRCode from './front-end-mentors/QRCode.vue'
import AccordionPage from './components/accordion/AccordionPage.vue'
import TemperatureConverter from './components/temperatureConverter/TemperatureConverter.vue'

const routes = [
  { path: '/generate-table', component: GenerateTable, name: 'generate-table' },
  { path: '/contact-form', component: ContactForm, name: 'contact-form' },
  { path: '/qr', component: QRCode, name: 'qr' },
  { path: '/accordion', component: AccordionPage, name: 'accordion' },
  {
    path: '/temperature-converter',
    component: TemperatureConverter,
    name: 'temperature-converter'
  },
  { path: '/', component: GenerateTable }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
