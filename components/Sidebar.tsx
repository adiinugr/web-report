"use client"

import { useSidebar } from "@/context/SidebarContext"
import menuData from "@/data/menu"
import Link from "next/link"
import React, { useState } from "react"
import { MdClose } from "react-icons/md"

type Props = {}

function Sidebar({}: Props) {
  const { isOpenSidebar, setIsOpenSidebar } = useSidebar()

  return (
    <aside
      className={`absolute top-0 ${
        isOpenSidebar ? "right-0 opacity-100" : "right-[-400px] opacity-0-0"
      }  min-h-screen sm:max-w-sm w-[320px] bg-base-content text-neutral-content p-6 pt-24 ring-1 ring-white/10 z-20 transition-all duration-500 ease-in-out`}
    >
      <button onClick={() => setIsOpenSidebar(false)}>
        <MdClose size={32} className="absolute top-10 right-8" />
      </button>
      <ul
        className={`grid gap-4 ${
          isOpenSidebar ? "scale-x-100" : "scale-x-0"
        } transition-all duration-500 ease-in-out`}
      >
        {menuData.map((data) => (
          <li key={data.id} className="rounded-lg font-bold">
            <Link className="block px-3 py-2" href={data.link}>
              {data.title}
            </Link>
          </li>
        ))}
      </ul>
      <hr className="mx-3 my-8 border-t border-gray-600" />
      <ul className="grid gap-4">
        <li className="bg-neutral-content text-base-content rounded-lg font-bold">
          <Link className="block px-3 py-2" href="/">
            Daftar
          </Link>
        </li>
        <li className="rounded-lg font-bold">
          <Link className="block px-3 py-2" href="/">
            Masuk
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
