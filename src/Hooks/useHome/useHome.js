import axios from "axios";
import { useEffect, useState } from "react";

function UseHome(){
    const [products, setProducts] = useState([])
    useEffect(()=> {
        axios.get('https://fakestoreapi.com/products').then((res) => {setProducts(res.data)})
    },[])
    return products
}
export default UseHome;