import React, { useState } from "react";

import { CategoryTypes } from "../../../../utils/types/types";

import classes from "./categoriesAside.module.scss";

interface ICategoryAside {
  categories: CategoryTypes[];
  setSelectedCategory: (value: number) => void;
}

const CategoriesAside = ({
  categories,
  setSelectedCategory,
}: ICategoryAside) => {
  const [activeMenus, setActiveMenus] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState(0);

  // console.log("CategoryAside: ", categories);

  const handleMenuClick = (data: any) => {
    // console.log(data);
    setSelectedCategory(data.id);
    setActiveCategory(data.id);
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
          className={
            activeCategory === data.id
              ? [classes.active_category, classes.label].join(" ")
              : classes.label
          }
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
