export type footerlinksTypes = {
  id: number;
  name: string;
  subnav: { link: string; name: string; id: number }[];
};

export const footerLinks: footerlinksTypes[] = [
  {
    id: 1,
    name: "Make Money with Us",
    subnav: [
      {
        id: 1,
        link: "/",
        name: "Sell on Machic",
      },
      {
        id: 2,
        link: "/",
        name: "Sell Your Services on Machic",
      },
      {
        id: 3,
        link: "/",
        name: "Sell on Machic Business",
      },
      {
        id: 4,
        link: "/",
        name: "Sell Your Apps on Machic",
      },
      {
        id: 5,
        link: "/",
        name: "Become an Affilate",
      },
      {
        id: 6,
        link: "/",
        name: "Advertise Your Products",
      },
      {
        id: 7,
        link: "/",
        name: "Sell-Publish with Us",
      },
      {
        id: 8,
        link: "/",
        name: "Become an Machic Vendor",
      },
    ],
  },
  {
    id: 2,
    name: "Product Categories",
    subnav: [
      {
        id: 1,
        link: "/",
        name: "Apple",
      },
      {
        id: 2,
        link: "/",
        name: "Camera & Photo",
      },
      {
        id: 3,
        link: "/",
        name: "Cell Phones",
      },
      {
        id: 4,
        link: "/",
        name: "Computers & Accessories",
      },
      {
        id: 5,
        link: "/",
        name: "Headphones",
      },
      {
        id: 6,
        link: "/",
        name: "Smartwatches",
      },
      {
        id: 7,
        link: "/",
        name: "Sports & Outdoors",
      },
      {
        id: 8,
        link: "/",
        name: "Television & Video",
      },
      {
        id: 9,
        link: "/",
        name: "Video Games",
      },
    ],
  },
  {
    id: 3,
    name: "Let Us Help You",
    subnav: [
      {
        id: 1,
        link: "/",
        name: "Your Account",
      },
      {
        id: 2,
        link: "/",
        name: "Your Orders",
      },
      {
        id: 3,
        link: "/",
        name: "Returns & Replacements",
      },
      {
        id: 4,
        link: "/",
        name: "Shipping Rates & Policies",
      },
      {
        id: 5,
        link: "/",
        name: "Refund and Returns Policy",
      },
      {
        id: 6,
        link: "/",
        name: "Privacy Policy",
      },
      {
        id: 7,
        link: "/",
        name: "Terms and Conditions",
      },
      {
        id: 8,
        link: "/",
        name: "Help Center",
      },
    ],
  },
  {
    id: 4,
    name: "Get to Know Us",
    subnav: [
      {
        id: 1,
        link: "/",
        name: "Careers",
      },
      {
        id: 2,
        link: "/",
        name: "About Machic",
      },
      {
        id: 3,
        link: "/",
        name: "Inverstor Relations",
      },
      {
        id: 4,
        link: "/",
        name: "Machic Devices",
      },
      {
        id: 5,
        link: "/",
        name: "Customer reviews",
      },
      {
        id: 6,
        link: "/",
        name: "Privacy Policy",
      },
      {
        id: 7,
        link: "/",
        name: "Contact Us",
      },
    ],
  },
];

export const footerTags: string[] = [
  "Apple",
  "Apple Watch",
  "Beats ",
  "Camera",
  "Game Controller",
  "HD",
  "HTC",
  "HTC One",
  "IMac",
  "Ipad",
  "Ipad 4 16Gb",
  "Ipad Mini",
  "Keyboard",
  "Lenovo",
  "M8",
  "Mackbook Pro M1",
  "Mouse",
  "Samsung",
  "Samsung Galaxy M11",
  "Samsung Galaxy M31 ",
  "Samsung Galaxy S5 - 64gb ",
  "Samsung Galaxy Tab 4 ",
  "Wireless Speaker",
];


export const navbarMenu : {title:string, subnav?:{title:string, list:string[]}[] , path?:string} [] = [{
 title:"Home",
 path:"/cellphone"
},
{
  title:"Shop",
  subnav:[{
   title:"Shop Lists",
   list:["Shop Default", "Shop Right Sidebar", "Shop Wide","Filter Area", "List Left Sidebar", "Load More Button", "Infinite Scrolling"]
  },
  {
    title:"Product Detail",
    list:["Product Default", "Product Variable", "Product Grouped","Product External", "Product Downloadable", "Zoom Image", "Product with video"]
   },
  {
    title:"Shop Pages",
    list:["Cart", "Checkout", "My Account","Wishlist", "Order Tracking", "Feature Products", "Order on WhatsApp"]
   },
  {
    title:"Shop Layouts",
    list:["Two Columns", "Three Columns", "Three Columns Wide","Four Columns", "Four Columns Wide", "Five Columns Wide", "Six Columns Wide"]
   }
]
 },
 {
  title:"Cellphone",
  path:"/cellphone"
 },
 {
  title:"Hedphone",
  path:"/cellphone"
 },
 {
  title:"Blog",
  path:"/cellphone"
 },
 {
  title:"Contact",
  path:"/cellphone"
 }
]

export interface specificationDataType { id:string | number, title: string, items: { name: string, value: string }[] }
export const specificationData:specificationDataType[] = [{
  id:1,
  title:"GENERAL",
  items:[{
    name:"Alternate names",
    value:"iPad 5"
  },
  {
    name:"Brand",
    value:"Apple"
  },
  {
    name:"Model",
    value:"iPad Air Wi-Fi + Cellular"
  },
]
},
{
  id:2,
  title:"DISPLAY",
  items:[{
    name:"Screen size (inches)",
    value:"9.70"
  },
  {
    name:"Touchscreen",
    value:"No"
  },
  {
    name:"Resolution",
    value:"1536x2048 pixels"
  },
]
}
]