import { gql } from '@apollo/client'

export const getMediaListByPage = gql`
    query getMediaListByPage($page: Int) {
        Page(page: $page, perPage: 10) {
            pageInfo {
                currentPage
                total
            }
            media {
                id
                coverImage {
                    color
                    large
                }
                countryOfOrigin
                description
                episodes
                chapters
                type
                title {
                    english
                    native
                    romaji
                }
                status
                genres
                averageScore
            }
        }
    }
`
