export type Project = {
    _id: number
    title: string
    about: string
    tech: string[]
    website: string
    github: string
    frontImg: string
    projectImages: Image[]
    shortAbout: string
}

export type Projects = Project[]


export type Image = {
    path: string,
    url: string
}

export type Images = {
    homepagePic: Image
    favIcon: Image
}

