export const StartBtn = ({buttonText, description, fn}) => {
    return (
        <div className={"cursor-pointer p-3"}>
            <button onClick={fn} className={"group rounded-3xl active:bg-[#F3772DC6] duration-100 transition-all hover:bg-[#C2410CD3] px-10 py-2 bg-[#CE410AAF] text-white text-center"}>
                <span className={"font-bold text-xl sm:text-2xl"}>
                    {buttonText}
                </span>
                <span className={"group-hover:translate-x-1 font-caveat pl-0 transition-all duration-75"}>{">"}</span>
                <p className={"text-xs sm:text-xl"}>
                    {description}
                </p>
            </button>
        </div>
    )
}