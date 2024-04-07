import { Flex, useDisclosure } from "@chakra-ui/react";

import Container from "@/components/atoms/Container";
import CustomCard from "@/components/atoms/CustomCard";
import ModalContents from "@/components/molecules/ModalContents";

import { CARDS_CONTENT } from "@/constants";
import { useApp } from "@/context";
import { CardTypes } from "@/types";

const EntryPoint = () => {
  const { dispatch } = useApp();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleOnClose = () => {
    dispatch({ type: "SET_PAGE_RESET" });
    onClose();
  };

  return (
    <>
      <Container>
        <Flex flexDirection="column">
          <Flex flexDirection="row" gap={24}>
            {CARDS_CONTENT.map(({ image, title }) => (
              <CustomCard
                image={image}
                title={title}
                key={image}
                onClick={() => {
                  dispatch({
                    type: "SET_CARD_TYPE",
                    payload: title as CardTypes,
                  });
                  onOpen();
                }}
              />
            ))}
          </Flex>
        </Flex>
      </Container>

      <ModalContents isOpen={isOpen} onClose={handleOnClose} onOpen={onOpen} />
    </>
  );
};

export default EntryPoint;
