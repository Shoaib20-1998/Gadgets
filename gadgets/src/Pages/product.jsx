import { Nav } from "../Component/navbar"
import { Footer } from '../Component/footer'
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import styles from '../css/product.module.css'
import { Rightdiv } from "../Component/rightdiv"
import MobilePhones from "../ChakraComp/collapse"
import { Popularbtn } from "../Component/Popularbtn"
import { Searchbtn } from "../ChakraComp/Searchbtn"
import Pagination from "../Component/pagination"
import ReactStars from "react-rating-stars-component";
import Poll from "../ChakraComp/rangeslider"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { SearchIcon } from '@chakra-ui/icons'
import { IconButton, Input, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { Section } from "../ChakraComp/Section"
import { useContext } from "react"
import { Auth } from '../Contextprovider/context'
import StarUzair from "../ChakraComp/reactstar"
import { SortSection } from "../ChakraComp/sortsection"
import { SortbyBrand } from "../ChakraComp/sortbybrand"
const Product = () => {

    const { apidata, setapidata } = useContext(Auth)

    console.log(apidata)

    const navigate = useNavigate();
    const [data, setdata] = useState([]);
    const [page, setpage] = useState(1);
    const [total, settotal] = useState(0)
    const [price, setprice] = useState({})
    const [Brand, setbrand] = useState([false,''])

    async function getUser(page) {
        try {
            const response = await axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`, {
                params: {
                    _limit: 6,
                    _page: page,
                }
            });
            setdata(response.data);
            console.log(response.data)
            let t = (response.headers['x-total-count']) / 6
            settotal(Math.ceil(t))
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUser(page)
    }, [page])



    const handlechange = (e) => {
        let val = e.target.value;
        axios.get(`http://localhost:8080/products?_limit=6&q=${val}`)
            .then((res) => setdata(res.data))

    }

    const Sortasc = () => {
        let order = "asc"
        let type = "price"
        axios.get(`http://localhost:8080/products?_limit=6&_order=${order}&_sort=${type}`)
            .then((res) => setdata(res.data))
    }
    const Sortdsc = () => {
        let order = "desc"
        let type = "price"
        axios.get(`http://localhost:8080/products?_limit=6&_order=${order}&_sort=${type}`)
            .then((res) => setdata(res.data))

    }
    const discountasc = () => {
        let order = "asc"
        let type = "discountPercentage"
        axios.get(`http://localhost:8080/products?_limit=6&_order=${order}&_sort=${type}`)
            .then((res) => setdata(res.data))

    }
    const discountdesc = () => {
        let order = "desc"
        let type = "discountPercentage"
        axios.get(`http://localhost:8080/products?_limit=6&_order=${order}&_sort=${type}`)
            .then((res) => setdata(res.data))

    }
    const ratingasc = () => {
        let order = "asc"
        let type = "rating"
        axios.get(`http://localhost:8080/products?_limit=6&_order=${order}&_sort=${type}`)
            .then((res) => setdata(res.data))

    }
    const ratingdesc = () => {
        let order = "desc"
        let type = "rating"
        axios.get(`http://localhost:8080/products?_limit=6&_order=${order}&_sort=${type}`)
            .then((res) => setdata(res.data))

    }
    const staockasc = () => {
        let order = "asc"
        let type = "stock"
        axios.get(`http://localhost:8080/products?_limit=6&_order=${order}&_sort=${type}`)
            .then((res) => setdata(res.data))

    }
    const stockdesc = () => {
        let order = "desc"
        let type = "stock"
        axios.get(`http://localhost:8080/products?_limit=6&_order=${order}&_sort=${type}`)
            .then((res) => setdata(res.data))

    }
console.log(Brand)
    return <>

        <Nav />

        <div className={styles.productmaindiv}>


            <div className={styles.leftdiv}>
                <div className={styles.topleft}>
                    <MobilePhones />
                </div>
                <div className={styles.popularfilter}>
                    <Popularbtn />
                </div>




                {/* Main poroducts and functionalities */}

                <div className={styles.main}>
                    <div className={styles.filters}>
                        <Stack>
                            <Input style={{ color: "black", fontWeight: "bold" }} placeholder='Filter Products' size='lg' />
                        </Stack>
                        <Section />

                        <div className={styles.sortorder}>

                            <SortSection asc={Sortasc} desc={Sortdsc} value={"Sort by Price"} />
                            <SortSection asc={discountasc} desc={discountdesc} value={"Sort by Discount %"} />
                            <SortSection asc={ratingasc} desc={ratingdesc} value={"Sort by Rating"} />
                            <SortSection asc={staockasc} desc={stockdesc} value={"Sort by Stocks"} />
                            <SortbyBrand onChange={(value) => { setbrand(value) }} />


                        </div>







                    </div>
                    <div className={styles.product}>
                        <div style={{ textAlign: "center" }}>
                            <Input onChange={handlechange} margin="10px" width="90%" size="md" placeholder='Search mobile phone' />
                            <IconButton bg="#F2F2F2" size="sm" aria-label='Search database' icon={<SearchIcon />} />
                        </div>

                        {data?.map((item) => {

                            return <>

                                <div key={item.id} className={styles.singleproduct}>
                                    <Link to={`/ProductDetails/${item.id}`}>  <h1 style={{ fontSize: "large", fontWeight: "bold", textAlign: "center", margin: "5px", padding: "10px" }}>{item.title}</h1></Link>
                                    <div>
                                        <div><img src={item.thumbnail} alt="" /></div>
                                        <div>
                                            <p>Catagery : {item.category}</p>
                                            <p>Ratings :{item.rating}</p>
                                            <p>In Stock : {item.stock}pc</p>
                                            <p>Price : ₹{item.price}</p>
                                            <p>Discount : ₹{item.discountPercentage}%</p>

                                            <p style={{ width: "350px" }}>Discription: {item.description}</p>
                                            <StarUzair />
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center" }}> <a href="https://www.amazon.in/dp/B09X586PKC?tag=kp-web-product-finder-21&linkCode=ogi&th=1&psc=1&SubscriptionId=AKIAJZ7ZVEW7WHEFIMWA&ascsubtag=127892624&language=en_IN"><button style={{ backgroundColor: "red", color: "white", padding: "4px 9px", margin: "5px", borderRadius: "10px" }}>Buy Now</button></a> </div>
                                    </div>


                                </div>
                            </>


                        })}



                    </div>

                </div>
                <div className={styles.pagination} >

                    <Pagination current={page} totalpage={total} onChange={(value)=>setpage(value)} />


                </div>


            </div>

            <div className={styles.rightdiv}>
                <Rightdiv />
            </div>

        </div>


        <Footer />

    </>
}

export default Product