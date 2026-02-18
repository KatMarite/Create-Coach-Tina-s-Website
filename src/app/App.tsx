import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Coaching } from './components/Coaching';
import { TrainingFacilitation } from './components/TrainingFacilitation';
import { EmpowerU } from './components/EmpowerU';
import { Podcast } from './components/Podcast';
import { BooksResources } from './components/BooksResources';
import { AuthenticallyWoman } from './components/AuthenticallyWoman';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Coaching />
        <TrainingFacilitation />
        <EmpowerU />
        <Podcast />
        <BooksResources />
        <AuthenticallyWoman />
      </main>
      <Footer />
    </div>
  );
}
