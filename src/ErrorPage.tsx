import { useRouteError } from 'react-router-dom';
import { Navbar, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export function ErrorPage() {
    const error = useRouteError();
    function isError(error: any): error is { statusText: string } {
        return 'statusText' in error;
    }
    return (
        <>
            <Navbar className="container flex flex-row max-w-full justify-center items-center rounded-none bg-white">
                <Typography color="light-blue" text-gradient={true} variant="h4">
                    <Link to="/">
                        <a>TODO</a>
                    </Link>
                </Typography>
            </Navbar>
            <div className="text-center p-5 text-xl">
                <h1 className="text-xl text-slate-900">Sorry, an error has occurred</h1>
                {isError(error) && <p className="text-base text-slate-700">{error.statusText}</p>}
            </div>
        </>
    );
}
