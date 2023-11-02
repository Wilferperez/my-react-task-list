import { useState } from "react"
import { Input } from '@chakra-ui/react'

export const CreateTask = ({ saveTask }) => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        saveTask({ name: inputValue })
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                // className="new-todo"
                value={inputValue}
                onChange={(event)=>{ setInputValue(event.target.value) }}
                placeholder="Que quieres hacer?"
                autoFocus
                >
            </Input>
        </form>
    )
}