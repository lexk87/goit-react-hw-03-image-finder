import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

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
