import React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors
} from "chart.js"
import { Bar } from "react-chartjs-2"
import { guruData } from "@/data/sekolah"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors
)

type Props = {
  data: any
  cardTitle: string
}

export const options = {
  responsive: true,
  maintainAspectRatio: false
}

function BarChart({ data, cardTitle }: Props) {
  return (
    <div className="card-body">
      <h2 className="card-title">{cardTitle}</h2>
      <div className="w-full h-full relative">
        <Bar options={options} data={data} />
      </div>
    </div>
  )
}

export default BarChart
