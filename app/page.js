import {Title} from "@/components/Title";
import {CardsContainer} from "@/components/CardsContainer";

export default function Home() {
  return (
      <main className={"font-caveat px-4"}>
          <Title/>
          <CardsContainer/>
      </main>
  );
}
