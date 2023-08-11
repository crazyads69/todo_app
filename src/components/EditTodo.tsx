import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    Input,
    Typography,
} from '@material-tailwind/react';

import { useForm } from 'react-hook-form';
import { ValidationError } from './ValidationError';
import { insertTodo } from '../api/supabaseInsert';

export type TodoExist = {
    id: number;
    title: string;
    content: string;
    start_date: string;
    end_date: string;
    finished: boolean;
};

export type EditTodoProps = {
    open: boolean;
    handler: () => void;
    setTodos: (todos: any) => void;
};

export function AddTodo({ open, handler, setTodos }: EditTodoProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TodoExist>({ mode: 'onBlur', reValidateMode: 'onBlur' });

    function convertDate(date: string) {
        let d = new Date(date);
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        return `${day}-${month}-${year}`;
    }
    function onSubmit(todo: TodoExist) {
        let start_date = convertDate(todo.start_date);
        let end_date = convertDate(todo.end_date);
        let username = localStorage.getItem('username') || '';
        let todos = JSON.parse(sessionStorage.getItem('todos') || '');
        let editTodo = {
            username: username,
            title: todo.title,
            content: todo.content,
            start_date: start_date,
            end_date: end_date,
            finished: false,
        };
        todos.push(editTodo);
        console.log(editTodo);
        insertTodo(editTodo);
        sessionStorage.setItem('todos', JSON.stringify(todos));
        setTodos(todos);
        handler();
    }
    return (
        <>
            <Dialog open={open} handler={handler}>
                <div className="flex items-center justify-between">
                    <DialogHeader>Tạo Todo mới</DialogHeader>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-3 h-5 w-5"
                        onClick={handler}>
                        <path
                            fillRule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <DialogBody divider>
                    <div className="grid gap-6">
                        <form noValidate onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-4">
                                <Typography
                                    color="gray"
                                    textGradient={false}
                                    variant="li"
                                    className="font-bold">
                                    Tiêu đề:
                                </Typography>
                                <Input
                                    label="Tiêu đề"
                                    type="text"
                                    id="title"
                                    {...register('title', {
                                        required: 'Tiêu đề không được để trống',
                                    })}
                                />
                                <ValidationError fieldError={errors.title} />
                                <Typography
                                    color="gray"
                                    textGradient={false}
                                    variant="li"
                                    className="font-bold">
                                    Nội dung:
                                </Typography>
                                <Input
                                    label="Nội dung"
                                    type="text"
                                    id="content"
                                    {...register('content', {
                                        required: 'Nội dung không được để trống',
                                    })}
                                />
                                <ValidationError fieldError={errors.content} />
                                <Typography
                                    color="gray"
                                    textGradient={false}
                                    variant="li"
                                    className="font-bold">
                                    Ngày bắt đầu:
                                </Typography>
                                <Input
                                    label="Ngày bắt đầu"
                                    type="date"
                                    id="start_date"
                                    {...register('start_date', {
                                        required: 'Ngày bắt đầu không được để trống',
                                    })}
                                />
                                <ValidationError fieldError={errors.start_date} />
                                <Typography
                                    color="gray"
                                    textGradient={false}
                                    variant="li"
                                    className="font-bold">
                                    Ngày kết thúc:
                                </Typography>
                                <Input
                                    label="Ngày kết thúc"
                                    type="date"
                                    id="end_date"
                                    {...register('end_date', {
                                        required: 'Ngày kết thúc không được để trống',
                                    })}
                                />
                                <ValidationError fieldError={errors.end_date} />
                                <Typography
                                    color="gray"
                                    textGradient={false}
                                    variant="li"
                                    className="font-bold">
                                    Trạng thái:
                                </Typography>
                                <div className="w-full">
                                    <select
                                        id="finished"
                                        className="bg-white border border-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                        {...register('finished', {
                                            required: 'Trạng thái không được để trống',
                                        })}
                                        defaultValue="">
                                        <option value="">Trạng thái</option>
                                        <option value="0">Chưa hoàn thành</option>
                                        <option value="1">Đã hoàn thành</option>
                                    </select>
                                    <ValidationError fieldError={errors.finished} />
                                </div>
                                <div className="flex flex-row items-center justify-end gap-6">
                                    <Button variant="gradient" color="green" type="submit">
                                        ✓ Tạo
                                    </Button>
                                    <Button variant="outlined" color="red" onClick={handler}>
                                        ✕ Huỷ
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
}
