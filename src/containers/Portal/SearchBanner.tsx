import { useEffect, useState } from "react";
import { Button, TextField } from "../../components";
import { EnumTypePlatform, GameModel } from "../../services/models";

interface IProps {
  games: GameModel[];
  onSelectGame: (data: GameModel) => void;
  users: string[];
  onSelectUser: (data: string) => void;
  styles: any;
}

export const SearchBanner = ({
  games,
  onSelectGame,
  users,
  onSelectUser,
  styles,
}: IProps) => {
  const [activeItem, setActiveItem] = useState(EnumTypePlatform.PARTY);
  const [isSearching, setIsSearching] = useState(true);
  const [gamesFounded, setGamesFounded] = useState<GameModel[]>(games);
  const [searchVal, setSearchVal] = useState<string>("");

  const buttonsPlatforms = [
    {
      label: EnumTypePlatform.PARTY,
    },
    {
      label: EnumTypePlatform.MATCHS,
    },
    {
      label: EnumTypePlatform.STREAMS,
    },
  ];

  useEffect(()=>{
    const gamesFound = games.filter((item) => item.platform === activeItem);
    setGamesFounded(gamesFound);
  },[games, activeItem])

  const searchGame = () => {
    const gamesFound = games.filter((item) => item.title.includes(searchVal));
    setGamesFounded(gamesFound);
  };

  return (
    <div className={"column gap-2 p-2 w-3 w-sm-9 " + styles.colmaincolor}>
      <div className="column">
        <h4 className="color-title">01. Choose platform</h4>
        <div className="row w-9 rounded-3 bg-color-body p-1 mt-1">
          {buttonsPlatforms.map((itemBut, index) => (
            <div className="column">
              <Button
                label={itemBut.label}
                onClick={() => setActiveItem(itemBut.label)}
                color={
                  itemBut.label === activeItem
                    ? "secondary3-active"
                    : "secondary3"
                }
              />
            </div>
          ))}
        </div>
      </div>

      <div className="column">
        <h4 className="color-title">02. Searching Game</h4>
        <div className="column just-bet rounded-3 bg-color-body p-1 mt-1">
          <div className="row just-bet items-center">
            <input
              className="w-full"
              type="search"
              placeholder="Search Game"
              onChange={(event) => {
                setSearchVal(event.target.value);
                setIsSearching(true);
              }}
            />
            <i className={"m-1  bx bx-sm color-title bxs-filter"}></i>
          </div>
          <div className="column h-250">
            {isSearching
              ? gamesFounded.map((gameIt) => (
                  <div
                    className="row just-bet mt-1 cursor-point"
                    key={gameIt.id}
                    onClick={() => {
                      setIsSearching(false);
                      onSelectGame(gameIt);
                    }}
                  >
                    <div className="column w-1 bg-main just-center items-center rounded-1">
                      <h4 className=" color-title">{gameIt.id}</h4>
                    </div>
                    <div className="column w-6  p-1  color-title">
                      <h4 className=" color-title">{gameIt.title}</h4>
                    </div>
                    <div className="column w-2 bg-color-body p-1 just-center items-center">
                      <img src={gameIt.photo} height={25} width={25} />
                    </div>
                  </div>
                ))
              : users.map((userIt, index) => (
                  <div className="row gap-1 cursor-point mt-1" key={index + userIt}
                  onClick={()=>onSelectUser(userIt)}>
                    <div className="column w-1 bg-main just-center items-center rounded-1">
                      <h4 className=" color-title">{index}</h4>
                    </div>
                    <div className="column w-6  p-1  ">
                      <h4 className=" color-title"> {userIt}</h4>
                    </div>
                    <div className="column w-1 bg-main just-center items-center rounded-1">
                    <h4 className=" color-title"> + </h4>
                    </div>
                  </div>
                ))}
          </div>
          <div className="row w-full just-center items-center">
            <Button
              label={"Search Now"}
              onClick={() => searchGame()}
              color={"secondary-inverse"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
