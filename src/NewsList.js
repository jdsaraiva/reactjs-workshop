import React from "react";
const NewsList = ({ news, onSelectArticle }) => {
    return (
        <section className="newsList">
            <ul>
                {news.map(article => (
                    <li key={article.objectID}>
                        <a href={article.url}> {article.title} </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default NewsList;
