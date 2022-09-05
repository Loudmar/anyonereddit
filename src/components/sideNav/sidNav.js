import React from "react";
import sideNav from "../sideNav/sideNav.css";

export default function Sidenav() {
    const menu = [
        { to: '/r/popular', text: "Popular"},
        { to: '/r/all', text: "All"},
        { to: '/r/random', text: "Random"}
    ]

    const subreddits = [
        "askreddit",
        "worldnews",
        "videos",
        "funny",
        "todayilearned",
        "pics",
        "gaming",
        "movies",
        "news",
        "gifs",
        "aww",
        "mildlyinteresting",
        "showerthoughts",
        "television",
        "jokes",
        "science",
        "soccer",
        "internetisbeautiful",
        "dataisbeautiful",
    ]
    
    return (
        <div className="sidenav">
            <div className="sidenav_logo">
                <img src="https://logos-download.com/wp-content/uploads/2016/06/Reddit_logo_full_1.png" />
            </div>                   

            <div className="sidenav_link">
                <ul className="sidenav_menu">
                    {menu.map(menu => (
                        <li><a href={menu.to}>{menu.text}</a></li>
                    ))}
                </ul>
                <hr />
                <ul className="sidenav_subreddit">
                    {subreddits.map(subreddit => (
                        <li><a href={`/r/${subreddit}`}>{subreddit}</a></li>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}