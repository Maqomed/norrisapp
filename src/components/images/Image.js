function Image({ img }) {
    return (
        <div className="justify-center w-1/2">
            <img width="150" height="150" className="m-auto rounded-full md:shadow-xl" src={img} alt="Chuck Norris" />
        </div>
    )
}

export default Image