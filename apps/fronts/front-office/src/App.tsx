import { UIProvider } from "@sport-log/ui"
import { AuthForm as PlayerAuthForm } from "./player/AuthForm"
import { SignUpForm as PlayerSignupForm } from "./player/SignUpForm"
// import { AuthForm as CoachAuthForm } from "./coach/AuthForm"
import { SignUpForm as CoachSignUpForm } from "./coach/SignUpForm"
import { Home as PlayerHome } from "./player/Home"

export const App = () => {
  return (
    <UIProvider>
      <PlayerHome />
      {/* <PlayerAuthForm /> */}
      {/* <PlayerSignupForm /> */}
    </UIProvider> 
  )
}
