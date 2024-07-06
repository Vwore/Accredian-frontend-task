import Contact from "./Contact/Contact"
import FooterMenu from "./FooterMenu/FooterMenu";
import Refer from "./Refer/Refer";
import TopBar from "./TopBar/TopBar";

const Home = () => {
    return(
        <div >
            <Contact />
            <TopBar />
            <Refer />
            <FooterMenu />
        </div>
    )
}

export default Home;
