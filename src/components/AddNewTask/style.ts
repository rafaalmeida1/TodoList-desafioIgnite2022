import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;

    margin-top: -1rem;

    input{
        max-width: 636px;
        width: 40rem;
        height: 3rem;
        margin-right: 0.5rem;
        border: 1px solid var(--gray-700);
        border-radius: 6px;
        background: var(--gray-500);
        outline: none;

        padding: 0 1rem 0 1rem;

        transition: border 0.2s;

        &:focus {
            border: 1px solid var(--purple-dark);
            color: #fff;
        }

        &::placeholder {
            font-size: 1rem;
        }

        @media(max-width: 768px){
            width: 100%;
        }
    }

    button{
        max-width: 100px;
        height: 2.9rem;
        background: var(--blue-dark);
        padding: 0 1rem 0 1rem;

        font-size: 0.9rem;
        font-weight: 400;
        color: #fff;
        border-radius: 6px;
        border: none;

        display: flex;
        justify-content: center;
        align-items: center;


        transition: background 0.2s;

        &:hover{
            background: var(--blue);
        }


        span {
            margin-right: 0.5rem;
        }

        @media(max-width: 768px){
            width: 100%;
        }
    }
`