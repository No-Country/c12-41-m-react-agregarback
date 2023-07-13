import { AboutBox, BoxContactFooter, BoxDevelopers, BoxTL, RedesFooter } from "./BoxFooter/BoxMain"


const InfoFooter = () => {
    return(
        <div className="container flex flex-col flex-wrap px-5 py-20 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
        <RedesFooter/>
         <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
         <AboutBox/>
         <BoxDevelopers/>
         <BoxTL/>
         <BoxContactFooter/>
         </div>
       </div>
    )
}
export default InfoFooter