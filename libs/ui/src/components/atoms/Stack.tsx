import {
  VStack as ChakraVStack,
  HStack as ChakraHStack,
  StackProps,
} from "@chakra-ui/react";

export const VStack = ({ ...props }: StackProps) => {
  return <ChakraVStack {...props} />;
};

export const HStack = ({ ...props }: StackProps) => {
  return <ChakraHStack {...props} />;
};
