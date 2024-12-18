import { InputContainer } from "./styles";

function Input({value, onChange}){


    return(
        <InputContainer>
            <input type="text" placeholder="Insira sua cidade" value={value} onChange={onChange}></input>
        </InputContainer>
    )
}

export default Input;