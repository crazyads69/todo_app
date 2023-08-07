import { BounceLoader } from 'react-spinners';
import { Typography } from '@material-tailwind/react';
type LoadingProps = {
    loading: boolean;
    theme_custom: string;
};
export function Loading({ loading, theme_custom }: LoadingProps) {
    return (
        <>
            <div
                className={`flex flex-col items-center justify-center h-screen mb-6 ${
                    theme_custom === 'dark' ? 'bg-gray-600' : 'bg-secondary-100'
                }`}>
                <BounceLoader color="#B993D6" loading={loading} size={60} />
                <Typography className="bg-pink-200" textGradient={true} variant="h6">
                    Loading ...
                </Typography>
            </div>
        </>
    );
}
