import { Text, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, ModalBody, VStack, HStack, FormControl, FormLabel, Input, Select, Checkbox, ModalFooter, Button } from "@sport-log/ui"

type Props = {
  isOpen: boolean,
  closeModal: () => void,
}

export const ChangePasswordModal = ({isOpen, closeModal}: Props) => (
  <Modal isOpen={isOpen} onClose={closeModal} size="lg">
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>
        <Text fontSize="3xl">Changez votre mot de passe</Text>
      </ModalHeader>
      <ModalCloseButton />

      <ModalBody>
        <VStack spacing="4" alignItems='flex-start'>
          <FormControl>
            <FormLabel>Mot de passe actuel</FormLabel>
            <Input type="password" />
          </FormControl>

          <FormControl>
            <FormLabel>Nouveau Mot de passe</FormLabel>
            <Input type="password" />
          </FormControl>

          <FormControl>
            <FormLabel>Confirmer le nouveau Mot de passe</FormLabel>
            <Input type="password" />
          </FormControl>
        </VStack>
      </ModalBody>

      <ModalFooter>
        <HStack spacing="2" width="full" justifyContent="end">
          <Button variant="outline" colorScheme="blue" size="lg" onClick={closeModal}>Retour</Button>
          <Button colorScheme="blue" size="lg">Modifier</Button>
        </HStack>
      </ModalFooter>
    </ModalContent>
  </Modal>
)