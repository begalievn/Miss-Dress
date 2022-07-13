import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss'
const Header = () => {

    const pages = [
        { name: 'Товары', link: '/products', id: 1 },
      
        { name: 'О нас', link: '/about', id: 2 },
        { name: 'Доставка', link: '/delivery', id: 3 },
        { name: 'Контакты', link: '/contacts', id: 4 },
        { name: 'Новости', link: '/news', id: 5 },
      
        
      ];
   
   
   
    return (
        <div className={style.mainBlock} >
            <div>MissDress</div>
           
                <ul className={style.mainBlock_navbar}>
                    {pages.map(page =>(
                        <Link to={page.link}>
                     <li>{page.name}</li>
                     </Link>
                    ))}
                </ul> 
            <div>Иконки</div>
        </div>
    );
};

export default Header;