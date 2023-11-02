import { Text, Button } from '@chakra-ui/react'
import { Filters } from "./Filters";

export const Footer = ({ activeCount = 0, completedCount, filterSelected, handleFilterChange, onClearCompleted }) => {
    return (
        <>
            <Text fontWeight='bold'>{activeCount}</Text>
            <Text>
                tareas pendientes
            </Text>
            <Filters 
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            />
            {
                completedCount > 0 && (
                    <Button
                        onClick={onClearCompleted}
                    >
                        Borrar completadas
                    </Button>
                )
            }
        </>
    )
}