import React, { type PropsWithChildren} from "react"
import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({children}: PropsWithChildren): JSX.Element => {
  return <ChakraButton>{children}</ChakraButton>
} 
