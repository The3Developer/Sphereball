import React, {useState} from 'react'

function New({category, datetime, headline, id, image, related, source, summary, url}) {
    const [display, setDisplay] = useState();
    //useEffect(() => {axios.get('https://finnhub.io/api/v1/news?category=general&token=c0u4t6v48v6qqphtsng0').then(res => {setNews(res.data);}).catch(error => console.log(error));}, []);
    return (
        <div>
              <div>
            <h3>{category}</h3>
            <h3>{headline}</h3>
            <h3>{id}</h3>
            <img className = "image-src" src = {image} alt = "news" onClick = {"image-larg"}/>
            <h3>{related}</h3>
            <h3>{source}</h3>
            <p>{summary}</p>
            <a className = "hyperlink" href = {url}>Source</a>
        </div>
        </div>
       
    )
}

export default New
