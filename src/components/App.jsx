import React, { Component } from 'react';
import { Button, Searchbar, ImageGallery, Loader } from 'components';
import { getImages } from 'services/ApiService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
    state = {
        images: [],
        searchQuery: null,
        pageNumber: 1,
        totalPages: null,
        isLoading: false,
        isNotEmpty: false,
    };

    onSubmit = async e => {
        e.preventDefault();
        const inputValue = e.target.elements.searchField.value.trim();
        const pageNumber = 1;

        if (inputValue === '') {
            this.setState({ isNotEmpty: false });
            toast.warn('Your search request is empty!', {
                position: 'top-center',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
            return;
        }

        this.setState({ isLoading: true });
        const result = await getImages(inputValue, pageNumber);
        this.setState({ isLoading: false });

        if (result.hits.length === 0) {
            this.setState({ isNotEmpty: false });
            toast.error(
                'Sorry, there are no images matching your search request.',
                {
                    position: 'top-center',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                }
            );
            return;
        }

        const totalPages = Math.floor(result.totalHits / 12);

        this.setState({
            images: result.hits,
            searchQuery: inputValue,
            pageNumber: pageNumber,
            totalPages: totalPages,
            isNotEmpty: true,
        });
    };

    render() {
        const { images, pageNumber, totalPages, isLoading, isNotEmpty } =
            this.state;

        return (
            <>
                <Searchbar onSubmit={this.onSubmit} />
                {isNotEmpty && <ImageGallery images={images} />}
                <Loader />
                <Button />

                <ToastContainer
                    position="top-center"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </>
        );
    }
}
