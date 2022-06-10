import styled from "styled-components";
import {transparentize } from 'polished';

export const Container = styled.div`
    max-width: 726px;
    width: 100%;
    margin: 0 auto;  
    margin-top: 2.5rem;  
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 4.5rem;

    span{
        font-size: 0.9rem;
        font-weight: 700;
    }

    strong {
        color: #fff;
        font-size: 0.8rem;
    }
`

export const TasksCreateCounter = styled.strong`
    vertical-align: middle;

    span{
        color: var(--blue);
    }

    strong {
        background: var(--gray-400);
        padding: 0.1rem 0.7rem;
        border-radius: 25px;
        margin-left: 0.5rem;
    }

`

export const TasksCompleteCounter = styled.strong`
    vertical-align: middle;

     span{
        color: var(--purple);
        margin-right: 0.5rem;
    }

    strong{
        background: var(--gray-400);
        padding: 0.1rem 0.7rem;
        border-radius: 25px;
    }
`

interface TasksActive {
    isActive: boolean;
}

export const TasksEmpty = styled.div<TasksActive>`
    
    display: ${(props) => props.isActive ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    margin-top: 1.5rem;

    padding-top: 4rem;
    border-top: 1px solid var(--gray-400);
    border-radius:0.5rem;

    img{ 
        margin-bottom: 1rem;
    }

    h2{
        color: var(--gray-300);
        font-size: 1.2rem;
    }
    
    p{
        color: var(--gray-300);
        font-size: 1.2rem;
    }
    
`

export const Tasks = styled.ul<TasksActive>`
    display: ${(props) => props.isActive ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    padding-top: 2rem;

    li{
        max-width: 736px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        background: var(--gray-500);
        color: var(--gray-100);
        border-radius: 0.5rem;
        border: 1px solid var(--gray-400);

        padding: 1rem;
        margin-bottom: 0.7rem;

        &.completed {
            p{
                text-decoration: line-through;
                opacity: 0.5;
                color: var(--gray-100);
            }
        }
        
        label {
            display: block;
            position: relative;
            padding-left: 2rem;
            margin-bottom: 18px;
            cursor: pointer;

            input {
                position: absolute;
                opacity: 0;
                height: 0;
                width: 0;

                &:checked {
                    & ~ span {
                        background: var(--purple);
                        border-color: transparent;
                    }

                    & ~ span:after {
                        display: block;
                    }
                }

            }

            span{
                position: absolute;
                top: 0;
                left: 0;
                width: 1.1rem;
                height: 1.1rem;
                border-radius: 50%;
                border: 2px solid var(--blue);

                transition: background 0.2s;
                
                &:hover {
                    background: ${transparentize(0.8, '#1e6f9f')};
                }

                &:after{
                    content: "";
                    position: absolute;
                    display: none;
                    left: 4.5px;
                    top: 2px;
                    width: 3px;
                    height: 6px;
                    border: solid white;
                    border-width: 0 2px 2px 0;
                    transform: rotate(45deg);
                }
            }

        }

        button{
            background: none;
            border: none;

            transition: all 0.2s;

            &:hover{
                background: var(--gray-400);
                
                & > svg > path{
                    fill: var(--danger);
                }
            }
        }
    }
`