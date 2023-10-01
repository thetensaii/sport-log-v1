import { Checkbox as ChakraCheckbox, CheckboxProps, CheckboxGroup as ChakraCheckboxGroup, CheckboxGroupProps } from "@chakra-ui/react";


export const Checkbox = ({...props}: CheckboxProps) => <ChakraCheckbox {...props} />
export const CheckboxGroup = ({...props}: CheckboxGroupProps) => <ChakraCheckboxGroup {...props} />