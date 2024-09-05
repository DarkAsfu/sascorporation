import ContactForm from "@/Components/ContactForm";
import SectionBanner from "@/Components/SectionBanner";

const page = () =>{
    return(
        <div>
            <SectionBanner title={"Contact Us"} banner={"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw1NTEzfDB8MXxzZWFyY2h8MTR8fGNvbnN1bHRpbmd8ZW58MHx8fHwxNjQyNTAzOTYz&ixlib=rb-1.2.1&q=80&w=1080"}/>
            <ContactForm/>
        </div>
    )
}

export default page;