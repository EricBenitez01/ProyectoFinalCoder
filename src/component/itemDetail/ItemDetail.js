import axios from 'axios';
import React, { useEffect, useState,  } from 'react';
import {useParams} from "react-router";
import Item from '../item/Item';

const ItemDetail = () => {
const [detail, setDetail] = useState([]);

const id = useParams();
const detailId = id.id

  useEffect( () => {
      axios(`https://ghibliapi.herokuapp.com/films/${detailId}`)
      .then( res => setDetail(res.data))
  }, [detailId]);



  return(
    <div>
      {detail.map( (detail1) => {
        return(
          <div key={detail1.id}>
            <Item data={detail1} />
          </div>
        );
      }
      
      )}
    </div>
  );
  
};

export default ItemDetail;
