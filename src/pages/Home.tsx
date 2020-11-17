import * as React from 'react'
import { Header } from '../components/Header'
import { Introduction } from '../containers/Home'

export const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Introduction />
        </>
    )
}
