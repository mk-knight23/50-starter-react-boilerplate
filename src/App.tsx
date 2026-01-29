import { Navbar, Hero, CodeShowcase, Footer } from './components';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <CodeShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;
