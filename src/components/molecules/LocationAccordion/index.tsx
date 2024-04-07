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

import { useGetLocationByPage } from "@/services/locations/useLocations";
import { Location } from "@/services/locations/types";

import { useApp } from "@/context";

const LocationAccordion: FC = () => {
  const {
    state: { pageNumber },
  } = useApp();

  const { data, isRefetching } = useGetLocationByPage(pageNumber);
  const [locations, setLocations] = useState<Array<Location>>([]);

  useMemo(() => {
    if (data?.pages) {
      const newCharacters = data.pages.flatMap((page) => page.results || []);
      const updatedCharacters = [...locations, ...newCharacters].reduce<
        Location[]
      >((acc, current) => {
        if (acc.findIndex(({ id }) => id === current.id) === -1) {
          acc.push(current);
        }
        return acc;
      }, []);
      setLocations(updatedCharacters);
    }
  }, [data]);

  isRefetching && <Spinner />;
  return (
    <Accordion allowToggle>
      {locations &&
        locations.map(({ id, name }) => (
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
