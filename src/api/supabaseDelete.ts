import { supabase } from './supabaseConnect';

export async function DeleteTodo(id: number) {
    const { error } = await supabase.from('todo').delete().eq('id', id);
    if (error) {
        console.log(error);
        return false;
    } else {
        return true;
    }
}

export async function DeleteAllTodos(username: string) {
    const { error } = await supabase.from('todo').delete().eq('username', username);
    if (error) {
        console.log(error);
        return false;
    } else {
        return true;
    }
}
