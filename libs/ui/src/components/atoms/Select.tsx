// import { Select as ChakraSelect, SelectProps } from "@chakra-ui/react";
import {
  Select as ChakraSelect,
  Props as SelectProps,
} from "chakra-react-select";

export const Select = ({ ...props }: SelectProps) => (
  <ChakraSelect {...props} />
);
