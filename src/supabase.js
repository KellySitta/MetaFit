import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pccemlphvvtnfswzunsm.supabase.co'; // Substitua pela URL do seu Supabase
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjY2VtbHBodnZ0bmZzd3p1bnNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NzYxOTksImV4cCI6MjA3ODU1MjE5OX0.2gQfO7Z3vG5zY-M0wiwwUXdJH_Lu888U7q6z3i4IPsI'; // Substitua pela chave pública (anon)

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
