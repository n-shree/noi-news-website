import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";


const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <Link to={item.path} className="sidebarLink" onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <div className="sidebarLabel">{item.title}</div>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </Link>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <Link to={item.path} className="dropdownLink" key={index}>
                            <div className="sidebarLabel">{item.title}</div>
                        </Link>
                    );
                })}
        </>
    );
};

export default SubMenu;