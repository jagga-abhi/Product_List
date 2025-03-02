"use client";

import { useRouter } from "next/navigation";

export default function DeleteProduct({ id }) {
    const router = useRouter()
  // Function to delete the product
  const deleteRecord = async () => {
    try {
      const response = await fetch(`http://18.213.5.239:3000/api/products/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success) {
        alert("Product Deleted");
        router?.push("/products")
        // Optionally, you can add a method to update the product list or remove the product from the list
      } else {
        alert("Failed to delete the product.");
      }
    } catch (error) {
      console.error("Error deleting the product:", error);
      alert("An error occurred while deleting the product.");
    }
  };

  return <button onClick={deleteRecord}>Delete</button>;
}
