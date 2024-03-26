"use client";

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Search() {
  // create state with default values for check-in, check-out, and Guests
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [guests, setGuests] = useState(2);

  return (
    <Flex w="full" p={10} flexDir="column" background="orange.100">
      <HStack spacing={4}>
        <FormControl>
          <FormLabel>Location</FormLabel>
          <Input type="text" placeholder="Enter a location" />
        </FormControl>
        <FormControl>
          <FormLabel>Check-in</FormLabel>
          <Input type="date" />
        </FormControl>
        <FormControl>
          <FormLabel>Check-out</FormLabel>
          <Input type="date" />
        </FormControl>
        <FormControl>
          <FormLabel>Guests</FormLabel>
          <Input type="number" />
        </FormControl>
        <Button colorScheme="teal" size="lg">
          Search
        </Button>
      </HStack>
    </Flex>
  );
}
