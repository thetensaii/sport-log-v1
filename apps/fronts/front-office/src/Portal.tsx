import { Button, Center, VStack, Heading } from "@sport-log/ui";

export const Portal = () => {
  return (
    <Center maxW="container.lg" mx="auto" sx={{ minH: "100vh" }}>
      <VStack spacing="6">
        <Heading>SportLog - Portail</Heading>
        <Button colorScheme="blue" size="lg">
          Je suis un Joueur
        </Button>
        <Button colorScheme="green" size="lg">
          Je suis un Coach
        </Button>
      </VStack>
    </Center>
  );
};
