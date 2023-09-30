import {FormControl as ChakraFormControl, FormControlProps} from "@chakra-ui/react"
import {FormLabel as ChakraFormLabel, FormLabelProps} from "@chakra-ui/react"
import {FormErrorMessage as ChakraFormErrorMessage, FormErrorMessageProps} from "@chakra-ui/react"

export const FormControl = ({...props}: FormControlProps ) => {
  return <ChakraFormControl {...props} />
}

export const FormLabel = ({...props}: FormLabelProps ) => {
  return <ChakraFormLabel {...props} />
}

export const FormErrorMessage = ({...props}: FormErrorMessageProps ) => {
  return <ChakraFormErrorMessage {...props} />
}


