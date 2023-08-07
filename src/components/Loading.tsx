import { useEffect, useState } from 'react';
import { BounceLoader } from 'react-spinners';
import { Typography } from '@material-tailwind/react';
export function Loading() {
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    if (!loading) {
        return null;
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen mb-6">
                <BounceLoader color="#B993D6" loading={loading} size={60} />
                <Typography color="gray" textGradient={true} variant="p">
                    Loading ...
                </Typography>
            </div>
        </>
    );
}
