import { DashboardNav } from './components/DashboardNav';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTheme, setLightTheme, setDarkTheme } from './components/Theme';
import { Button, Typography, Switch } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { Loading } from './components/Loading';
import { checkTodos, Todo, getTodos } from './api/supabaseFetch';
import { TodoItem } from './components/TodoItem';
export function Dashboard() {
    const [theme_custom, setTheme] = useState(getTheme());
    const [loading, setLoading] = useState(true);
    const [todos, setTodos] = useState<Todo[] | undefined>([]);
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
    if (loading) {
        return <Loading loading={loading} theme_custom={theme_custom} />;
    }
    return (
        <div className="flex flex-col w-full h-screen">
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
                        className="w-1/5 rounded-full">
                        + Thêm
                    </Button>
                    <Button color="red" variant="gradient" size="lg" className="w-1/5 rounded-full">
                        - Xoá
                    </Button>
                </div>
                <div className="flex flex-row justify-center items-center mt-6 gap-6">
                    {JSON.parse(localStorage.getItem('todos') || '') === '' ? (
                        <div className="flex flex-col w-full h-screen ">
                            <Typography color="light-blue" textGradient={true} variant="h2">
                                Bạn chưa có todo nào
                            </Typography>
                        </div>
                    ) : (
                        <div className="flex flex-col w-full items-center justify-between py-5 h-max">
                            {JSON.parse(localStorage.getItem('todos') || '').map(
                                (todo: Todo, index: number) => (
                                    <TodoItem
                                        key={index}
                                        title={todo.title}
                                        content={todo.content}
                                        finished={todo.finished}
                                        start_date={todo.start_date}
                                        end_date={todo.end_date}
                                        setTodos={setTodos}
                                    />
                                ),
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
