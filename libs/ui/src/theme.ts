import { extendTheme } from "@chakra-ui/react"
import { ButtonTheme } from "./components"

const overrides = {
  components: {
    Button: ButtonTheme
  }
}

export const theme = extendTheme(overrides)