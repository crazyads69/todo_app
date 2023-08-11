import { Tooltip, Card, Typography, IconButton } from '@material-tailwind/react';
type Props = {
    id: number;
    title: string;
    content: string;
    start_date: string;
    end_date: string;
    finished: boolean;
    setTodos: () => void;
};

export function TodoItem({ title, content, start_date, end_date, finished, id, setTodos }: Props) {
    return (
        <>
            <div className="flex flex-row w-full h-full items-center justify-between gap-4 mt-6 mb-6">
                <Tooltip content={content}>
                    <Card className="flex flex-row w-full max-h-full items-center justify-between bg-gray-300">
                        <IconButton onClick={() => {}}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                />
                            </svg>
                        </IconButton>
                        <Typography color="light-blue" textGradient={true} variant="h6">
                            {title}
                        </Typography>
                        <Typography color="light-blue" textGradient={true} variant="h6">
                            {start_date}
                        </Typography>
                        <Typography color="light-blue" textGradient={true} variant="h6">
                            {end_date}
                        </Typography>
                        <Typography color="light-blue" textGradient={true} variant="h6">
                            {finished ? 'Đã hoàn thành' : 'Chưa hoàn thành'}
                        </Typography>
                        <IconButton onClick={setTodos}>
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
        </>
    );
}
