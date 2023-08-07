import { RegisterNav } from './components/RegisterNav';
import { Card, Typography, Input, Button, Alert } from '@material-tailwind/react';
import { useForm, FieldError } from 'react-hook-form';
import { ValidationError } from './components/ValidationError';
import { User, signUp } from './api/supabaseAuth';
import { useState } from 'react';

export function Register() {
    return (
        <>
            <RegisterNav />
        </>
    );
}
