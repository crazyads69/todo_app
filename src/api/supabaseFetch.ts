import { supabase } from './supabaseConnect';

export type Todo = {
    title: string;
    content: string;
    start_date: string;
    end_date: string;
    finished: boolean;
};

export async function checkTodos(username: string) {
    const { data: todo, error } = await supabase
        .from('todo')
        .select('title,content,start_date,end_date,finished')
        .eq('username', username);
    if (error) {
        console.log(error);
        return false;
    } else if (todo || todo !== undefined || todo !== null) {
        console.log('Get Todo Success');
        console.log(todo);
        return true;
    } else {
        return false;
    }
}

export async function getTodos(username: string) {
    const { data: todo, error } = await supabase
        .from('todo')
        .select('title,content,start_date,end_date,finished')
        .eq('username', username);
    if (todo) {
        console.log('Get Todo Success');
        console.log(todo);
        return todo;
    }
}
