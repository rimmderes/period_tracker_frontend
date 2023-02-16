import Comment from "./Comment";
import { useState } from "react";
import CommentForm from "./CommentForm";
import { Link } from "react-router-dom";


const SERVER_URL = "http://localhost:8080"




const Article = ({article}) => {
    

    const [comments, setComments] = useState(article.comments)

    const commentComponent = comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />
    })

    // Post Comment
    const postNewComment = (newComment) => {
        fetch(`${SERVER_URL}/comments`, {
            method: "POST",
            credentials:"include",
            // mode: "no-cors",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newComment),
            mode: 'cors'
        })

        .then((response) => response.json())
        .then((response) => {
            setComments([... comments, response]);
        });
    };



    


    return ( 
        <>


        <section>    
            <div className="blog-card spring-fever">
                <div className="title-content">
                    {/* <h3><a href="#"> <{article.title}></a></h3> */}

                    <h3>{article.title}</h3>
                    <div className="intro"> <a href="#">Women and Lifestyle</a> </div>
                </div>
                <div className="card-info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim... 
                    {/* <Link  className="licon icon-arr icon-black" to="/article/articleinfo">Read Article</Link> */}
                    <Link to="/article/articleinfo">Read Article</Link>
                    {/* <Link className="linkbutton" to="/">Log Out</Link> */}
                    {/* <Link className="licon icon-arr icon-black" to={`/articles/${article.id}`}> Read Article </Link> */}
                    {/* <a href="#">Read Article<span className="licon icon-arr icon-black"></span></a> */}

                </div>
                <div className="utility-info">
                <ul className="utility-list">
                {/* <li><span className="licon icon-like"></span><a href="#">2</a></li> */}
                <li><span className="licon icon-like"></span> {article.numOfLikes} </li>
                
                <li><span className="licon icon-com"></span> ... </li>
                <li><span className="licon icon-dat"></span> {article.date} </li>
                <li><span className="licon icon-tag"></span> {article.tag} </li>
                </ul>
                </div>
                <div className="gradient-overlay"></div>
                <div className="color-overlay"></div>
            </div>
                <p>Reviews:</p>
                <ul>
                    {commentComponent}
                </ul>
                <CommentForm postNewComment={postNewComment} articleId={article.id} />
                {/* <p>{article.articleslikes}</p>
                <p>{article.numOfLikes}</p>
                <p>{article.comments}</p> */}

            </section>


        </>

     );
}
 
export default Article;