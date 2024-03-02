function Camelid({ type, imageUrl, fact }) {
  return (
    <div>
      <h3>{type}</h3>
      <img src={imageUrl} alt={type} style={{width: "400px", height: "300px"}}/>
      <p>{fact}</p>
    </div>
  );
}

export default Camelid;
