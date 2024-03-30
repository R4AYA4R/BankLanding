import SectionCases from "../components/SectionCases";
import SectionFeatures from "../components/SectionFeatures";
import SectionJourney from "../components/SectionJourney";
import SectionProducts from "../components/SectionProducts";
import SectionQuestions from "../components/SectionQuestions";
import SectionTestimonials from "../components/SectionTestimonials";
import SectionTop from "../components/SectionTop";

const Home = () => {
    return (
        <main className="main">
            <SectionTop />
            <SectionProducts />
            <SectionCases />
            <SectionFeatures />
            <SectionQuestions />
            <SectionTestimonials />
            <SectionJourney />
        </main>
    )
}
export default Home;