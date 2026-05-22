type PasswordStrengthProps = {
  password: string
}

function strengthLevel(password: string): 0 | 1 | 2 | 3 | 4 {
  if (!password) return 0
  let score = 0
  if (password.length >= 6) score += 1
  if (password.length >= 8) score += 1
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1
  if (/\d/.test(password) || /[^A-Za-z0-9]/.test(password)) score += 1
  return Math.min(4, Math.max(1, score)) as 1 | 2 | 3 | 4
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  if (!password) return null

  const level = strengthLevel(password)
  const labels = ['', 'Weak password', 'Fair password', 'Good password', 'Strong password']
  const colors = ['', 'bg-[#E53935]', 'bg-[#FF9800]', 'bg-[#7c572d]', 'bg-[#4CAF50]']

  return (
    <div className="flex flex-col gap-1 pt-1">
      <div className="flex h-1 gap-1">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`flex-1 rounded-full ${i <= level ? colors[level] : 'bg-[#e2e2e2]'}`}
          />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span
          className={`text-[10px] font-bold ${level >= 3 ? 'text-[#4CAF50]' : level === 2 ? 'text-[#FF9800]' : 'text-[#E53935]'}`}
        >
          {labels[level]}
        </span>
        <span className="text-[10px] text-[#504440]">8+ characters</span>
      </div>
    </div>
  )
}
