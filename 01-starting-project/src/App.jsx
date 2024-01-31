
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>  
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              titlex={CORE_CONCEPTS[0].titlex}
              descriptionx={CORE_CONCEPTS[0].descriptionx}
              imagex={CORE_CONCEPTS[0].imagex} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

      </main>
    </div>
  );
}

export default App;
