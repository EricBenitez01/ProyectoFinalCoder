import React, { useEffect } from 'react'
import {useState} from "react";
import Item from "../item/Item";
import axios from "axios";
import "./ItemList.css";
import { Link } from 'react-router-dom';

function ItemList() {
    const [items, setItems] = useState([]);
    
    
    useEffect( () => {
        axios("https://ghibliapi.herokuapp.com/films")
        .then(res => setItems(res.data));
    }, []); 
    console.log(items);

    return(
        <div className="cardList">
            {items.map( (item) => {
                return( 
                    <div key={item.id}>
                        <Link to={`/detail/${item.id}`}>
                        <Item data={item} />
                        </Link>
                    </div>
                );
            }
            )}
        </div>
    );
};

export default ItemList;