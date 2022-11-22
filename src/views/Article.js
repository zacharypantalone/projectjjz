import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Article() {
  const [articles, setArticles] = useState([
    { title: 'Test Title', url: 'www.link.com' },
    { title: 'Test Title 2', url: 'www.link2.com' },
  ]);

  let { careertype } = useParams();
  console.log(careertype);
  useEffect(() => {
    axios.get(`/article/${careertype}`).then(data => {
      console.log(data.data);
      setArticles([...data.data]); //This should be the careertype, we need to drill down into the data object to make sure it's correct before moving forward
    });
  }, []);

  return (
    <div id='article-page'>
      <p>This is the article page</p>
      {articles.map(article => (
        <div>
          {article.title} {article.url}
        </div>
      ))}
    </div>
  );
}
