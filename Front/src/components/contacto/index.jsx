import Boxcontact from "./Box/boxcontact"

const CompoContact = () =>{

    const submitEndpoint = "https://example.com/submit"; // Reemplaza con la URL correcta de tu endpoint

    return(
        <div className="flex justify-center items-center bg-contact-bg bg-cover h-screen w-full" >
            <Boxcontact submitEndpoint={submitEndpoint}/>
        
        </div>
    )
}

export default CompoContact