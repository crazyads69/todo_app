import { Tooltip, Chip, Card, Checkbox, Typography, IconButton } from '@material-tailwind/react';
import { Todo } from '../api/supabaseFetch';
type Props = {
    key: number;
    title: string;
    content: string;
    start_date: string;
    end_date: string;
    finished: boolean;
    setTodos: (todos: Todo[]) => void;
};

export function TodoItem({ title, content, start_date, end_date, finished, setTodos, key }: Props) {
    return (
        <div className="flex flex-row w-full h-full items-center justify-between gap-4 mt-6 mb-6">
            <Tooltip content={content}>
                <Card className="flex flex-row w-full h-max items-center justify-between">
                    <Checkbox color="red" defaultChecked={false} />
                    <Typography color="light-blue" textGradient={true} variant="h6">
                        {title}
                    </Typography>
                    <Typography color="light-blue" textGradient={true} variant="h6">
                        {start_date}
                    </Typography>
                    <Typography color="light-blue" textGradient={true} variant="h6">
                        {end_date}
                    </Typography>
                    <IconButton
                        onClick={() => {
                            let todos = JSON.parse(localStorage.getItem('todos') || '');
                            todos.splice(key, 1);
                            localStorage.setItem('todos', JSON.stringify(todos));
                            setTodos(todos);
                        }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </IconButton>
                </Card>
            </Tooltip>
        </div>
    );
}
