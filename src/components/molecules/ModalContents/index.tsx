import { FC, useCallback } from "react";

import { useApp } from "@/context";
import CustomModal from "@/components/atoms/CustomModal";

import CharacterCards from "../CharacterCard";
import EpisodeAccordion from "../EpisodeAccordion";
import LocationAccordion from "../LocationAccordion";

interface ModalContentsProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const ModalContents: FC<ModalContentsProps> = ({ isOpen, onClose }) => {
  const {
    state: { cardType, pageNumber },
    dispatch,
  } = useApp();

  const loadMore = () => {
    dispatch({
      type: "SET_PAGE_NUMBER",
      payload: pageNumber + 1,
    });
  };

  const renderContents = useCallback(() => {
    switch (cardType) {
      case "Personagens":
        return <CharacterCards />;
      case "Episódios":
        return <EpisodeAccordion />;
      case "Locais":
        return <LocationAccordion />;
    }
  }, [cardType]);

  return (
    <CustomModal
      title={cardType}
      isOpen={isOpen}
      onClose={onClose}
      onLoadMore={loadMore}
      children={<>{renderContents()}</>}
      size="xxl"
    />
  );
};

export default ModalContents;
