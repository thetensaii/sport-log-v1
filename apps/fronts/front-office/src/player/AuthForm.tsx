import { Button, CardBody } from "@sport-log/ui"
import { FormLabel } from "@sport-log/ui"
import { HStack } from "@sport-log/ui"
import { Input } from "@sport-log/ui"
import { FormControl } from "@sport-log/ui"
import { Center, Heading, VStack } from "@sport-log/ui"
import { Card } from "@sport-log/ui"

export const AuthForm = () => {
  
  return (
    <Center maxW="container.sm" mx="auto" sx={{minH: "100vh"}}>
      <VStack w="full" spacing="6">
        <Heading>SportLog - Connexion Joueur</Heading>
        <Card width="full">
          <CardBody>
            <VStack spacing="6">
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>

              <FormControl>
                <FormLabel>Mot de passe</FormLabel>
                <Input type="password" />
              </FormControl>

              <HStack>
                <Button colorScheme="blue" variant="outline" size="lg">Se connecter</Button>
                <Button colorScheme="blue" size="lg">S'inscrire</Button>
              </HStack>
            </VStack>
          </CardBody>
        </Card>
      </VStack>
    </Center>
  )
}