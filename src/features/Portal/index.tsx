import React, { useEffect } from "react";
import { NavBar } from "../../layouts/NavBar";
import styles from "./style.module.scss";
import { ButtonProps } from "../../services/models";
import { Button } from "../../components";
import { Presentation_Banner, Promotion_Banner } from "../../containers/Portal";
import CatPhoto from "../../assets/images/cute-cat-studio.png"

export const Portal = ({}) => {
  const buttonsNavBar: ButtonProps[] = [
    {
      color: "secondary",
      label: "Sign In",
      onClick: () => {},
    },
    {
      color: "secondary2",
      label: "Create Account",
      onClick: () => {},
    },
  ];

  const [selectedGame, setSelectedGame] = React.useState({
    title:"Fornite New Season",
    subtitle:"Join Live Now",
    time:"11:45",
    photo: CatPhoto
  });

  return (
    <div className={styles.container}>
      <NavBar title={"Gamor"} buttons={buttonsNavBar} />
      <div className={"row just-center mt-3 pb-1 wrap"}>
        <Presentation_Banner styles={styles} />
        <Promotion_Banner styles={styles} promotion_title={selectedGame.title} 
        promotion_subtitle={selectedGame.subtitle} promotion_time={selectedGame.time}
         promotion_photo={selectedGame.photo} />
        <div className={"column w-3 w-sm-9 " + styles.colmaincolor}></div>
      </div>
    </div>
  );
};
