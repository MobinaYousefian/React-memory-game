'use client'
import {CardsContainer} from "@/components/CardsContainer";
import {useSelector} from "react-redux";
import {FinishedGame} from "@/components/FinishedGame";
import {NotStarted} from "@/components/NotStarted";
import {Timer} from "@/components/Timer";

export const Body = () => {
    const {isStarted, characters, isFinished, isPreview, timer} = useSelector(state => state.game);

    return (
        <>
            {
                (!isPreview && timer > 0) &&
                <div className={"pb-2"}>
                    <Timer/>
                </div>
            }
            <section className={"backdrop-blur-sm bg-[#ffffffBA] p-4 rounded-lg mx-auto w-full sm:w-4/5"}>
                {
                    isStarted === false ?
                        <NotStarted/>
                        : isFinished === true ?
                            <FinishedGame/>
                            :
                            <CardsContainer characters={characters} isPreview={isPreview}/>
                }
            </section>
        </>
    )
}