import React, { useState, useEffect } from "react";
import axios from "axios";

import NewsList from "./NewsList";

export const App = () => {
    const [query, setQuery] = useState("react hooks");
    const [news, setNews] = useState([]);
    const [url, setURL] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://hn.algolia.com/api/v1/search?query=${query}`;
            const result = await axios(url);
            setNews(result.data.hits.slice(0, 5));
        };
        fetchData();
    }, [query]);

    useEffect(() => {
        setURL();
    }, [query]);

    return (
        <div>
            <div className="container">
                <input value={query} onChange={e => setQuery(e.target.value)} />
                <NewsList news={news} />
            </div>
        </div>
    );
};
