import React from "react";
import { Link } from "react-router-dom";

const Home=()=>{
    return <>
    <h1>Home page</h1>
    <Link to="/shop">Shop</Link>
    </>
}
export default Home;