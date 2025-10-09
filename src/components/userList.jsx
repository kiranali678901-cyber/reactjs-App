import React, { useEffect, useState } from "react";
import ViewUser from "./ViewUser";

export default function UserList() {
  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    try {
      const userapi = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await userapi.json();
      const filterdata = data.map((value) => {
        return {
          id: value.id,
          name: value.name,
          email:value.email,
          username:value.username,
        };
      });

      setUser(filterdata)

      
    } catch (error) {
      console.error("error fetching data", error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return <div>
    <ViewUser user = {user}  fetchUser= {fetchUser}/>
  </div>;

}
