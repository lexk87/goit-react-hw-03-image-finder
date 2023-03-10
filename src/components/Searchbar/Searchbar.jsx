import PropTypes from 'prop-types';
import { Header, Form, Button, SearchIcon, Input } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
    return (
        <Header>
            <Form onSubmit={onSubmit}>
                <Button type="submit" area-label="Search">
                    <SearchIcon size="26px" />
                </Button>

                <Input
                    name="searchField"
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                />
            </Form>
        </Header>
    );
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
};
