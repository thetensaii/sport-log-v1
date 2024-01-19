import { Button, CardBody, Checkbox, HStack, Input, Text } from "@sport-log/ui";
import { FormLabel } from "@sport-log/ui";
import { FormControl } from "@sport-log/ui";
import { VStack } from "@sport-log/ui";
import { Card } from "@sport-log/ui";

type Props = {
  onBeforeButtonClick: () => void;
};
export const SignUpFormCard2 = ({ onBeforeButtonClick }: Props) => {
  return (
    <Card width="full">
      <CardBody>
        <VStack spacing="4" alignItems="flex-start">
          <Text fontSize="2xl" fontWeight="bold">
            Infos sportives
          </Text>
          <HStack spacing="8">
            <FormControl>
              <FormLabel>Poste(s)</FormLabel>
              <HStack spacing="8">
                <Checkbox name="position" value="1">
                  Meneur
                </Checkbox>
                <Checkbox name="position" value="2">
                  Arrière
                </Checkbox>
                <Checkbox name="position" value="3">
                  Ailier
                </Checkbox>
                <Checkbox name="position" value="4">
                  Ailier Fort
                </Checkbox>
                <Checkbox name="position" value="5">
                  Pivot
                </Checkbox>
              </HStack>
            </FormControl>

            <FormControl>
              <FormLabel>Taille (cm)</FormLabel>
              <Input type="number" />
            </FormControl>
          </HStack>

          <FormControl>
            <FormLabel>Club actuel</FormLabel>
            <Input />
          </FormControl>

          <HStack spacing="8" width="full">
            <FormControl>
              <FormLabel>Division (ProB, N1, R3, etc)</FormLabel>
              <Input />
            </FormControl>

            <FormControl>
              <FormLabel>Coach</FormLabel>
              <Input />
            </FormControl>
          </HStack>

          <HStack spacing="8" width="full">
            <FormControl>
              <FormLabel>Lien vers CV Professionnel</FormLabel>
              <Input />
            </FormControl>

            <FormControl>
              <FormLabel>Lien vers CV Sportif</FormLabel>
              <Input />
            </FormControl>
          </HStack>

          <HStack spacing="8" width="full">
            <FormControl>
              <FormLabel>Lien vers profil Proballers</FormLabel>
              <Input />
            </FormControl>

            <FormControl>
              <FormLabel>Lien vers vidéo de présentation</FormLabel>
              <Input />
            </FormControl>
          </HStack>

          <FormControl>
            <FormLabel>Lien vers vidéo d'highlights</FormLabel>
            <Input />
          </FormControl>

          <Text fontSize="2xl" fontWeight="bold">
            Réseaux Sociaux
          </Text>
          <HStack spacing="8" width="full">
            <FormControl>
              <FormLabel>Lien Instagram</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>Lien Facebook</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>Lien Twitter</FormLabel>
              <Input />
            </FormControl>
          </HStack>

          <HStack spacing="8" width="full" justifyContent="center">
            <Button
              variant="outline"
              colorScheme="blue"
              size="lg"
              onClick={onBeforeButtonClick}
            >
              Retour
            </Button>
            <Button colorScheme="blue" size="lg">
              S'inscrire
            </Button>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
};
