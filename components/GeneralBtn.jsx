export const GeneralBtn = ({buttonText, description, fn, customCss, hoverActive}) => {
    return (
        <div className={"cursor-pointer px-1 drop-shadow-lg"}>
            <button onClick={fn} className={`group rounded-3xl duration-100 transition-all px-5 md:px-8 py-2 text-center text-xl sm:text-2xl ${customCss} ${hoverActive}`}>
                <span className={"font-bold group-hover:text-lg sm:group-hover:text-[1.7rem]"}>
                    {buttonText}
                </span>
                <p className={"text-xs sm:text-xl"}>
                    {description}
                </p>
            </button>
        </div>
    )
}