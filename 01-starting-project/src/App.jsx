
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButtton from './components/TabButton.jsx';

function App() {
  function handleSelect() {
    console.log('Helo world - Selected!')
}

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* <TabButtton label='Components' /> */}
            <TabButtton onSelect={handleSelect}>Components</TabButtton>
            <TabButtton onSelect={handleSelect}>JSX</TabButtton>
            <TabButtton onSelect={handleSelect}>Probs</TabButtton>
            <TabButtton onSelect={handleSelect}>State</TabButtton>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
