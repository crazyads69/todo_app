import { Navbar, Button, Typography, Switch } from '@material-tailwind/react';
import { useNavigate, Link } from 'react-router-dom';
import { setLightTheme, setDarkTheme } from './Theme';

type Props = {
    theme_custom: string;
    setTheme: (theme: string) => void;
};

export function LoginNav({ theme_custom, setTheme }: Props) {
    const navigate = useNavigate();
    function handleRegister() {
        navigate('/register');
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
                    <Button
                        color="light-blue"
                        variant="gradient"
                        size="lg"
                        onClick={handleRegister}>
                        ĐĂNG KÝ
                    </Button>
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
                </div>
            </div>
        </Navbar>
    );
}
