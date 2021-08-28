function Joke({ joke }) {
    return (
        <div className="flex h-1/2 w-4/5 justify-center text-sm text-white md:text-xl font-sas font-bold text-center">
            <p className="m-auto" dangerouslySetInnerHTML={{ __html: joke }} />
        </div>
    )
}

export default Joke