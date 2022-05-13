import React from "react";
import styles from "./SideMenu.module.css";
import { sideMenuList } from "./mockup";
import { Menu } from "antd";
import { GiShinyApple } from "react-icons/gi";
import { useTranslation, WithTranslation } from 'react-i18next'

const SideMenu = () => {

  const { t } = useTranslation();
  return (
    <Menu mode="vertical" className={styles["side-menu"]}>
      <Menu.SubMenu title={<span>
        <GiShinyApple />&nbsp;&nbsp;
        {t("side_menu.fresh_fruit")}
      </span>}>
       
        <Menu.SubMenu title={
          <span>
            <GiShinyApple />&nbsp;&nbsp;
            {t("side_menu.oranges")}
          </span>}>
          <Menu.Item>
            <span>
              <GiShinyApple />&nbsp;&nbsp;
              {t("side_menu.jelly_oranges")}
            </span>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title={<span>
          <GiShinyApple />&nbsp;&nbsp;
          {t("side_menu.strawberries")}
        </span>}>
        </Menu.SubMenu>
        <Menu.SubMenu title={<span>
          <GiShinyApple />&nbsp;&nbsp;
          {t("side_menu.kiwi")}
        </span>}>
        </Menu.SubMenu>
        <Menu.SubMenu title={<span>
          <GiShinyApple />&nbsp;&nbsp;
          {t("side_menu.cherries")}
        </span>}>
        </Menu.SubMenu>
        <Menu.SubMenu title={<span>
          <GiShinyApple />&nbsp;&nbsp;
          {t("side_menu.other_fruits")}
        </span>}>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.SubMenu title={<span>
        <GiShinyApple />&nbsp;&nbsp;
        {t("side_menu.sea_food")}
      </span>}>
        <Menu.SubMenu title={<span>
          <GiShinyApple />&nbsp;&nbsp;
          {t("side_menu.crabs")}
        </span>}>
        </Menu.SubMenu>
        <Menu.SubMenu title={<span>
          <GiShinyApple />&nbsp;&nbsp;
          {t("side_menu.sea_cucumbers")}
        </span>}>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.SubMenu title={<span>
        <GiShinyApple />&nbsp;&nbsp;
        {t("side_menu.meats")}
      </span>}>
        <Menu.SubMenu title={<span>
          <GiShinyApple />&nbsp;&nbsp;
          {t("side_menu.beef_lamb")}
        </span>}>
        </Menu.SubMenu>
        <Menu.SubMenu title={<span>
          <GiShinyApple />&nbsp;&nbsp;
          {t("side_menu.duck")}
        </span>}>
        </Menu.SubMenu>
        <Menu.SubMenu title={<span>
          <GiShinyApple />&nbsp;&nbsp;
          {t("side_menu.chicken")}
        </span>}>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.SubMenu title={<span>
        <GiShinyApple />&nbsp;&nbsp;
        {t("side_menu.frozen_food")}
      </span>}>
        <Menu.SubMenu title={<span>
          <GiShinyApple />&nbsp;&nbsp;
          {t("side_menu.ice_creams")}
        </span>}>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.SubMenu title={<span>
        <GiShinyApple />&nbsp;&nbsp;
        {t("side_menu.produce")}
      </span>}>
        <Menu.SubMenu title={<span>
          <GiShinyApple />&nbsp;&nbsp;
          {t("side_menu.vegetables")}
        </span>}>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.SubMenu title={<span>
        <GiShinyApple />&nbsp;&nbsp;
        {t("side_menu.hotpot")}
      </span>}>
      </Menu.SubMenu>
      <Menu.SubMenu title={<span>
        <GiShinyApple />&nbsp;&nbsp;
        {t("side_menu.mushrooms")}
      </span>}>
      </Menu.SubMenu>
    </Menu>
  );

}
export default SideMenu