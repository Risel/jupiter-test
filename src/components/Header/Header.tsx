import { FC } from "react";
import logo from "../../assets/logo.svg";
import s from "./Header.module.scss";
import Navigation from "./Navigation/Navigation";
import { IMenuItem } from "../../types/menu";
import Button from "../Shared/Button/Button";
import Container from "../Shared/Container/Container";

const Header: FC = () => {
  const menuItems: IMenuItem[] = [
    { text: "About" },
    { text: "Services" },
    { text: "Pricing" },
    { text: "Blog" },
  ];

  return (
    <header className={s.header}>
      <Container>
        <div className={s.wrapper}>
          <img src={logo} alt="logo" className={s.logo} />
          <Navigation menuItems={menuItems} />
          <Button text="Contact" variant="dark" />
        </div>
      </Container>
    </header>
  );
};

export default Header;
