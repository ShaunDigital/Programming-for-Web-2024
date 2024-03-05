export function GameRow({
  gameTitle,
  publisher,
  gameType,
  completed,
  platform,
  image,
}) {
  return (
    <tr>
      <td>{gameTitle}</td>
      <td>{publisher.join(",")}</td>
      <td>{gameType}</td>
      <td>{completed && "yes"}</td>
      <td>{platform}</td>
      <td><img src={image} alt={gameTitle} />
      </td>
    </tr>
  );
}
export default GameRow;