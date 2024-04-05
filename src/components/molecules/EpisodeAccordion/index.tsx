import { FC } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Spinner,
} from "@chakra-ui/react";

import {
  QUERY_KEY_EPISODE,
  useGetEpisodes,
} from "@/services/episodes/useEpisodes";

import { useApp } from "@/context";

const EpisodeAccordion: FC = () => {
  const {
    state: { cardType },
  } = useApp();

  const { data: episodes, isLoading } = useGetEpisodes({
    queryKey: QUERY_KEY_EPISODE,
    enabled: cardType === "Episódios",
  });

  if (isLoading) <Spinner />;
  return (
    <Accordion allowToggle>
      {episodes &&
        episodes?.results!.map(({ id, name }) => (
          <AccordionItem key={id}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {name}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        ))}
    </Accordion>
  );
};

export default EpisodeAccordion;
