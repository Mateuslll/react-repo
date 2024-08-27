import { GeoForm } from "@/components/GeoForm";
import { Person } from "@/components/Person";
import { Card } from "@/components/Card";
import { Circle } from "@/components/Circle";
const Page = () => {
  return (
    <div>
      {/* <h3>Texto Complementar</h3>
      <GeoForm /> */}
      <>
        <h3 className="text-3xl font-bold italic">"Frase de efeito"</h3>
        <p className="text-right text-sm">- Autor desconhecido</p>
        {/* <Circle/> */}
      </>
      <Card phrase="Frase de efeito" author="Salve" />
      {/* <Person
        name="Lucian Legend"
        avatar={
          "https://ddragon.leagueoflegends.com/cdn/14.13.1/img/champion/Lucian.png"
        }
        roles={["Adcarry", "Dps", "Mid/bottom"]}
      />
      <Person
        name="Lucian Legend"
        avatar={
          "https://ddragon.leagueoflegends.com/cdn/14.13.1/img/champion/Lucian.png"
        }
        roles={["Adcarry", "Dps", "Mid/bottom"]}
      />
      <Person
        name="Kha'zix"
        roles={["Adcarry", "Dps", "Mid/bottom"]}
      /> */}
    </div>
  );
};

export default Page;
