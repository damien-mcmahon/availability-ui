import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import Image from "next/image";
import { GoStar } from "react-icons/go";

interface HotelCardProps {
  name: string;
  location: string;
  image: string;
  discount: number;
}

export default function HotelCard({
  name,
  location,
  image,
  discount,
}: HotelCardProps) {
  return (
    <Flex flexDirection="column">
      <Text fontSize="lg">{name}</Text>
      <Box position="relative" overflow="hidden" height={200} width={300}>
        <Box
          background="red"
          display="flex"
          p={2}
          borderRadius="lg"
          position="absolute"
          top={2}
          right={2}
        >
          <Icon as={GoStar} color="yellow.500" me={2} />
          <Text fontSize="xs" color="white">
            {discount}% off
          </Text>
        </Box>
        <Image
          src={`/images/${image}`}
          alt={`Hotel ${name}`}
          width={300}
          height={200}
          style={{ overflow: "hidden" }}
        />
      </Box>
      <p>{location}</p>
    </Flex>
  );
}
