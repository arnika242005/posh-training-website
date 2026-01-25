import Header from './components/Header';
import HeroSection from './components/HeroSection'; // 1. Import the Hero Section

function App() {
  return (
    <div className="App">
      <Header /> 
      
      <main>
         <HeroSection /> {/* 2. Place the Hero Section here */}
         {/* Other content sections will follow */}
      </main>
      
    </div>
  );
}

export default App;