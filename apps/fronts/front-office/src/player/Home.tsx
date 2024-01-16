import { HStack } from "@sport-log/ui"
import { Button } from "@sport-log/ui"
import { Center, Heading, Text, VStack, Box, Link } from "@sport-log/ui"

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
  return ( 
    <Center maxW="container.lg" mx="auto" pt="14">
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
          <Button colorScheme="blue" size="lg">Éditer profil</Button>
          <Button colorScheme="red" size="lg">Changer mot de passe</Button>
        </HStack>
      </VStack>
    </Center>
  )
}