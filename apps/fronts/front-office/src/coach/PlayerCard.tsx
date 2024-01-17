import { HStack } from "@sport-log/ui"
import { Box } from "@sport-log/ui"
import { Button } from "@sport-log/ui"
import { Card, CardBody, CardHeader, Text } from "@sport-log/ui"

type Props = {
  firstname: string,
  lastname: string,
  gender: string,
  age: number,
  height: number,
  positions: string[],
  currentClub: string,
  currentDivision: string,
}

export const PlayerCard = ({ firstname, lastname, gender, age, height, positions, currentClub, currentDivision}: Props) => {
  return (
    <Card w="full">
      <CardHeader>
        <Text fontSize="2xl" fontWeight="bold">{firstname} {lastname.toLocaleUpperCase()} - {positions.join(', ')} - {gender.toLocaleUpperCase()} - {`${height} cm`} - {`${age} ans`}</Text>
      </CardHeader>
      <CardBody>
        <HStack justify="space-between">
          <Box>
            <Text fontSize="lg">Club actuel : {currentClub}</Text>
            <Text fontSize="lg">Division actuel : {currentDivision}</Text>
          </Box>
          <Button colorScheme="blue" size="lg">Voir profil</Button>
        </HStack>
      </CardBody>
    </Card>
  )
}