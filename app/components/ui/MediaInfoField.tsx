import { Flex, Text } from '@chakra-ui/react'

type InfoFieldProps = {
    name: string
    value: string
}

export function InfoField({ name, value }: InfoFieldProps) {
    const cleanedValue = value.replace(/<[^>]*>/g, '')
    return (
        <Flex direction="column" my="2">
            <Text fontWeight="bold" textStyle="md">
                {name}:
            </Text>
            <Text fontWeight="normal" textStyle="md">
                {cleanedValue}
            </Text>
        </Flex>
    )
}
