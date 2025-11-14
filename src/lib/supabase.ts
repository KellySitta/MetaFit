import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Helper para verificar se Supabase está configurado
export const isSupabaseConfigured = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  return (
    url !== undefined &&
    key !== undefined &&
    url !== '' &&
    key !== '' &&
    url !== 'https://placeholder.supabase.co' &&
    key !== 'placeholder-key'
  );
};

// Criar cliente Supabase apenas se estiver configurado
let supabaseInstance: SupabaseClient | null = null;

if (isSupabaseConfigured()) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
}

// Exportar cliente (pode ser null se não configurado)
export const supabase = supabaseInstance as SupabaseClient;

// Helper para operações seguras
export const safeSupabaseOperation = async <T>(
  operation: (client: SupabaseClient) => Promise<T>,
  fallback: T
): Promise<T> => {
  if (!isSupabaseConfigured() || !supabaseInstance) {
    console.warn('Supabase não configurado - operação ignorada');
    return fallback;
  }
  
  try {
    return await operation(supabaseInstance);
  } catch (error) {
    console.error('Erro na operação Supabase:', error);
    return fallback;
  }
};
