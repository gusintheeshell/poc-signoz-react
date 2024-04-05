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
  QUERY_KEY_LOCATIONS,
  useGetLocations,
} from "@/services/locations/useLocations";

import { useApp } from "@/context";

const LocationAccordion: FC = () => {
  const {
    state: { cardType },
  } = useApp();

  const { data: locations, isLoading } = useGetLocations({
    queryKey: QUERY_KEY_LOCATIONS,
    enabled: cardType === "Locais",
  });

  isLoading && <Spinner />;
  return (
    <Accordion allowToggle>
      {locations &&
        locations!.results!.map(({ id, name }) => (
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

export default LocationAccordion;
