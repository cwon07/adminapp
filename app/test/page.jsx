const Page = () => {
    const handleForm = async () => {
        "use server"
        console.log("Hello")
    }
    return(
        <div>
            <form action={handleForm}>
                <input type="text"/>
                <button>Send</button>
            </form>
        </div>
    )
}

export default Page