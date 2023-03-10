import ArticleList from "../components/ArticleList";
import { useEffect, useState } from "react";
import Search from "../components/Search";



const ArticleContainer = ({articles, filterArticles}) => {

const SERVER_URL = "http://localhost:8080"

// const [articles, setArticles] = useState([]);
const [filteredArticles, setFilteredArticles] = useState();


    const token = localStorage.getItem("jwt");


    // useEffect(() => {
    //     const fetchData = async() => {
    //         const response = await fetch(`${SERVER_URL}/articles`, {
    //             headers: {
    //                 // "Access-Control-Allow-Origin": true,
    //                 // "Authorization": "Bearer " +token
    //             },
    //             credentials: "include"
    //         })
    //         const data = await response.json();
    //         setArticles(data);
    //         console.log(data);
    //     }
    //     fetchData()
    //         }, [])



            return (
    <div className="articleBox">
        <div className="articlestitle">
            <h1>Articles</h1>
            <hr/>
        </div>
        <section className="articleListContainer">
            {/* <ArticleList articles={articles} />
             */}

            {articles ? <Search filterArticles={filterArticles}/> : ""}


            {articles ? <ArticleList articles={articles}/> : ""}

            
            {/* {articles ?<ArticleList articles={articles}/> : <Search filterArticles={filterArticles} />} */}

        </section>
    </div>
            )
    
}
 
export default ArticleContainer;