"use client"
import { useState } from "react";
import "../style.css";
import { useRouter } from "next/navigation";
export default function Page() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  const addProduct = async () => {
    let result = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({ name, price, color, company, category }),
    });
    result = await result.json();
    if (result.success) {
      alert("New Product Added");
    }
  };
  const clearFunc = () => {
    setName("");
    setPrice("");
    setColor("");
    setCategory("");
    setCompany("");
  };
  const router = useRouter()
  return (
    <div>
      <h1>Add products</h1>
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
      <button className="btn" onClick={addProduct}>
        Add Product
      </button>
      <button className="btn" onClick={()=>{router?.push("/products")}}>
        Go To Product List
      </button>
      <button className="btn" onClick={clearFunc}>
        Clear
      </button>
    </div>
  );
}
