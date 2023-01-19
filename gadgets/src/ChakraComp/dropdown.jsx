import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button
  } from '@chakra-ui/react'

  import{ Link} from 'react-router-dom'
  import { PhoneIcon, AddIcon, WarningIcon,ChevronDownIcon,TriangleDownIcon} from '@chakra-ui/icons'

 
  
  // Use the `color` prop to change the icon color
//   title:"VIDEOS",
//         BUYINGGUIDE:'BUYING GUIDE',
//         CRYPTOCURRENCY:"CRYPTO CURRENCY",
//         EVENTS:'EVENTS',
//         HOW:'HOW TOS',
//         SPONSORED:'SPONSORED',
//         REVIEW:'REVIEWS AND FIRST LOOK',
//         HINDI:"HINDI",
//         ENTERTAINMENT:'ENTERTAINMENT',
//         FEATURES:'FEATURES',
//         SHORTS:'SHORTS',
//         TV:'TV SHOWS'
 
const Dropdown=({obj})=>{
  
    
return(

<Menu>
  <MenuButton  style={{backgroundColor:"white",fontFamily:"sans-serif"}} >
  {obj?.title} <ChevronDownIcon />
  </MenuButton>
  <MenuList _hover={{ bg: "#FF1616", color: " black" }}>
    <MenuItem _hover={{ bg: "#FF1616", color: " white" }}
    >{obj?.CRYPTOCURRENCY}</MenuItem>
    <MenuItem _hover={{ bg: "#FF1616", color: " white" }}>{obj?.EVENTS}</MenuItem>
    <MenuItem _hover={{ bg: "#FF1616", color: " white" }}>{obj?.HOW}</MenuItem>
    <MenuItem _hover={{ bg: "#FF1616", color: " white" }}>{obj?.SPONSORED}</MenuItem>  
    <MenuItem _hover={{ bg: "#FF1616", color: " white" }}><Link to="/products">{obj?.BUYINGGUIDE}</Link></MenuItem>
    <MenuItem _hover={{ bg: "#FF1616", color: " white" }}>{obj?.REVIEW}</MenuItem>
    <MenuItem _hover={{ bg: "#FF1616", color: " white" }}>{obj?.HINDI}</MenuItem>
    <MenuItem _hover={{ bg: "#FF1616", color: " white" }}>{obj?.SHORTS}</MenuItem>
  </MenuList> 
 
</Menu>


)


}

export default Dropdown;