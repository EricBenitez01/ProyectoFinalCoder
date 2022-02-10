import React, { useEffect } from 'react'
import {useState} from "react";
import Item from "../Item";
import axios from "axios";
function ItemList() {
    const [items, setItems] = useState({});
    
    
    useEffect( () => {
        axios("https://ghibliapi.herokuapp.com/films")
        .then(res => setItems(res.data));
    }, []); 
    console.log(items);

  return (
    <div>
        {items.map((item) => {
            return(
                <div key = {item.id}>
                    <Item data={item} /> 
                </div>
            );
        })
        }
    </div>
  );
};

export default ItemList;