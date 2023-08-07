import { Navbar, Button, Typography } from '@material-tailwind/react';
import { useNavigate, Link } from 'react-router-dom';
export function Home() {
    const navigate = useNavigate();
    function handleLogin() {
        navigate('/login');
    }
    function handleRegister() {
        navigate('/register');
    }
    return (
        <>
            <Navbar
                color="light-blue"
                className=" container flex flex-row max-w-full justify-center items-center">
                <Link to="/">
                    <a>TODO</a>
                </Link>
            </Navbar>
            <div className=" container flex flex-col justify-center items-center h-screen ">
                <Typography
                    color="gray"
                    textGradient={true}
                    variant="h1"
                    className="container inline-flex ltr w-6/12">
                    Hãy bắt đầu sử dụng Todo ngay hôm nay
                </Typography>
                <div className="flex flex-row justify-between items-center gap-x-12 w-6/12 mt-6">
                    <Button
                        color="light-blue"
                        variant="gradient"
                        size="lg"
                        className="w-80"
                        onClick={handleLogin}>
                        Đăng nhập
                    </Button>
                    <Button
                        color="light-blue"
                        variant="gradient"
                        size="lg"
                        className="w-80"
                        onClick={handleRegister}>
                        Đăng ký
                    </Button>
                </div>
            </div>
        </>
    );
}
