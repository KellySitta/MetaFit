"use client";

import { useRouter } from "next/navigation";
import { Building2, ArrowLeft, Dumbbell } from "lucide-react";

export default function TonificaMusculosAcademia() {
  const router = useRouter();

  const exercises = [
    {
      name: "Supino Reto",
      description: "Desenvolve peito, ombros e tríceps",
      sets: "4 séries de 8-12 repetições",
      tips: "Desça a barra até o peito, mantenha os pés firmes no chão"
    },
    {
      name: "Agachamento com Barra",
      description: "Tonifica pernas e glúteos intensamente",
      sets: "4 séries de 10-15 repetições",
      tips: "Desça até as coxas ficarem paralelas ao chão, costas retas"
    },
    {
      name: "Levantamento Terra",
      description: "Trabalha costas, glúteos e posterior de coxa",
      sets: "4 séries de 8-10 repetições",
      tips: "Mantenha as costas retas, levante com a força das pernas"
    },
    {
      name: "Desenvolvimento com Halteres",
      description: "Define ombros e braços",
      sets: "3 séries de 10-12 repetições",
      tips: "Empurre os halteres acima da cabeça, controle a descida"
    },
    {
      name: "Remada Curvada",
      description: "Fortalece costas e bíceps",
      sets: "4 séries de 10-12 repetições",
      tips: "Puxe a barra até o abdômen, mantenha as costas retas"
    },
    {
      name: "Leg Press",
      description: "Tonifica pernas e glúteos",
      sets: "4 séries de 12-15 repetições",
      tips: "Desça até 90 graus, empurre com os calcanhares"
    },
    {
      name: "Rosca Direta",
      description: "Define bíceps",
      sets: "3 séries de 10-12 repetições",
      tips: "Mantenha os cotovelos fixos, controle o movimento"
    },
    {
      name: "Tríceps Pulley",
      description: "Tonifica a parte de trás dos braços",
      sets: "3 séries de 12-15 repetições",
      tips: "Mantenha os cotovelos próximos ao corpo, estenda completamente"
    },
    {
      name: "Elevação Pélvica com Barra",
      description: "Define glúteos intensamente",
      sets: "4 séries de 12-15 repetições",
      tips: "Eleve o quadril até formar linha reta, contraia os glúteos no topo"
    },
    {
      name: "Prancha com Peso",
      description: "Fortalece core com intensidade",
      sets: "3 séries de 45-60 segundos",
      tips: "Coloque anilha nas costas, mantenha o corpo alinhado"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-purple-100 dark:border-gray-700 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <button
            onClick={() => router.push("/tonifica-musculos")}
            className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Voltar</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-purple-400 to-pink-600 p-2 sm:p-3 rounded-2xl shadow-lg">
              <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Tonificação na Academia
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Exercícios com equipamentos
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        {/* Lista de Exercícios */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-6 mb-8 text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              Treino Completo de Tonificação
            </h2>
            <p className="text-purple-100">
              Faça 4-5 vezes por semana • Duração: 45-60 minutos
            </p>
          </div>

          <div className="grid gap-6">
            {exercises.map((exercise, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-2 border-purple-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-400 to-pink-600 p-3 rounded-xl flex-shrink-0">
                    <Dumbbell className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                      {exercise.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {exercise.description}
                    </p>
                    <div className="bg-purple-50 dark:bg-gray-700 rounded-lg p-3 mb-3">
                      <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                        {exercise.sets}
                      </p>
                    </div>
                    <div className="bg-pink-50 dark:bg-gray-700 rounded-lg p-3">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong className="text-pink-600 dark:text-pink-400">Dica:</strong> {exercise.tips}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dicas Gerais */}
        <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 border border-purple-100 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Dicas Importantes
          </h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-purple-600 dark:text-purple-400 text-xl">•</span>
              <span>Faça aquecimento de 10 minutos antes de começar</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 dark:text-purple-400 text-xl">•</span>
              <span>Use carga adequada - você deve conseguir completar as repetições com boa forma</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 dark:text-purple-400 text-xl">•</span>
              <span>Descanse 60-90 segundos entre as séries</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 dark:text-purple-400 text-xl">•</span>
              <span>Mantenha a forma correta - qualidade sobre quantidade</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 dark:text-purple-400 text-xl">•</span>
              <span>Alongue após o treino para melhor recuperação</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 dark:text-purple-400 text-xl">•</span>
              <span>Aumente a carga progressivamente conforme evolui</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 dark:text-purple-400 text-xl">•</span>
              <span>Peça orientação de um profissional para executar corretamente</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
