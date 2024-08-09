import {Card} from "@/components/Card";
import {CardPreview} from "@/components/CardPreview";

export const CardsContainer = ({characters, isPreview}) => {

    return (
        <div className={"h-full w-full flex flex-wrap justify-center items-center"}>
            {
                isPreview ?
                    <CardPreview characters={characters}/>
                    :
                characters.map((item, index) => (
                    <Card
                        key={index}
                        imgUrl={item.imgUrl}
                        name={item.name}
                        index={index}
                    />
                ))
            }
        </div>
    )
}