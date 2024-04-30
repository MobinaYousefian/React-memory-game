import {Card} from "@/components/Card";

export const CardsContainer = ({characters}) => {

    return (
        <div className={"h-fit w-full flex flex-wrap justify-center items-center"}>
            {
                characters.map((item, index) => (
                    <Card
                        key={index}
                        imgUrl={item.imgUrl}
                        name={item.name}
                        index={index}
                        characters={characters}
                    />
                ))
            }
        </div>
    )
}