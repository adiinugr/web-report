import React from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from "chart.js"
import { Pie } from "react-chartjs-2"
import { lembagaData } from "@/data/sekolah"

ChartJS.register(ArcElement, Tooltip, Legend, Colors)

export const data = {
  labels: lembagaData.map((data) => data.name),
  datasets: [
    {
      data: lembagaData.map((data) => data.value),
      borderWidth: 1
    }
  ]
}

type Props = {}

function PieChart({}: Props) {
  return (
    <div className="card-body">
      <h2 className="card-title">Data Lembaga Terdaftar</h2>
      <div className="w-full h-full relative">
        <Pie
          className="absolute h-full"
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "bottom",
                align: "start"
              }
            }
          }}
        />
      </div>
    </div>
  )
}

export default PieChart
