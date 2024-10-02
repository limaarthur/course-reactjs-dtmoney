import styled from "styled-components";

export const Container = styled.form`
    h2 {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    
    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        border: 0;
        background: ${props => props.theme["gray-900"]};
        color: ${props => props.theme["gray-300"]};
        font-weight: 400;
        font-size: 1rem;
        
        &::placeholder {
            color: ${props => props.theme["gray-500"]};
      }
      & + input {
        margin-top: 1rem;
      }
    }
    
    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: ${props => props.theme["green-500"]};
        color: ${props => props.theme.white};
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1.5rem;
        cursor: pointer;
        &:hover {
            background: ${props => props.theme["green-700"]};
            transition: background-color 0.2s;
      }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    button {
        height: 4rem;
        border: none;
        padding: 1rem;
        gap: 0.5rem;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        background: ${props => props.theme["gray-700"]};
        color: ${props => props.theme["gray-300"]};

        cursor: pointer;
        
        img {
            width: 25px;
            height: 25px;
        }

        span {
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
        }
    }
`;