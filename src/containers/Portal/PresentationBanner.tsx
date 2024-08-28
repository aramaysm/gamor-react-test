
import styles from "./style.module.scss";
import { ButtonProps } from "../../services/models";
import { Button } from "../../components";



export const Presentation_Banner = ({styles}:any) => {


    return (
        <div className={"column gap-1 w-3 w-sm-9 p-2 just-bet " + styles.colmaincolor}>
          <div className="column">
            <h1 className={"color-title font-bold  "}>start</h1>
            <h1 className={"color-secondary-title2 font-bold"}>streaming</h1>
            <h1 className={"color-title font-bold"}>games </h1>
            <h1 className={"color-title font-bold"}> differently</h1>
          </div>
          <div className="column">
            <p className="color-dark">
              gamor now has a <strong>streming party</strong> platform
            </p>
          </div>
          <div className="row gap-1 items-center just-center w-full">
            <div className="column items-center">
              <Button
                label={"Create Account"}
                onClick={() => {}}
                color={"secondary3-active"}
              />
            </div>
            <div className="column items-center">
              <Button
                label={"Sign In"}
                onClick={() => {}}
                color={"secondary"}
              />
            </div>
          </div>
        </div>
    )
}