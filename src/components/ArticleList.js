import React from "react"
import Article from "./Article"
function ArticleList({posts}){
    console.log(posts);
   const articleArray=posts.map(article=>
    <Article key={article.id} title={article.title} date={article.date} preview={article.preview}></Article>)
return(<main key={posts.id}>{articleArray}</main>)
}
export default ArticleList
