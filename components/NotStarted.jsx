"use client"
import Image from "next/image";
import {StartBtn} from "@/components/StartBtn";
import {setCharacters, setTimer, startGame} from "@/redux/features/gameSlice";
import {useDispatch} from "react-redux";

export const NotStarted = () => {
    const dispatch = useDispatch();

    let characters = [
        {imgUrl : "/icons/6.jpg", name : "naruto"},
        {imgUrl : "/icons/7.jpg", name : "hinata"},
        {imgUrl : "/icons/8.jpg", name: "sarada"},
        {imgUrl : "/icons/9.jpg", name: "sakura"},
        {imgUrl : "/icons/1.jpg", name: "kakashi"},
        {imgUrl : "/icons/4.jpg", name: "himavari"},
        {imgUrl : "/icons/5.jpg", name: "sasuke"},
        {imgUrl :"/icons/2.jpg", name: "kurama"},
        {imgUrl : "/icons/3.jpg", name: "boruto"},
        {imgUrl : "/icons/10.jpg", name: "kawaki"},
        {imgUrl : "/icons/11.jpg", name: "gara"},
        {imgUrl : "/icons/12.jpg", name: "jiraya"},
        {imgUrl : "/icons/13.jpg", name: "itachi"},
        {imgUrl : "/icons/14.jpg", name: "orochimaru"},
        {imgUrl : "/icons/15.jpg", name: "mitsoki"},
        {imgUrl : "/icons/16.jpg", name: "minato"},
        {imgUrl : "/icons/17.jpg", name: "mightGuy"},
        {imgUrl : "/icons/16.jpg", name: "minato"},
        {imgUrl : "/icons/17.jpg", name: "mightGuy"},
        {imgUrl : "/icons/18.jpg", name: "kushina"},
        {imgUrl : "/icons/18.jpg", name: "kushina"},
        {imgUrl : "/icons/10.jpg", name: "kawaki"},
        {imgUrl : "/icons/11.jpg", name: "gara"},
        {imgUrl : "/icons/12.jpg", name: "jiraya"},
        {imgUrl : "/icons/13.jpg", name: "itachi"},
        {imgUrl : "/icons/3.jpg", name: "boruto"},
        {imgUrl : "/icons/4.jpg", name: "himavari"},
        {imgUrl : "/icons/5.jpg", name: "sasuke"},
        {imgUrl : "/icons/14.jpg", name: "orochimaru"},
        {imgUrl : "/icons/1.jpg", name: "kakashi"},
        {imgUrl :"/icons/2.jpg", name: "kurama"},
        {imgUrl : "/icons/6.jpg", name : "naruto"},
        {imgUrl : "/icons/7.jpg", name : "hinata"},
        {imgUrl : "/icons/8.jpg", name: "sarada"},
        {imgUrl : "/icons/9.jpg", name: "sakura"},
        {imgUrl : "/icons/15.jpg", name: "mitsoki"},
    ]


// Fisher Yates Shuffle
    function swap(array, i, j) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    function shuffledChar (charArray) {
        const length = charArray.length;
        for (let i = length; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * i);
            const currentIndex = i - 1;
            swap(charArray, currentIndex, randomIndex)
        }
        return charArray;
    }

    const handleStartStandard = () => {
        dispatch(setCharacters(shuffledChar(characters)));
        dispatch(startGame());
    };

    const handleStartChallenge = () => {
        dispatch(setTimer(60000));
        handleStartStandard();
    }

    return (
        <div className={"flex flex-col justify-center items-center py-8 sm:py-18"}>
            <Image src={"/icons/naruto-icon.png"} width={577} height={433} alt={"icon"} className={"w-32 h-32 sm:w-44 sm:h-44"}/>
            <h5 className={"font-medium text-2xl md:text-3xl mt-4 text-center"}>
                Choose a game mode to play
            </h5>
            <div className={"flex flex-col items-center md:flex-row"}>
                <StartBtn
                    buttonText={"Standard"}
                    description={"18 pairs • No timer"}
                    fn={handleStartStandard}
                />
                <StartBtn
                    buttonText={"Challenge Mode"}
                    description={"18 pairs • 1 min timer"}
                    fn={handleStartChallenge}
                />
            </div>
        </div>
    )
}