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
const Product = () => {

    const [data, setdata] = useState([]);
    const [page, setpage] = useState(1);
    const [total, settotal] = useState(0)

    async function getUser(page) {
        try {
            const response = await axios.get(`http://localhost:8080/products`, {
                params: {
                    _limit: 6,
                    _page: page
                }
            });
            setdata(response.data);
            let t = (response.headers['x-total-count'])/6
            settotal(Math.ceil(t))
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUser(page)
    }, [page])

    const handleclick = (value) => {
        setpage(value)
    }
console.log(total)
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


                    </div>
                    <div className={styles.product}>
                        <div style={{ textAlign: "center" }}><Searchbtn /></div>
                        {data?.map((item) => {

                            return <>
                                <div key={item.id} className={styles.singleproduct}>
                                    <h1 style={{ fontSize: "large", fontWeight: "bold", textAlign: "center", margin: "5px", padding: "10px" }}>{item.title}</h1>
                                    <div>
                                        <div><img src={item.thumbnail} alt="" /></div>
                                        <div>
                                            <p>{item.id}</p>
                                            <p>Catagery : {item.category}</p>
                                            <p>Ratings :{item.rating}</p>
                                            <p>In Stock : {item.stock}</p>
                                            <p>Price : ₹{item.price}</p>
                                            <p style={{ width: "350px" }}>Discription: {item.description}</p>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center" }}><button style={{ backgroundColor: "red", color: "white", padding: "4px 9px", margin: "5px", borderRadius: "10px" }}>Buy Now</button></div>
                                    </div>


                                </div>
                            </>


                        })}

                    </div>

                </div>
                <div className={styles.pagination} >

                    <Pagination current={page} totalpage={total} onChange={handleclick} />


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