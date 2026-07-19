import * as React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { resumeData } from "@/data/resume"
import {
  IconMapPin,
  IconCode,
  IconLanguage,
} from "@tabler/icons-react"


export function Timeline() {
  const iconMap: Record<"map-pin" | "code" | "language", React.ReactNode> = {
    "map-pin": (
      <IconMapPin className="h-4.5 w-4.5 text-primary md:h-6 md:w-6" />
    ),
    code: <IconCode className="h-4.5 w-4.5 text-primary md:h-6 md:w-6" />,
    language: (
      <IconLanguage className="h-4.5 w-4.5 text-primary md:h-6 md:w-6" />
    ),
  }

  return (
    <section className="relative mx-auto w-full max-w-5xl px-4 py-16 md:py-24">
      {/* Heading */}
      <div className="mb-12 space-y-3 text-center md:text-left">
        <h2 className="bg-linear-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-3xl font-bold tracking-tight md:text-4xl">
          Professional Experience
        </h2>
      </div>

      {/* Timeline Container */}
      <div>
        <div className="relative">
          {/* Glowing Gradient Timeline vertical line */}
          <div className="absolute top-6 bottom-6 left-5 hidden w-0.5 bg-linear-to-b from-primary via-blue-500 to-border/30 md:left-8.5 md:block" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {resumeData.work.map((job) => (
              <div key={job.company} className="group relative md:pl-20">
                {/* Timeline Dot */}
                <div className="absolute top-2 left-0.75 z-10 hidden h-9 w-9 transform-gpu items-center justify-center rounded-full border border-border/50 bg-card/85 shadow-md backdrop-blur-md transition-[transform,border-color,box-shadow] duration-300 group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-primary/20 md:left-2.75 md:flex md:h-12 md:w-12">
                  {iconMap[job.iconKey]}
                </div>

                {/* Card Container with Frosted Glass Aesthetic */}
                <Card className="border-border/40 bg-card/60 shadow-xl backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-border/80 hover:shadow-2xl">
                  <CardHeader className="flex flex-col gap-3 pb-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1.5">
                      <CardTitle className="text-lg leading-snug font-bold tracking-tight text-foreground md:text-xl">
                        {job.position}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground/80">
                          {job.company}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <IconMapPin className="h-3.5 w-3.5" /> {job.location}
                        </span>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="w-fit border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                    >
                      {job.startDate} – {job.endDate}
                    </Badge>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <ul className="list-none space-y-4 pl-0">
                      {job.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="relative pl-6 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="absolute top-2.25 left-0 h-1.5 w-1.5 rounded-full bg-primary/40 transition-colors group-hover:bg-primary" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
