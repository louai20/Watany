"use client"
 
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
 
export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
 
  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-foreground hover:text-foreground/80 hover:bg-accent/20 hover:shadow-lg transition-all px-4 py-3 rounded-md"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="h-6 w-6" />
      ) : (
        <Moon className="h-6 w-6" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}