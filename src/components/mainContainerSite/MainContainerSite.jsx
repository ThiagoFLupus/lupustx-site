import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/home/Home';
import Products from '../../pages/products/Products';
import TalkToMe from '../../pages/talkToMe/TalkToMe';

import './MainContainerSite.css';

function MainContainerSite(){
    return (    
        <div className="MainContainerSite">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="products" element={<Products />}></Route>
                <Route path="talk-to-me" element={<TalkToMe />}></Route>
            </Routes>
        </div>
    );
}

export default MainContainerSite;