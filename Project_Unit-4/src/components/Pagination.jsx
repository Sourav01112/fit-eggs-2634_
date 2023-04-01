import { Box, Button } from "@chakra-ui/react"

export const Pagination = ({ page, totalCount, onChange, limit }) => {
    const numButtons = Math.ceil(totalCount / limit)

    const pages = new Array(numButtons).fill(0).map((ele, index) => {
        return <Button borderRadius={'0px'} color={'white'} variant='solid'
            key={index}
            disabled={page == index + 1}
            style={{ backgroundColor: page === index + 1 ? 'red' : 'black' }}
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
