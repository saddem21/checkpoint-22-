/*import axios from 'axios';
import React, {useState,useEffect} from 'react'

const UserList = () => {
    const [listOfUser,setListOfUser]= useState([]);
    const [error,setError]= useState(null);

useEffect(()=>{ axios.get("https://jsonplaceholder.typicode.com/users")
.then(res=>setListOfUser(res))
.catch(err=>console.log(err))
},[])
    return (
        <div>
            <ul>
    
                {listOfUser.data.map(per=>(
                    <li>
                        {per.username}
                        </li>
                
                ))}
                </ul>
            
                
            
        </div>
    )
}

export default UserList*/
import React, { useState, useEffect } from "react";
import Axios from "axios";

function UserList() {
  const [listofusers, setListofusers] = useState([]);

  const fetchlist = async () => {
    const { data } = await Axios.get(
      "https://jsonplaceholder.typicode.com/users/"
    );
    const listofusers = data;
    setListofusers(listofusers);
    console.log(listofusers);
  };

  useEffect(() => {
    fetchlist();
  }, []);

  return (
    <div>
      <h1 className="class1">List of usernames</h1>
      {listofusers.map((per) => (
        <h1 className="class2">{per.username}</h1>
      ))}
    </div>
  );
}

export default UserList;