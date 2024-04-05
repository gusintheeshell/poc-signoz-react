import { FC } from "react";

import { Box } from "@chakra-ui/react";
interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <Box
      border={0}
      bgColor="transparent"
      borderRadius="xl"
      boxShadow="md"
      width="auto"
      minW="300px"
      display="flex"
      justifyContent="space-around"
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      p={16}
    >
      <>{children}</>
    </Box>
  );
};

export default Container;
