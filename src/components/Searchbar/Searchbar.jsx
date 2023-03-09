import PropTypes from 'prop-types';
import { Header, Form, Button, SearchIcon, Input } from './Searchbar.styled';

export const Searchbar = () => {
    return (
        // <header class="searchbar">
        //     <form class="form">
        //         <button type="submit" class="button">
        //             <span class="button-label">Search</span>
        //         </button>

        //         <input
        //             class="input"
        //             type="text"
        //             autocomplete="off"
        //             autofocus
        //             placeholder="Search images and photos"
        //         />
        //     </form>
        // </header>

        <Header>
            <Form>
                <Button type="submit" area-label="Search">
                    <SearchIcon size="26px" />
                </Button>

                <Input
                    class="input"
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                />
            </Form>
        </Header>
    );
};
