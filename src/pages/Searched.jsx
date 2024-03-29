import {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link, useParams }  from 'react-router-dom'

function Searched() {
    const [searched, setSearched] = useState([]);
    let params = useParams();

    const getSearched = async(name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const data = await api.json();

        setSearched(data.results);
    }

    useEffect(() => {
        getSearched(params.search);
    },[params.search])

    return (
        <div>
            <Grid>
                {searched.map((item) => {
                    return(
                        <Card key={item.id}>
                            <Link to={'/recipe/'+item.id}>
                                <img src={item.image} alt=""/>
                                <h4>{item.title}</h4>
                            </Link>
                        </Card>
                    )
                })}
            </Grid>
        </div>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 3rem;
`
const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
        box-shadow: 3px 3px 20px rgba(0,0,0,.3);
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
    transition: all .5s;
    :hover{
        transform: scale(1.02);
    }
`

export default Searched
