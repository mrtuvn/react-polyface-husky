import React from 'react'

interface BoxCardProps extends React.PropsWithChildren {
  className?: string
}

function BoxCard({ children, className }: BoxCardProps) {
  return (
    <div 
      className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] px-6 py-5 ${className}`}>
      {children}
    </div>
  )
}

export default BoxCard;