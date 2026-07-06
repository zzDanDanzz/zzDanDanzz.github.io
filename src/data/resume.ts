export interface Profile {
    network: string;
    url: string;
}

export interface SkillCategory {
    category: string;
    keywords: string[];
}

export type HighlightSegment =
    | string
    | { text: string; url: string };

export interface WorkExperience {
    company: string;
    location: string;
    position: string;
    startDate: string;
    endDate: string;
    iconKey: 'map-pin' | 'code' | 'language' | 'default';
    highlights: HighlightSegment[][];
}

export interface Education {
    institution: string;
    location?: string;
    degree: string;
    date: string;
    highlights?: string[];
}

export interface ResumeData {
    basics: {
        name: string;
        location: string;
        website: string;
        summary: string;
        profiles: Profile[];
    };
    skills: SkillCategory[];
    work: WorkExperience[];
    education: Education[];
}

export const resumeData: ResumeData = {
    basics: {
        name: "Daniel Zahmatkesh",
        location: "Tehran, Iran",
        website: "https://zahmatkesh.com",
        summary:
            "Lead Front-End Developer specializing in React applications and complex state management for data-heavy environments. A versatile problem-solver who rapidly adapts to new domains—from offline-first architectures to geospatial platforms.",
        profiles: [
            {
                network: "LinkedIn",
                url: "https://www.linkedin.com/in/daniel-zahmatkesh-185288240/",
            },
            {
                network: "GitHub",
                url: "http://github.com/zzDanDanzz/",
            },
        ],
    },
    skills: [
        {
            category: "Languages",
            keywords: ["JavaScript", "TypeScript"],
        },
        {
            category: "Frameworks & Libraries",
            keywords: ["React", "Next.js"],
        },
        {
            category: "State Management & Data Fetching",
            keywords: ["Zustand", "Jotai", "Redux", "SWR", "React Query"],
        },
        {
            category: "GIS, Mapping & Visualizations",
            keywords: ["Mapbox", "Deck.gl", "QGIS", "Turf.js"],
        },
    ],
    work: [
        {
            company: "Map.ir (Shiveh Narmafzar Gostar Asia)",
            location: "Tehran, Iran",
            position: "Lead Front-End Developer (Promoted from Front-End Developer)",
            startDate: "November 2022",
            endDate: "March 2026",
            iconKey: 'map-pin',
            highlights: [
                [
                    "National Postal Infrastructure (B2G): Assumed full ownership of the National Post Company's public portal (Sina) and internal platform (GNAF). Maintained the architecture and delivered new features while mentoring a team member to take over the project."
                ],
                [
                    "Web GIS Platform: Architected the front-end for a spatial data platform, engineering dynamic dataset filtering, vector and raster tile integration, and a Zustand-powered ",
                    { text: "client-side PDF export engine", url: "?demo=pdf-export" },
                    "."
                ],
                [
                    "Offline-First PWA: Architected an offline-first PWA using IndexedDB to cache gigabytes of vector data, allowing nationwide surveyors to seamlessly sync geographic edits in ",
                    { text: "zero-connectivity environments", url: "?demo=offline-sync" },
                    "."
                ],
                [
                    "Cross-Platform Architecture: Designed a hybrid architecture embedding a React web app inside QGIS via Qt WebView, achieving two-way, real-time geometry synchronization using QWebChannel."
                ],
                [
                    "Web CAD-to-GIS Pipeline: Engineered a browser-based DXF-to-GeoJSON pipeline utilizing a WASM port of GDAL, featuring a ",
                    { text: "custom Deck.gl georeferencing tool", url: "?demo=georeference" },
                    " to align floor plans with land parcels."
                ],
                [
                    "Team Leadership & Cross-Functional Impact: Mentored 3 junior developers and consistently bridged communication gaps between teams, actively stepping into backend workflows to resolve bottlenecks and unblock feature delivery."
                ],
            ],
        },
        {
            company: "Freelance Web Developer",
            location: "Tehran, Iran",
            position: "Front-End Developer & Digital Specialist",
            startDate: "2020",
            endDate: "2022",
            iconKey: 'code',
            highlights: [
                [
                    "Honar-e Ashpazi: Developed a Next.js frontend integrated with a headless WordPress CMS, leveraging Incremental Static Regeneration (ISR) to optimize page load speeds and SEO performance."
                ],
                [
                    "PlusBourse: Managed digital web infrastructure, designing custom UI elements in Figma and executing content updates to replace an external marketing agency."
                ],
            ],
        },
        {
            company: "Safir English Language Academy",
            location: "Tehran, Iran",
            position: "English Teacher",
            startDate: "2019",
            endDate: "2019",
            iconKey: 'language',
            highlights: [
                [
                    "Instructed diverse student groups, refining clear communication, presentation, and public speaking skills."
                ],
            ],
        },
    ],
    education: [
        {
            institution: "University of Helsinki",
            degree: "Full Stack Web Development Certification",
            date: "2022",
            highlights: [
                "Rigorously self-taught front-end architecture, modern JavaScript ecosystems, and full-stack development."
            ],
        },
        {
            institution: "High School Diploma",
            location: "Tbilisi, Georgia",
            degree: "High School Diploma",
            date: "2018",
        },
    ],
};