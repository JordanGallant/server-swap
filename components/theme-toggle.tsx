"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="p-3 bg-gray-100 dark:bg-gray-800 border-4 border-gray-900 dark:border-gray-700 w-[52px] h-[52px]" />
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-4 border-gray-900 dark:border-gray-700 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] transition-all duration-200"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" strokeWidth={3} />
      ) : (
        <Sun className="h-5 w-5" strokeWidth={3} />
      )}
    </button>
  )
}