import {Card} from "@/components/Card";

let characters = [
    "/icons/6.jpg",
    "/icons/7.jpg",
    "/icons/8.jpg",
    "/icons/9.jpg",
    "/icons/1.jpg",
    "/icons/4.jpg",
    "/icons/5.jpg",
    "/icons/2.jpg",
    "/icons/3.jpg",
    "/icons/10.jpg",
    "/icons/11.jpg",
    "/icons/12.jpg",
    "/icons/13.jpg",
    "/icons/14.jpg",
    "/icons/15.jpg",
    "/icons/16.jpg",
    "/icons/17.jpg",
    "/icons/16.jpg",
    "/icons/17.jpg",
    "/icons/18.jpg",
    "/icons/18.jpg",
    "/icons/10.jpg",
    "/icons/11.jpg",
    "/icons/12.jpg",
    "/icons/13.jpg",
    "/icons/14.jpg",
    "/icons/1.jpg",
    "/icons/2.jpg",
    "/icons/3.jpg",
    "/icons/4.jpg",
    "/icons/5.jpg",
    "/icons/6.jpg",
    "/icons/7.jpg",
    "/icons/8.jpg",
    "/icons/9.jpg",
    "/icons/15.jpg",
]

export const CardsContainer = () => {

    return (
        <div className={"h-[27rem] w-full flex flex-wrap justify-center items-center"}>
            {
                characters.map((item, i) => (
                    <Card
                        key={i}
                        imgUrl={item}
                    />
                ))
            }
        </div>
    )
}