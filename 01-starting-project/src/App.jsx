
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButtton from './components/TabButton.jsx';

function App() {
  let tabContent = "Please click a button!";

  function handleSelect(selectedButton) {
    tabContent = selectedButton;
    console.log(selectedButton)
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
            <TabButtton onSelect={() => handleSelect('components')}>Components</TabButtton>
            <TabButtton onSelect={() => handleSelect('jsx')}>JSX</TabButtton>
            <TabButtton onSelect={() => handleSelect('probs')}>Probs</TabButtton>
            <TabButtton onSelect={() => handleSelect('state')}>State</TabButtton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
