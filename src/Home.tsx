import { Navbar, Button, Typography, Switch } from '@material-tailwind/react';
import { useNavigate, Link } from 'react-router-dom';
import { Loading } from './components/Loading';
import { useEffect, useState } from 'react';
import { getTheme, setLightTheme, setDarkTheme } from './components/Theme';
export function Home() {
    const [loading, setLoading] = useState(true);
    const [theme_custom, setTheme] = useState(getTheme());
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    const navigate = useNavigate();
    function handleLogin() {
        navigate('/login');
    }
    function handleRegister() {
        navigate('/register');
    }
    if (loading) {
        return <Loading loading={loading} theme_custom={theme_custom} />;
    }
    return (
        <div className="w-full h-full">
            <Navbar className="container flex flex-row max-w-full justify-between items-center rounded-none bg-white">
                <Typography color="light-blue" text-gradient={true} variant="h4">
                    <Link to="/">
                        <a>TODO</a>
                    </Link>
                </Typography>
                <Switch
                    ripple={true}
                    defaultChecked={theme_custom === 'dark' ? true : false}
                    onClick={() => {
                        if (theme_custom === 'light') {
                            setTheme('dark');
                            setDarkTheme();
                        } else {
                            setTheme('light');
                            setLightTheme();
                        }
                    }}
                />
            </Navbar>
            <div
                className={`container flex flex-col justify-center items-center h-screen max-w-full ${
                    theme_custom === 'dark' ? 'bg-gray-600' : 'bg-secondary-100'
                }`}>
                <Typography
                    color={`${theme_custom === 'dark' ? 'light-blue' : 'gray'}`}
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
        </div>
    );
}
