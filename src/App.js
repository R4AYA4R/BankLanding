import SectionProducts from "./components/SectionProducts";
import SectionTop from "./components/SectionTop";
import Header from "./components/header/Header";


function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main">
        <SectionTop/>
        <SectionProducts/>
      </main>
    </div>
  );
}

export default App;
