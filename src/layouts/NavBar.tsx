import React, { useContext } from "react";
import "../styles/_buttons.scss";
import { ButtonProps } from "../services/models";
import { Button, ToggleSwitch } from "../components/";
import styles from "./styles.module.scss";
import { useTheme } from "../contexts/ThemeContext/ThemeContext";

interface NavBarProps {
  title: string;
  buttons?: ButtonProps[];
}

export const NavBar: React.FC<NavBarProps> = ({
  title,
  buttons,
}: NavBarProps) => {
  const { theme, toggleTheme } = useTheme();

  const [isActive, setIsActive] = React.useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className={"row just-bet items-center " + styles.nav}>
      <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
        <li onClick={removeActive}>
          <a href="/" className={`${styles.navLink}`}>
            Home
          </a>
        </li>
        <li onClick={removeActive}>
          <a href="/streams" className={`${styles.navLink}`}>
            Streams
          </a>
        </li>
        <li onClick={removeActive}>
          <a href="/partys" className={`${styles.navLink}`}>
            Party
          </a>
        </li>
        <li onClick={removeActive}>
          <a href="/premium" className={`${styles.navLink}`}>
            Premium
          </a>
        </li>
      </ul>

      <div className={"column just-center " + styles.navTitle}>
        <a href="#home" className="color-title">
          {title}
        </a>
      </div>
      <div className={"column items-center " + styles.navButtons}>
        <div className="row gap-1 items-center just-center ">
          {buttons?.map((item) => (
            <div key={item.label} className="column items-center">
              <Button
                label={item.label}
                onClick={item.onClick}
                color={item.color}
                icon={item.icon}
                disabled={item.disabled}
              />
            </div>
          ))}

          <div key={"theme-change-button"} className="column items-center ms-2 ">
            <ToggleSwitch label={"Light Theme"} onClick={toggleTheme} />
          </div>
        </div>
      </div>
      <div
        className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
        onClick={toggleActiveClass}
      >
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>
      </div>
    </div>
  );
};
