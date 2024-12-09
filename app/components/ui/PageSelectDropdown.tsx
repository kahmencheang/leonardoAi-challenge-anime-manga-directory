'use client'

import {
    SelectContent,
    SelectItem,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
    createListCollection
} from '@chakra-ui/react'
import { PageInfo } from '@/app/typings'
import { useRouter } from 'next/navigation'
import { CgChevronDown } from 'react-icons/cg'

type PageSelectDropdownProps = {
    pageInfo: PageInfo
    currentPage: number
}

export default function PageSelectDropdown({ pageInfo, currentPage }: PageSelectDropdownProps) {
    const router = useRouter()
    const options = Array.from({ length: pageInfo.total }, (_, index) => ({
        label: `Page ${index + 1}`,
        value: index + 1
    }))

    const pageOptions = createListCollection({ items: options })

    return (
        <SelectRoot collection={pageOptions} width="150px">
            <SelectTrigger aria-label="Jump to page">
                <SelectValueText placeholder="Jump to page" />
                <CgChevronDown />
            </SelectTrigger>
            <SelectContent position="absolute">
                {pageOptions.items.map((page) => (
                    <SelectItem
                        item={page}
                        key={page.value}
                        color="white"
                        colorPalette="black"
                        onClick={() => currentPage !== page.value && router.push(`/page/${page.value}`)}
                    >
                        {page.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </SelectRoot>
    )
}
