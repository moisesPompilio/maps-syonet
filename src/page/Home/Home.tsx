import { AboutMe } from '../../components/AboutMe/AboutMe';
import { PracticeAreas } from '../../components/PracticeAreas/PracticeAreas';
import './Home.scss';

export function Home() {
  return (
    <div>
      <AboutMe />
      <PracticeAreas />
    </div>
  );
}
