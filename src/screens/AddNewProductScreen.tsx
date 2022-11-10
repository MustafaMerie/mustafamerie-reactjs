import { Label, TextInput, Button } from 'flowbite-react'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function AddNewProductScreen() {

    const navigate = useNavigate()

    const [formState, setFormState] = useState({
        name: '',
        price: '',
        category: '',
        description: '',
        avatar: '',
        developerEmail: 'mustafanawzatt@gmail.com',
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setFormState(prevState => ({ ...prevState, [name]: value }))
    }


    const inputFields = [
        {
            id: 'name',
            label: 'Product name',
            type: 'text',
            placeholder: 'iPhone 14 Pro Max',
            value: formState.name,
            required: true

        },
        {
            id: 'price',
            label: 'Product Price (USD)',
            type: 'text',
            placeholder: '1800',
            value: formState.price,
            required: true

        },
        {
            id: 'category',
            label: 'Product Category',
            type: 'text',
            placeholder: 'Electronics',
            value: formState.category,
            required: true

        },
        {
            id: 'description',
            label: 'Product description',
            type: 'text',
            placeholder: 'More info about the product',
            value: formState.description,
            required: true

        },
        {
            id: 'avatar',
            label: 'Product photo url',
            type: 'text',
            placeholder: 'https://www.apple.com/images/iphone-14-pro-max.jpg',
            value: formState.avatar,
            required: true

        },
        {
            id: 'developerEmail',
            label: '',
            type: 'hidden',
            placeholder: '',
            value: formState.developerEmail,
            required: true

        },
    ]


    const handleSubmit = (e: any) => {
        e.preventDefault();
        const [name, price, category, description, avatar, developerEmail] = e.target
        // console.log(name.value, price.value, category.value, description.value, avatar.value, developerEmail.value);

    }
    return (
        <>
            <div className='m-4 md:mx-auto md:container'>
                <Button onClick={() => navigate(-1)} size="xs" color="light">
                    <div className='w-5 m-1'>
                        <ArrowLeftIcon />
                    </div>
                    Back
                </Button>
            </div>
            <div className='m-3 bg-gray-800 rounded-lg'>

                <h1 className='pt-10 text-3xl font-semibold text-center dark:text-white'>Add a new Product</h1>
                <form className="container flex flex-col py-10 mx-auto" onSubmit={handleSubmit}>

                    {
                        inputFields && inputFields.map(input =>
                            <div className='mx-5 mb-4 lg:mx-0' key={input.id}>
                                <div className="block mb-2">
                                    <Label
                                        htmlFor={input.id}
                                        value={input.label}
                                    />
                                </div>
                                <TextInput
                                    id={input.id}
                                    name={input.id}
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    value={input.value}
                                    required={input.required}
                                    onChange={handleChange}
                                />
                            </div>

                        )
                    }

                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </>
    )
}

export default AddNewProductScreen