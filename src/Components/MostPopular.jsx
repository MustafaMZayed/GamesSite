
import '../assets/css/fontawesome.css'; // Make sure this is the correct path

// Example data for games (pass this as a prop when using the component)
const gameData = [

  { name: 'Mini Craft', category: 'Legendary', image: '/images/popular-05.jpg', rating: 4.8, downloads: '2.3M' },
  { name: 'Eagles Fly', category: 'Matrix Games', image: '/images/popular-06.jpg', rating: 4.8, downloads: '2.3M' },
  { name: 'Warface', category: 'Max 3D', image: '/images/popular-07.jpg', rating: 4.8, downloads: '2.3M' },
  { name: 'Warcraft', category: 'Legend', image: '/images/popular-08.jpg', rating: 4.8, downloads: '2.3M' },
  { name: 'Fortnite', category: 'Sandbox', image: '/images/popular-01.jpg', rating: 4.8, downloads: '2.3M' },
  { name: 'PubG', category: 'Battle S', image: '/images/popular-02.jpg', rating: 4.8, downloads: '2.3M' },
  { name: 'Dota2', category: 'Steam-X', image: '/images/popular-03.jpg', rating: 4.8, downloads: '2.3M' },
  { name: 'CS-GO', category: 'Legendary', image: '/images/popular-04.jpg', rating: 4.8, downloads: '2.3M' },
];

export default function MostPopular() {
  return (
    <div className="most-popular">
    
          <div className="heading-section">
            <h4><em>الاشهر</em> حاليا</h4>
          </div>
          <div className="row">
            <div className='owl-carousel'>
            {gameData?.slice(0, 8).map((game, index) => (
              <div key={index} className={`col-lg-${index < 10 ? '3' : '6'} col-sm-6`}>
                <div className="item">
                  <img src={game.image} alt={game.name} />
                  <h4>{game.name}<br /><span>{game.category}</span></h4>
                  <ul>
                    <li><i className="fa fa-star"></i> {game.rating}</li>
                    <li><i className="fa fa-download"></i> {game.downloads}</li>
                  </ul>
                </div>
              </div>
             
            ))}
             </div>
            <div className="col-lg-12">
              <div className="main-button">
                <a href="browse.html">  تصفح جميع الالعاب</a>
              </div>
            </div>
          </div>
        </div>
     
  );
}

// To use the component, pass the data as props:
// <MostPopular games={gameData} />
