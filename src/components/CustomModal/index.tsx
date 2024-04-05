import { FC } from "react";

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { useGetCharacter } from "@/services/characters";
import CustomCard from "../CustomCard";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomModal: FC<CustomModalProps> = ({ isOpen, onClose }) => {
  const { data, isLoading } = useGetCharacter();
  console.log(data);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="100px">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="auto"
          >
            {isLoading ? (
              <></>
            ) : (
              data?.results.map(({ image, name }) => (
                <CustomCard image={image} title={name} key={name} />
              ))
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;
