export const GeneralBtn = ({buttonText, description, fn, customCss, hoverActive}) => {
    return (
        <div className={`rounded-3xl cursor-pointer drop-shadow-lg ${customCss} ${hoverActive}`}>
            <button onClick={fn} className={`group duration-100 transition-all px-5 md:px-8 py-2 text-center text-xl sm:text-2xl`}>
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