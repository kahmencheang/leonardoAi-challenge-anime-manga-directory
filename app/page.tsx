import UserInfoModal from './components/ui/UserInfoModal'
import { Flex } from '@chakra-ui/react'

export default function Home() {
    return (
        <Flex m="4" direction="row" wrap="wrap" justifySelf="center" width="80%">
            <Flex gap="4" direction="row" wrap="wrap" justifyContent="center" width="full">
                <UserInfoModal />
            </Flex>
        </Flex>
    )
}
