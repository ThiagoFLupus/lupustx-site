import { useSelector } from 'react-redux';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import './HeaderSite.css';
import menuImg from './menu.png';


function HeaderSite(){
    const colorApp= useSelector(state=> state.generalReducer.colorApp);
    console.log(colorApp);
    const sizeWindowRedux= useSelector(state=> state.generalReducer.width);
    const [openedMenu, setOpenedMenu]= useState(false);
    const [selectedTab, setSelectedTab]= useState(0);

    const changedTabs= (event, newvalue)=> {
        setSelectedTab(newvalue);
    }

    return (
        <div className="HeaderSite" style={{background: colorApp.mostStrongBack}}>
            <div className="area-logo-header-small">
            
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
                            <li  className="item-drawer-menu">
                                Home
                            </li>
                            <li className="item-drawer-menu">
                                Produtos
                            </li>
                            <li className="item-drawer-menu">
                                Fale conosco
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
                    />
                    <Tab 
                        label="Produtos" 
                        className="Tabs-component"
                        style={{color: 'white'}}
                    />
                    <Tab 
                        label="Fale conosco" 
                        className="Tabs-component"
                        style={{color: 'white'}}
                        wrapped
                    />
                </Tabs>
            }
            
        </div>
    );
}

export default HeaderSite;