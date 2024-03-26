"use client";
import { Flex, HStack, Text } from "@chakra-ui/react";
import HotelCard from "./hotel-card";

export default function HotelCarousel() {
  return (
    <Flex w="full" p={10} flexDir="column">
      <Text fontSize="2xl" fontWeight="bold" mb={4} w="full">
        Our Hotels
      </Text>

      <HStack spacing={4} my={4}>
        <HotelCard
          name="Cancun Resort"
          location="Mexico"
          image="cancun.jpeg"
          discount={20}
        />

        <HotelCard
          name="Hygge House Hotel"
          location="Denmark"
          image="copenhagen.jpeg"
          discount={50}
        />

        <HotelCard
          name="Paradise Beach"
          location="Maldives"
          image="maldives.jpeg"
          discount={20}
        />
        <HotelCard
          name="Coffee Haus Hotel"
          location="Vienna"
          image="vienna.jpeg"
          discount={10}
        />
      </HStack>
    </Flex>
  );
}
