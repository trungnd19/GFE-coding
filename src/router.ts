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
import TabPage from './components/vue-tab/TabPage.vue'
import TrafficLight from './components/trafficLight/TrafficLight.vue'
import TodoList from './components/todoList/TodoList.vue'
import TweetUI from './components/tweet/TweetUI.vue'
import LikeButton from './components/likeButton/LikeButton.vue'
import MortgageCalculator from './components/mortgageCalculator/MortgageCalculator.vue'
import SignupForm from './components/signupForm/SignupForm.vue'

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
  { path: '/digital-clock', component: DigitalClock, name: 'digital-clock' },
  { path: '/flight-booker', component: FlightBooker, name: 'flight-booker' },
  { path: '/vue-tab', component: TabPage, name: 'vue-tab' },
  { path: '/traffic-light', component: TrafficLight, name: 'traffic-light' },
  { path: '/todo-list', component: TodoList, name: 'todo-list' },
  { path: '/tweet-ui', component: TweetUI, name: 'tweet-ui' },
  { path: '/like-button', component: LikeButton, name: 'like-button' },
  { path: '/mortgage-calculator', component: MortgageCalculator, name: 'mortgage-calculator' },
  { path: '/signup-form', component: SignupForm, name: 'signup-form' },
  { path: '/', component: GenerateTable }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
