import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 90vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    h1 {
  font-size: 2.5rem; /* Aumenta o tamanho */
  text-transform: uppercase; /* Mantém as letras maiúsculas */
  font-weight: bold;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text; /* Aplica o gradiente apenas no texto */
  color: transparent; /* Torna a cor de fundo transparente */
  text-align: center;
  margin-bottom: 1rem; /* Espaço entre o título e os elementos abaixo */
}

    .search-bar {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: center;
        color: #fff; /* Texto branco */
        padding: 1rem;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}

    .search-bar h1 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
        text-align: center;
    }

    .search-bar input {
        width: 100%;
        max-width: 400px;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border: 1px solid #333;
        border-radius: 5px;
        outline: none;
        box-shadow: inset 0 0 3px rgba(255, 255, 255, 0.3);
    }
`;