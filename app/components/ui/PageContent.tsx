import { Flex, Text } from '@chakra-ui/react'
import MediaCard from '@/app/components/ui/MediaCard'
import LinkButton from '@/app/components/ui/LinkButton'
import { Media } from '@/app/typings'

type MediaPageContentProps = {
    currentPage: number
    data: Media[]
}

export default function MediaPageContent({ currentPage, data }: MediaPageContentProps) {
    const isFirstPage = currentPage < 2

    return (
        <>
            <Flex py="5" gap="4" direction="row" wrap="wrap" justifyContent="center">
                {data.map((media) => (
                    <MediaCard data={media} key={media.id} />
                ))}
            </Flex>
            <Flex gap="5" justifyContent="center" width="full">
                <LinkButton
                    isDisabled={isFirstPage}
                    goToPage={isFirstPage ? 1 : currentPage - 1}
                    text="Back"
                    color="yellow"
                />
                <Text alignContent="center">Page {currentPage}</Text>
                <LinkButton goToPage={currentPage + 1} text="Next" color="yellow" />
            </Flex>
        </>
    )
}
