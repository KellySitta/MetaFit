"use client";

import { useRouter } from "next/navigation";
import { Dumbbell, Home, Building2, ArrowLeft } from "lucide-react";

export default function TonificaMusculos() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-purple-100 dark:border-gray-700 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Voltar</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-purple-400 to-pink-600 p-2 sm:p-3 rounded-2xl shadow-lg">
              <Dumbbell className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Tonifica Músculos
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Define o corpo
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        {/* Escolha do Local de Treino */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
            Escolha onde você quer treinar
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Treino em Casa */}
            <button
              onClick={() => router.push("/tonifica-musculos/casa")}
              className="group bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border-2 border-purple-100 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 hover:shadow-purple-200 dark:hover:shadow-purple-900/50 transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-purple-400 to-pink-600 p-6 rounded-3xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Home className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                  Treino em Casa
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Exercícios de tonificação sem equipamentos
                </p>
              </div>
            </button>

            {/* Treino na Academia */}
            <button
              onClick={() => router.push("/tonifica-musculos/academia")}
              className="group bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border-2 border-purple-100 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 hover:shadow-purple-200 dark:hover:shadow-purple-900/50 transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-purple-400 to-pink-600 p-6 rounded-3xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                  Treino na Academia
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Exercícios de tonificação com equipamentos
                </p>
              </div>
            </button>
          </div>
        </section>

        {/* Informações Adicionais */}
        <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 border border-purple-100 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Benefícios da Tonificação Muscular
          </h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-purple-600 dark:text-purple-400 text-xl">•</span>
              <span>Define e esculpe o corpo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 dark:text-purple-400 text-xl">•</span>
              <span>Aumenta a força muscular</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 dark:text-purple-400 text-xl">•</span>
              <span>Melhora a postura e equilíbrio</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 dark:text-purple-400 text-xl">•</span>
              <span>Acelera o metabolismo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 dark:text-purple-400 text-xl">•</span>
              <span>Previne lesões e dores</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
