import { Routes, Route } from "react-router-dom";
import Product from "../Pages/product";
import ProductDetails from "../Pages/productdetails";
import Mainpage from "../Pages/mainpage";


const Allroutes = () => {


    return <>
        <Routes>
            <Route path="/" element={<Mainpage />}> </Route>
            <Route path="/products" element={<Product />}> </Route>
            <Route path="/ProductDetails/:id" element={<ProductDetails />}> </Route>
        </Routes>


    </>
}

export default Allroutes;