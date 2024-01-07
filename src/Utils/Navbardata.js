export const list = [
  {
    li: "All",
    link: "#All",
  },
  {
    li: "Clothes",
    link: "#Clothes",
    filter:"Clothes",
  },
  {
    li: "Electronics",
    link: "#Electronics",
    filter:"Electronics",
  },
  {
    li: "Furniture",
    link: "#Furniture",
    filter:"Furniture",
  },
  {
    li: "Toys",
    link: "#Toys",
    filter:"Toys",
  },
];





import { MdAccountBalance } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaBasketShopping } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";



export const navpopup = [
    // {
    //   header: "User",
    //   icons: MdAccountBalance,
    //   screen:"block md:hidden"
    // },
    {link:"/myorders",
      header: "My Orders",
      icons: FaBasketShopping,
      screen:"block md:hidden"
    },
    {link:"/account",
      header: "My Accounts",
      icons: RiAccountCircleFill,
      screen:"block md:hidden"
    },
    // {
    //   header: " ",
    //   icons: FaShoppingCart,
    //   screen:"block"
    // },
   
   
  ];
  

