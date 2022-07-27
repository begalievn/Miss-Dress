import React, { useState } from "react";

import classes from "./categoriesAside.module.scss";

const categories = [
  {
    id: 1,
    title: "Верхняя одежда",
    children: [
      {
        id: 10,
        title: "Куртка",
        children: [],
      },
      {
        id: 11,
        title: "Пальто",
        children: [
          {
            id: 15,
            title: "Юбки",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Юбки",
    children: [],
  },
  {
    id: 3,
    title: "Джинсы",
    children: [],
  },
  {
    id: 4,
    title: "Брюки",
    children: [],
  },
  {
    id: 5,
    title: "Футболки",
    children: [
      {
        id: 10,
        title: "Куртка",
        children: [],
      },
      {
        id: 11,
        title: "Пальто",
        children: [
          {
            id: 15,
            title: "Юбки",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Шорты",
    children: [],
  },
  {
    id: 7,
    title: "Топы",
    children: [],
  },
  {
    id: 8,
    title: "Пижамы",
    children: [],
  },
];

const CategoriesAside = () => {
  const [activeMenus, setActiveMenus] = useState<string[]>([]);

  const handleMenuClick = (data: any) => {
    console.log(data);
  };

  const handleArrowClick = (menuName: string) => {
    let newActiveMenus = [...activeMenus];

    if (newActiveMenus.includes(menuName)) {
      let index = newActiveMenus.indexOf(menuName);
      if (index > -1) {
        newActiveMenus.splice(index, 1);
      }
    } else {
      newActiveMenus.push(menuName);
    }

    setActiveMenus(newActiveMenus);
  };

  interface IListMenu {
    dept: any;
    data: any;
    hasChildren: any;
    menuName: string;
    menuIndex: any;
  }

  const ListMenu = ({
    dept,
    data,
    hasChildren,
    menuName,
    menuIndex,
  }: IListMenu) => (
    <li>
      <div
        className={
          activeMenus.includes(menuName)
            ? `${classes.item} ${classes.orange_color}`
            : `${classes.item}`
        }
        style={{ paddingLeft: `${dept * 18}px` }}
      >
        <span
          className={classes.label}
          onClick={
            hasChildren.length !== 0
              ? () => handleArrowClick(menuName)
              : () => handleMenuClick(data)
          }
        >
          {data.title}
        </span>
        {hasChildren.length !== 0 && (
          <span
            onClick={() => handleArrowClick(menuName)}
            className={
              activeMenus.includes(menuName)
                ? `${classes.arrow} ${classes.orange_color}`
                : `${classes.arrow}`
            }
            style={{
              transform: activeMenus.includes(menuName)
                ? "rotate(180deg)"
                : "rotate(0deg)",
            }}
          ></span>
        )}
      </div>
      {hasChildren && (
        <SubMenu
          dept={dept}
          data={data.children}
          toggle={activeMenus.includes(menuName)}
          menuIndex={menuIndex}
        />
      )}
    </li>
  );

  interface ISubMenu {
    dept: any;
    data: Array<any>;
    toggle: boolean;
    menuIndex: number;
  }

  const SubMenu = ({ dept, data, toggle, menuIndex }: ISubMenu) => {
    if (!toggle) {
      return null;
    }
    dept = dept + 1;
    return (
      <ul>
        {data.map((menu: any, index: number) => {
          const menuName = `sidebar-submenu-${dept}-${menuIndex}-${index}`;
          return (
            <div key={index}>
              <ListMenu
                dept={dept}
                data={menu}
                hasChildren={menu.children}
                menuName={menuName}
                key={menuName}
                menuIndex={index}
              />
            </div>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.categories}>
        <ul>
          {categories.map((menu, index) => {
            const dept = 1;
            const menuName = `sidebar-menu-${dept}-${index}`;
            return (
              <div key={index}>
                <ListMenu
                  dept={dept}
                  data={menu}
                  hasChildren={menu.children}
                  menuName={menuName}
                  menuIndex={index}
                />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesAside;
