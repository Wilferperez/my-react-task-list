import { Button, HStack } from '@chakra-ui/react'
import { FILTERS_BUTTONS } from './consts'

export const Filters = ({ filterSelected, onFilterChange }) => {
    return (
        <HStack>
            {
                Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                    const isSelected = key === filterSelected
                    const className = isSelected ? 'teal' : 'gray'
                    return (
                        <Button key={key} colorScheme={className}>
                            <a
                                href={href}
                                onClick={(event) => {
                                    event.preventDefault()
                                    onFilterChange(key)
                                }}
                            >
                                {literal}
                            </a>
                        </Button>
                    )
                })
            }
        </HStack>
    )
}