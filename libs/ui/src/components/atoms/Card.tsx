import { Card as ChakraCard, CardProps, CardHeader as ChakraCardHeader, CardHeaderProps, CardBody as ChakraCardBody, CardBodyProps} from "@chakra-ui/react"

export const Card = ({...props}:CardProps) => {
  return <ChakraCard {...props} />
}

export const CardHeader = ({...props}:CardHeaderProps) => {
  return <ChakraCardHeader {...props} />
}

export const CardBody = ({...props}:CardBodyProps) => {
  return <ChakraCardBody {...props} />
}