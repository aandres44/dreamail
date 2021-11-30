import "./News.css";
import { Button as Buttonote } from '@material-ui/core'
import { Card, Button } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "antd/dist/antd.css";

const { Meta } = Card;

function News() {
    const [news, setNews] = useState([]);
    const history = useNavigate();

    useEffect(() => {
        const loadNews = async () => {
            const response = await axios.get(
                "https://newsapi.org/v2/everything?domains=bbc.com,nytimes.com&language=en&from=2021-10-29&sortBy=publishedAt&apiKey=4a4edcacbc0a476e81c8d5cf1574b2d2"

            );
            setNews(response.data.articles);
        };
        loadNews();
    }, []);

    console.log("news", news);
    return (
        <div className="News">
            <Buttonote
                className="sidebar-compose"
                onClick={() => history("/")}
            >
                Correos
            </Buttonote>
            <div className="news-grid">
                {news &&
                    news.map((item, index) => {
                        return (
                            <Card
                                className="news-card"
                                key={index}
                                hoverable
                                style={{ width: "70%", marginBottom: "40px" }}
                                cover={<img alt="image" src={item.urlToImage} />}
                            >
                                <Meta title={item.title} description={item.content} />
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    <Button type="primary" style={{ marginTop: "10px" }}>
                                        Read More
                                    </Button>
                                </a>
                            </Card>
                        );
                    })}
            </div>

        </div>
    );
}

export default News;