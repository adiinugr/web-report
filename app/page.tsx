"use client"

import React from "react"

// ** Third Party
import { BiCheckCircle } from "react-icons/bi"

// ** Data
import linkData from "@/data/link"
import informasiData from "@/data/informasi"
import petunjukData from "@/data/petunjuk"
import statsData from "@/data/stats"
import {
  guruData,
  guruGenderData,
  guruPelatihanData,
  pendidikanGuruData,
  santriData,
  statusGuruData
} from "@/data/sekolah"

// ** Custom Components
import PieChart from "@/components/PieChart"
import BarChart from "@/components/BarChart"
import Footer from "@/components/Footer"
import FloatButton from "@/components/FloatButton"
import { useSidebar } from "@/context/SidebarContext"

const guruChartData = {
  labels: guruData.map((data) => data.name),
  datasets: [
    {
      barPercentage: 0.5,
      label: "Data Guru",
      data: guruData.map((data) => data.value),
      backgroundColor: "#89043D",
      borderRadius: 6
    }
  ]
}

const pendidikanGuruChartData = {
  labels: pendidikanGuruData.map((data) => data.name),
  datasets: [
    {
      barPercentage: 0.5,
      label: "Data Guru",
      data: pendidikanGuruData.map((data) => data.value),
      backgroundColor: "#00B295",
      borderRadius: 6
    }
  ]
}

const pelatihanGuruChartData = {
  labels: guruPelatihanData.map((data) => data.name),
  datasets: [
    {
      barPercentage: 0.5,
      label: "Data Guru",
      data: guruPelatihanData.map((data) => data.value),
      backgroundColor: "#A663CC",
      borderRadius: 6
    }
  ]
}

const jenisKelaminChartData = {
  labels: guruGenderData.map((data) => data.name),
  datasets: [
    {
      barPercentage: 0.5,
      label: "Data Guru",
      data: guruGenderData.map((data) => data.value),
      backgroundColor: "#ED6A5A",
      borderRadius: 6
    }
  ]
}

const statusGuruChartData = {
  labels: statusGuruData.map((data) => data.name),
  datasets: [
    {
      label: "Data Guru",
      data: statusGuruData.map((data) => data.value),
      backgroundColor: "#809848",
      borderRadius: 6
    }
  ]
}

const santriChartData = {
  labels: santriData.map((data) => data.kecamatan),
  datasets: [
    {
      label: "Laki-laki",
      data: santriData.map((data) => data.male),
      backgroundColor: "#ED6A5A",
      borderRadius: 6
    },
    {
      label: "Perempuan",
      data: santriData.map((data) => data.female),
      backgroundColor: "#00B295",
      borderRadius: 6
    }
  ]
}

export default function Home() {
  return (
    <>
      {/* Start Hero Section */}
      <section className="relative min-h-screen isolate mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-8 lg:pt-20 flex items-center gap-20 lg:gap-8 justify-between">
        <svg
          viewBox="0 0 1108 632"
          aria-hidden="true"
          className="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-10rem)] xl:left-[calc(50%-24rem)]"
        >
          <path
            fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
            fillOpacity=".2"
            d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
          ></path>
          <defs>
            <linearGradient
              id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
              x1="1220.59"
              x2="-85.053"
              y1="432.766"
              y2="638.714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4F46E5"></stop>
              <stop offset="1" stopColor="#80CAFF"></stop>
            </linearGradient>
          </defs>
        </svg>

        <div className="w-full flex flex-col sm:flex-row items-center justify-center">
          <div className="text-center max-w-4xl">
            <h1 className="mt-10 text-2xl md:text-[2.5rem] leading-[1.3] font-bold text-primary">
              LAPORAN LEMBAGA PENDIDIKAN AL QUR`AN BADAN KOORDINASI LEMBAGA
              PENDIDIKAN AL QUR`AN (BADKO LPQ)
              <p className="mt-2 text-secondary">KABUPATEN REMBANG</p>
            </h1>
            <p className="mt-6 text-lg leading-8">
              SILAHKAN BACA DAN PAHAMI INFORMASI DAN PETUNJUK
            </p>
          </div>
        </div>
      </section>
      {/* End Hero Section */}

      <div className="mx-auto max-w-7xl lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="col-span-1 px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl w-2/3 mb-4">
              Informasi
            </h2>
            <ul>
              {informasiData.map((data) => (
                <li key={data.id} className="flex gap-2 w-full">
                  <BiCheckCircle className="w-10" size={20} />
                  <p className="w-full">{data.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl w-2/3 mb-4">
              Petunjuk
            </h2>
            <ul>
              {petunjukData.map((data) => (
                <li key={data.id} className="flex gap-2 w-full">
                  <BiCheckCircle className="w-10" size={20} />
                  <p className="w-full">{data.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {statsData.map((data) => (
            <div key={data.id} className="stat bg-base-content rounded-md">
              <div className="stat-figure text-neutral-content">
                {data.icon}
              </div>
              <div className="stat-title text-neutral-content">
                {data.title}
              </div>
              <div className="stat-value text-neutral-content">
                {data.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section>
        <div className="mx-auto max-w-2xl px-6 mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Data Statistik
          </h2>
          <p className="mt-4 text-lg leading-8 ">
            Data berikut ini dihimpun dari masukan tiap-tiap sekolah yang ada di
            kabupaten Rembang
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center justify-center">
            <div className="w-full h-[400px] card bg-neutral-50">
              <PieChart />
            </div>
            <div className="w-full h-[400px] card bg-neutral-50 md:col-span-2">
              <BarChart
                cardTitle="Data Guru per Kecamatan"
                data={guruChartData}
              />
            </div>
            <div className="w-full h-[400px] card bg-neutral-50">
              <BarChart
                cardTitle="Guru yang Sudah Melakukan Pelatihan"
                data={pelatihanGuruChartData}
              />
            </div>
            <div className="w-full h-[350px] card bg-neutral-50 md:col-span-2">
              <BarChart
                cardTitle="Data Pendidikan Terakhir Guru"
                data={pendidikanGuruChartData}
              />
            </div>
            <div className="w-full h-[350px] card bg-neutral-50">
              <BarChart
                cardTitle="Guru Berdasarkan Jenis Kelamin"
                data={jenisKelaminChartData}
              />
            </div>
            <div className="w-full h-[350px] card bg-neutral-50">
              <BarChart
                cardTitle="Jumlah Guru Berdasarkan Status"
                data={statusGuruChartData}
              />
            </div>
            <div className="w-full h-[400px] card bg-neutral-50 md:col-span-4">
              <BarChart
                cardTitle="Jumlah Santri per Kecamatan"
                data={santriChartData}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-2xl px-6 mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Link Penting
          </h2>
          <p className="mt-4 text-lg leading-8">
            Silakan gunakan daftar link berikut untuk melakukan aksi sesuai
            dengan kebutuhan Anda
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {linkData.map((data) => (
              <div
                key={data.id}
                className="bg-white p-6 grid place-items-center rounded-2xl shadow-lg"
              >
                <button className="hover:text-gray-700 text-[3.5rem] mb-3">
                  {data.icon}
                </button>
                <button className="hover:text-gray-700 text-lg leading-tight">
                  {data.text}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
