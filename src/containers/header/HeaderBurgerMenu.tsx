import { Link,useLocation } from "react-router-dom";

import React, { FC, useEffect,} from "react";

import { pages } from "./constants";

import style from "./Header.module.scss";
interface IBurgerMenu {

  animation:string;
  setAnimation: (animation:string)=>void;
};

const HeaderBurgerMenu: FC<IBurgerMenu> = ({setAnimation,animation,}) => {

  
  const location = useLocation();
  useEffect(() => {
    
  
    return () => {
      setAnimation("menuModalOpen");
    };
  }, []);
  
  
  return (
    <div className={`${style.menuModal} ${style[animation]}`}>
      <ul>
        {pages.map(page => (
          <Link to={page.link} key={page.id}>
            <li className={
              location.pathname === page.link
                ? style.activeNavbar
                : ""
            }  >{page.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HeaderBurgerMenu;