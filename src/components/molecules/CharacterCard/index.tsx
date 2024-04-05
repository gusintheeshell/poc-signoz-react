import { FC } from "react";
import { SimpleGrid } from "@chakra-ui/react";

import { useApp } from "@/context";
import {
  QUERY_KEY_CHARACTER,
  useGetCharacter,
} from "@/services/characters/useCharacters";

import CustomCard from "@/components/atoms/CustomCard";

const CharacterCards: FC = () => {
  const {
    state: { cardType },
  } = useApp();

  const { data: characters } = useGetCharacter({
    queryKey: QUERY_KEY_CHARACTER,
    enabled: cardType === "Personagens",
  });

  return (
    <SimpleGrid columns={4} spacing={4}>
      {characters &&
        characters?.results!.map(({ id, image, name }) => (
          <CustomCard key={id} image={image} title={name} />
        ))}
    </SimpleGrid>
  );
};

export default CharacterCards;
