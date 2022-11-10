import { Spinner } from 'flowbite-react'

function Loading() {
    return (
        <div className='flex justify-center mt-20'
        >
            <Spinner
                aria-label="Extra large spinner example"
                size="xl"
            />
        </div>
    )
}

export default Loading