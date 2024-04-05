import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

import Container from "@/components/Container";
import CustomCard from "@/components/CustomCard";
import CustomModal, { CardTypes } from "@/components/CustomModal";

import { CARDS_CONTENT } from "@/constants";

const EntryPoint = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [cardType, setCardType] = useState<CardTypes>("Personagens");

  const handleTypeCard = (typeCardValue: CardTypes) => {
    setCardType(typeCardValue);
  };

  return (
    <>
      <Container>
        <>
          {CARDS_CONTENT.map(({ image, title }) => (
            <CustomCard
              image={image}
              title={title}
              key={image}
              onClick={() => {
                handleTypeCard(title as CardTypes);
                onOpen();
              }}
            />
          ))}
        </>
      </Container>
      <CustomModal isOpen={isOpen} onClose={onClose} cardType={cardType} />
    </>
  );
};

export default EntryPoint;
