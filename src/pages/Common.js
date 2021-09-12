import React from 'react'
import moment from "moment";
function Common({post}) {
    return (
            <div className="news">
                 <div className="news__image">
                <img alt="img" src={post.imageLink} />
                    </div>
                    <div className="news__container">
                        <div>
                            <p className="news__headline">{post.headline}</p>
                        </div>
                        <div>
                     {
                        post.description.split(".").reverse().slice(1).reverse().map(each => (
                            <ul>
                                <li className="news__description">{each}.</li>
                            </ul>
                        ))
                    }
                        </div>
                        <div>
                            <div className="news__footer">
                                    <p><a className="link" target="_blank" rel="noopener noreferrer" href={post.newsLink}>{ post.site}</a></p>
                                    <i className="news__date">{moment (post.date).fromNow()}</i>
                            </div>
                        </div>
            </div>
                 </div>
        
    )
}

export default Common
