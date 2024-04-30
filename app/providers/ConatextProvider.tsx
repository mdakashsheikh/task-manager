'use client';

import React, { useState } from 'react'

import { GlobalProvider } from '../context/globalProvider';

interface Props {
    children: React.ReactNode;
}
const ConatextProvider = ({ children }: Props) => {
    const [isReady, setIsReady] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setIsReady(true);
        }, 200);
    }, [])

    if(!isReady) {
        return null;
    }

    return (
        <GlobalProvider>
            {children}
        </GlobalProvider>
    )
}

export default ConatextProvider