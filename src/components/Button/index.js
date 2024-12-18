import React from "react";
import { ButtonContainer } from "./styles";

export function Button({onClick}){


    return(
        <ButtonContainer onClick={onClick}>Pesquisar</ButtonContainer>
    )
}