import ViewButton from '../../../components/button/ViewButton/ViewButton';
import NewsCard from '../../../components/cards/NewsCard/NewsCard';
import './News.scss';
// import NewsCard from "../../components/NewsCard/NewsCard";
// import ViewButton from '../../components/ViewAll/ViewButton';
import { useEffect, useRef, useState } from 'react';

const News = () => {
    const [newsData, setNewsData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const titleRef = useRef(null);
    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/younginnovations/internship-challenges/master/front-end/news_list.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch news data');
                }
                const data = await response.json();
                setNewsData(data);
            } catch (error) {
                console.error('Error fetching news data:', error);
            }
        };

        fetchNewsData();
    }, []);

    const handleShowMore = () => {
        setShowAll(!showAll);
        titleRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const newsToShow = showAll ? newsData?.news : newsData?.news?.slice(0, 6);

    return (
        <div className="news">
            <div className="news-container">
                <h2 className="title" ref={titleRef}>News</h2>
                <p className="subtitle">
                    We aim to stop public funds siphoning off and we have a plan that will <br />
                    help. We are working at the national and EU levels to advance.
                </p>
                <div className="grid">
                    {newsToShow?.map((data, index) => (
                        <div className="grid-item" key={index}>
                            <NewsCard data={data} />
                        </div>
                    ))}
                    <ViewButton label={showAll ? "Show less news" : "View all news"} onClick={handleShowMore} />
                    {/* <div className="view-all-button-container">
            <button className="view-all-button" onClick={handleShowMore}>{showAll ? "View less news" : "View all news"}</button>
        </div> */}
                </div>
            </div>
        </div>
    );
};

export default News;
