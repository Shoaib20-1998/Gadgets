import { Button, ButtonGroup } from '@chakra-ui/react'
import styles from "../css/navbar.module.css"
import img from '../images/GadgetTree.png'
import axios from 'axios';
import { IconName } from "react-icons/ai";
import Dropdown from '../ChakraComp/dropdown';
import{ Link} from 'react-router-dom'
export function Nav() {



    return <div className={styles.Container} width="100%">
        <div className={styles.TopNavbuttons}>
            <button>NDTV</button>
            <button>Business</button>
            <button>Hindi</button>
            <button>Movies</button>
            <button>Health</button>
            <button>Food</button>
            <button>Crypto</button>
            <button>Tech</button>
            <button>Webstories</button>
            <button>Education</button>
            <button>Swasth</button>
            <button>Lifstyle</button>
            <button>Shopping</button>
            <button>Auto</button>
            <button>Apps</button>
            <button>Art</button>
        </div>
        <div className={styles.imgnav}>
            <img style={{}} src={img} alt="Gadgets" width="50%" />
            <img style={{ marginLeft: "455px" }} width="25%%" src='https://us.123rf.com/450wm/leberus/leberus1912/leberus191200011/leberus191200011.jpg?ver=6' alt="Gadge" />
        </div>
        <div className={styles.middlenav}>
           <Link to="/"><button>HOME</button></Link> 
            <button>GUIDE</button>
            <button>AUTO EXPO 2023</button>
            <button>NEWS</button>
            <button>REVIEWS</button>
            <button>FEATURES</button>
            <button>OPINIONS</button>
            <Dropdown obj={{
                title: "VIDEOS",
                BUYINGGUIDE: 'BUYING GUIDE',
                CRYPTOCURRENCY: "CRYPTO CURRENCY",
                EVENTS: 'EVENTS',
                HOW: 'HOW TOS',
                SPONSORED: 'SPONSORED',
                REVIEW: 'REVIEWS AND FIRST LOOK',
                HINDI: "HINDI",
                TV: 'TV SHOWS'
            }
            } />
            <button>PODCAST</button>
            <Dropdown obj={{
                title: "PRODUCT FINDER",
                CRYPTOCURRENCY: "TV",
                EVENTS: 'LAPTOP',
                HOW: 'TABLETS',
                BUYINGGUIDE: 'MOBILES',
                SPONSORED: 'SMART WATCH',
                REVIEW: 'CAMERAS',
                HINDI: "GAMES",
                TV: 'SPEAKERS'
            }} />
            <button>COMPARE</button>
            <button>BRANDS REACHARGE</button>
            <button>MORE</button>
            <button style={{ marginRight: "0px" }}> <input style={{ border: "1px solid black", textAlign: "center" }} type="text" placeholder='Gadgets Search' /></button>
            <button style={{ marginLeft: "0px" }}> <img width="20px" src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-vector-search-icon-png-image_4869926.jpg" alt="" /></button>
        </div>





        <div className={styles.fullwidth2}>
            <button>MOBILES</button>
            <button>TELECOM</button>
            <button>HOWTO</button>
            <button>GAMING</button>
            <button>ENTERTAINMENT</button>
            <button>CRYPTO</button>
            <button>AUDIO</button>
            <button>TV</button>
            <button>PC/LAPTOP</button>
            <button>APPS</button>
            <button>TABLETS</button>
            <button>SCIENCE</button>
            <button>WEARABLES</button>
            <button>REACHARGE/BILL PAY</button>
            <button>5G IN INDIA</button>
            <button>HINDI</button>
        </div>

    </div>





}