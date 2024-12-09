import { useState } from 'react'
import {
    DialogContent,
    DialogHeader,
    DialogBody,
    Button,
    DialogTitle,
    DialogBackdrop,
    Image,
    Badge,
    Flex,
    DialogRoot,
    DialogPositioner
} from '@chakra-ui/react'

import { Media } from '@/app/typings'
import { CloseButton } from '../chakraUI/close-button'
import { InfoField } from './MediaInfoField'

type MediaInfoModalProps = {
    data: Media
}

export default function MediaInfoModal(data: MediaInfoModalProps) {
    const [isDialogOpen, setDialogOpen] = useState(false)
    const { title, coverImage, type, description, countryOfOrigin, episodes, chapters, status, genres, averageScore } =
        data.data
    const allTitles = title.english || title.romaji || title.native

    const handleClose = () => {
        setDialogOpen(false)
    }

    return (
        <DialogRoot open={isDialogOpen} size="lg">
            <DialogBackdrop />
            <Button variant="solid" onClick={() => setDialogOpen(true)}>
                Read more
            </Button>

            <DialogPositioner>
                <DialogContent position="absolute" mt="50" width="100%">
                    <DialogHeader>
                        <Flex flexDirection="row" justifyContent="space-between" alignContent="center" mb="2">
                            <DialogTitle fontSize="3xl" alignContent="center">
                                {title.english || title.romaji || title.native}
                            </DialogTitle>
                            <CloseButton variant="plain" onClick={handleClose} />
                        </Flex>
                        <Flex gap="2" wrap="wrap">
                            {genres.map((g) => (
                                <Badge variant="solid" size="xs" key={g}>
                                    {g}
                                </Badge>
                            ))}
                        </Flex>
                    </DialogHeader>
                    <DialogBody>
                        <Image src={coverImage.large} alt={`cover image for ${allTitles}`} />
                        <InfoField name="Type" value={type} />
                        <InfoField name="Country of origin" value={countryOfOrigin} />
                        {type === 'ANIME' ? (
                            <InfoField name="Number of episodes" value={`${episodes}`} />
                        ) : (
                            <InfoField name="Number of chapters" value={`${chapters}`} />
                        )}
                        <InfoField name="Status" value={status} />
                        <InfoField name="Average score" value={`${averageScore}`} />
                        <InfoField name="Description" value={description} />
                    </DialogBody>
                </DialogContent>
            </DialogPositioner>
        </DialogRoot>
    )
}
