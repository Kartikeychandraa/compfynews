import React ,{useState,useEffect}from "react";

import axios from "axios";
function News()
  {
    const[ api, setApi ] = (useState([]))

   useEffect(async()=>{
    await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=e97b084346f242ae87fd89cdc351174a")
     .then(res=>{

       setApi(res.data.articles)

     })
     .catch((exception) => {
       console.log(exception);
   })
   },[])
useEffect(()=>{
  console.log({api})
  const headlines = api.map((n) =>
        <div className ="row" >
        <div className = "col-md-4">
        <div className="card" >
    <img src="{n.urlToImage}" className="card-img-top" alt="..." />
    <div className="card-body">
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
        </div>
           </div>
  )

},[api])


  return (


    <div className="container">
      <br />

     </div>
  )

  }
export default News;
