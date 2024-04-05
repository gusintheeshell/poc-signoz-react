import { FC } from "react";

import { Card, CardBody, Heading, Image, Stack } from "@chakra-ui/react";

interface CustomCardProps {
  image: string;
  title: string;
  onClick?: () => void;
}

const CustomCard: FC<CustomCardProps> = ({ image, title, onClick }) => {
  return (
    <Card maxW="sm" cursor="pointer" onClick={onClick}>
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
