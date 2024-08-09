'use client'
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {clearOpenCards, setFoundPairs, setIsFinished, setOpenCards} from "@/redux/features/gameSlice";
import {clsx} from "clsx";
import {useEffect, useRef} from "react";

export const Card = ({imgUrl, index, name}) => {
    const {openCards, foundPairs, characters} = useSelector(state => state.game);
    const dispatch = useDispatch();
    const timeOut = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        let checkTimeout = null;
        if (openCards.length === 2) {
            checkTimeout = setTimeout(handleCheckPairs, 500);
        }

        if ((Object.keys(foundPairs).length) * 2 === characters.length) {
            dispatch(setIsFinished())
        }

        return () => {
            clearTimeout(checkTimeout);
        };
    }, [openCards, foundPairs]);


    /* function to check pairs */
    const handleCheckPairs = () => {
        const [first, second] = openCards;
        if (characters[first].name === characters[second].name) {
            timeOut.current = setTimeout(() => {
                dispatch(setFoundPairs(characters[first].name));
                dispatch(clearOpenCards());
            }, 500)
        }

        //timeOut to auto flip the card when 2 cards aren`t a pair
        timeOut.current = setTimeout(() => {
            dispatch(clearOpenCards());
            if (cardRef.current) {
                cardRef.current.classList.remove("isFlipped");
            }
        }, 500);
    }

    /* function to handle the clicks on cards */
    const handleClickCard = () => {
        if (!openCards.includes(index) && openCards.length < 2) {
            cardRef.current.classList.toggle("isFlipped");
            dispatch(setOpenCards(index));
        }
    };

    return (
        <div className={clsx("cardsContainer", foundPairs[name] && "isFound")}>
            <div ref={cardRef} onClick={handleClickCard} className={"card"}>
                <div className={"card__face--front"}>
                    <Image src={"/icons/Question-mark256.png"} width={256} height={256} alt={"icon"} className={"rounded w-[5.8rem] h-[5.8rem]"}/>
                </div>
                <div className={"card__face--back"}>
                    <Image src={imgUrl} width={256} height={256} alt={imgUrl.split("/")[2]} className={"rounded w-[5.8rem] h-[5.8rem]"}/>
                </div>
            </div>
        </div>
    )
}