import { Grid as ChakraGrid, GridProps} from '@chakra-ui/react'
import { GridItem as ChakraGridItem, GridItemProps} from '@chakra-ui/react'

export const Grid = ({...props}: GridProps) => {
  return <ChakraGrid {...props} />
}

export const GridItem = ({...props}: GridItemProps) => {
  return <ChakraGridItem {...props} />
}
