import { Center, Heading, VStack } from "@sport-log/ui"
import { SignUpFormCard1 } from "./SignUpFormCard1"
import { SignUpFormCard2 } from "./SignUpFormCard2"
import { useState } from "react"

export const SignUpForm = () => {
  const [actualCard, setActualCard] = useState<"card1"|"card2">("card1")

  const onCard1NextStepClick = () => {
    setActualCard("card2")
  }

  const onCard2PreviousStepClick = () => {
    setActualCard("card1")
  }

  return (
    <Center maxW="container.lg" mx="auto" pt="14">
      <VStack w="full" spacing="4">
        <Heading>SportLog - Inscription Coach</Heading>
        {actualCard === "card1" && <SignUpFormCard1 onNextClickStep={onCard1NextStepClick}/>}
        {actualCard === "card2" && <SignUpFormCard2 onBeforeButtonClick={onCard2PreviousStepClick} />}
      </VStack>
    </Center>
  )
}