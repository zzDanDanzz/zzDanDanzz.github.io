import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  IconMail,
  IconBrandTelegram,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react"

export function Hero() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      {/* 1. Header */}
      <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-border/20 bg-background/80 px-6 py-6 backdrop-blur-md md:px-12 md:py-8">
        <span className="text-lg font-semibold tracking-tight transition-opacity select-none hover:opacity-80">
          lastname.com
        </span>
      </header>

      {/* 2. Main Hero Container */}
      <main className="flex flex-1 items-center justify-center px-6 py-12 md:px-12 md:py-20 lg:py-24">
        <div className="flex w-full max-w-5xl flex-col items-stretch gap-8 md:flex-row md:gap-12 lg:gap-16">
          {/* 3. Left Column - Profile (Enclosed in a Card) */}
          <div className="flex flex-1">
            <Card className="flex w-full flex-col justify-between overflow-hidden border-border/40 bg-card/60 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-border/80 hover:shadow-2xl">
              <CardContent className="flex h-full flex-col items-center justify-between gap-6 p-6 text-center md:items-start md:p-8 md:text-left">
                {/* Avatar & Text section */}
                <div className="flex w-full flex-col items-center gap-6 md:items-start">
                  {/* Large Avatar */}
                  <div className="group relative">
                    <div className="absolute -inset-1 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 opacity-25 blur-sm transition duration-300 group-hover:opacity-40" />
                    <Avatar className="h-32 w-32 border-2 border-background shadow-lg transition-transform duration-300 group-hover:scale-[1.02] md:h-40 md:w-40">
                      <AvatarImage
                        src="https://github.com/zzdandanzz.png?size=400"
                        alt="Profile avatar"
                      />
                      <AvatarFallback className="bg-linear-to-br from-indigo-500 to-purple-600 text-2xl font-bold text-white">
                        DL
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Name, Title, and About me */}
                  <div className="w-full space-y-3">
                    <div className="space-y-1">
                      <h2 className="bg-linear-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-3xl font-bold tracking-tight">
                        Daniel Lastname
                      </h2>
                      <p className="text-sm font-semibold tracking-widest text-primary/90 uppercase">
                        WebGIS & Frontend Engineer
                      </p>
                    </div>
                    <p className="mx-auto md:mx-0 max-w-md text-sm leading-relaxed text-muted-foreground">
                      Hi, I&apos;m Daniel. I build high-performance WebGIS
                      platforms and interactive spatial applications.
                      Specializing in rendering dense geospatial datasets in
                      real-time, I bridge the gap between complex GIS analysis
                      and intuitive, modern web interfaces.
                    </p>
                  </div>
                </div>

                {/* 4. Social Links */}
                <div className="flex w-full justify-center gap-4 border-t border-border/40 pt-4 md:justify-start">
                  <a
                    href="mailto:daniel@example.com"
                    className="rounded-full bg-secondary p-2.5 text-secondary-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                    aria-label="Email"
                    title="Email"
                  >
                    <IconMail className="h-5 w-5" />
                  </a>
                  <a
                    href="https://t.me/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-secondary p-2.5 text-secondary-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                    aria-label="Telegram"
                    title="Telegram"
                  >
                    <IconBrandTelegram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/zzdandanzz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-secondary p-2.5 text-secondary-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <IconBrandGithub className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-secondary p-2.5 text-secondary-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <IconBrandLinkedin className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 4. Right Column - Call to Action (Floating/No Card) */}
          <div className="flex flex-1 flex-col items-center justify-center gap-6 p-6 text-center md:items-start md:text-left">
            <div className="max-w-md space-y-4">
              <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                Interactive Geospatial Playground
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Explore custom visualization engines, tile map rendering
                benchmarks, and experimental data layers. Optimized for mobile
                and desktop WebGIS analysis.
              </p>
            </div>

            <div className="flex w-full flex-col items-center gap-4 md:items-start">
              <Button
                size="lg"
                className="w-full cursor-pointer bg-linear-to-r from-blue-600 to-indigo-600 font-medium text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-blue-500 hover:to-indigo-500 hover:shadow-indigo-500/20 sm:w-auto"
              >
                Launch WebGIS Sandbox PWA
              </Button>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2 md:justify-start">
                <span className="mr-1 text-xs text-muted-foreground">
                  Built with:
                </span>
                <Badge
                  variant="secondary"
                  className="px-2.5 py-0.5 text-xs font-semibold"
                >
                  Maplibre GL
                </Badge>
                <Badge
                  variant="secondary"
                  className="px-2.5 py-0.5 text-xs font-semibold"
                >
                  Deck.gl
                </Badge>
                <Badge
                  variant="secondary"
                  className="px-2.5 py-0.5 text-xs font-semibold"
                >
                  React
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
