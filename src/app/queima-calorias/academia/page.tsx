"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Home, Flame, Clock, Zap, Dumbbell } from "lucide-react";

export default function QueimaCaloriasAcademiaPage() {
  const router = useRouter();

  const exercicios = [
    {
      nome: "Esteira (Corrida)",
      calorias: "10-16 cal/min",
      duracao: "20-30 minutos",
      descricao: "Cardio intenso para queima máxima",
      intensidade: "Alta",
      equipamento: "Esteira"
    },
    {
      nome: "Elíptico",
      calorias: "8-12 cal/min",
      duracao: "25-35 minutos",
      descricao: "Baixo impacto, alto gasto calórico",
      intensidade: "Média",
      equipamento: "Elíptico"
    },
    {
      nome: "Bicicleta Ergométrica",
      calorias: "7-11 cal/min",
      duracao: "30-40 minutos",
      descricao: "Fortalece pernas e queima calorias",
      intensidade: "Média",
      equipamento: "Bicicleta"
    },
    {
      nome: "Remo",
      calorias: "9-14 cal/min",
      duracao: "20-30 minutos",
      descricao: "Trabalha corpo inteiro intensamente",
      intensidade: "Alta",
      equipamento: "Remo"
    },
    {
      nome: "Agachamento com Barra",
      calorias: "8-12 cal/min",
      duracao: "4 séries de 12 repetições",
      descricao: "Fortalece pernas e glúteos",
      intensidade: "Alta",
      equipamento: "Barra + Anilhas"
    },
    {
      nome: "Levantamento Terra",
      calorias: "9-13 cal/min",
      duracao: "4 séries de 10 repetições",
      descricao: "Exercício completo de força",
      intensidade: "Alta",
      equipamento: "Barra + Anilhas"
    },
    {
      nome: "Supino Reto",
      calorias: "6-9 cal/min",
      duracao: "4 séries de 12 repetições",
      descricao: "Fortalece peito e tríceps",
      intensidade: "Média",
      equipamento: "Banco + Barra"
    },
    {
      nome: "Puxada Alta",
      calorias: "6-9 cal/min",
      duracao: "4 séries de 12 repetições",
      descricao: "Trabalha costas e bíceps",
      intensidade: "Média",
      equipamento: "Puxador"
    },
    {
      nome: "Leg Press",
      calorias: "7-11 cal/min",
      duracao: "4 séries de 15 repetições",
      descricao: "Fortalece pernas com segurança",
      intensidade: "Média",
      equipamento: "Leg Press"
    },
    {
      nome: "HIIT na Esteira",
      calorias: "12-18 cal/min",
      duracao: "15-20 minutos",
      descricao: "Intervalos de alta intensidade",
      intensidade: "Muito Alta",
      equipamento: "Esteira"
    },
    {
      nome: "Battle Rope",
      calorias: "10-15 cal/min",
      duracao: "3 séries de 30 segundos",
      descricao: "Cardio explosivo com cordas",
      intensidade: "Alta",
      equipamento: "Cordas"
    },
    {
      nome: "Box Jump",
      calorias: "9-13 cal/min",
      duracao: "3 séries de 10 repetições",
      descricao: "Pliometria para explosão",
      intensidade: "Alta",
      equipamento: "Caixa"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-orange-100 dark:border-gray-700 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Voltar</span>
            </button>
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              <Home className="w-5 h-5" />
              <span className="text-sm font-medium">Início</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        {/* Título */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex bg-gradient-to-br from-orange-400 to-red-600 p-4 rounded-2xl shadow-lg mb-4">
            <Dumbbell className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3">
            Treino na Academia
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            Exercícios com equipamentos para queima máxima de calorias
          </p>
        </div>

        {/* Grid de Exercícios */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercicios.map((exercicio, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border-2 border-orange-100 dark:border-orange-700 hover:border-orange-400 dark:hover:border-orange-500 hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
            >
              {/* Badge de Intensidade */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    exercicio.intensidade === "Muito Alta"
                      ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      : exercicio.intensidade === "Alta"
                      ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                      : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                  }`}
                >
                  {exercicio.intensidade}
                </span>
                <Flame className="w-5 h-5 text-orange-500" />
              </div>

              {/* Nome do Exercício */}
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                {exercicio.nome}
              </h3>

              {/* Descrição */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {exercicio.descricao}
              </p>

              {/* Equipamento */}
              <div className="flex items-center gap-2 mb-2 text-xs text-purple-600 dark:text-purple-400 font-medium">
                <Dumbbell className="w-3 h-3" />
                <span>{exercicio.equipamento}</span>
              </div>

              {/* Calorias */}
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                  {exercicio.calorias}
                </span>
              </div>

              {/* Duração */}
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {exercicio.duracao}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dica Final */}
        <div className="mt-12 max-w-3xl mx-auto p-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl text-white shadow-xl">
          <p className="text-center text-sm sm:text-base font-medium">
            💪 <strong>Dica:</strong> Combine 20 min de cardio + 30 min de musculação para resultados máximos!
          </p>
        </div>
      </main>
    </div>
  );
}
