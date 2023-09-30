export type Project = {
    title: string
    about: string
    tech: string[]
    website: string
    github: string
    projectImages: ProjectImages[]
}

export type Projects = Project[]


export interface ProjectImages {
    id: string,
    path: string,
    url: string
}

