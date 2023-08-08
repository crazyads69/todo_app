import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea,
} from '@material-tailwind/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export function AddTodo() {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <>
            <Dialog open={open} handler={handleOpen}>
                <div className="flex items-center justify-between">
                    <DialogHeader>Tạo Todo mới</DialogHeader>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-3 h-5 w-5"
                        onClick={handleOpen}>
                        <path
                            fillRule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <DialogBody divider>
                    <div className="grid gap-6">
                        <Input label="Tiêu đề" type="text" name="title" />
                        <Input label="Nội dung" type="text" name="content" />
                        <Input label="Ngày bắt đầu" type="date" name="start_date" />
                        <Input label="Ngày kết thúc" type="date" name="start_date" />
                    </div>
                </DialogBody>
                <DialogFooter className="space-x-2">
                    <Button variant="outlined" color="red" onClick={handleOpen}>
                        close
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleOpen}>
                        send message
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
