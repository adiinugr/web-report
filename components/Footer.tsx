import Link from "next/link"
import { MdMailOutline, MdOutlineWhatsapp } from "react-icons/md"

function Footer() {
  return (
    <footer className="bg-base-content text-neutral-content">
      <div className="w-full max-w-screen-xl mx-auto p-10">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <Link href="/" className="flex items-center mb-3 md:mb-4">
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              BADKO LPQ
            </span>
          </Link>

          <ul className="flex flex-wrap items-center justify-center md:2 md:mb-6 font-medium sm:mb-0">
            <li>
              <Link
                href="mailto:badkolpqkabrembang@gmail.com"
                className="mr-4 hover:underline md:mr-6 flex items-center justify-center gap-2"
              >
                <MdMailOutline size={20} />
                badkolpqkabrembang@gmail.com
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://wa.me/6282226876045"
                className="mr-4 hover:underline md:mr-6 flex items-center justify-center gap-2"
              >
                <MdOutlineWhatsapp size={20} />
                0822 2687 6045 (Admin)
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto" />
        <span className="block text-center">
          © {new Date().getFullYear()}{" "}
          <Link
            href="https://fndigitalcode.com/"
            className="hover:underline font-semibold"
          >
            fndigitalcode.com
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
