import { useState } from "react"
import { HStack } from "@sport-log/ui"
import { Button } from "@sport-log/ui"
import { Center, Heading, Text, VStack, Box, Link } from "@sport-log/ui"
import { EditProfileModal } from "./EditProfileModal"
import { ChangePasswordModal } from "./ChangePasswordModal"

export const Profile = () => {
  const coach = {
    firstname: "Pierre",
    lastname: "Dupont",
    gender: "homme",
    birthdate: new Date(),
    phoneNumber: "0102030405",
    mail: "p.dupont@gmail.com",
    currentSituation: {
      position: "Assistant coach",
      club: "Nanterre",
      division: "N3",
    },
    links : {
      proResume: "",
      sportResume: "",
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

  const [isChangePasswordModalopen, setIsChangePasswordModalOpen] = useState<boolean>(false);
  const openChangePasswordModal = () => {
    setIsChangePasswordModalOpen(true)
  }
  const closeChangePasswordModal = () => {
    setIsChangePasswordModalOpen(false)
  }

  return ( 
    <>
      <Center maxW="container.lg" mx="auto">
        <VStack w="full" spacing="8">
          <Heading as='h2' fontSize="3xl">Votre profil</Heading>

          <VStack w="full" spacing="6" align="start">
            <Box>
              <Heading as="h3" fontSize="2xl">Informations générales</Heading>
              <Box>
                <Text fontSize="lg">Nom : {coach.firstname} {coach.lastname.toLocaleUpperCase()}</Text>
                <Text fontSize="lg">Sexe : {coach.gender}</Text>
                <Text fontSize="lg">Date de naissance : {coach.birthdate.toLocaleDateString("fr-FR")}</Text>
                <Text fontSize="lg">Adresse mail : {coach.mail}</Text>
                <Text fontSize="lg">Numéro de téléphone : {coach.phoneNumber}</Text>
              </Box>
            </Box>
            <Box>
              <Heading as="h3" fontSize="2xl">Informations sportives</Heading>
              <Box>
                <Text fontSize="lg">Poste : {coach.currentSituation.position}</Text>
                <Text fontSize="lg">Club actuel : {coach.currentSituation.club}</Text>
                <Text fontSize="lg">Division : {coach.currentSituation.division}</Text>
              </Box>

              <Heading as="h4" fontSize="lg">Liens</Heading>
              <Box>
                <Box><Link href={coach.links.proResume} fontSize="lg" isExternal>CV Professionel</Link></Box>
                <Box><Link href={coach.links.sportResume} fontSize="lg" isExternal>CV Sportif</Link></Box>
              </Box>
            </Box>
            <Box>
              <Heading as="h3" fontSize="2xl">Réseaux Sociaux</Heading>
              <Box>
                <Box><Link href={coach.socialLinks.facebook} fontSize="lg" isExternal>Facebook</Link></Box>
                <Box><Link href={coach.socialLinks.instagram} fontSize="lg" isExternal>Instagram</Link></Box>
                <Box><Link href={coach.socialLinks.twitter} fontSize="lg" isExternal>Twitter</Link></Box>
              </Box>
            </Box>
          </VStack>

          <HStack spacing="8">
            <Button colorScheme="blue" size="lg" onClick={openEditProfileModal}>Éditer profil</Button>
            <Button colorScheme="red" size="lg" onClick={openChangePasswordModal}>Changer mot de passe</Button>
          </HStack>
        </VStack>
      </Center>
      <EditProfileModal isOpen={isEditProfileModalOpen} closeModal={closeEditProfileModal} />
      <ChangePasswordModal isOpen={isChangePasswordModalopen} closeModal={closeChangePasswordModal} />
    </>
  )
}