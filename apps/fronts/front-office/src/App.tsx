import { UIProvider } from "@sport-log/ui"
import { Portal } from "./Portal"

export const App = () => {
  return (
    <UIProvider>
      <Portal />
    </UIProvider> 
  )
}
