'use client'

import { useGlobalState } from '@/app/context/globalProvider'
import React from 'react'
import styled from 'styled-components'

const Tasks = () => {
    const { theme } = useGlobalState();


    return (
        <TasksStyled theme={theme}>Tasks</TasksStyled>
    )
}

const TasksStyled = styled.main `
    position: relative;
    padding: 2rem;
    width: 100%;
    background-color: ${(props) => props.theme.colorBg2};
    border: 2px solid ${(props) => props.theme.borderColor2};
    border-radius: 1rem;
    height: 100%;

    overflow-x: auto;

    &::-webkit-scrollbar {
    width: 0.5rem;
    }
`;

export default Tasks