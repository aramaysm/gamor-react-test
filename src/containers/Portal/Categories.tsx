import { Button } from "../../components";
import { categories } from "../../services/static_data";

export const Categories = ({styles}:any) => {
  return (
    <div className={"column gap-2 p-2 w-9 w-sm-9 "}>
      <div className="column">
        <h4 className="color-title"><strong>Trending Categories</strong></h4>
        <div className="row w-9 p-1 mt-1 gap-1 wrap just-bet">
          {categories.map((itemCat:any, index:number) => (
            <div className={"column w-2 w-sm-3 p-2 rounded-1 " + styles.colmaincolor}>
                <div className="row">
                <h5 className={"color-bg-second"}>{index}.</h5>
              </div>
              <div className="row">
                <h5 className="color-title">{itemCat.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="column"></div>
    </div>
  );
};
