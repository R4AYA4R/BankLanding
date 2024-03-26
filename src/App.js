import SectionCases from "./components/SectionCases";
import SectionFeatures from "./components/SectionFeatures";
import SectionProducts from "./components/SectionProducts";
import SectionQuestions from "./components/SectionQuestions";
import SectionTop from "./components/SectionTop";
import Header from "./components/header/Header";


function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main">
        <SectionTop/>
        <SectionProducts/>
        <SectionCases/>
        <SectionFeatures/>
        <SectionQuestions/>
      </main>
    </div>
  );
}

export default App;
