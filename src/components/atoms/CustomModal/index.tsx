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

interface CustomModalProps {
  children: JSX.Element;
  title: string | null;
  isOpen: boolean;
  onClose: () => void;
  onLoadMore: () => void;
  size?: string;
}

const CustomModal: FC<CustomModalProps> = ({
  children,
  title,
  isOpen,
  onClose,
  onLoadMore,
  size = "md",
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={size}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="auto"
          >
            <>{children}</>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Fechar
            </Button>
            <Button variant="ghost" onClick={onLoadMore}>
              Carregar mais
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;
