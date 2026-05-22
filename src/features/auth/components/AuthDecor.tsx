/** Subtle background accents from Stitch login/signup pages */
export function AuthDecor() {
  return (
    <>
      <div className="pointer-events-none fixed bottom-0 left-0 z-0 h-1.5 w-full bg-[#2c1810]/5" />
      <div className="pointer-events-none fixed top-20 -left-20 -z-10 h-64 w-64 rounded-full bg-[#7c572d]/5 blur-3xl" />
      <div className="pointer-events-none fixed -right-20 bottom-20 -z-10 h-80 w-80 rounded-full bg-[#7c572d]/5 blur-3xl" />
    </>
  )
}
