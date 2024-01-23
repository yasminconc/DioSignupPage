import styled from 'styled-components';


export const MainContainer = styled.div `
    display: flex;
    height: 100vh;
    font-family: Open Sans;
    flex-direction: column;
    
`
export const LeftSide = styled.div `
    display: flex;
    font-size: larger;
    flex-direction: column;
    height: 308px;
    width: 388px;
    font-size: 32px;
    font-weight: 700;
    line-height: 50px;

`
export const RightSide = styled.div `
    display: flex;
    flex-direction: column;
    width: 25rem;
    gap: 1rem;
    margin-top: 6rem;
    
`
export const Middle = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10rem;
       
`

export const ContainerInput = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 15rem;
    
    button {
        margin-top: 1rem;
        font-size: 1.01rem;
        cursor: pointer;
    }

`

export const BoxInput = styled.div `
    display: flex;
    border-bottom: 1px solid #3B3450;
    width: 15rem;
    
    input {
        background-color: transparent;
        color: #FFFFFF;
        flex:1;
        border: 0;
        height: 30px;
    }
    
    img {
        margin-right: 10px;
        
    }
    
`

export const Footer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;
   
`

export const FirstDescription = styled.p `
   margin-top: 1rem;
    
`

export const SecondDescription = styled.p `
    span {
        color: #23DD7A;
        cursor: pointer;
    }
    
`