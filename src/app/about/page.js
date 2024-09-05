import AboutUs from "@/Components/AboutUs";
import Gallery from "@/Components/Gallery";
import SectionBanner from "@/Components/SectionBanner";

const page = () =>{
    return(
        <div>
            <SectionBanner title={"About us"} banner={"https://t3.ftcdn.net/jpg/05/24/37/16/360_F_524371662_i8JkwIuMQkwJLQJGgaU7dqQ8pVzqhErW.jpg"}/>
            <AboutUs/>
            <Gallery/>
        </div>
    )
}

export default page;