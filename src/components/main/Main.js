import React, { useState, useEffect } from 'react';
import Article from '../articles/Article';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import main from './main.css';

export const Main = () => {

    const [articles, setArticles] = useState([]);
    const [subreddit, setSubreddit] = useState('java');
        
    useEffect(() => {
        fetch("https://www.reddit.com/r/"+ subreddit +".json").then(
            response => {
              if (response.status !== 200) {
                console.warn("API not working");
                return;
              }
              response.json().then(data => {
                if (data != null)
                  setArticles(data.data.children);
              });
            }
          )
        }, [subreddit]);
      
      
        return (
          <div className="main">
            <header>

              <div className="header_left">
                <ul>
                  <div className='hotIcon'>
                    <WhatshotIcon />
                    <li><a href="/r/hot" class="active">Hot</a></li>
                  </div>
                  <div className='newIcon'>
                    <li><a href="/r/new" class="active">New</a></li>
                    <NewReleasesOutlinedIcon />
                  </div>
                  <div className='trendingIcon'>
                    <li><a href="/r/top" class="active">Top</a></li>
                    <TrendingUpIcon />
                  </div>
                </ul>
              </div>

              <div className='search'>
                <div className='searchInput'>
                  <input type="text" className='input' placeholder='Search' value={subreddit} onChange={e => setSubreddit(e.target.value)} />
                </div>
                <div className='searchIcon'>
                  <SearchIcon />
                </div>
              </div>

              <div className="header_right">
                <button className='login' type="button" onClick={e => window.open('https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2F', '_blank')}>Log In</button>
                <button className='signup' type="button" onClick={e => window.open('https://www.reddit.com/register/?dest=https%3A%2F%2Fwww.reddit.com%2F', '_blank')}>Sign Up</button>                
              </div>   

            </header>
            <div className='articles'>
              {
                ((articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : '')
              }
            </div>
            
          </div>
        );
      }