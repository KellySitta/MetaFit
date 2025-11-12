"use client";

import { useRouter } from "next/navigation";
import { Dumbbell, TrendingDown, Target, ArrowLeft } from "lucide-react";

export default function ExerciciosPage() {
  const router = useRouter();

  const exerciseTypes = [
    {
      icon: TrendingDown,
      title: "Queima Calorias",
      desc: "Acelera o metabolismo",
      link: "/queima-calorias",
      gradient: "from-emerald-50 to-teal-50 dark:from-gray-700 dark:to-gray-600",
      border: "border-emerald-200 dark:border-emerald-700",
      iconGradient: "from-emerald-400 to-teal-600"
    },
    {
      icon: Target,
      title: "Tonifica Músculos",
      desc: "Define o corpo",
      link: "/tonifica-musculos",
      gradient: "from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600",
      border: "border-purple-200 dark:border-purple-700",
      iconGradient: "from-purple-400 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-emerald-100 dark:border-gray-700 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push("/")}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
            <div className="bg-gradient-to-br from-emerald-400 to-teal-600 p-2 sm:p-3 rounded-2xl shadow-lg">
              <Dumbbell className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Exercícios
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Escolha seu tipo de treino
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        {/* Introdução */}
        <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 mb-6 sm:mb-8 border border-emerald-100 dark:border-gray-700">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            30 minutos de atividade física diária
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Escolha o tipo de exercício que melhor se adapta aos seus objetivos. 
            Cada categoria oferece opções para treinar em casa ou na academia.
          </p>
        </section>

        {/* Cards de Tipos de Exercício */}
        <section className="grid sm:grid-cols-2 gap-6">
          {exerciseTypes.map((type, index) => (
            <button
              key={index}
              onClick={() => router.push(type.link)}
              className={`p-8 bg-gradient-to-br ${type.gradient} rounded-3xl border-2 ${type.border} hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer text-left w-full`}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className={`bg-gradient-to-br ${type.iconGradient} p-6 rounded-2xl shadow-lg`}>
                  <type.icon className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-gray-800 dark:text-gray-100 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base">
                    {type.desc}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </section>

        {/* Dica */}
        <div className="mt-8 p-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl text-white">
          <p className="text-center text-sm sm:text-base font-medium">
            💡 <strong>Dica:</strong> Combine exercícios de queima de calorias com tonificação muscular para resultados completos!
          </p>
        </div>
      </main>
    </div>
  );
}
