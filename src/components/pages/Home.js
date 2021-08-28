import { useEffect, useState } from 'react'
import { getJokesData } from '../../api/index'
import { getImage } from '../../utils/index'
import Button from '../buttons/Button'
import Image from '../images/Image'
import Joke from '../joke/Joke'
import React from 'react'
function Home() {
    const [joke, setJoke] = useState('')
    const [img, setImg] = useState('')

    const generateJoke = () => {
        getJokesData().then(data => {
            setJoke(data.value.joke)
            const newImage = getImage()
            setImg(newImage)

        }
        )
    }
    useEffect(() => {
        generateJoke();
    }, [])

    return (
        joke.length > 0 ? (
            <div className="flex h-screen">


                <div className="flex flex-col m-auto items-center w-full h-1/2">
                    <Image img={img} />
                    <Joke joke={joke} />
                    <Button generateJoke={generateJoke} />
                </div>
            </div>
        ) : (
            <div className="flex h-screen">
                <div className="flex flex-col items-center m-auto text-white text-lg">Loading....</div>
            </div>

        )
    )


}

export default Home