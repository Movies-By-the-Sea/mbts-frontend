import './scrollCard.css';

export default function scrollCard({data, handleOpen}) {

    return (
        <div className='t3-scroll-parent' >
          {data.map((item, index) => (
              <div className="sc-box">
                <img 
                key       = {item.name}
                alt       = {item.name}
                src       = {item.poster}
                className = "sc-img"
                />
                <div className="sc-text">
                  <div className="sc-title">{index + 1}. {item.name}</div>
                  <p className="sc-subtitle">
                    MBTS Score: {item.ratings.overall} / 5  
                    <div className="info-divider">|</div>
                      {item.genre.map((i)=>i.name + ' ')}
                    <div className="info-divider">|</div>
                      {item.year}
                  </p>
                  <p>Directed by {item.director}. Starring {item.actors.map((i) => i.name + ', ')}</p>
                  <div className="sc-action">
                    <div 
                      style     = {{marginRight:"20px"}}
                      onClick   = {handleOpen(item)}
                      className = "sc-button">Read More</div>
                    <a 
                      target = {"_blank"}
                      rel    = "noreferrer"
                      href   = {item.trailer} className = "sc-button">Watch Trailer</a>
                  </div>
                </div>
              </div>
            ))}
        </div>
    );
  }