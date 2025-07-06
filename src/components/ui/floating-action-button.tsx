import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

interface FloatingActionButtonProps {
  onClick?: () => void
  className?: string
  children?: React.ReactNode
}

const FloatingActionButton = ({ 
  onClick, 
  className, 
  children = <ArrowUp className="h-4 w-4" />
}: FloatingActionButtonProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <Button
      onClick={onClick || scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300",
        "bg-primary hover:bg-primary/90 text-primary-foreground",
        className
      )}
      size="icon"
    >
      {children}
    </Button>
  )
}

export { FloatingActionButton }