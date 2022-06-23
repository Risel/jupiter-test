import { FC } from "react";
import s from "./Navigation.module.scss";
import { IMenuItem } from "../../../types/menu";

interface NavigationProps {
  menuItems: IMenuItem[];
}

const Navigation: FC<NavigationProps> = ({ menuItems }) => {
  return (
    <nav className={s.nav}>
      {menuItems.map((item, index) => (
        <a key={index} href="/" className={s.link}>
          {item.text}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
