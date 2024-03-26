"use client";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Search from "./search";

export default function Hero() {
  return (
    <Flex height="70vh" position="relative">
      <Box
        position="absolute"
        top="50%"
        left="10%"
        width="80%"
        p={10}
        zIndex={1}
        borderRadius="2xl"
        backdropFilter="auto"
        backdropBlur="8px"
        background="black.500"
      >
        <Search />
      </Box>
      <Image src="/images/hero.webp" alt="Ennismore Hotel Search" fill />
    </Flex>
  );
}
