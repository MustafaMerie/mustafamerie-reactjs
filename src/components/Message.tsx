import { Alert } from 'flowbite-react'

interface Props {
    color: string,
    children: string,
};

function Message({ color, children }: Props) {
    return <Alert className='items-center w-1/4 mx-auto my-5 text-base font-semibold' color={color}>{children}</Alert>
}

Message.defaultProps = {
    color: 'info',
}

export default Message