import useGeneralStore from "../stores/generalStore";
import Experience from "../components/Experience/Experience";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Home() {
    const { showHeader } = useGeneralStore();

    return (
        <>
            <main className="main">
                {showHeader && <Header></Header>}
                <Experience></Experience>
                {showHeader && <Footer></Footer>}
            </main>
        </>
    );
}

export default Home;
