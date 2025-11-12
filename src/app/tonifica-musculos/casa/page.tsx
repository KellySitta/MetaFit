"use client";

import { useRouter } from "next/navigation";
import { Home, ArrowLeft, Dumbbell } from "lucide-react";

export default function TonificaMusculosCasa() {
  const router = useRouter();

  const exercises = [
    {
      name: "Flexões",
      description: "Trabalha peito, ombros e tríceps",
      sets: "3 séries de 10-15 repetições",
      tips: "Mantenha o corpo alinhado, desça até o peito quase tocar o chão"
    },
    {
      name: "Agachamento",
      description: "Tonifica pernas e glúteos",
      sets: "3 séries de 15-20 repetições",
      tips: "Desça até as coxas ficarem paralelas ao chão, joelhos alinhados com os pés"
    },
    {
      name: "Prancha",
      description: "Fortalece o core (abdômen e lombar)",
      sets: "3 séries de 30-60 segundos",
      tips: "Mantenha o corpo reto como uma prancha, não deixe o quadril cair"
    },
    {
      name: "Afundo",
      description: "Define pernas e glúteos",
      sets: "3 séries de 12 repetições (cada perna)",
      tips: "Dê um passo à frente e desça até o joelho traseiro quase tocar o chão"
    },
    {
      name: "Tríceps no Banco",
      description: "Tonifica a parte de trás dos braços",
      sets: "3 séries de 12-15 repetições",
      tips: "Use uma cadeira ou banco, desça flexionando os cotovelos"
    },
    {
      name: "Elevação de Quadril",
      description: "Fortalece glúteos e lombar",
      sets: "3 séries de 15-20 repetições",
      tips: "Deitado de costas, eleve o quadril até formar uma linha reta"
    },
    {
      name: "Mountain Climbers",
      description: "Trabalha core, ombros e cardio",
      sets: "3 séries de 20 repetições (cada perna)",
      tips: "Em posição de prancha, alterne trazendo os joelhos ao peito rapidamente"
    },
    {
      name: "Prancha Lateral",
      description: "Define oblíquos (laterais do abdômen)",
      sets: "3 séries de 30 segundos (cada lado)",
      tips: "Apoie-se no antebraço e lateral do pé, mantenha o corpo alinhado"
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
              <Home className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Tonificação em Casa
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Exercícios sem equipamentos
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
              Faça 3-4 vezes por semana • Duração: 30-40 minutos
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
              <span>Faça aquecimento de 5-10 minutos antes de começar</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 dark:text-purple-400 text-xl">•</span>
              <span>Mantenha a forma correta para evitar lesões</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 dark:text-purple-400 text-xl">•</span>
              <span>Descanse 30-60 segundos entre as séries</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 dark:text-purple-400 text-xl">•</span>
              <span>Alongue após o treino para melhor recuperação</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 dark:text-purple-400 text-xl">•</span>
              <span>Hidrate-se bem durante e após o exercício</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 dark:text-purple-400 text-xl">•</span>
              <span>Aumente gradualmente a intensidade conforme evolui</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
