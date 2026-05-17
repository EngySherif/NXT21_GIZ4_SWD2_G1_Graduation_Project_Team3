import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { MainNavigation } from './MainNavigation'

/**
 * Hamburger menu for small screens — opens a slide-in drawer with navigation.
 * Rendered via portal so it sits above all page content.
 */
export function MobileNavigationDrawer() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = useCallback(() => setIsOpen(false), [])
  const openMenu = () => setIsOpen(true)

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    document.body.classList.add('mobile-menu-open')

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
      document.body.classList.remove('mobile-menu-open')
    }
  }, [isOpen, closeMenu])

  const mobileMenu =
    isOpen &&
    createPortal(
      <>
        {/* Dimmed backdrop — covers full screen */}
        <button
          type="button"
          className="fixed inset-0 z-[200] bg-[#2C1810]/75 backdrop-blur-sm lg:hidden"
          onClick={closeMenu}
          aria-label="Close menu"
        />

        {/* Solid drawer panel */}
        <nav
          id="mobile-nav-drawer"
          className="fixed left-0 top-0 z-[210] flex h-dvh w-[min(280px,88vw)] flex-col bg-white shadow-[8px_0_32px_rgba(44,24,16,0.25)] lg:hidden"
          aria-label="Main navigation"
        >
          <div className="flex shrink-0 items-center justify-between border-b border-[#E0E0E0] bg-white px-4 py-3">
            <span className="text-sm font-semibold text-[#757575]">Menu</span>
            <button
              type="button"
              onClick={closeMenu}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-[#2C1810] transition-colors hover:bg-[#fecb97]/50 active:scale-95"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="flex min-h-0 flex-1 flex-col p-4">
            <MainNavigation onItemClick={closeMenu} />
          </div>
        </nav>
      </>,
      document.body,
    )

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={openMenu}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-stone-900 transition-colors hover:bg-stone-100 active:scale-95"
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-drawer"
      >
        <span className="material-symbols-outlined text-[26px]">menu</span>
      </button>

      {mobileMenu}
    </div>
  )
}
