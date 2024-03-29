import {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useParams }  from 'react-router-dom'

import React from 'react'

function Recipe() {
    const [detail, setDetail] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    let params = useParams();

    const fetchDetail = async() => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();

        setDetail(detailData);
    }

    useEffect(() => {
        fetchDetail();
    },[params.name])

    return (
        <DetailWrapper>
            <div>
                <h2>{detail.title}</h2>
                <img src={detail.image} alt=""/>
            </div>
            <Info>
                <div className='btn'>
                    <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
                    <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
                </div>
                {
                    activeTab === 'instructions' && (
                        <div>
                            <br/>
                            <h5 dangerouslySetInnerHTML={{__html: detail.summary }}></h5><br/>
                            <h5 dangerouslySetInnerHTML={{__html: detail.instructions }}></h5>
                        </div>
                    )
                }
                {
                    activeTab === 'ingredients' && (
                       <ul>
                           {detail.extendedIngredients.map((ingredient) => (
                               <li key={ingredient.id}>{ingredient.original}</li>
                           ))}
                       </ul>
                    )
                }

            </Info>
        </DetailWrapper>
    )
}

const DetailWrapper = styled.div`
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h2{
        margin-bottom: 2rem;
    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul{
        margin-top: 2rem;
    }
    img{
        width: 25rem;
        border-radius: 1rem;
        box-shadow: 3px 3px 20px rgba(0,0,0,.3);
    }
    
    @media only screen and (max-width: 768px){
        flex-direction: column;
        gap: 2rem;
        img{
            width: 20rem;
        }
    }

`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 1rem;
    font-weight: 600; 
    cursor: pointer;
`

const Info = styled.div`
    width: 70%;
    margin-left: 3rem;
    font-size: 20px;
    @media only screen and (max-width: 768px){
        margin-left: 0;
        width : 100%;
        .btn{
            display: flex;
        }
        m
    }
`
export default Recipe
