import { supabase } from './supabaseConnect';

export type TodoNew = {
    username: string;
    title: string;
    content: string;
    start_date: string;
    end_date: string;
    finished: boolean;
};

export async function insertTodo(todo: TodoNew) {
    const { error } = await supabase.from('todo').insert({
        username: todo.username,
        title: todo.title,
        content: todo.content,
        start_date: todo.start_date,
        end_date: todo.end_date,
        finished: todo.finished,
    });
    if (error) {
        console.log(error);
        return false;
    }
    return true;
}
