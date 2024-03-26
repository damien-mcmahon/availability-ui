import { Box, Flex } from "@chakra-ui/react";

export default function Nav() {
  return (
    <Flex zIndex="10" position="absolute" w="full">
      <Box bg="tomato" w="100%" p={4} color="white">
        <h1>Ennismore Hotel Search</h1>
      </Box>
    </Flex>
  );
}
