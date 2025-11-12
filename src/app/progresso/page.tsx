"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Scale, TrendingDown, Calendar, ArrowLeft, Plus, Trash2, Heart } from "lucide-react";

interface WeightEntry {
  id: string;
  date: string;
  weight: number;
}

export default function ProgressPage() {
  const router = useRouter();
  const [weightEntries, setWeightEntries] = useState<WeightEntry[]>([]);
  const [newWeight, setNewWeight] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  // Carregar dados do localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('weightProgress');
      if (saved) {
        setWeightEntries(JSON.parse(saved));
      }
    }
  }, []);

  // Salvar no localStorage sempre que mudar
  useEffect(() => {
    if (typeof window !== 'undefined' && weightEntries.length > 0) {
      localStorage.setItem('weightProgress', JSON.stringify(weightEntries));
    }
  }, [weightEntries]);

  const addWeightEntry = () => {
    if (!newWeight || parseFloat(newWeight) <= 0) return;

    const entry: WeightEntry = {
      id: Date.now().toString(),
      date: selectedDate,
      weight: parseFloat(newWeight)
    };

    setWeightEntries(prev => [...prev, entry].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    ));
    
    setNewWeight("");
    setSelectedDate(new Date().toISOString().split('T')[0]);
  };

  const deleteEntry = (id: string) => {
    setWeightEntries(prev => prev.filter(entry => entry.id !== id));
  };

  // Calcular estatísticas
  const calculateStats = () => {
    if (weightEntries.length === 0) return null;

    const weights = weightEntries.map(e => e.weight);
    const currentWeight = weights[0];
    const initialWeight = weights[weights.length - 1];
    const totalLoss = initialWeight - currentWeight;
    const avgWeight = weights.reduce((a, b) => a + b, 0) / weights.length;

    return {
      current: currentWeight,
      initial: initialWeight,
      totalLoss: totalLoss,
      average: avgWeight,
      entries: weightEntries.length
    };
  };

  const stats = calculateStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-emerald-100 dark:border-gray-700 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push('/')}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
            <div className="bg-gradient-to-br from-emerald-400 to-teal-600 p-2 sm:p-3 rounded-2xl shadow-lg">
              <Scale className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Acompanhe seu Progresso
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Registre seu peso semanalmente</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        {/* Estatísticas */}
        {stats && (
          <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 mb-6 sm:mb-8 border border-emerald-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Resumo do Progresso</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Peso Atual */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl border-2 border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-2">
                  <Scale className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <p className="text-sm text-gray-600 dark:text-gray-300">Peso Atual</p>
                </div>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stats.current.toFixed(1)} kg</p>
              </div>

              {/* Peso Inicial */}
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl border-2 border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <p className="text-sm text-gray-600 dark:text-gray-300">Peso Inicial</p>
                </div>
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{stats.initial.toFixed(1)} kg</p>
              </div>

              {/* Perda Total */}
              <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl border-2 border-emerald-200 dark:border-emerald-700">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingDown className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <p className="text-sm text-gray-600 dark:text-gray-300">Perda Total</p>
                </div>
                <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                  {stats.totalLoss > 0 ? '-' : '+'}{Math.abs(stats.totalLoss).toFixed(1)} kg
                </p>
              </div>

              {/* Registros */}
              <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl border-2 border-orange-200 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <p className="text-sm text-gray-600 dark:text-gray-300">Registros</p>
                </div>
                <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">{stats.entries}</p>
              </div>
            </div>
          </section>
        )}

        {/* Adicionar Novo Registro */}
        <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 mb-6 sm:mb-8 border border-emerald-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Adicionar Registro</h2>
          
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Data
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                max={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Peso (kg)
              </label>
              <input
                type="number"
                step="0.1"
                value={newWeight}
                onChange={(e) => setNewWeight(e.target.value)}
                placeholder="Ex: 75.5"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all outline-none"
              />
            </div>

            <div className="flex items-end">
              <button
                onClick={addWeightEntry}
                disabled={!newWeight || parseFloat(newWeight) <= 0}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Adicionar
              </button>
            </div>
          </div>
        </section>

        {/* Histórico */}
        <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 border border-emerald-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Histórico de Peso</h2>
          
          {weightEntries.length === 0 ? (
            <div className="text-center py-12">
              <Scale className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Nenhum registro ainda. Adicione seu primeiro peso!
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {weightEntries.map((entry, index) => {
                const previousWeight = weightEntries[index + 1]?.weight;
                const difference = previousWeight ? entry.weight - previousWeight : 0;
                
                return (
                  <div
                    key={entry.id}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-br from-emerald-400 to-teal-600 p-3 rounded-xl">
                        <Scale className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-gray-800 dark:text-gray-100">
                          {entry.weight.toFixed(1)} kg
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {new Date(entry.date + 'T00:00:00').toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {previousWeight && (
                        <div className={`px-3 py-1 rounded-lg font-semibold text-sm ${
                          difference < 0 
                            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                            : difference > 0
                            ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                            : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400'
                        }`}>
                          {difference < 0 ? '↓' : difference > 0 ? '↑' : '='} {Math.abs(difference).toFixed(1)} kg
                        </div>
                      )}
                      
                      <button
                        onClick={() => deleteEntry(entry.id)}
                        className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors group"
                      >
                        <Trash2 className="w-5 h-5 text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-emerald-100 dark:border-gray-700 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Feito com <Heart className="w-4 h-4 inline text-red-500" /> para sua saúde
          </p>
        </div>
      </footer>
    </div>
  );
}
