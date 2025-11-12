"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Home, Dumbbell, Flame } from "lucide-react";

export default function QueimaCaloriasPage() {
  const router = useRouter();

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
          <div className="inline-flex bg-gradient-to-br from-orange-400 to-red-600 p-4 rounded-2xl shadow-lg mb-4">
            <Flame className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3">
            Queima Calorias
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            Acelere seu metabolismo com exercícios eficazes
          </p>
        </div>

        {/* Botões de Escolha */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Treino em Casa */}
          <button
            onClick={() => router.push("/queima-calorias/casa")}
            className="group p-8 sm:p-10 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border-2 border-emerald-200 dark:border-emerald-700 hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-emerald-200/50 dark:hover:shadow-emerald-900/50 transform hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-gradient-to-br from-emerald-400 to-teal-600 p-6 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Home className="w-12 h-12 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  Treino em Casa
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Exercícios sem equipamentos
                </p>
              </div>
            </div>
          </button>

          {/* Treino na Academia */}
          <button
            onClick={() => router.push("/queima-calorias/academia")}
            className="group p-8 sm:p-10 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border-2 border-orange-200 dark:border-orange-700 hover:border-orange-400 dark:hover:border-orange-500 hover:shadow-orange-200/50 dark:hover:shadow-orange-900/50 transform hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-gradient-to-br from-orange-400 to-red-600 p-6 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Dumbbell className="w-12 h-12 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  Treino na Academia
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Exercícios com equipamentos
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* Informação Extra */}
        <div className="mt-12 max-w-3xl mx-auto p-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl text-white shadow-xl">
          <p className="text-center text-sm sm:text-base font-medium">
            💪 <strong>Dica:</strong> Combine exercícios aeróbicos com treino de força para maximizar a queima de calorias!
          </p>
        </div>
      </main>
    </div>
  );
}
