import { FC } from "react";

import { Card, CardBody, Heading, Image, Stack } from "@chakra-ui/react";

interface CustomCardProps {
  image: string;
  title: string;
  onClick?: (param?: any) => void;
}

const CustomCard: FC<CustomCardProps> = ({ image, title, onClick }) => {
  return (
    <Card
      maxW="sm"
      cursor="pointer"
      onClick={onClick}
      bg="rgba(255, 255, 255, 0.25)"
      backdropFilter="blur( 4px )"
      border="1px solid rgba( 255, 255, 255, 0.18 )"
      borderRadius="lg"
      color="#8BCF21"
    >
      <CardBody>
        <Image src={image} alt={`card-${title}`} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CustomCard;
