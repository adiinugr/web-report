import {
  TiClipboard,
  TiContacts,
  TiDownload,
  TiDownloadOutline,
  TiEdit,
  TiPen,
  TiZoom,
  TiZoomOutline
} from "react-icons/ti"

const linkData = [
  {
    id: 1,
    text: "Daftar Lembaga",
    icon: <TiClipboard />
  },
  {
    id: 2,
    text: "Daftar Guru",
    icon: <TiContacts />
  },
  {
    id: 3,
    text: "Unduh Bukti Tanda Daftar Lembaga",
    icon: <TiDownloadOutline />
  },
  {
    id: 4,
    text: "Unduh Bukti Tanda Daftar Guru",
    icon: <TiDownload />
  },
  {
    id: 5,
    text: "Ajukan Edit Data",
    icon: <TiEdit />
  },
  {
    id: 6,
    text: "Cek Lembaga",
    icon: <TiZoom />
  },
  {
    id: 7,
    text: "Cek Status Edit Data",
    icon: <TiPen />
  },
  {
    id: 8,
    text: "Cek Guru",
    icon: <TiZoomOutline />
  }
]

export default linkData
