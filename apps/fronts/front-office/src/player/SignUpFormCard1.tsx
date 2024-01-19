import { Button, CardBody, Select, Text } from "@sport-log/ui";
import { FormLabel } from "@sport-log/ui";
import { HStack } from "@sport-log/ui";
import { Input } from "@sport-log/ui";
import { FormControl } from "@sport-log/ui";
import { VStack } from "@sport-log/ui";
import { Card } from "@sport-log/ui";

type Props = {
  onNextClickStep: () => void;
};

export const SignUpFormCard1 = ({ onNextClickStep }: Props) => {
  return (
    <Card width="full">
      <CardBody>
        <VStack spacing="4">
          <Text fontSize="2xl" fontWeight="bold">
            Infos Générales
          </Text>
          <HStack w="full" spacing="6">
            <FormControl>
              <FormLabel>Nom</FormLabel>
              <Input type="text" />
            </FormControl>

            <FormControl>
              <FormLabel>Prénom</FormLabel>
              <Input type="text" />
            </FormControl>
          </HStack>

          <FormControl>
            <FormLabel>Sexe</FormLabel>
            <Select
              placeholder="Choisissez un sexe"
              size="md"
              options={[
                { value: "homme", label: "Homme" },
                { value: "femme", label: "Femme" },
              ]}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Date de naissance</FormLabel>
            <Input type="date" />
          </FormControl>

          <FormControl>
            <FormLabel>Numéro de portable</FormLabel>
            <Input type="tel" />
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>

          <FormControl>
            <FormLabel>Mot de passe</FormLabel>
            <Input type="password" />
          </FormControl>

          <FormControl>
            <FormLabel>Confirmer le Mot de passe</FormLabel>
            <Input type="password" />
          </FormControl>

          <Button colorScheme="blue" size="lg" onClick={onNextClickStep}>
            Suivant
          </Button>
        </VStack>
      </CardBody>
    </Card>
  );
};
