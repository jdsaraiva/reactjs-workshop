import React, { useState, useEffect } from "react";
import axios from "axios";

import NewsList from "./NewsList";
import ResultsData from "./ResultsData";

export const App = () => {
    const [query, setQuery] = useState("reactjs");
    const [news, setNews] = useState([]);
    const [counter,setCounter] = useState(0);

    useEffect(() => {

        const fetchData = async () => {
            const url = `https://hn.algolia.com/api/v1/search?query=${query}&tags=story`;
            const result = await axios(url);

            setNews(result.data.hits);
            setCounter(result.data.hits.length);

        };
        fetchData();

    }, [query]);

    // Fazer um > para ir para a proxima página
    // Enviar tb o numero de artigos, se for maior que 10 adicionar um "Next page >"

    return (
        <div>
            <div className="container">
                <input value={query} onChange={e => setQuery(e.target.value)} />
                <ResultsData counter={counter}/>
                <NewsList news={news} />
            </div>
        </div>
    );
};
