import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButtton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js'; './data.js';

function App() {
  // setSelectedTopic is a function that execute 2 processes
  //   1. it will update selectedTopic to the new value
  //   2. it will reexecute App() component function again
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic)
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
            <TabButtton onSelect={() => handleSelect('props')}>Probs</TabButtton>
            <TabButtton onSelect={() => handleSelect('state')}>State</TabButtton>
          </menu>
          {!selectedTopic && <p>Please select a topic.</p>}
          {selectedTopic && (
            <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].titlex}</h3>
            <p>{EXAMPLES[selectedTopic].descriptionx}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
          )}

        </section>
      </main>
    </div>
  );
}

export default App;
