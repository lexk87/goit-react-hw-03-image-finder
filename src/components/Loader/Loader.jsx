import PropTypes from 'prop-types';
import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <LoaderWrapper>
            <RotatingLines
                strokeColor="#00af1a"
                strokeWidth="5"
                animationDuration="0.75"
                width="40"
                visible={true}
            />
        </LoaderWrapper>
    );
};
