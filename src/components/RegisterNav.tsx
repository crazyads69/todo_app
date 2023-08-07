import { Navbar, Button, Typography, Switch } from '@material-tailwind/react';
import { useNavigate, Link } from 'react-router-dom';
import { setLightTheme, setDarkTheme } from './Theme';
export type RegisterNavProps = {
    theme_custom: string;
    setTheme: (theme: string) => void;
};
export function RegisterNav({ theme_custom, setTheme }: RegisterNavProps) {
    const navigate = useNavigate();
    function handleLogin() {
        navigate('/login');
    }
    return (
        <Navbar className="max-w-full max-h-fit rounded-none" color="white" shadow={true}>
            <div className="container flex flex-row justify-between items-center">
                <Typography color="light-blue" text-gradient={true} variant="h4">
                    <Link to="/">
                        <a>TODO</a>
                    </Link>
                </Typography>
                <div className="flex flex-row items-center justify-evenly gap-6">
                    <Button color="light-blue" variant="gradient" size="lg" onClick={handleLogin}>
                        ĐĂNG NHẬP
                    </Button>
                    <Switch
                        ripple={true}
                        label="Dark Mode"
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
                </div>
            </div>
        </Navbar>
    );
}
