import { type PropsWithChildren } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'

export const UIProvider = ({children}: PropsWithChildren): JSX.Element => {
  return <ChakraProvider theme={theme}>
    {children}
  </ChakraProvider>

}