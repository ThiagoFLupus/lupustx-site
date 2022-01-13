import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useLocation } from 'react-router-dom'

import './HeaderSite.css';
import menuImg from './menu.png';


function HeaderSite(props){
    const colorApp= useSelector(state=> state.generalReducer.colorApp);
    const sizeWindowRedux= useSelector(state=> state.generalReducer.width);
    const [openedMenu, setOpenedMenu]= useState(false);
    const location= useLocation();
    const [selectedTab, setSelectedTab]= useState(0);
    const [showMinimalLogo, setShowMinimalLogo]= useState(false);
    const [scrollY, setScrollY]= useState(window.scrollY);
 
    // eslint-disable-next-line
    useEffect(()=> {
        if(location.pathname === '/'){
            setShowMinimalLogo(false);
        }else{
            setShowMinimalLogo(true)
        }
    // eslint-disable-next-line
    }, [location.pathname]);

    useEffect(()=> {
        if(location.pathname === '/'){
            if(window.scrollY > 275){
                if(!showMinimalLogo) setShowMinimalLogo(true);
            }else{
                if(showMinimalLogo) setShowMinimalLogo(false);
            }
        }
    // eslint-disable-next-line
    }, [scrollY]);

    const scrollEventLogo= ()=> {
        setScrollY(window.scrollY);
    }

    useEffect(()=> {
        document.addEventListener('scroll', scrollEventLogo);
        if(location.pathname !== '/') setSelectedTab(0);
        if(location.pathname === '/products') setSelectedTab(1);    
        if(location.pathname === '/talk-to-me') setSelectedTab(2);

        return _ => {
            window.removeEventListener('scroll', scrollEventLogo);
        }
    // eslint-disable-next-line
    }, []);  

    const changedTabs= (event, newvalue)=> {
        setSelectedTab(newvalue);
    }

    return (
        <div className="HeaderSite" style={{background: colorApp.mostStrongBack}}>
            
            <div className="area-logo-header-small">
                {showMinimalLogo &&
                    <img style={{height: '100px', width: '100%', background: 'yellow', marginTop: '0px', marginLeft: '0px'}} alt=""></img>
                }
            </div>

            {sizeWindowRedux <= 420 &&
                <div className="area-menu-header-small">
                    <img
                        src={menuImg}
                        alt=""
                        style={{background: colorApp.secondaryBack}}
                        onClick={()=> setOpenedMenu(true)}
                    ></img>
                    <Drawer
                        anchor="top"
                        open={openedMenu}
                    >
                        <ul 
                            className="drawer-menu"
                            style={{background: colorApp.secondaryBack}}
                        >
                            <li  
                                className="item-drawer-menu" 
                                onClick={()=> setOpenedMenu(false)}
                            >
                                <Link to="/" className="Link">Home</Link>                                
                            </li>
                            <li 
                                className="item-drawer-menu" 
                                onClick={()=> setOpenedMenu(false)}
                            >
                                <Link to="/products" className="Link">Produtos</Link>                                 
                            </li>
                            <li 
                                className="item-drawer-menu"
                                onClick={()=> setOpenedMenu(false)}
                            >
                                <Link to="/talk-to-me" className="Link">Fale conosco</Link>                                  
                            </li>
                            <li
                                className="item-drawer-menu"
                                onClick={()=> setOpenedMenu(false)}
                            >
                                X
                            </li>
                        </ul>
                    </Drawer>
                </div>
            }

            {sizeWindowRedux > 420 &&
                <Tabs
                    value={selectedTab}
                    className="Tab-component"
                    onChange={changedTabs}
                    selectionFollowsFocus={true}
                >
                    
                    <Tab 
                        label="Home" 
                        className="Tabs-component"
                        style={{color: 'white'}}
                        to='/' 
                        component={Link}
                    ></Tab>
                    

                   
                    <Tab 
                        label="Produtos" 
                        className="Tabs-component"
                        style={{color: 'white'}}
                        to='/products' 
                        component={Link}
                    />
                    
                    <Tab 
                        label="Fale conosco" 
                        className="Tabs-component"
                        style={{color: 'white'}}
                        to='/talk-to-me' 
                        component={Link}
                        wrapped
                    />
                </Tabs>
            }
            
        </div>
    );
}

export default HeaderSite;