import { useDisclosure } from "@chakra-ui/react";

import Container from "@/components/Container";
import CustomCard from "@/components/CustomCard";
import CustomModal from "@/components/CustomModal";

import { CARDS_CONTENT } from "@/constants";

const EntryPoint = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Container>
        <>
          {CARDS_CONTENT.map(({ image, title }) => (
            <CustomCard
              image={image}
              title={title}
              key={image}
              onClick={onOpen}
            />
          ))}
        </>
      </Container>
      <CustomModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default EntryPoint;
