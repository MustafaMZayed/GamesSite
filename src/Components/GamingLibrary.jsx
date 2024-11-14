

// Example game data
const games = [
  {
    id: 1,
    imgSrc: "/images/game-01.jpg",
    title: "Dota 2",
    genre: "Sandbox",
    dateAdded: "24/08/2036",
    hoursPlayed: "634 H 22 Mins",
    status: "Downloaded"
  },
  {
    id: 2,
    imgSrc: "/images/game-02.jpg",
    title: "Fortnite",
    genre: "Sandbox",
    dateAdded: "22/06/2036",
    hoursPlayed: "745 H 22 Mins",
    status: "Downloaded"
  },
  {
    id: 3,
    imgSrc: "/images/game-03.jpg",
    title: "CS-GO",
    genre: "Sandbox",
    dateAdded: "21/04/2022",
    hoursPlayed: "632 H 46 Mins",
    status: "Downloaded"
  }
];

const GamingLibrary = () => {
  return (
    <div className="gaming-library profile-library">
      <div className="col-lg-12">
        <div className="heading-section">
          <h4><em>Your Gaming</em> Library</h4>
        </div>
        {games.map((game) => (
          <div className={`item ${game.id === games.length ? "last-item" : ""}`} key={game.id}>
            <ul>
              <li><img src={game.imgSrc} alt={game.title} className="templatemo-item" /></li>
              <li><h4>{game.title}</h4><span>{game.genre}</span></li>
              <li><h4>Date Added</h4><span>{game.dateAdded}</span></li>
              <li><h4>Hours Played</h4><span>{game.hoursPlayed}</span></li>
              <li><h4>Currently</h4><span>{game.status}</span></li>
              <li>
                <div className="main-border-button border-no-active">
                  <a href="#">{game.status}</a>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamingLibrary;
