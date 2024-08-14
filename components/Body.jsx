'use client'
import {CardsContainer} from "@/components/CardsContainer";
import {useSelector} from "react-redux";
import {FinishedGame} from "@/components/FinishedGame";
import {NotStarted} from "@/components/NotStarted";
import {Timer} from "@/components/Timer";
import {GameOver} from "@/components/GameOver";

export const Body = () => {
    const {isStarted, characters, isFinished, isPreview, timer, isGameOver} = useSelector(state => state.game);

    return (
        <>
            {
                (timer > 0 && !isPreview && !isFinished && !isGameOver) &&
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
                            : isGameOver ?
                                <GameOver/>
                                :
                                <CardsContainer characters={characters} isPreview={isPreview}/>
                }
            </section>
        </>
    )
}