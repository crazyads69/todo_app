import { Button, Navbar, Typography, Input, Switch } from '@material-tailwind/react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { setLightTheme, setDarkTheme } from './Theme';

export type DashboardNavProps = {
    theme_custom: string;
    setTheme: (theme: string) => void;
};

export function DashboardNav({ theme_custom, setTheme }: DashboardNavProps) {
    return (
        <>
            <Navbar
                className="flex min-w-full justify-between rounded-none"
                color="white"
                shadow={true}>
                <Typography color="light-blue" text-gradient={true} variant="h4">
                    <Link to="/">
                        <a>TODO</a>
                    </Link>
                </Typography>
                <div className="flex flex-row items-center gap-6">
                    <div className="relative flex items-center gap-3">
                        <Input
                            type="search"
                            name="search"
                            label="Tìm ghi chú..."
                            className="pr-20 w-6/12"
                            containerProps={{
                                className: 'min-w-0',
                            }}
                        />
                        <Button color="light-blue" size="sm" className="!absolute right-1 top-1">
                            Search
                        </Button>
                    </div>
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
            </Navbar>
        </>
    );
}
