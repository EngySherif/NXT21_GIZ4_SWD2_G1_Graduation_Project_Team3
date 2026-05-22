type AuthDividerProps = {
  label: string
}

export function AuthDivider({ label }: AuthDividerProps) {
  return (
    <div className="relative flex items-center py-2">
      <div className="flex-grow border-t border-[#e0e0e0]" />
      <span className="mx-4 shrink-0 text-xs text-[#757575]">{label}</span>
      <div className="flex-grow border-t border-[#e0e0e0]" />
    </div>
  )
}
