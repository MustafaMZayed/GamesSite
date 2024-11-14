

const ProfileBanner = () => {
  return (
    
        <div className="main-profile">
          <div className='profileflex'>
            <div className="col-lg-4">
              <img src="/images/profile.jpg" alt="Profile" style={{ borderRadius: "23px" }} />
            </div>
            <div className="col-lg-4 align-self-center">
              <div className="main-info header-text">
                
                <span>Online</span>
                <h4>Alan Smithee</h4>
                <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                <div className="main-border-button">
                  <a href="#">Start Live Stream</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 align-self-center">
              <ul>
                <li>Games Downloaded <span>3</span></li>
                <li>Balance <span>16</span></li>
                
              </ul>
            </div>
          </div>
          </div>
    
  );
};

export default ProfileBanner;
