import Vue from 'vue'
import { Bar, Line, Doughnut, Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement,
} from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  ArcElement,
  annotationPlugin
)

Vue.component('LineChart', {
  extends: Line,
})

Vue.component('DoughnutChart', {
  extends: Doughnut,
})

Vue.component('BarChart', {
  extends: Bar,
})

Vue.component('PieChart', {
  extends: Pie,
})
