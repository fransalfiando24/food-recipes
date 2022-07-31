import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

import React from 'react'

function Category() {
    return (
        <List>
            <SLink to={'/cuisine/American'}>
                <FaHamburger/>
                <h4>American</h4>
            </SLink>
            <SLink to={'/cuisine/Italian'}>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </SLink>
            <SLink to={'/cuisine/Asian'}>
                <GiNoodles/>
                <h4>Asian</h4>
            </SLink>
            <SLink to={'/cuisine/Korean'}>
                <GiChopsticks/>
                <h4>Korean</h4>
            </SLink>
        </List>
    )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem 0rem;
    gap: 1rem;
    @media only screen and (max-width: 768px){
        gap: 0;
    }
`

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);
    h4{
        color: white;
        font-size: 0.8rem;
    }

    svg{
        color: white;
        font-size: 1.5rem;
    }
    
    :hover{
        background: linear-gradient(to right, #f27121, #e94057);
        transition: all 2s;
    }

    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
    }
    @media only screen and (max-width: 768px){
        svg{
            font-size: 1.2rem;
        }
        width: 8rem;
    }
`
export default Category
