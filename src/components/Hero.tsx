import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  IconMail,
  IconBrandTelegram,
  IconBrandGithub,
  IconBrandLinkedin,
  IconDownload,
} from "@tabler/icons-react"

export function Hero() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      {/* 1. Header */}
      <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-border/60 bg-background/80 px-6 py-6 backdrop-blur-md md:px-12 md:py-8">
        <span className="text-lg font-semibold tracking-tight transition-opacity select-none hover:opacity-80">
          zahmatkesh.com
        </span>

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

      {/* 2. Main Hero Container */}
      <main className="flex flex-1 items-center justify-center px-6 py-12 md:px-12 md:py-20 lg:py-24">
        <div className="flex w-full max-w-5xl flex-col items-stretch gap-8 md:flex-row md:gap-12 lg:gap-16">
          {/* 3. Left Column - Profile (Enclosed in a Card) */}
          <div className="flex flex-1">
            <Card className="flex w-full flex-col justify-between overflow-hidden border-border/40 bg-card/60 shadow-xl backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-border/80 hover:shadow-2xl">
              <CardContent className="flex h-full flex-col items-center justify-between gap-6 p-6 text-center md:items-start md:p-8 md:text-left">
                {/* Avatar & Text section */}
                <div className="flex w-full flex-col items-center gap-6 md:items-start">
                  {/* Large Avatar */}
                  <div className="group relative">
                    <div className="absolute -inset-1 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 opacity-25 blur-sm transition duration-300 group-hover:opacity-40" />
                    <Avatar className="h-32 w-32 border-2 border-background shadow-lg transition-transform duration-300 group-hover:scale-[1.02] md:h-40 md:w-40">
                      <AvatarImage
                        src="https://github.com/zzdandanzz.png?size=400"
                        alt="Daniel Zahmatkesh"
                      />
                      <AvatarFallback className="bg-linear-to-br from-indigo-500 to-purple-600 text-2xl font-bold text-white">
                        DZ
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Name, Title, and About me */}
                  <div className="w-full space-y-3">
                    <div className="space-y-1">
                      <h2 className="bg-linear-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-3xl font-bold tracking-tight">
                        Daniel Zahmatkesh
                      </h2>
                      <p className="text-sm font-semibold tracking-widest text-primary/90 uppercase">
                        Lead Front-End Developer
                      </p>
                    </div>
                    <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground md:mx-0">
                      Specializing in high-performance React applications,
                      complex state management, and geospatial web platforms.
                    </p>
                  </div>
                </div>

                {/* 4. Social Links */}
                <div className="flex w-full justify-center gap-4 border-t border-border/40 pt-4 md:justify-start">
                  <a
                    href="mailto:contact@zahmatkesh.com"
                    className="rounded-full bg-secondary p-2.5 text-secondary-foreground transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
                    aria-label="Email"
                    title="Email"
                  >
                    <IconMail className="h-5 w-5" />
                  </a>
                  <a
                    href="https://t.me/DanielZahmatkesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-secondary p-2.5 text-secondary-foreground transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
                    aria-label="Telegram"
                    title="Telegram"
                  >
                    <IconBrandTelegram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/zzDanDanzz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-secondary p-2.5 text-secondary-foreground transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <IconBrandGithub className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/daniel-zahmatkesh-185288240/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-secondary p-2.5 text-secondary-foreground transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <IconBrandLinkedin className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 4. Right Column - Featured Projects */}
          <div className="flex flex-1 flex-col justify-center gap-6 p-6 text-center md:items-start md:p-0 md:pl-6 md:text-left">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                Featured Projects
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Open-source engineering tools and interactive WebGIS
                applications.
              </p>
            </div>

            <div className="flex w-full flex-col gap-5">
              {/* Project 1: UNESCO Map of Iran */}
              <Card className="w-full border-border/40 bg-card/60 text-left shadow-lg backdrop-blur-xl transition-[border-color,box-shadow] hover:border-border/80 hover:shadow-xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold">
                    UNESCO Map of Iran
                  </CardTitle>
                  <CardDescription>
                    An interactive web mapping application visualizing World
                    Heritage Sites using custom image markers and curated data.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="px-2 py-0.5 text-xs font-semibold"
                    >
                      MapLibre GL
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="px-2 py-0.5 text-xs font-semibold"
                    >
                      Zustand
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="px-2 py-0.5 text-xs font-semibold"
                    >
                      React
                    </Badge>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-linear-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500"
                      asChild
                    >
                      <a
                        href="https://zahmatkesh.com/unesco-map-of-iran/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href="https://github.com/zzDanDanzz/unesco-map-of-iran"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project 2: deckgl-draw */}
              <Card className="w-full border-border/40 bg-card/60 text-left shadow-lg backdrop-blur-xl transition-[border-color,box-shadow] hover:border-border/80 hover:shadow-xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold">
                    @zzdandanzz/deckgl-draw
                  </CardTitle>
                  <CardDescription>
                    A lightweight, developer-friendly, plug-and-play drawing
                    library for Deck.gl.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="px-2 py-0.5 text-xs font-semibold"
                    >
                      Deck.gl
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="px-2 py-0.5 text-xs font-semibold"
                    >
                      React
                    </Badge>
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" asChild>
                      <a
                        href="https://github.com/zzDanDanzz/deckgl-draw"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Repository
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href="https://www.npmjs.com/package/@zzdandanzz/deckgl-draw"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        NPM
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
