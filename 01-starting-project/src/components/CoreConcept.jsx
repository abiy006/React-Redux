export default function CoreConcept({imagex, titlex, descriptionx}) {
    return (
      <li>
        <img src={imagex} alt={titlex} />
        <h3>{titlex}</h3>
        <p>{descriptionx}</p>
      </li>
    );
  }