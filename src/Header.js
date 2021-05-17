import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import CardItem from './CardItem';
import { cartItemDetail } from './cartItemDetail';
import logo from './tvmlogo.png'

const Header = () => {
    const [typeValue, setTypeValue] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [cardData, setCardData] = useState([]);
    
    useEffect(() => {
        if (typeValue === 'people') {
            fetch(`http://api.tvmaze.com/search/people?q=all`).then(res => res.json())
            .then((data) => setCardData(data))
            console.log("people >>>" + cardData)
        }
        else {
            fetch(`http://api.tvmaze.com/search/shows?q=all`).then(res => res.json())
            .then((data) => setCardData(data))
            console.log("shosw>>>>" + cardData)
        }
        
        
    }, [])
    const gettypedata = (e) => {
        setTypeValue(e.target.value);
        console.log(typeValue)
    }
    const getinputdata = (e) => {
        setInputValue(e.target.value);
        //console.log(inputValue)
    }

    const fetchData = async () => {
        await fetch(`http://api.tvmaze.com/search/${typeValue}?q=${inputValue}`).then(res => res.json())
            .then((data) => setCardData(data));
        console.log(cardData)

        // return (cardData.map((card, i) => {
        //     return <CardItem title={card.show.name}
        //         image={card.show.image === null ? "" : card.show.image.medium}
        //         des={card.show.summary} key={i} />
        // }))
    }
    return (
        <header>

            <div className="text-center ">
                <img src={logo} alt="" />
            </div>
            <nav className="navbar navbar-dark bg-dark px-4">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">TV-MAZE</a>
                    <div className="d-flex text-white">
                        <input className='ml-2 mr-2' onClick={gettypedata} type="radio" name="type" id="" value='people' /><span className='m-auto'>Actors</span>
                        <input className='ml-2 mr-2' onClick={gettypedata} type="radio" name="type" id="" value='shows' /><span className=' m-auto '>Shows</span>
                        <input onChange={getinputdata} className="form-control me-2 ml-3" type="search" placeholder="Search" aria-label="Search" />
                        <button onClick={fetchData} className=" ml-2 btn btn-outline-success" type="button">Search</button>
                    </div>
                </div>
            </nav>

            <div className=' m-2 mb-5 row d-flex justify-content-center text-center'>

                {
                    typeValue === 'people' && inputValue !== "" ?
                        cardData.map((card, i) => {
                            return <CardItem title={card.person.name}
                                type={typeValue}
                                id={card.person.id}
                                image={card.person.image === null ? logo : card.person.image.medium}
                                des={card.person.summary} key={i} />
                        }) :
                        cardData.map((card, i) => {
                            return <CardItem title={card.show.name}
                                type={typeValue}
                                id={card.show.id}
                                image={card.show.image === null ? logo : card.show.image.medium}
                                des={card.show.summary === null || card.show.summary === "" ? "Desc not Availble" : card.show.summary}
                                key={i} />
                        })


                }
            </div>

        </header>
    )
}
export default Header
