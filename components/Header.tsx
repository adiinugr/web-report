"use client"

import React, { useState } from "react"

// ** Next Import
import Link from "next/link"

// ** Third Party Import
import { MdClose, MdMenu } from "react-icons/md"

// ** Data
import menuData from "@/data/menu"
import { useSidebar } from "@/context/SidebarContext"
import Sidebar from "./Sidebar"

type Props = {}

function Header({}: Props) {
  const { setIsOpenSidebar } = useSidebar()

  return (
    <header className="fixed bg-base-100 top-0 left-0 w-full z-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 font-medium">
        <div className="text-3xl h-14 grid place-content-center font-bold">
          BADKO LPQ
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-8 text-lg">
            {menuData.map((data) => (
              <li key={data.id}>
                <Link href={data.link} scroll={false}>
                  {data.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex gap-4 items-center text-lg">
          <Link
            className="bg-primary text-neutral-content px-5 py-2 rounded-md"
            href="/"
          >
            Daftar
          </Link>
          <Link href="/">Masuk</Link>
        </div>
        <button className="lg:hidden" onClick={() => setIsOpenSidebar(true)}>
          <MdMenu size={32} />
        </button>
      </nav>

      <Sidebar />
    </header>
  )
}

export default Header
