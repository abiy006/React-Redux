// export default function CoreConcept(props) {
export default function CoreConcept({ imagex, titlex, descriptionx }) {
  return (
    <li>
      {/* <img src={imagex} alt={props.titlex} />
      <h3>{props.titlex}</h3>
      <p>{props.descriptionx}</p> */}
      <img src={imagex} alt={titlex} />
      <h3>{titlex}</h3>
      <p>{descriptionx}</p>
    </li>
  );
}