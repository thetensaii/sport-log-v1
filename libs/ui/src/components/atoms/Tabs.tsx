import { Tabs as ChakraTabs, TabsProps} from "@chakra-ui/react"
import { Tab as ChakraTab, TabProps} from "@chakra-ui/react"
import { TabList as ChakraTabList, TabListProps} from "@chakra-ui/react"
import { TabPanels as ChakraTabPanels, TabPanelsProps} from "@chakra-ui/react"
import { TabPanel as ChakraTabPanel, TabPanelProps} from "@chakra-ui/react"

export const Tabs = ({...props}: TabsProps) => {
  return <ChakraTabs {...props} />
}

export const Tab = ({...props}: TabProps) => {
  return <ChakraTab {...props} />
}

export const TabList = ({...props}: TabListProps) => {
  return <ChakraTabList {...props} />
}

export const TabPanels = ({...props}: TabPanelsProps) => {
  return <ChakraTabPanels {...props} />
}

export const TabPanel = ({...props}: TabPanelProps) => {
  return <ChakraTabPanel {...props} />
}