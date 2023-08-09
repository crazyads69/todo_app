import { DashboardNav } from './components/DashboardNav';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState, useCallback, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { getTheme, setLightTheme, setDarkTheme } from './components/Theme';
import { Button, Typography, Switch, Alert } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { Loading } from './components/Loading';
import { checkTodos, Todo, getTodos } from './api/supabaseFetch';
import { TodoItem } from './components/TodoItem';
import { DeleteAllTodos, DeleteTodo } from './api/supabaseDelete';
import { AddTodo } from './components/AddTodo';
import {
    IconButton,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea,
} from '@material-tailwind/react';
export function Dashboard() {
    const [theme_custom, setTheme] = useState(getTheme());
    const [open, setOpen] = useState(false);
    const forceUpdate = useReducer(() => ({}), {})[1] as () => void;
    const [loading, setLoading] = useState(true);
    const [alertSuccess, setAlertSuccess] = useState<boolean>(false);
    const [alertError, setAlertError] = useState<boolean>(false);
    const [todos, setTodos] = useState<Todo[] | undefined>(undefined);
    const navigate = useNavigate();
    let username = localStorage.getItem('username') || '';
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            checkTodos(username).then((res) => {
                if (res === false) {
                    let error = 'Database error';
                    navigate(`/error/${error}`);
                } else {
                    getTodos(username).then((res) => {
                        localStorage.setItem('todos', JSON.stringify(res));
                        setTodos(res);
                    });
                }
            });
        }, 1500);
    }, [navigate, username]);
    async function deleteAllTodo() {
        let todos = JSON.parse(localStorage.getItem('todos') || '');
        todos = [];
        await setTodos(todos);
        DeleteAllTodos(username).then((res) => {
            if (res === false) {
                console.log('Error');
                setAlertError(true);
            } else {
                setAlertSuccess(true);
                console.log('Deleted');
            }
        });
        await localStorage.setItem('todos', JSON.stringify(todos));
    }
    function handleDeleteTodo(id: number) {
        let todos = JSON.parse(localStorage.getItem('todos') || '');
        todos = todos.filter((todo: Todo) => todo.id !== id);
        console.log(todos);
        DeleteTodo(id).then((res) => {
            if (res === false) {
                console.log('Error');
                forceUpdate();
                setAlertError(true);
                //let error = 'Database error';
                //navigate(`/error/${error}`);
            } else {
                setTodos(todos);
                localStorage.setItem('todos', JSON.stringify(todos));
                forceUpdate();
                setAlertSuccess(true);
                console.log('Deleted');
            }
        });
    }
    function handleOpen() {
        setOpen(!open);
    }
    if (loading) {
        return <Loading loading={loading} theme_custom={theme_custom} />;
    }
    return (
        <div className="flex flex-col w-full h-screen">
            <Alert
                color="green"
                open={alertSuccess}
                onClose={() => {
                    setAlertSuccess(!alertSuccess);
                    forceUpdate();
                }}>
                Xoá todo thành công
            </Alert>
            <Alert
                color="red"
                open={alertError}
                onClose={() => {
                    setAlertSuccess(!alertError);
                    forceUpdate();
                }}>
                Xoá todo bị lỗi
            </Alert>
            <DashboardNav theme_custom={theme_custom} setTheme={setTheme} />
            <div
                className={`flex flex-col h-full ${
                    theme_custom === 'dark' ? 'bg-gray-400' : 'bg-secondary-100'
                }`}>
                <div className="flex flex-row justify-center items-center mt-6 gap-6">
                    <Button
                        color="green"
                        variant="gradient"
                        size="lg"
                        className="w-1/5 rounded-full"
                        onClick={handleOpen}>
                        + Thêm
                    </Button>
                    <Button
                        color="red"
                        variant="gradient"
                        size="lg"
                        className="w-1/5 rounded-full"
                        onClick={deleteAllTodo}>
                        - Xoá
                    </Button>
                    <AddTodo open={open} handler={handleOpen} />
                </div>
                <div className="flex flex-row justify-center items-center mt-6 gap-6">
                    {!todos?.length ? (
                        <div className="flex flex-col items-center w-full h-screen ">
                            <Typography color="light-blue" textGradient={true} variant="h2">
                                Bạn chưa có todo nào :)
                            </Typography>
                        </div>
                    ) : (
                        <div className="flex flex-col w-full items-center justify-between py-5 h-max">
                            {JSON.parse(localStorage.getItem('todos') || '').map((todo: Todo) => (
                                <div className="flex flex-row w-full items-center justify-between gap-4 mt-6 mb-6">
                                    <TodoItem
                                        key={todo.id}
                                        id={todo.id}
                                        title={todo.title}
                                        content={todo.content}
                                        finished={todo.finished}
                                        start_date={todo.start_date}
                                        end_date={todo.end_date}
                                        setTodos={() => handleDeleteTodo(todo.id)}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
