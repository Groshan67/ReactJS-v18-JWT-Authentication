import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import Login from "../../pages/Login";
import AuthContext from "./AuthContext";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1.5rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const { user, login } = useContext(AuthContext);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {localStorage.getItem("tokens") ? (
        <>
          <IconContext.Provider value={{ color: "#fff" }}>
            <Nav>
              <NavIcon to="#">
                <FaIcons.FaBars onClick={showSidebar} />
              </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
              <SidebarWrap>
                <NavIcon to="#">
                  <AiIcons.AiOutlineClose onClick={showSidebar} />
                </NavIcon>
                {SidebarData.map((item, index) => {
                  return <SubMenu item={item} key={index} />;
                })}
              </SidebarWrap>
            </SidebarNav>
          </IconContext.Provider>
          {children}
        </>
      ) : (
        <Login value={{ user, login }} />
      )}
    </>
  );
};

export default Layout;
