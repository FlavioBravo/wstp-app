import React from 'react';
import AppBarComponent from './components/AppBarComponent';
import Container from './components/Container';
import MainRoutes from './Main.routes';

export default function Main() {
    return (
        <div className="App">
            <AppBarComponent />
            <Container>
                <MainRoutes />
            </Container>
        </div>
    );
}