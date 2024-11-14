


const FeaturedGame = ({ game }) => {
    console.log(game);
    return (
      <div className="item">
        <div className="thumb">
          <img src={game.image} alt={game.title} />
          <div className="hover-effect">
            <h6 >أشتري اللأن !</h6>
          </div>
        </div>
        <h4>{game.title}<br /><span>{game.downloads}</span></h4>
        <ul>
          <li><i className="fa fa-dollar-sign"></i> {game.rating}</li>
          <li><i className="fa fa-star"></i> {game.rating}</li>
        </ul>
      </div>
    );
  };
  
  export default FeaturedGame;