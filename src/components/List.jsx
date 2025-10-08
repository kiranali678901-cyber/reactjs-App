import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";

function List() {
  const [list, setList] = useState([]);
  const [price, setPrice] = useState(0);

  const fetchlists = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setList(data);
      alert('you watch data')
     
    } catch (error) {
      console.error("error fetching data", error);
    }
  };
  useEffect(() => {
    fetchlists();
  }, []);
 
 const handleDelete = async (id) => {
  console.log("Deleting item with ID:", id);

  try {
    // ✅ Call DELETE API
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      alert(`Failed to delete item with ID ${id}`);
    }

    // ✅ Optional: get response data
    const data = await response.json();
    // setList(data)
    alert("Deleted successfully:", data);

    // ✅ Update state after deletion
    // setPrice((prevPrice) => prevPrice + 1);
  } catch (error) {
    console.error("Error deleting item:", error);
  }
};


console.log(price,'price')
  return (
    <div>
      <ListItem lists={list} />
      <button onClick={()=>handleDelete(1)}>Click to call api</button>
    </div>
  );
}

export default List;
