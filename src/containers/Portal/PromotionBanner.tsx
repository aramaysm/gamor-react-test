import { useEffect } from "react";

export const Promotion_Banner = ({
  styles,
  promotion_title,
  promotion_subtitle,
  promotion_time,
  promotion_photo,
  usersSelected,
}: any) => {


    useEffect(()=>{
        console.log("Updated",usersSelected);
    },[usersSelected])

  return (
    <div
      className={
        "column just-center items-center pt-2 w-3 w-sm-9  " +
        styles.coldiffcolor
      }
    >
      <div className="column w-full just-center items-center">
        <h1 className="color-title">{promotion_title}</h1>
      </div>
      <div className="column w-full just-center items-center">
        <p className="color-bg-second-bold font-bold">{promotion_subtitle}</p>
      </div>
      <div className="column w-full just-center items-center">
        <div className="d-flex just-center items-center bg-white rounded-3 w-3">
          <h2 className="color-bg-second">{promotion_time}</h2>
        </div>
      </div>
      <div className="column w-full just-center items-center">
        {usersSelected && usersSelected.length > 0 ? (
          <div className="column">
            <div className="column mt-3">
              <h3 className="color-title">
                <strong>Users invited</strong>
              </h3>
            </div>
            <div className="column mt-1">
              {usersSelected.map((userIt: any, index: number) => (
                <div className="row gap-1 cursor-point " key={index + userIt}>
                  <div className="column w-9  p-1  ">
                    <h4 className=" color-title"> {userIt}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <img height={300} width={280} src={promotion_photo} />
        )}
      </div>
    </div>
  );
};
