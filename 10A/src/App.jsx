

  return (
    <div className="page">
      {/*Masthead*/}
      <Masthead />
      <div className="collection">
        {/* game collection map goes here*/}
        {/* use ItemCard component in loop */}
        {games.map((favoriteGames) => {
          return (
            <ItemCard
              key={favoriteGames.id}
              deleteFn={deleteCard}
              duplicateFn={duplicateCard}
              {...favoriteGames}
            />
          );
        })}
      </div>
      <hr />
      <NewGamesForm />
    </div>
  );
}

export default App;
