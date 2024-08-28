import React, { useEffect } from "react";
import { NavBar } from "../../layouts/NavBar";
import styles from "./style.module.scss";
import { ButtonProps, GameModel } from "../../services/models";
import { Button } from "../../components";
import {
  Categories,
  Presentation_Banner,
  Promotion_Banner,
  SearchBanner,
} from "../../containers/Portal";
import { games, users } from "../../services/static_data";
import { useNavigate } from "react-router-dom";

export const Portal = ({}) => {

  const navigate = useNavigate();

  const buttonsNavBar: ButtonProps[] = [
    {
      color: "secondary",
      label: "Sign In",
      onClick: () => {navigate("/login")},
    },
    {
      color: "secondary2",
      label: "Create Account",
      onClick: () => {navigate("/create")},
    },
  ];

  const [selectedGame, setSelectedGame] = React.useState<GameModel>(games[0]);
  const [selectedUsers, setSelectedUsers] = React.useState<string[]>([]);

  const onSelectUser = (userNew: string) => {
    const userFound = selectedUsers.find((item) => item === userNew);
    const users = selectedUsers;

    if (!userFound) {
      users.push(userNew);
      setSelectedUsers(users);
    }
  };

  return (
    <div className={styles.container}>
      <NavBar title={"Gamor"} buttons={buttonsNavBar} />
      <div className={"row just-center mt-3 pb-1 wrap"}>
        <Presentation_Banner styles={styles} />

        <Promotion_Banner
          styles={styles}
          promotion_title={selectedGame.title}
          promotion_subtitle={selectedGame.description}
          promotion_time={selectedGame.timeAlive
            ?.toISOString()
            .substring(11, 16)}
          promotion_photo={selectedGame.photo}
          usersSelected={selectedUsers}
        />
        <SearchBanner
          users={users}
          games={games}
          onSelectGame={(data: GameModel) => {
            setSelectedGame(data);
          }}
          styles={styles}
          onSelectUser={(data) => {
            const userFound = selectedUsers.find((item) => item === data);

            if (!userFound) {
              setSelectedUsers([...selectedUsers, data]);
            }
          }}
        />
      </div>
      <div className={"row just-center mt-3 pb-1 wrap"}>
        <Categories styles={styles} />
      </div>
    </div>
  );
};
