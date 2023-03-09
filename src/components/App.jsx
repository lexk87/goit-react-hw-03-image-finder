import React, { Component } from 'react';
import { Button, Searchbar, ImageGallery, Loader } from 'components';

export class App extends Component {
    render() {
        return (
            <>
                <Searchbar />
                <ImageGallery />
                <Loader />
                <Button />
            </>
        );
    }
}
