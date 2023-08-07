import { Navbar, Button, Typography } from '@material-tailwind/react';
import { useNavigate, Link } from 'react-router-dom';
export function LoginNav() {
    const navigate = useNavigate();
    function handleRegister() {
        navigate('/register');
    }
    return (
        <Navbar className="max-w-full max-h-fit" color="white" shadow={true}>
            <div className="container flex flex-row justify-between items-center">
                <Typography color="light-blue" text-gradient={true} variant="h4">
                    <Link to="/">
                        <a>TODO</a>
                    </Link>
                </Typography>
                <Button color="light-blue" variant="gradient" size="lg" onClick={handleRegister}>
                    ĐĂNG KÝ
                </Button>
            </div>
        </Navbar>
    );
}
