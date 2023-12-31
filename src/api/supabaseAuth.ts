import { supabase } from './supabaseConnect';
export type User = {
    email: string;
    password: string;
};

export async function signUp(email: string, password: string) {
    const { data: user, error } = await supabase
        .from('user')
        .select('email,password,username')
        .eq('email', email);
    if (error) {
        console.log(error);
        return false;
    } else if (user) {
        if (user[0].email === email && user[0].password === password) {
            console.log('Login Success');
            localStorage.setItem('username', user[0].username);
            return true;
        } else {
            console.log('Login Failed');
            return false;
        }
    } else {
        console.log('Login Failed');
        return false;
    }
}
