export const GeneralBtn = ({buttonText, description, fn, bg, bgHoverActive}) => {
    return (
        <div className={"cursor-pointer px-2 sm:p-3"}>
            <button onClick={fn} className={`group rounded-3xl duration-100 transition-all px-4 md:px-8 py-2 text-white text-center ${bg} ${bgHoverActive}`}>
                <span className={"font-bold text-xl sm:text-2xl"}>
                    {buttonText}
                </span>
                {/*<span className={"group-hover:translate-x-1 pl-2 transition-all duration-75"}>{"-->"}</span>*/}
                <p className={"text-xs sm:text-xl"}>
                    {description}
                </p>
            </button>
        </div>
    )
}