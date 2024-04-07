import { FC, useMemo, useState } from "react";
import { SimpleGrid, Spinner } from "@chakra-ui/react";

import CustomCard from "@/components/atoms/CustomCard";
import { useApp } from "@/context";
import { useGetCharacterByPage } from "@/services/characters/useCharacters";
import { Character } from "@/services/characters/types";

const CharacterCards: FC = () => {
  const {
    state: { pageNumber },
  } = useApp();

  const { data, isRefetching } = useGetCharacterByPage(pageNumber);
  const [characters, setCharacters] = useState<Array<Character>>([]);

  useMemo(() => {
    if (data?.pages) {
      const newCharacters = data.pages.flatMap((page) => page.results || []);
      const updatedCharacters = [...characters, ...newCharacters].reduce<
        Character[]
      >((acc, current) => {
        if (acc.findIndex(({ id }) => id === current.id) === -1) {
          acc.push(current);
        }
        return acc;
      }, []);
      setCharacters(updatedCharacters);
    }
  }, [data]);

  if (isRefetching) return <Spinner />;
  return (
    <SimpleGrid columns={4} spacing={4}>
      {characters.map(({ id, image, name }) => (
        <CustomCard key={id} image={image} title={name} />
      ))}
    </SimpleGrid>
  );
};

export default CharacterCards;
