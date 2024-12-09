import Link from 'next/link'
import styles from '../../page.module.css'
import { Button } from '@chakra-ui/react'

type LinkButtonProps = {
    text: string
    goToPage: number
    isDisabled?: boolean
    color?: string
}

export default function LinkButton({ goToPage, text, isDisabled = false, color }: LinkButtonProps) {
    return (
        <Button disabled={isDisabled} className={isDisabled ? styles.disabledButton : ''} colorPalette={color}>
            <Link href={isDisabled ? '' : `/page/${goToPage}`}>{text}</Link>
        </Button>
    )
}
