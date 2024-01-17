import { Text, Button, Checkbox, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, VStack } from "@sport-log/ui"

type Props = {
  isOpen : boolean,
  closeModal: () => void
}
export const EditProfileModal = ({ isOpen, closeModal }: Props) => (
  <Modal isOpen={isOpen} onClose={closeModal} size="xl">
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>
        <Text fontSize="3xl">Éditez votre profil</Text>
      </ModalHeader>
      <ModalCloseButton />

      <ModalBody>
        <VStack spacing="4" alignItems='flex-start'>
          <Text fontSize="2xl" fontWeight='bold'>Infos Générales</Text>
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
                {value: "homme", label: "Homme"},
                {value: "femme", label: "Femme"},
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

          <Text fontSize="2xl" fontWeight='bold'>Infos sportives</Text>
          <FormControl>
            <FormLabel>Poste(s)</FormLabel>
            <HStack spacing="8">
              <Checkbox name="position" value="1">Meneur</Checkbox>
              <Checkbox name="position" value="2">Arrière</Checkbox>
              <Checkbox name="position" value="3">Ailier</Checkbox>
              <Checkbox name="position" value="4">Ailier Fort</Checkbox>
              <Checkbox name="position" value="5">Pivot</Checkbox>
            </HStack>
          </FormControl>

          <FormControl>
            <FormLabel>Taille (cm)</FormLabel>
            <Input type="number" />
          </FormControl>

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

          <Text fontSize="2xl" fontWeight='bold'>Réseaux Sociaux</Text>
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
        </VStack>

      </ModalBody>

      <ModalFooter>
        <HStack spacing="2" width="full" justifyContent="end">
          <Button variant="outline" colorScheme="blue" size="lg" onClick={closeModal}>Retour</Button>
          <Button colorScheme="blue" size="lg">Enregistrer</Button>
        </HStack>
      </ModalFooter>
    </ModalContent>
  </Modal>
)