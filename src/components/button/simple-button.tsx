interface SimpleButtonProps {
  buttonText: string,
  className?: string,
  onClick?: () => void
}

function SimpleButton({ buttonText, className, ...restProps }: SimpleButtonProps) {
  return (
    <button
      className={`flex items-center justify-center p-3 font-medium text-white rounded-lg bg-brand-500 text-theme-sm hover:bg-brand-600 ${className}`}
      {...restProps}
    >
      {buttonText}
    </button>
  )
}

export default SimpleButton