import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {

  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}


function CoreConcepts(propsx) {
  return (
    <li>
      <img src={propsx.imagex} alt={propsx.titlex} />
      <h3>{propsx.titlex}</h3>
      <p>{propsx.descriptionx}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              titlex="Components"
              descriptionx="The core UI building block."
              imagex={componentsImg} />
            <CoreConcepts />
            <CoreConcepts />
            <CoreConcepts />
          </ul>
        </section>

      </main>
    </div>
  );
}

export default App;
