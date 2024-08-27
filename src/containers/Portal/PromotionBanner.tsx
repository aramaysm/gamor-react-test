

export const Promotion_Banner = ({styles, promotion_title, promotion_subtitle, promotion_time, promotion_photo}:any) => {

    return (
        <div className={"column just-center w-3 w-sm-9 pt-2 " + styles.coldiffcolor}>
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
               <img height={300} width={280} src={promotion_photo} />
            </div>
        </div>
    )
}