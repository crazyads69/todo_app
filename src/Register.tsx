import { RegisterNav } from './components/RegisterNav';
import { Card, Typography, Input, Button, Alert } from '@material-tailwind/react';
import { useForm, FieldError } from 'react-hook-form';
import { ValidationError } from './components/ValidationError';
import { UserRegister, signUp } from './api/supabaseRegister';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export function Register() {
    const navigate = useNavigate();
    const [signIn, setSignIn] = useState<boolean>(false);
    const [alert, setAlert] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserRegister>({ mode: 'onBlur', reValidateMode: 'onBlur' });
    function onSubmit(user: UserRegister) {
        let loggedIn = Promise.resolve(
            signUp(user.username, user.fullname, user.email, user.password),
        );
        loggedIn.then((value) => {
            console.log('Login status: ', value);
            setSignIn(value);
            if (value === false) {
                setAlert(true);
            } else {
                setAlert(false);
                navigate('/login');
            }
            localStorage.setItem('register', JSON.stringify(value));
        });
    }
    function getEditorStyle(fieldError: FieldError | undefined) {
        return fieldError
            ? 'border-red-600 hover:border-red-600 disabled:border-red-600 invalid:border-red-600'
            : '';
    }
    return (
        <>
            {alert && (
                <Alert
                    open={alert}
                    onClose={() => setAlert(!alert)}
                    color="red"
                    className="w-96 mt-10">
                    Đăng ký thất bại
                </Alert>
            )}
            <RegisterNav />
            <div className="container flex flex-col justify-center items-center max-h-fit px-10 py-10 ">
                <Card
                    color="transparent"
                    className="h-1/2 w-1/2 min-h-fit rounded-lg"
                    shadow={true}>
                    <div className="flex flex-col justify-start items-start px-5 py-5">
                        <Typography color="blue" textGradient={true} variant="h5">
                            ĐĂNG KÝ
                        </Typography>
                        <Typography color="gray" textGradient={false} variant="p">
                            Vui lòng đăng ký thông tin tài khoản của bạn
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
                                    Nhập tên người dùng:
                                </Typography>
                                <Input
                                    type="text"
                                    size="lg"
                                    label="Username"
                                    id="username"
                                    {...register('username', {
                                        required: 'Username không được để trống',
                                    })}
                                    className={getEditorStyle(errors.username)}
                                />
                                <ValidationError fieldError={errors.username} />
                                <Typography
                                    color="gray"
                                    textGradient={false}
                                    variant="li"
                                    className="font-bold">
                                    Nhập tên người dùng:
                                </Typography>
                                <Input
                                    type="text"
                                    size="lg"
                                    label="Fullname"
                                    id="fullname"
                                    {...register('fullname', {
                                        required: 'Họ và tên không được để trống',
                                    })}
                                    className={getEditorStyle(errors.fullname)}
                                />
                                <ValidationError fieldError={errors.fullname} />
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
                                ĐĂNG KÝ
                            </Button>
                        </form>
                    </div>
                </Card>
            </div>
        </>
    );
}
