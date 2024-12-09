export type Media = {
    id: number
    title: {
        english: string
        native: string
        romaji: string
    }
    description: string
    coverImage: {
        color: string
        large: string
    }
    type: string
    countryOfOrigin: string
    episodes: number | null
    chapters: number | null
    status: string
    genres: string[]
    averageScore: number
}

export type PageInfo = {
    currentPage: number
    total: number
}

type Page = {
    pageInfo: PageInfo
    media: Media[]
}

export type MediaPage = {
    Page: Page
}
