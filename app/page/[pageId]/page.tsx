'use client'
import { useQuery } from '@apollo/client'
import { getMediaListByPage } from '@/app/gql/queries'
import type { MediaPage } from '@/app/typings'
import { useMemo } from 'react'
import { useParams } from 'next/navigation'

import { Flex, Heading, Spinner, Text } from '@chakra-ui/react'
import UserInfoModal from '@/app/components/ui/UserInfoModal'
import MediaPageContent from '@/app/components/ui/PageContent'
import PageSelectDropdown from '@/app/components/ui/PageSelectDropdown'

export default function MediaPage() {
    const params = useParams<{ pageId: string }>()
    const { loading, error, data } = useQuery<MediaPage>(getMediaListByPage, {
        variables: { page: params.pageId }
    })
    const currentPage = useMemo(() => {
        if (params && params.pageId) {
            const parsedPage = parseInt(params.pageId)
            return isNaN(parsedPage) ? 1 : parsedPage
        }
        return 1
    }, [params])

    if (loading)
        return (
            <Flex justifyContent="center" width="100vw" mt="10">
                <Spinner size="lg" />
            </Flex>
        )
    if (error) return <p>Error : {error.message}</p>
    if (!data) return <p>No data found</p>

    const { media, pageInfo } = data.Page

    return (
        <Flex m="4" direction="row" wrap="wrap" justifySelf="center" justifyContent="center" width="80%">
            <Heading>Information Page</Heading>
            <Flex direction="row" wrap="wrap" justifyContent="space-between" width="100vw">
                <UserInfoModal />
                <PageSelectDropdown pageInfo={pageInfo} currentPage={currentPage} />
            </Flex>
            <MediaPageContent currentPage={currentPage} data={media} />
        </Flex>
    )
}
