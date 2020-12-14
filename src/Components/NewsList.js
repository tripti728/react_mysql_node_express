import React from 'react';
import  { useState, useEffect } from "react";
import NewsDataService from "../Services/NewsService";



 export const NewsList=()=>{
    const [news,setNews]=useState();
    useEffect(() => {
        retrieveNews();
      }, []);

    const retrieveNews=()=>{
        NewsDataService.getAll().then(response =>{
            setNews(response.data);
            console.log(response.data);
        }).catch(e =>{
            if(e)
            {
                console.log(e);
            }
        })
        
    }

    return(
        <div>
              
            <h4>News List</h4>

<ul className="list-group">
  {news &&
    news.map((newslist, index) => (
      <li key={index}>
        {newslist.NewsTitle}
        
       
      </li>
    ))}
</ul>
            </div>
    );
}

export default NewsList;