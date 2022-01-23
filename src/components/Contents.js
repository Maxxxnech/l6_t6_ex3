import React from "react";

const goods = {
food:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
drinks: "https://images.unsplash.com/photo-1571950006418-f226dc106482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
}
export default function Contents({goodsType}){
    return(
    <div>
       <img src={goods[goodsType]} alt={goodsType}/>
    </div>)
}