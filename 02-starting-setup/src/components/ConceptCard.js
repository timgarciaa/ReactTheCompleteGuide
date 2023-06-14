function ConceptCard({concept}) {
  return (
    <li className="concept">
      <img src={concept.image} alt={concept.title} />
      <h2>{concept.title}</h2>
      <p>{concept.description}</p>
    </li>
  );
}

export default ConceptCard;
