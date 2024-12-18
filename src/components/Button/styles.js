import styled from "styled-components";

export const ButtonContainer = styled.button`

    background-color: #0026ff;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 1.5rem;
    margin-top: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover{
        cursor: pointer;
        background-color: #0051ff;
    }

    &:active{
        background-color: #0014a8;
    }
`;