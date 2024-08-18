import React from 'react'

const NewsItem=(props)=>{

  
    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div className='my-3'>
        <div className="card" >
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}</span>
  <img src={!imageUrl?"https://www.google.com/search?sca_esv=962335f24d61a83d&sca_upv=1&rlz=1C1UEAD_enIN1084IN1084&sxsrf=ADLYWIIR1n0RYRimtdLV0fANmX0Aa0KEuQ:1723953422324&q=news+banner&udm=2&fbs=AEQNm0DSjjYWCybNh4Y2in02N243-OHmPxREG1BKYr-Kgpdbh-COBiIiY8Fo3IG2RaEyCjej1JUx8BX1u76p09NZAhv-YNiGIgZaBVjE1yk17r1Pes7N9RcUvgmVqNTHO5N_g-kDyYgYdm4Op_EcGu7hted7E2mWk79xdPeBeYAs19hMVEDpflJ2rmVJ8xnZa2uRFEpNko7gAJheNEfaMN8eCXu7CiQQ6A&sa=X&sqi=2&ved=2ahUKEwiAi-L60v2HAxUy-TgGHSJ3I8MQtKgLegQIFhAB&biw=1536&bih=695&dpr=1.25#vhid=qB33rxkepMjjZM&vssid=mosaic":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"Anonymous":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem
