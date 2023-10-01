export type Project = {
    _id: number
    title: string
    about: string
    tech: string[]
    website: string
    github: string
    frontImg: string
    projectImages: ProjectImage[]
}

export type Projects = Project[]


export interface ProjectImage {
    id: string,
    path: string,
    url: string
}