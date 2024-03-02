function Camelid({ type, imageUrl, fact }) {
  return (
    <>
    <div>
      <h3 className = "type">{type}</h3>
      <img src={imageUrl} alt={type} className = "camelid-image" />
      <p className = "fact">{fact}</p>
    </div>
    </>
  );
}

export default Camelid;
