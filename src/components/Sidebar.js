import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import "./Nav.css"
import logo from "./logo.png";
import "./Sidebar.css";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="menu">
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="nav">
          <div className="navIcon">
            <FaIcons.FaBars onClick={showSidebar} />
          </div>
          <div className="logo">
            <Link exact to="/"><img className="logo__img" alt="img" src={logo} /></Link>
          </div>
        </div>

        {
          sidebar ? <div className="sidebarNav" sidebar={sidebar}>
            <div className="sidebarWrap">
              <div className="navIcon">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </div>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </div>
          </div> : <></>
        }
      </IconContext.Provider>
    </div>
  );
};

export default Sidebar;