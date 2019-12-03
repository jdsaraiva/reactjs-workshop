import React from "react";

// THE API has an issue, it shoes articles without titles

const NewsList = ({ news }) => {
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
