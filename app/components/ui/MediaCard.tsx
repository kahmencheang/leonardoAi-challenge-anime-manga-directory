import { Media } from '@/app/typings'
import { Image, Card, Text } from '@chakra-ui/react'
import MediaInfoModal from './MediaInfoModal'

type MediaCardProps = {
    data: Media
}

export default function MediaCard(data: MediaCardProps) {
    const { title, coverImage, type, description } = data.data
    const allTitles = title.english || title.romaji || title.native

    return (
        <Card.Root maxWidth="320px" tabIndex={0} aria-labelledby="card-title">
            <Image
                src={coverImage.large}
                alt={`cover image for ${allTitles} ${type}`}
                alignContent="center"
                aspectRatio={4 / 3}
            />
            <Card.Body m="2" gap="2">
                <Card.Title mb="2" id="card-title">
                    {allTitles}
                </Card.Title>
                <Card.Description>
                    <Text lineClamp="2">{description}</Text>
                </Card.Description>
            </Card.Body>
            <Card.Footer m="2" justifyContent="space-between">
                <Text>Type: {type}</Text>
                <MediaInfoModal data={data.data} />
            </Card.Footer>
        </Card.Root>
    )
}
