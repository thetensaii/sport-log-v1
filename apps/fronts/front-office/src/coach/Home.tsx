import {
  Text,
  Center,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@sport-log/ui";
import { Profile } from "./Profile";
import { SearchPlayers } from "./SearchPlayers";

export const Home = () => {
  return (
    <Center maxW="container.lg" mx="auto" pt="14" mb="16">
      <VStack w="full" spacing="8">
        <Heading as="h1">Accueil - Coach</Heading>
        <Tabs w="full" isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>
              <Text fontSize="xl">Profil</Text>
            </Tab>
            <Tab>
              <Text fontSize="xl">Rechercher</Text>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Profile />
            </TabPanel>
            <TabPanel>
              <SearchPlayers />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Center>
  );
};
