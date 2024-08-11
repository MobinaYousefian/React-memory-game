'use client'
import {useDispatch, useSelector} from "react-redux";
import {triggerInstructions} from "@/redux/features/instructionsSlice";
import {clsx} from "clsx";

export const Title = () => {
    const dispatch = useDispatch();
    const {isOpen} = useSelector(state => state.instructions);

    const handleTriggerInstructions = () => {
        dispatch(triggerInstructions());
    };

    return (
        <div className={"px-2 flex flex-col justify-between items-center select-none md:flex-row"}>
            <div className={"p-2 text-center"}>
                <h1 className={"px-5 py-2 font-bold text-3xl md:text-4xl text-gray-800 rounded-3xl bg-[#ffffffC4]"}>
                    Welcome to the memory game Naruto!
                </h1>
            </div>
            <div className={"flex flex-row-reverse items-baseline"}>
                <h4 onClick={handleTriggerInstructions} className={"active:bg-[#ffffffBA] cursor-pointer group duration-100 transition-all hover:bg-[#ffffffD3] px-4 py-2 text-gray-800 font-bold text-2xl md:text-3xl bg-[#ffffffC4] rounded-3xl"}>
                    <span className={clsx(isOpen === false ? "group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5" ,"transition-all duration-100 mr-3 font-sans text-xl")}>{"<"}</span>
                    Instructions
                </h4>
            </div>
        </div>
    )
}