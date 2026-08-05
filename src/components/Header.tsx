import { Button } from "@/components/ui/button"
import { IconDownload } from "@tabler/icons-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-border/60 bg-background/80 px-6 py-6 backdrop-blur-md md:px-12 md:py-8">
      <nav className="flex items-center gap-6 text-sm font-semibold tracking-wide">
        <a href="/" className="transition-colors hover:text-primary">Home</a>
        <a href="/about" className="transition-colors hover:text-primary">About</a>
        <a href="/posts" className="transition-colors hover:text-primary">Posts</a>
      </nav>

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
          <IconDownload className="mr-2 h-4 w-4" />
          Résumé (PDF)
        </a>
      </Button>
    </header>
  )
}
