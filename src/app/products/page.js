"use client";

import DeleteProduct from "@/lib/DeleteProduct";
import Link from "next/link";
import styles from "./page.module.css"; // Assuming you have a page.module.css file for styling

const getProducts = async () => {
  let data = await fetch("http://localhost:3000/api/products", { cache: "no-cache" });
  data = await data.json();
  if (data.success) {
    return data.result;
  } else {
    return { success: false };
  }
};

export default async function Page() {
  const products = await getProducts();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Product List</h1>
      <Link href={'/addproduct'}>
      <button className={styles.button}>Add Product</button>
      </Link>
      
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>Name</th>
            <th className={styles.tableHeader}>Price</th>
            <th className={styles.tableHeader}>Color</th>
            <th className={styles.tableHeader}>Company</th>
            <th className={styles.tableHeader}>Category</th>
            <th className={styles.tableHeader}>Edit</th>
            <th className={styles.tableHeader}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item._id}>
              <td className={styles.tableCell}>{item.name}</td>
              <td className={styles.tableCell}>{item.price}</td>
              <td className={styles.tableCell}>{item.color}</td>
              <td className={styles.tableCell}>{item.company}</td>
              <td className={styles.tableCell}>{item.category}</td>
              <td>
                <Link href={`products/${item._id}`} className={styles.link}>Edit</Link>
              </td>
              <td>
                <DeleteProduct id={item._id} className={styles.button}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
