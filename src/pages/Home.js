import React from "react";
import "./Home.css"
import Common from './Common';
function Home({ news }) {

    return (
        <div className="noi__news">
            {
                news.map(post => (
                    <Common post={post} />
                ))
            }
        </div>
    )
}

export default Home
