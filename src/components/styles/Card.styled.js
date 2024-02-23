import styled from 'styled-components'

export const StyleCard = styled.div`
    display: inline-block;
    width: 90%;
    max-width: 20rem;
    min-height: 36rem;
    margin: 1rem;
    font-size: 1rem;
    text-decoration: none;
    overflow: hidden;
    box-shadow: 0 0 3rem -1rem rgba(0, 0, 0, 0.5);
    transition: transform 0.1s ease-in-out, box-shadow 0.1s;
    border-radius: 20px;
   

    img {
        width: 100%;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }

    h1 {
        padding: 20px 5px 10px 5px;
        font-size: 16px;
        font-weight: 700;
    }

    p {
        font-size: 14px;
        color: gray;
        padding: 10px 30px 20px 30px;
    }
`
