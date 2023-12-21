"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
import './styles/product.css'

export default function Products() {

  const [products, setProducts] = useState([])

  useEffect( ()=>{ 
    const fetchData = async()=>{
      try{
        const res = await axios.get("https://fakestoreapi.com/products")
        const jsonData = res.data
        console.log(jsonData)
        setProducts(jsonData)
      } catch(err){
        console.log("error in fetching data: ", err)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='products'>
      {
        products.map((product, index)=>{
          return <div key={index}> 
              <Card title={product.title} image={product.image} />
            </ div>
        })
      }
    </div>
  )
}
