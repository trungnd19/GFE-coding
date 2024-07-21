import { createMemoryHistory, createRouter } from 'vue-router'
import GenerateTable from './components/generateTable/GenerateTable.vue'
import ContactForm from './components/ContactForm.vue'

const routes = [
  { path: '/generate-table', component: GenerateTable, name: 'generate-table' },
  { path: '/contact-form', component: ContactForm, name: 'contact-form' },
  { path: '/', component: GenerateTable }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
