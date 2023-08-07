import { Navbar, Button, Typography } from '@material-tailwind/react';

export function LoginNav() {
    return (
        <Navbar className="max-w-full max-h-fit" color="white" shadow={true}>
            <div className="container flex flex-row justify-between items-center">
                <Typography color="light-blue" text-gradient={true} variant="h4">
                    <a href="">TODO</a>
                </Typography>
                <Button color="light-blue" variant="gradient" size="lg">
                    ĐĂNG KÝ
                </Button>
            </div>
        </Navbar>
    );
}
