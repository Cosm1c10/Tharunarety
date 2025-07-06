import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href?: string
  isActive?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
  showHome?: boolean
}

const Breadcrumbs = ({ items, className, showHome = true }: BreadcrumbsProps) => {
  const allItems = showHome 
    ? [{ label: "Home", href: "/" }, ...items]
    : items

  return (
    <nav className={cn("flex items-center space-x-1 text-sm text-muted-foreground", className)}>
      {allItems.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 mx-1" />}
          {index === 0 && showHome && <Home className="h-4 w-4 mr-1" />}
          {item.href && !item.isActive ? (
            <a
              href={item.href}
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className={cn(item.isActive && "text-foreground font-medium")}>
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  )
}

export { Breadcrumbs }