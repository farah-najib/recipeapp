import styled from 'styled-components'

// Styled Components
export const Nav = styled.nav`
   
    position: sticky;
    top: 0;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.buttonBg};
    padding: 1rem 2rem;
    color: white;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`

export const NavLinks = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
        margin: 0 1rem;

        a {
            text-decoration: none;
            color: white;
            font-size: 1rem;
            transition: color 0.3s;

            &:hover {
                color: #f1c40f;
            }
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

        li {
            margin: 0.5rem 0;
        }
    }
`

export const Hamburger = styled.div`
    display: none;
    cursor: pointer;

    span {
        background: white;
        display: block;
        height: 3px;
        width: 25px;
        margin: 5px 0;
        transition: all 0.3s;
    }

    @media (max-width: 768px) {
        display: block;
    }
`
