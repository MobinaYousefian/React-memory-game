'use client'
import {useDispatch, useSelector} from "react-redux";
import {triggerInstructions} from "@/redux/features/instructionsSlice";
import {GeneralBtn} from "@/components/GeneralBtn";
import {endGame} from "@/redux/features/gameSlice";

export const Title = () => {
    const dispatch = useDispatch();
    // const {isOpen} = useSelector(state => state.instructions);
    const {isStarted} = useSelector(state => state.game);

    const handleTriggerInstructions = () => {
        dispatch(triggerInstructions());
    };

    return (
        <div className={"px-2 flex flex-col justify-between items-center md:items-start select-none md:flex-row"}>
            <div className={"p-2 text-center md:w-3/6 lg:w-max"}>
                <h1 className={"px-5 py-2 font-bold text-3xl md:text-4xl text-gray-800 rounded-3xl bg-[#ffffffC4]"}>
                    Welcome to memory game Naruto!
                </h1>
            </div>
            <div className={"flex flex-row-reverse items-baseline p-1"}>
                <h4 onClick={handleTriggerInstructions} className={"drop-shadow-lg active:bg-[#ffffffBA] cursor-pointer group duration-100 transition-all hover:bg-[#ffffffD3] px-3 sm:px-4 py-1 text-gray-800 font-bold text-2xl sm:text-3xl bg-[#ffffffC4] rounded-3xl"}>
                    {/*<span className={clsx(isOpen === false ? "group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5" ,"transition-all duration-100 mr-3 font-sans text-xl")}>{"<"}</span>*/}
                    Instructions
                </h4>
                {
                    isStarted &&
                    <GeneralBtn
                        buttonText={"Go Home Ħ"}
                        description={""}
                        fn={ () => dispatch(endGame()) }
                        bg={"bg-[#0c0c0cD3]"}
                        bgHoverActive={"hover:bg-[#0c0c0cFF] active:bg-[#262626FF]"}
                    />
                }
            </div>
        </div>
    )
}