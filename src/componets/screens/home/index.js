import homeImage from '../../../assets/images/note.webp';
import '../../../css/home.css';

function Home() {
    return (
        <section className="home">
            <img src={homeImage} alt="Logo" className="home-image" />
        </section>
    );
}

export default Home;