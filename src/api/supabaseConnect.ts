import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jppqvgdwkrohzcdztdwp.supabase.co';
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwcHF2Z2R3a3JvaHpjZHp0ZHdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEzMzAyODksImV4cCI6MjAwNjkwNjI4OX0.Vy6GrrNRtvI6WDx71hXX4JIJWAUksaeOVRHzc8k1-3g';

export const supabase = createClient(supabaseUrl, supabaseKey);
