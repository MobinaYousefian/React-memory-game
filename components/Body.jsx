'use client'
import Image from "next/image";
import {CardsContainer} from "@/components/CardsContainer";
import {useSelector} from "react-redux";
import {FinishedGame} from "@/components/FinishedGame";

export const Body = () => {
    const {isStarted, characters, isFinished, isPreview} = useSelector(state => state.game);

    return (
        <section className={"backdrop-blur-sm bg-[#ffffffBA] p-4 mt-10 rounded-lg mx-auto"}>
            {
                isStarted === false ?
                    <div className={"flex flex-col justify-center items-center py-14 md:py-24"}>
                        <Image src={"/icons/naruto-icon.png"} width={577} height={433} alt={"icon"} className={"w-44 h-44"}/>
                        <h5 className={"font-medium text-3xl mt-4 text-center"}>
                            Click the Start button above to begin
                        </h5>
                    </div>
                    : isFinished === true ?
                        <FinishedGame/>
                    :
                        <CardsContainer characters={characters} isPreview={isPreview}/>
            }
        </section>
    )
}