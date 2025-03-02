"use client";

import { useEffect, useState } from "react";
import "../../style.css";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Page(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  useEffect(()=>{
    getProductDetail()
  },[])

  const getProductDetail = async()=>{
    let productData = await fetch(`http://localhost:3000/api/products/${props?.params?.editproduct}`)
    productData = await productData.json()
    if(productData.success){
      setName(productData?.result?.name)
      setPrice(productData?.result?.price)
      setColor(productData?.result?.color)
      setCompany(productData?.result?.company)
      setCategory(productData?.result?.category)
    }
  }

  const updateProduct = async()=>{
    let data = await fetch(`http://localhost:3000/api/products/${props?.params?.editproduct}`,{
      method:"PUT",
      body: JSON.stringify({name,price,color,category,company})
    })
    data = await data.json()
    if(data?.result){
      alert("data is updated")
    }
  }
  return (
    <div>
      <h1>Update products</h1>
      <input
        type="text"
        placeholder="Enter Product Name"
        className="input"
        value={name}
        onChange={(e) => {
          setName(e?.target?.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Product Price"
        className="input"
        value={price}
        onChange={(e) => {
          setPrice(e?.target?.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Product Color"
        className="input"
        value={color}
        onChange={(e) => {
          setColor(e?.target?.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Product Company"
        className="input"
        value={company}
        onChange={(e) => {
          setCompany(e?.target?.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Product category"
        className="input"
        value={category}
        onChange={(e) => {
          setCategory(e?.target?.value);
        }}
      />
      <button className="btn" onClick={updateProduct}>
        Update Product
      </button>
      <Link href={"/products"}>
      <button className="btn">
       Go to Product List
      </button>
      </Link>
      
    </div>
  );
}
