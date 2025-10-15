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
      className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-4 border-gray-900 dark:border-gray-700 hover:opacity-80 transition-opacity cursor-pointer"
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