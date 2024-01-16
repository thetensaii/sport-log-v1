import { HStack } from "@sport-log/ui"
import { Modal } from "@sport-log/ui"
import { ModalContent } from "@sport-log/ui"
import { ModalCloseButton } from "@sport-log/ui"
import { ModalFooter } from "@sport-log/ui"
import { FormLabel } from "@sport-log/ui"
import { Input } from "@sport-log/ui"
import { Select } from "@sport-log/ui"
import { Checkbox } from "@sport-log/ui"
import { FormControl } from "@sport-log/ui"
import { ModalBody } from "@sport-log/ui"
import { ModalHeader } from "@sport-log/ui"
import { ModalOverlay } from "@sport-log/ui"
import { Button } from "@sport-log/ui"
import { Center, Heading, Text, VStack, Box, Link } from "@sport-log/ui"
import { useState } from "react"

export const Home = () => {
  const player = {
    firstname: "Pierre",
    lastname: "Dupont",
    gender: "homme",
    birthdate: new Date(),
    phoneNumber: "0102030405",
    mail: "p.dupont@gmail.com",
    positions: ["Meneur", "Arrière"],
    height: 191,
    currentSituation: {
      club: "Nanterre",
      division: "N3",
      coach: "John DOE"
    },
    links : {
      proResume: "",
      sportResume: "",
      proballersProfile: "",
      presentationVideo:"",
      highlightsVideo: "",
    },
    socialLinks : {
      facebook: "",
      twitter: "",
      instagram: "",
    }
  }

  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState<boolean>(false);
  const openEditProfileModal = () => {
    setIsEditProfileModalOpen(true)
  }
  const closeEditProfileModal = () => {
    setIsEditProfileModalOpen(false)
  }

  return ( 
    <>
      <Center maxW="container.lg" mx="auto" pt="14" mb="16">
        <VStack w="full" spacing="8">
          <Heading as='h1'>Accueil - Joueur</Heading>
          <Heading as='h2' fontSize="3xl">Votre profil</Heading>

          <VStack w="full" spacing="6" align="start">
            <Box>
              <Heading as="h3" fontSize="2xl">Informations générales</Heading>
              <Box>
                <Text fontSize="lg">Nom : {player.firstname} {player.lastname.toLocaleUpperCase()}</Text>
                <Text fontSize="lg">Sexe : {player.gender}</Text>
                <Text fontSize="lg">Date de naissance : {player.birthdate.toLocaleDateString("fr-FR")}</Text>
                <Text fontSize="lg">Adresse mail : {player.mail}</Text>
                <Text fontSize="lg">Numéro de téléphone : {player.phoneNumber}</Text>
              </Box>
            </Box>
            <Box>
              <Heading as="h3" fontSize="2xl">Informations sportives</Heading>
              <Box>
                <Text fontSize="lg">Position(s) : {player.positions.join(", ")}</Text>
                <Text fontSize="lg">Taille : {player.height + " cm"}</Text>
                <Text fontSize="lg">Club actuel : {player.currentSituation.club}</Text>
                <Text fontSize="lg">Division : {player.currentSituation.division}</Text>
                <Text fontSize="lg">Coach : {player.currentSituation.coach}</Text>
              </Box>

              <Heading as="h4" fontSize="lg">Liens</Heading>
              <Box>
                <Box><Link href={player.links.proResume} fontSize="lg" isExternal>CV Professionel</Link></Box>
                <Box><Link href={player.links.sportResume} fontSize="lg" isExternal>CV Sportif</Link></Box>
                <Box><Link href={player.links.proballersProfile} fontSize="lg" isExternal>Profil Proballers</Link></Box>
                <Box><Link href={player.links.presentationVideo} fontSize="lg" isExternal>Vidéo de présentation</Link></Box>
                <Box><Link href={player.links.presentationVideo} fontSize="lg" isExternal>Vidéo d'highlights</Link></Box>
              </Box>
            </Box>
            <Box>
              <Heading as="h3" fontSize="2xl">Réseaux Sociaux</Heading>
              <Box>
                <Box><Link href={player.socialLinks.facebook} fontSize="lg" isExternal>Facebook</Link></Box>
                <Box><Link href={player.socialLinks.instagram} fontSize="lg" isExternal>Instagram</Link></Box>
                <Box><Link href={player.socialLinks.twitter} fontSize="lg" isExternal>Twitter</Link></Box>
              </Box>
            </Box>
          </VStack>

          <HStack spacing="8">
            <Button colorScheme="blue" size="lg" onClick={openEditProfileModal}>Éditer profil</Button>
            <Button colorScheme="red" size="lg">Changer mot de passe</Button>
          </HStack>
        </VStack>
      </Center>
      <Modal isOpen={isEditProfileModalOpen} onClose={closeEditProfileModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontSize="3xl">Éditer votre profil</Text>
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
              <Select placeholder="Choisissez un sexe">
                <option value="homme">Homme</option>
                <option value="femme">Femme</option>
              </Select>
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
              <Button variant="outline" colorScheme="blue" size="lg" onClick={closeEditProfileModal}>Retour</Button>
              <Button colorScheme="blue" size="lg">Enregistrer</Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
         
      </Modal>
    </>
  )
}