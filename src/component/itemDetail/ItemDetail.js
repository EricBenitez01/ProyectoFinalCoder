import axios from 'axios';
import React, { useEffect, useState,  } from 'react';
import {useParams} from "react-router";
import Item from '../item/Item';
import "./ItemDetail.css";
const ItemDetail = () => {
const [detail, setDetail] = useState([]);

const id = useParams();
const detailId = id.id

  useEffect( () => {
      axios(`https://ghibliapi.herokuapp.com/films/${detailId}`)
      .then( res => setDetail(res.data))
  }, [detailId]);


  const myStyle={
    backgroundImage: `url(${detail.movie_banner})`,
    minHeight: "2500px",
  };   
  
  
  return(
    <div className='Detail' key={detail.id}>
      <body className='bb'  style={myStyle}>
        <h1 className='title'>{detail.title}</h1>
      <Item  data={detail} />
      
      </body>
    </div>
  );
  
};

export default ItemDetail;
