import useGeneralStore from "../stores/generalStore";
import Experience from "../components/Experience/Experience";
import Header from "../components/Header/Header";

function Home() {
    const { showHeader } = useGeneralStore();

    return (
        <>
            <main className="main">
                {showHeader && <Header></Header>}
                <Experience></Experience>
            </main>
        </>
    );
}

export default Home;
