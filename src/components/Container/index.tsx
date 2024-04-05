import { FC } from "react";

import { Box } from "@chakra-ui/react";

interface ContainerProps {
  children: JSX.Element;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <Box
      bg="brand.600"
      m={24}
      p={8}
      borderRadius="xl"
      boxShadow="md"
      width="auto"
      minW="300px"
      display="flex"
      justifyContent="space-around"
    >
      {children}
    </Box>
  );
};

export default Container;
