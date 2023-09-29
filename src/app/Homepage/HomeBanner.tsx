import {
  AiOutlineCamera,
  AiOutlineLaptop,
  AiOutlineMobile,
} from "react-icons/ai";
import { BiLaptop } from "react-icons/bi";
import {
  BsBagCheck,
  BsSmartwatch,
  BsSortNumericDown,
  BsStopwatch,
} from "react-icons/bs";
import { FcHeadset, FcSportsMode } from "react-icons/fc";
import Oppo from "@/assets/1.png";
import Dell from "@/assets/2.png";
import Lenovo from "@/assets/3.png";
import Asus from "@/assets/4.png";
import Samsung from "@/assets/5.png";
import Sony from "@/assets/6.png";

type linkType = { icon: any; title: string; link?: string[] };

export const leftMenu: linkType[] = [
  {
    icon: <AiOutlineMobile />,
    title: "Cell Phones",
    link: [],
  },
  {
    icon: <AiOutlineLaptop />,
    title: "Camputer & Accessories",
    link: [],
  },
  {
    icon: <BiLaptop />,
    title: "Telvision & Video",
    link: [],
  },
  {
    icon: <BsSmartwatch />,
    title: "Smartwatches",
    link: [],
  },
  {
    icon: <FcHeadset />,
    title: "Headphones",
  },
  {
    icon: <AiOutlineCamera />,
    title: "Camera & Photo",
  },
  {
    icon: <AiOutlineLaptop />,
    title: "Video & Games",
  },
  {
    icon: <FcSportsMode />,
    title: "Sports & Outdoors",
  },
  {
    icon: <BsSortNumericDown />,
    title: "Best Sellars",
  },
  {
    icon: <BsBagCheck />,
    title: "Top 100 Offers",
  },
  {
    icon: <BsStopwatch />,
    title: "New Arrivals",
  },
];

export const brandImg: any[] = [Oppo, Dell, Lenovo, Asus, Samsung, Sony];
