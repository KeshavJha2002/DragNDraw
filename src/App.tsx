import { ThemeProvider } from "./components/theme/theme-provider"
import { ModeToggle } from "./components/theme/mode-toggle"
import { ControlPanel } from "./components/ControlPanel"
import { ToolbarItems } from "./components/ToolbarItems"

const App = () => {
  return (
    <ThemeProvider>
      <ModeToggle/>
      <ToolbarItems/>
      <ControlPanel/>
    </ThemeProvider>
  )
}

export default App
