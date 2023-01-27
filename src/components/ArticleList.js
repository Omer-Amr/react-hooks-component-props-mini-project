import React from "react";
import Article from "./Article";

function ArticleList({articleItems}) {
  
  const articles = articleItems.map((article) => (
      <Article
        key={article.id}
        title={article.title}
        date={article.date}
        preview={article.preview}
        minutes={article.minutes}
      />
    ))
//   console.log(articles);
  return (
  <main> {articles} </main> );
}

export default ArticleList;