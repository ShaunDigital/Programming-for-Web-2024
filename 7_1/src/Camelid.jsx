function Camelid({ type, imageUrl, fact }) {
  return (
    <div>
      <h3>{type}</h3>
      <img src={imageUrl} alt={type} className = "camelid-image" />
      <p>{fact}</p>
    </div>
  );
}

export default Camelid;
