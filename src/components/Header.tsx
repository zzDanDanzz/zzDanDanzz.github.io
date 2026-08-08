import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { IconDownload, IconMenu2 } from "@tabler/icons-react"
import { LanguageToggle } from "./LanguageToggle"
import { ThemeToggle } from "./ThemeToggle"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { translations } from '@/lib/store'
import { ThemeProvider } from "@/components/theme-provider"

interface HeaderProps {
  locale: string;
  currentPath: string;
}

export function Header({ locale, currentPath }: HeaderProps) {
  const isRTL = locale === 'fa'
  const t = translations[locale as keyof typeof translations] || translations.en
  
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Handle visibility on scroll up/down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      // Handle transparency
      setIsScrolled(currentScrollY > 20)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <header 
        className={`sticky top-0 z-50 flex w-full items-center justify-between border-b px-6 py-6 md:px-12 md:py-8 transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled 
            ? "border-border/60 bg-background/80 backdrop-blur-md" 
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex items-center gap-6">
          {/* Mobile menu trigger hidden on md and up */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden mr-4">
                <IconMenu2 className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={isRTL ? "left" : "right"} className="flex flex-col gap-6 pt-16">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-4 text-lg font-semibold tracking-wide">
                <a href={isRTL ? "/fa/" : "/"} className="transition-colors hover:text-primary">{t.home}</a>
                <a href={isRTL ? "/fa/about" : "/about"} className="transition-colors hover:text-primary">{t.about}</a>
                <a href={isRTL ? "/fa/blog" : "/blog"} className="transition-colors hover:text-primary">{t.blog}</a>
              </nav>
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex gap-4">
                  <ThemeToggle />
                  <LanguageToggle locale={locale} currentPath={currentPath} />
                </div>
                <Button
                  variant="outline"
                  className="w-full justify-start rounded-full shadow-sm hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a
                    href="/daniel-zahmatkesh-resume.pdf"
                    download="Daniel_Zahmatkesh_Resume.pdf"
                  >
                    <IconDownload className="mr-2 h-4 w-4 inline" />
                    {t.resume}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold tracking-wide">
            <a href={isRTL ? "/fa/" : "/"} className="transition-colors hover:text-primary">{t.home}</a>
            <a href={isRTL ? "/fa/about" : "/about"} className="transition-colors hover:text-primary">{t.about}</a>
            <a href={isRTL ? "/fa/blog" : "/blog"} className="transition-colors hover:text-primary">{t.blog}</a>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <LanguageToggle locale={locale} currentPath={currentPath} />
          <Button
            variant="outline"
            size="sm"
            className="rounded-full shadow-sm hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a
              href="/daniel-zahmatkesh-resume.pdf"
              download="Daniel_Zahmatkesh_Resume.pdf"
            >
              <IconDownload className="mr-2 h-4 w-4 inline" />
              {t.resume}
            </a>
          </Button>
        </div>
      </header>
    </ThemeProvider>
  )
}
