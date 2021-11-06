import React from 'react';


function Cards(props) {
    return (
        <>
            <li className = "cards__item">
                <a href={props.link_url}  target="_blank" >
                    <div className= "cards__item__link">
                    <figure className = "cards__item__pic-wrap" data-category={props.label}>
                        <img 
                        src={props.src} 
                        alt=""
                        className="cards__item__img" 
                        />
                    </figure>
                    </div>
                    <div className="cards__item__info">
                        <h5 className = "cards__item__text">{props.text}</h5>
                        <h6 className = "cards__item__about">{props.about}</h6>
                    </div>
                </a>

                

            </li>
        </>
    )
}

export default Cards
