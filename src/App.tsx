import { ThemeProvider } from "./components/theme/theme-provider"
import { ModeToggle } from "./components/theme/mode-toggle"
import { ControlPanel } from "./components/ControlPanel"

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle></ModeToggle>
      <ControlPanel/>
    </ThemeProvider>
  )
}

export default App
