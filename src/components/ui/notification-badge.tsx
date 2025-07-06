import { cn } from "@/lib/utils"

interface NotificationBadgeProps {
  count?: number
  showZero?: boolean
  max?: number
  className?: string
  children?: React.ReactNode
}

const NotificationBadge = ({ 
  count = 0, 
  showZero = false, 
  max = 99, 
  className,
  children 
}: NotificationBadgeProps) => {
  const displayCount = count > max ? `${max}+` : count.toString()
  const shouldShow = count > 0 || showZero

  return (
    <div className="relative inline-block">
      {children}
      {shouldShow && (
        <span
          className={cn(
            "absolute -top-2 -right-2 h-5 w-5 rounded-full bg-destructive text-destructive-foreground",
            "flex items-center justify-center text-xs font-medium",
            "animate-pulse",
            className
          )}
        >
          {displayCount}
        </span>
      )}
    </div>
  )
}

export { NotificationBadge }