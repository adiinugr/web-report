import Link from "next/link"
import React from "react"

// ** Thrid Party Import
import { BsWhatsapp } from "react-icons/bs"

type Props = {}

function FloatButton({}: Props) {
  return (
    <Link
      target="_blank"
      href="https://wa.me/6282226876045"
      className="fixed z-50 h-[60px] w-[60px] rounded-full bottom-5 right-5 bg-[#25d366] shadow-[rgba(0,0,0,0.2)_0px_4px_19px] border border-gray-50/10 flex items-center justify-center text-neutral-content"
    >
      <BsWhatsapp size={30} />
    </Link>
  )
}

export default FloatButton
