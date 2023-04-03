import { Box, Button } from "@chakra-ui/react"

export const Pagination = ({ page, totalCount, onChange, limit }) => {
    const numButtons = Math.ceil(totalCount / limit)

    const pages = new Array(numButtons).fill(0).map((ele, index) => {
        return <Button mr='3' borderRadius={'50%'} color={'white'} variant='solid'
            key={index}
            disabled={page == index + 1}
            style={{ backgroundColor: page === index + 1 ? 'red' : '#29B6F6' }}
            onClick={() => onChange(index + 1)}
        > {index + 1}
        </Button>
    })

    return (
        <>
            {pages}
        </>
    )
}
