import { Box, Text, Center, Heading, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Select, VStack, Grid, GridItem, Button } from "@sport-log/ui"
import { useState } from "react"
import { PlayersList } from "./PlayersList"
const HEIGHT_DEFAULT = [0, 250]
const AGE_DEFAULT = [0, 60]

export const SearchPlayers = () => {
  const [heightFilterValues, setHeightFilterValues] = useState<number[]>(HEIGHT_DEFAULT)
  const updateHeightFilter = (values: number[]) => {
    setHeightFilterValues(values)
  }

  const [ageFilterValues, setAgeFilterValues] = useState<number[]>(AGE_DEFAULT)
  const updateAgeFilter = (values: number[]) => {
    setAgeFilterValues(values)
  }
  return (
    <Center maxW="container.lg" mx="auto">
      <VStack w="full" spacing="8">
        <Heading as='h2' fontSize="3xl">Rechercher des joueurs</Heading>

        <Text fontSize="xl" w="full">Filtres :</Text>
        <Grid w="full" templateColumns='repeat(2, 1fr)' gap={16}>
          <GridItem>
            <Select
              placeholder="Choisissez des postes"
              size="md"
              isMulti
              options={[
                {value: "1", label: "Meneur"},
                {value: "2", label: "Arrière"},
                {value: "3", label: "Ailier"},
                {value: "4", label: "Ailier Fort"},
                {value: "5", label: "Pivot"},
              ]}
            />
          </GridItem>
          <GridItem>
            <Select
              placeholder="Choisissez un sexe"
              size="md"
              options={[
                {value: null, label: "Choisissez un sexe"},
                {value: "homme", label: "Homme"},
                {value: "femme", label: "Femme"},
              ]}
            />
          </GridItem>
        </Grid>
        <Grid w="full" templateColumns='repeat(2, 1fr)' gap={16}>
          <GridItem>
            <Box>
              <Text>Taille</Text>
              <Text>{`${heightFilterValues[0]} cm`} - {`${heightFilterValues[1]} cm`}</Text>
              <RangeSlider aria-label={['min', 'max']} min={HEIGHT_DEFAULT[0]} max={HEIGHT_DEFAULT[1]} defaultValue={HEIGHT_DEFAULT} onChange={updateHeightFilter}>
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Text>Age</Text>
              <Text>{ageFilterValues[0]} - {ageFilterValues[1]}</Text>
              <RangeSlider aria-label={['min', 'max']} min={AGE_DEFAULT[0]} max={AGE_DEFAULT[1]} defaultValue={AGE_DEFAULT} onChange={updateAgeFilter}>
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
            </Box>
          </GridItem>
        </Grid>
        <Box w="full">
          <Button colorScheme="blue" size="lg">Appliquer filtres</Button>
        </Box>
        

        <PlayersList />

      </VStack>
    </Center>
  )

}