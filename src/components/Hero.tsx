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
      <header className="w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center border-b border-border/20 backdrop-blur-md sticky top-0 z-50 bg-background/80">
        <span className="font-semibold text-lg tracking-tight select-none hover:opacity-80 transition-opacity">
          lastname.com
        </span>
      </header>

      {/* 2. Main Hero Container */}
      <main className="flex-1 flex items-center justify-center px-6 py-12 md:px-12 md:py-20 lg:py-24">
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-stretch">
          
          {/* 3. Left Column - Profile (Enclosed in a Card) */}
          <div className="flex-1 flex">
            <Card className="w-full flex flex-col justify-between overflow-hidden border-border/40 bg-card/60 backdrop-blur-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-border/80">
              <CardContent className="p-6 md:p-8 flex flex-col gap-6 items-center md:items-start text-center md:text-left h-full justify-between">
                
                {/* Avatar & Text section */}
                <div className="flex flex-col gap-6 items-center md:items-start w-full">
                  {/* Large Avatar */}
                  <div className="relative group">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-25 blur-sm group-hover:opacity-40 transition duration-300" />
                    <Avatar className="w-32 h-32 md:w-40 md:h-40 border-2 border-background shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
                      <AvatarImage
                        src="https://github.com/zzdandanzz.png?size=400"
                        alt="Profile avatar"
                      />
                      <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                        DL
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Name, Title, and About me */}
                  <div className="space-y-3 w-full">
                    <div className="space-y-1">
                      <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text">
                        Daniel Lastname
                      </h2>
                      <p className="text-sm font-semibold text-primary/90 uppercase tracking-widest">
                        WebGIS & Frontend Engineer
                      </p>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                      Hi, I&apos;m Daniel. I build high-performance WebGIS platforms and interactive spatial applications. Specializing in rendering dense geospatial datasets in real-time, I bridge the gap between complex GIS analysis and intuitive, modern web interfaces.
                    </p>
                  </div>
                </div>

                {/* 4. Social Links */}
                <div className="flex gap-4 pt-4 border-t border-border/40 w-full justify-center md:justify-start">
                  <a
                    href="mailto:daniel@example.com"
                    className="p-2.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    aria-label="Email"
                    title="Email"
                  >
                    <IconMail className="w-5 h-5" />
                  </a>
                  <a
                    href="https://t.me/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    aria-label="Telegram"
                    title="Telegram"
                  >
                    <IconBrandTelegram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/zzdandanzz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <IconBrandGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <IconBrandLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 4. Right Column - Call to Action (Floating/No Card) */}
          <div className="flex-1 flex flex-col items-center justify-center text-center md:text-left md:items-start gap-6 p-6">
            <div className="space-y-4 max-w-md">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                Interactive Geospatial Playground
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Explore custom visualization engines, tile map rendering benchmarks, and experimental data layers. Optimized for mobile and desktop WebGIS analysis.
              </p>
            </div>

            <div className="w-full flex flex-col items-center md:items-start gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                Launch WebGIS Sandbox PWA
              </Button>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start items-center pt-2">
                <span className="text-xs text-muted-foreground mr-1">Built with:</span>
                <Badge variant="secondary" className="px-2.5 py-0.5 text-xs font-semibold">
                  Maplibre GL
                </Badge>
                <Badge variant="secondary" className="px-2.5 py-0.5 text-xs font-semibold">
                  Deck.gl
                </Badge>
                <Badge variant="secondary" className="px-2.5 py-0.5 text-xs font-semibold">
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
