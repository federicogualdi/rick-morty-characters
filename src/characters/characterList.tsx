import React, { useEffect, useState } from 'react';
import { Character, CharacterFilter, getCharacters, Info } from '../api/rick-and-morty';
import { Pagination } from '../shared/pagination/Pagination';
import CharacterItem from './character';

export default function CharacterList() {
  const [nPages, setNPages] = useState<number>(0);
  const [characters, setCharacters] = useState<Character[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  useEffect(() => {
    const characterApi = async (filters?: CharacterFilter) =>
      getCharacters(filters).then((res) => {
        setCharacters(res.results ?? []);
        setNPages(res.info?.pages!);
      });

    characterApi({ page: currentPage });
  }, [currentPage]);

  const listItems = characters.map((character) => (
    <CharacterItem key={character.id} {...character} />
  ));

  return (
    <section>
      <div>{listItems}</div>
      <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </section>
  );
}
