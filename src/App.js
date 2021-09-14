import './App.css';
import React, { useEffect, useState } from "react";
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import axios from "./axios";
function App() {
    const [news, setNews] = useState([]);
    const [limit, setLimit] = useState(10);
    const [start, setStart] = useState(0);

    useEffect(() => {
        loadNews();
    }, [start])

    const loadNews = async () => {
        const result = await axios.get(`/?_sort=date:desc&_limit=${limit}&_start=${start}`);
        setNews((prev) => [...prev, ...result.data]);
        console.log(result.data)
    }


    const handleclick = (e) => {
        if (start <= news.length) {

            setStart(prev => prev + 2)
        }
        else {
            setLimit(news.length + 1)
        }
    };

    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            handleclick();
        }
    }

    let nationalAll = news.filter(news => news.national !== null);
    let politicsAll = news.filter(news => news.politics !== null);
    let businessAll = news.filter(news => news.business !== null);
    let sciTechAll = news.filter(news => news.sciTech !== null);
    let worldAll = news.filter(news => news.world !== null);
    let othersAll = news.filter(news => news.others !== null);

    const renderNational = (newsprops) => {
        let national = news.filter(news => news.national === newsprops.match.params.national);
        return (
            <Home news={national} />
        )
    }

    const renderPolitics = (newsprops) => {
        let politics = news.filter(news => news.politics === newsprops.match.params.politics);

        return (
            <Home news={politics} />
        )
    }

    const renderBusiness = (newsprops) => {
        let business = news.filter(news => news.business === newsprops.match.params.business);
        return (
            <Home news={business} />
        )
    }


    const renderScience = (newsprops) => {
        let sciTech = news.filter(news => news.sciTech === newsprops.match.params.sciTech);
        return (
            <Home news={sciTech} />
        )
    }

    const renderWorld = (newsprops) => {
        let world = news.filter(news => news.world === newsprops.match.params.world);
        return (
            <Home news={world} />
        )
    }

    const renderOthers = (newsprops) => {
        let others = news.filter(news => news.others === newsprops.match.params.others);
        return (
            <Home news={others} />
        )
    }

    return (
        <Router>
            <Sidebar />
            <Switch>
                <Route path="/" exact render={() => <Home news={news} />} />
                <Route path="/national" exact render={() => <Home news={nationalAll} />} />
                <Route path="/politics" exact render={() => <Home news={politicsAll} />} />
                <Route path="/business" exact render={() => <Home news={businessAll} />} />
                <Route path="/sciTech" exact render={() => <Home news={sciTechAll} />} />
                <Route path="/world" exact render={() => <Home news={worldAll} />} />
                <Route path="/others" exact render={() => <Home news={othersAll} />} />
                <Route path="/national/:national" exact render={(newsprops) => renderNational(newsprops)} />
                <Route path="/politics/:politics" exact render={(newsprops) => renderPolitics(newsprops)} />
                <Route path="/business/:business" exact render={(newsprops) => renderBusiness(newsprops)} />
                <Route path="/sciTech/:sciTech" exact render={(newsprops) => renderScience(newsprops)} />
                <Route path="/world/:world" exact render={(newsprops) => renderWorld(newsprops)} />
                <Route path="/others/:others" exact render={(newsprops) => renderOthers(newsprops)} />
            </Switch>
        </Router>
    );
}

export default App;