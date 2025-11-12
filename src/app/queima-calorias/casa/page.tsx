"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Home, Flame, Clock, Zap } from "lucide-react";

export default function QueimaCaloriasCasaPage() {
  const router = useRouter();

  const exercicios = [
    {
      nome: "Burpees",
      calorias: "10-15 cal/min",
      duracao: "3 séries de 15 repetições",
      descricao: "Exercício completo que trabalha corpo inteiro",
      intensidade: "Alta"
    },
    {
      nome: "Jumping Jacks",
      calorias: "8-12 cal/min",
      duracao: "3 séries de 30 segundos",
      descricao: "Aquecimento cardiovascular eficaz",
      intensidade: "Média"
    },
    {
      nome: "Mountain Climbers",
      calorias: "8-12 cal/min",
      duracao: "3 séries de 20 repetições",
      descricao: "Fortalece core e queima calorias",
      intensidade: "Alta"
    },
    {
      nome: "Agachamento com Salto",
      calorias: "9-13 cal/min",
      duracao: "3 séries de 12 repetições",
      descricao: "Trabalha pernas e glúteos intensamente",
      intensidade: "Alta"
    },
    {
      nome: "Polichinelos",
      calorias: "7-10 cal/min",
      duracao: "3 séries de 1 minuto",
      descricao: "Cardio simples e eficiente",
      intensidade: "Média"
    },
    {
      nome: "Prancha Dinâmica",
      calorias: "6-9 cal/min",
      duracao: "3 séries de 30 segundos",
      descricao: "Fortalece abdômen e queima gordura",
      intensidade: "Média"
    },
    {
      nome: "High Knees",
      calorias: "8-12 cal/min",
      duracao: "3 séries de 30 segundos",
      descricao: "Corrida no lugar com joelhos altos",
      intensidade: "Alta"
    },
    {
      nome: "Flexões",
      calorias: "7-10 cal/min",
      duracao: "3 séries de 10-15 repetições",
      descricao: "Fortalece peito, ombros e tríceps",
      intensidade: "Média"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-emerald-100 dark:border-gray-700 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Voltar</span>
            </button>
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
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
          <div className="inline-flex bg-gradient-to-br from-emerald-400 to-teal-600 p-4 rounded-2xl shadow-lg mb-4">
            <Home className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
            Treino em Casa
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            Exercícios sem equipamentos para queimar calorias
          </p>
        </div>

        {/* Grid de Exercícios */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercicios.map((exercicio, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border-2 border-emerald-100 dark:border-emerald-700 hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
            >
              {/* Badge de Intensidade */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    exercicio.intensidade === "Alta"
                      ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
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
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {exercicio.descricao}
              </p>

              {/* Calorias */}
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
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
        <div className="mt-12 max-w-3xl mx-auto p-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl text-white shadow-xl">
          <p className="text-center text-sm sm:text-base font-medium">
            🔥 <strong>Dica:</strong> Faça um circuito com 4-5 exercícios, descanse 1 minuto entre séries e repita 3 vezes!
          </p>
        </div>
      </main>
    </div>
  );
}
