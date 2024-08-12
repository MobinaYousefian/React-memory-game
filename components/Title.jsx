'use client'
import {useDispatch, useSelector} from "react-redux";
import {triggerInstructions} from "@/redux/features/instructionsSlice";
import {GeneralBtn} from "@/components/GeneralBtn";
import {endGame} from "@/redux/features/gameSlice";
import {clsx} from "clsx";

export const Title = () => {
    const dispatch = useDispatch();
    const {isStarted} = useSelector(state => state.game);

    const handleTriggerInstructions = () => {
        dispatch(triggerInstructions());
    };

    return (
        <div className={"pb-4 px-2 flex flex-col justify-between items-center md:items-center select-none md:flex-row"}>
            <div className={clsx("p-2 text-center", isStarted && "hidden")}>
                <h1 className={"px-5 py-2 font-bold text-3xl md:text-4xl text-gray-800 rounded-3xl bg-[#ffffffC4]"}>
                    Welcome to memory game Naruto!
                </h1>
            </div>
            <div className={clsx("flex flex-row-reverse items-baseline pt-1", isStarted && "justify-between w-full")}>
                <GeneralBtn
                    buttonText={"Instructions"}
                    description={""}
                    fn={handleTriggerInstructions}
                    customCss={"text-gray-800 bg-[#ffffffC4]"}
                    hoverActive={"hover:bg-[#ffffffD3] active:bg-[#ffffffBA]"}
                />
                {
                    isStarted &&
                    <GeneralBtn
                        buttonText={"Go Home"}
                        description={""}
                        fn={ () => dispatch(endGame()) }
                        customCss={"text-white bg-[#0c0c0cD3]"}
                        hoverActive={"hover:bg-[#0c0c0cFF] active:bg-[#262626FF]"}
                    />
                }
            </div>
        </div>
    )
}