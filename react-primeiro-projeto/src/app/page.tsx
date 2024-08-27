import { GeoForm } from "@/components/GeoForm";
import { Person } from "@/components/Person";
import { Card } from "@/components/Card";
import { Circle } from "@/components/Circle";
const Page = () => {
  const people = [
    { id: 1, name: "Fulano", profession: "engineer" },
    { id: 2, name: "Ciclano", profession: "chemist" },
    { id: 3, name: "John", profession: "psychologist" },
    { id: 4, name: "Maria", profession: "doctor" },
    { id: 5, name: "Pedro", profession: "lawyer" },
  ];

  return (
    <div>
      <h1 className="font-bold text-2xl">Pessoas</h1>
      <h3>Texto Complementar</h3>
    </div>
  );
};

export default Page;
