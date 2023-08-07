import { supabase } from './supabaseConnect';

export type UserRegister = {
    username: string;
    fullname: string;
    email: string;
    password: string;
};

export async function signUp(username: string, fullname: string, email: string, password: string) {
    const { error } = await supabase
        .from('user')
        .insert([{ username: username, email: email, password: password, full_name: fullname }]);
    if (error) {
        console.log(error);
        return false;
    } else {
        console.log('Register Success');
        return true;
    }
}
