import { LoginNav } from './components/LoginNav';
import { Card, Typography, Input, Button, Alert } from '@material-tailwind/react';
import { useForm, FieldError } from 'react-hook-form';
import { ValidationError } from './components/ValidationError';
import { User, signUp } from './api/supabaseAuth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTheme } from './components/Theme';

export function Login() {
    const navigate = useNavigate();
    const [login, setLogin] = useState<boolean>(false);
    const [alert, setAlert] = useState<boolean>(false);
    const [theme_custom, setTheme] = useState(getTheme());
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<User>({ mode: 'onBlur', reValidateMode: 'onBlur' });
    function onSubmit(user: User) {
        let loggedIn = Promise.resolve(signUp(user.email, user.password));
        loggedIn.then((value) => {
            console.log('Login status: ', value);
            setLogin(value);
            if (value === false) {
                setAlert(true);
            } else {
                sessionStorage.setItem('email', user.email);
                sessionStorage.setItem('password', user.password);
                setAlert(false);
                navigate('/dashboard');
            }
            sessionStorage.setItem('login', JSON.stringify(value));
        });
    }
    function getEditorStyle(fieldError: FieldError | undefined) {
        return fieldError
            ? 'border-red-600 hover:border-red-600 disabled:border-red-600 invalid:border-red-600'
            : '';
    }
    return (
        <div className="fixed h-full w-full">
            <Alert open={alert} onClose={() => setAlert(!alert)} color="red">
                Đăng nhập thất bại
            </Alert>
            <LoginNav theme_custom={theme_custom} setTheme={setTheme} />
            <div
                className={`flex flex-col h-screen w-full ${
                    theme_custom === 'dark' ? 'bg-gray-400' : 'bg-secondary-100'
                }`}>
                <div className="flex flex-col justify-center items-center px-10 py-20">
                    <Card className="h-max w-1/2 rounded-lg bg-white" shadow={true}>
                        <div className="flex flex-col justify-start items-start px-5 py-5">
                            <Typography color="blue" textGradient={true} variant="h5">
                                ĐĂNG NHẬP
                            </Typography>
                            <Typography color="gray" textGradient={false} variant="p">
                                Vui lòng nhập thông tin tài khoản của bạn
                            </Typography>
                            <form
                                noValidate
                                className="flex flex-col justify-center items-center w-full mt-6"
                                onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-col items-start w-full gap-4 mb-5">
                                    <Typography
                                        color="gray"
                                        textGradient={false}
                                        variant="li"
                                        className="font-bold">
                                        Nhập email:
                                    </Typography>
                                    <Input
                                        type="email"
                                        size="lg"
                                        label="Email"
                                        id="email"
                                        {...register('email', {
                                            required: 'Email không được để trống',
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: 'Vui lòng nhập đúng định dạng email',
                                            },
                                        })}
                                        className={getEditorStyle(errors.email)}
                                    />
                                    <ValidationError fieldError={errors.email} />
                                    <Typography
                                        color="gray"
                                        textGradient={false}
                                        variant="li"
                                        className="font-bold">
                                        Nhập mật khẩu:
                                    </Typography>
                                    <Input
                                        color="light-blue"
                                        type="password"
                                        size="lg"
                                        label="Mật khẩu"
                                        id="password"
                                        {...register('password', {
                                            required: 'Mật khẩu không được để trống',
                                        })}
                                        className={getEditorStyle(errors.password)}
                                    />
                                    <ValidationError fieldError={errors.password} />
                                </div>
                                <Button type="submit" fullWidth color="light-blue" size="lg">
                                    ĐĂNG NHẬP
                                </Button>
                            </form>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
