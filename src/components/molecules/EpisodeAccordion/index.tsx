import { FC, useMemo, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Spinner,
} from "@chakra-ui/react";

import { useApp } from "@/context";
import { useGetEpisodesByPage } from "@/services/episodes/useEpisodes";
import { Episode } from "@/services/episodes/types";

const EpisodeAccordion: FC = () => {
  const {
    state: { pageNumber },
  } = useApp();

  const { data, isRefetching } = useGetEpisodesByPage(pageNumber);
  const [episodes, setEpisodes] = useState<Array<Episode>>([]);

  useMemo(() => {
    if (data?.pages) {
      const newEpisodes = data.pages.flatMap((page) => page.results || []);
      const updatedEpisodes = [...episodes, ...newEpisodes].reduce<Episode[]>(
        (acc, current) => {
          if (acc.findIndex(({ id }) => id === current.id) === -1) {
            acc.push(current);
          }
          return acc;
        },
        []
      );
      setEpisodes(updatedEpisodes);
    }
  }, [data]);

  if (isRefetching) <Spinner />;
  return (
    <Accordion allowToggle>
      {episodes &&
        episodes?.map(({ id, name }) => (
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
