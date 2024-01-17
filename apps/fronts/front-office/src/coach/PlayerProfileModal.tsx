import { Box, Heading, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from "@sport-log/ui"

type Props = {
  isOpen: boolean,
  closeModal: () => void,
}
const PLAYER = {
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
export const PlayerProfileModal = ({isOpen, closeModal}: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontSize="3xl">Profil - {PLAYER.firstname} {PLAYER.lastname.toLocaleUpperCase()}</Text>
        </ModalHeader> 
        <ModalCloseButton />

        <ModalBody>
          <Box>
            <Heading as="h3" fontSize="2xl">Informations générales</Heading>
            <Box>
              <Text fontSize="lg">Sexe : {PLAYER.gender}</Text>
              <Text fontSize="lg">Date de naissance : {PLAYER.birthdate.toLocaleDateString("fr-FR")}</Text>
              <Text fontSize="lg">Adresse mail : {PLAYER.mail}</Text>
              <Text fontSize="lg">Numéro de téléphone : {PLAYER.phoneNumber}</Text>
            </Box>
          </Box>
          <Box>
            <Heading as="h3" fontSize="2xl">Informations sportives</Heading>
            <Box>
              <Text fontSize="lg">Poste(s) : {PLAYER.positions.join(", ")}</Text>
              <Text fontSize="lg">Taille : {PLAYER.height + " cm"}</Text>
              <Text fontSize="lg">Club actuel : {PLAYER.currentSituation.club}</Text>
              <Text fontSize="lg">Division : {PLAYER.currentSituation.division}</Text>
              <Text fontSize="lg">Coach : {PLAYER.currentSituation.coach}</Text>
            </Box>

            <Heading as="h4" fontSize="lg">Liens</Heading>
            <Box>
              <Box><Link href={PLAYER.links.proResume} fontSize="lg" isExternal>CV Professionel</Link></Box>
              <Box><Link href={PLAYER.links.sportResume} fontSize="lg" isExternal>CV Sportif</Link></Box>
              <Box><Link href={PLAYER.links.proballersProfile} fontSize="lg" isExternal>Profil Proballers</Link></Box>
              <Box><Link href={PLAYER.links.presentationVideo} fontSize="lg" isExternal>Vidéo de présentation</Link></Box>
              <Box><Link href={PLAYER.links.presentationVideo} fontSize="lg" isExternal>Vidéo d'highlights</Link></Box>
            </Box>
          </Box>
          <Box>
            <Heading as="h3" fontSize="2xl">Réseaux Sociaux</Heading>
            <Box>
              <Box><Link href={PLAYER.socialLinks.facebook} fontSize="lg" isExternal>Facebook</Link></Box>
              <Box><Link href={PLAYER.socialLinks.instagram} fontSize="lg" isExternal>Instagram</Link></Box>
              <Box><Link href={PLAYER.socialLinks.twitter} fontSize="lg" isExternal>Twitter</Link></Box>
            </Box>
          </Box>
        </ModalBody>  
      </ModalContent>
    </Modal>
    )
}