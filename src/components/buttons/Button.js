function Button({ generateJoke }) {
    return (
        <button className="bg-transparent hover:bg-white hover:text-purple-900 text-white font-bold py-2 px-4 border border-white hover:border-transparent rounded" onClick={generateJoke}>Generate a joke</button>
    )
}

export default Button