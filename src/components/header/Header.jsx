import { MenuIcon, HeaderPage } from "./style"
import { useState } from 'react';
import logo from '../../assets/logo.png';

export default function Header({ setChangeMenuState }) {
    return (
        <HeaderPage>
            <MenuIcon onClick={() => setChangeMenuState(true)} />
            <h1>Studio Lelyana Dourado</h1>
            <img src={logo} />
        </HeaderPage>
    )
}