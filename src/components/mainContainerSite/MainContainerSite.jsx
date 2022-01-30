import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/home/Home';
import Products from '../../pages/products/Products';
import TalkToMe from '../../pages/talkToMe/TalkToMe';
import Aesthetic from '../../pages/products/aesthetic/Aesthetic';
import Consulti from '../../pages/products/consulti/Consulti';

import './MainContainerSite.css';

function MainContainerSite(){
    return (    
        <div className="MainContainerSite">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="products">
                    <Route index path="" element={<Products />}></Route>
                    <Route  path="aesthetic" element={<Aesthetic />}></Route>
                    <Route path="consulti" element={<Consulti />}></Route>
                </Route>
                <Route path="talk-to-me" element={<TalkToMe />}></Route>
            </Routes>
        </div>
    );
}

export default MainContainerSite;