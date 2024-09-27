import { GeoForm } from '@/components/GeoForm';
import { Person } from '@/components/Person';
import { Card } from '@/components/Card';
import { Circle } from '@/components/Circle';
import { peopleList } from '@/data/peopleList';
import React from 'react';
const Page = () => {
  const chemists = peopleList.filter(
    (person) => person.profession === 'chemist',
  );

  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl text-color">Pessoas</h1>
        <h3>Listagem Abaixo</h3>
        {peopleList.length > 0 && (
          <ul>
            {peopleList.map((person) => (
              <li key={person.id}>
                {person.name} - {person.profession}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h3>Lista de Quimicos</h3>
        {chemists.length > 0 && (
          <ul>
            {chemists.map((person) => (
              <li key={person.id}>
                {person.name} - {person.profession}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Page;
