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
          <td>{publisher.join(", ")}</td>
          <td>{gameType}</td>
          <td>{completed ? "Yes" : "No"}</td>
          <td>{platform}</td>
          <td>
            <img src={image} alt={gameTitle} />
          </td>
        </tr>
      );
    }
