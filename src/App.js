import React, {useEffect, useState} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';

const alanKey = '5ee5f842a3f8c2c879a880b7f203c7732e956eca572e1d8b807a3e2338fdd0dc/stage';


const App = () => {

    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();

    useEffect(() => {   
        alanBtn({
            key : alanKey,
            onCommand : ({ command, articles }) => {
                if(command === 'newsHeadlines'){
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                } else if(command === 'highlight'){
                    setActiveArticle((prevActiveArticle) => prevActiveArticle +1);
                }
            }
        })
    }, [])
    return (
        <div>
            <div className ={classes.logocontainer}>
                <img src = "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png" className={classes.alanLogo} alt="alan logo"/>
            </div>
            <NewsCards articles ={newsArticles} activeArticle = {activeArticle}></NewsCards>
            
        </div>
    );
}

export default App;