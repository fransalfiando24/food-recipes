import {useState, useEffect} from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom'

function Vegetarian() {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async() => {
        const check = localStorage.getItem('veggie');
        
        if(check){
            setVeggie(JSON.parse(check));
        }
        
        else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
            const data = await api.json();

            localStorage.setItem('veggie', JSON.stringify(data.recipes));
            setVeggie(data.recipes);
        } 
    }

    return (
        <div>
            <Wrapper>
                <h2 style={{marginBottom: 1 + 'rem'}}>Special Menu for Vegetarian</h2>
                <Splide
                    options = {{
                        perPage: 4,
                        arrows: false,
                        pagination: false,
                        drag: 'free',
                        gap: '2rem',
                        breakpoints: {
                            800: { perPage: 2, pagination: true, gap: '1rem'},
                        },
                    }}
                >
                    {veggie.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <Link to={'/recipe/'+recipe.id}>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt=""/>
                                        <Gradient/>
                                    </Link>
                                </Card>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
    margin: 4rem 0;
`

const Card = styled.div`
    min-height: 13rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    p{
        position: absolute;
        z-index: 99;
        left: 50%;
        bottom: 10%;
        transform: translate(-50%, -10%);
        width: 100%;
        text-align: center;
        font-size: 1rem;
        font-weight: 600;
        color: #fff;
    }
`

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7));
`

export default Vegetarian
