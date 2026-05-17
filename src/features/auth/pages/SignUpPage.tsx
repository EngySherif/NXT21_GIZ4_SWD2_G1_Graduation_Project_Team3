import { ROUTES } from '@/shared/config/routes'
import { AuthCard } from '@/shared/components/ui/AuthCard'
import { TextLink } from '@/shared/components/ui/TextLink'

export function SignUpPage() {
  return (
    <AuthCard subtitle="Join our reading community">
      <p className="mt-8 text-center text-[#757575]">
        Sign up form — team will implement from Stitch design.
      </p>
      <div className="mt-6 flex flex-col gap-3 text-center">
        <TextLink to={ROUTES.login}>Already have an account? Sign in</TextLink>
        <TextLink to={ROUTES.home} variant="muted">
          Continue to Home (demo)
        </TextLink>
      </div>
    </AuthCard>
  )
}
