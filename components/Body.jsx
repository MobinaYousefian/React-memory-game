'use client'
import Image from "next/image";
import {CardsContainer} from "@/components/CardsContainer";
import {useDispatch, useSelector} from "react-redux";
import {FinishedGame} from "@/components/FinishedGame";
import {useEffect} from "react";
import {setIsFinished} from "@/redux/features/gameSlice";

export const Body = () => {
    const {isStarted, characters, foundPairs, isFinished} = useSelector(state => state.game);
    const dispatch = useDispatch();

    useEffect( () => {
        if (characters.length > 1) {
            if ((Object.keys(foundPairs).length) * 2 === characters.length) {
                dispatch(setIsFinished())
            }
        }
    }, [foundPairs])

    if (isFinished === true) return <FinishedGame/>
    return (
        <section className={"w-5/6 mx-auto bg-[#ffffffBA] backdrop-blur p-4 mt-10 rounded-lg"}>
            {
                isStarted === false ?
                    <div className={"flex flex-col justify-center items-center py-24"}>
                        <Image src={"/icons/naruto-icon.png"} width={577} height={433} alt={"icon"} className={"w-44 h-44"}/>
                        <h5 className={"font-medium text-3xl mt-4"}>
                            Click the Start button above to begin
                        </h5>
                    </div>
                    :
                    <CardsContainer
                        characters={characters}
                    />
            }
        </section>
    )
}