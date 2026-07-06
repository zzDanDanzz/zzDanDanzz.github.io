import { Hero } from "@/components/Hero"
import { Timeline } from "@/components/Timeline"

export function App() {
  return (
    <div className="relative w-full flex flex-col bg-background text-foreground transition-colors duration-300">
      <Hero />
      <Timeline />
    </div>
  )
}

export default App
