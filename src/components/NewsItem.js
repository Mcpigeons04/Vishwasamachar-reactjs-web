import React from 'react'

const NewsItem=(props)=>{

  
    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div className='my-3'>
        <div className="card" >
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}</span>
  <img src={!imageUrl?"https://www.google.com/search?sca_esv=962335f24d61a83d&sca_upv=1&rlz=1C1UEAD_enIN1084IN1084&sxsrf=ADLYWIInsG8VDYU-fjMC8pLG4iERV9jC9Q:1723953827286&q=phone+news&udm=2&fbs=AEQNm0AMrUEM0u25RSHSP2GXBv1FqRTJXslv5T9cWPShXuZK-unDRtidhDD6MO07O664cf3rzCkRGzT6TOmIkWN6z59BEI_sG_WvMHTpzIDOeN0PGxo6GXSSfRa8cDxIQHuP1ScxnvE6gsfZbDnXeIgL3Qyo-XvYLn-hLUVVPKryJo-wirzCOT_YtAyqBqEwc4xdjGdPjKp8-OHxyRpPMvGmyQYg4pWTIw&sa=X&ved=2ahUKEwiy8e-71P2HAxWPxDgGHRhdDmcQtKgLegQIFBAB&biw=1536&bih=695&dpr=1.25#vhid=IoMyxO1Cqb1VuM&vssid=mosaic":imageUrl} className="card-img-top" alt="..."/>
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
