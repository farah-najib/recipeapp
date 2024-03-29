import styled from "styled-components";

export default styled.button`
   font-family: "Monaco", monospace;
   cursor: pointer;
   border: none;
   background-color: ${({ theme }) => theme.buttonBg};
   color: #fff;
   padding: 10px;
   margin-bottom: 20px;
   border-radius: 5px;
   font-size: 1.5rem;
`
