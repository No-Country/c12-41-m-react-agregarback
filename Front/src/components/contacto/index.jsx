import Boxcontact from "./Box/boxcontact"

const CompoContact = () =>{

    const submitEndpoint = "https://example.com/submit"; // Reemplaza con la URL correcta de tu endpoint

    return(
        <div className="flex justify-center items-center bg-gradient-to-t from-dark via-gray to-dark bg-no-repeat bg-cover h-screen w-full" >
            <Boxcontact submitEndpoint={submitEndpoint}/>
        
        </div>
    )
}

export default CompoContact