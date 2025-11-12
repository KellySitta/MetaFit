"use client";

import { useRouter } from "next/navigation";
import { Droplets, ArrowLeft, Info } from "lucide-react";

export default function HidratacaoPage() {
  const router = useRouter();

  // Recuperar peso do localStorage (ou usar valor padrão)
  const weight = typeof window !== 'undefined' ? localStorage.getItem('userWeight') || '54' : '54';

  // Cálculo de hidratação: 35ml por kg de peso
  const calculateWaterIntake = () => {
    const w = parseFloat(weight);
    if (w > 0) {
      const liters = (w * 35) / 1000;
      return liters.toFixed(1);
    }
    return "0";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-cyan-100 dark:border-gray-700 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-cyan-400 to-blue-600 p-2 sm:p-3 rounded-2xl shadow-lg">
                <Droplets className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Hidratação Diária
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Mantenha-se hidratado</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        {/* Card Principal de Hidratação */}
        <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 mb-6 sm:mb-8 border border-cyan-200 dark:border-cyan-700">
          <div className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl border-2 border-cyan-200 dark:border-cyan-700">
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Baseado no seu peso de <strong>{weight} kg</strong>
              </p>
              <div className="flex items-center justify-center gap-3 mb-4">
                <Droplets className="w-12 h-12 text-cyan-600 dark:text-cyan-400" />
                <p className="text-6xl font-bold text-cyan-600 dark:text-cyan-400">
                  {calculateWaterIntake()}
                </p>
                <span className="text-2xl font-semibold text-gray-700 dark:text-gray-300">litros</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Recomendação diária de água
              </p>
            </div>

            <div className="mt-6 p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl border border-cyan-200 dark:border-cyan-600">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  <p className="font-semibold mb-2">Dicas de hidratação:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Beba água ao acordar para ativar o metabolismo</li>
                    <li>• Mantenha uma garrafa de água sempre por perto</li>
                    <li>• Beba água antes das refeições para ajudar na saciedade</li>
                    <li>• Aumente a ingestão em dias quentes ou durante exercícios</li>
                    <li>• Chás e água de coco também contam para a hidratação</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios da Hidratação */}
        <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 mb-6 sm:mb-8 border border-cyan-100 dark:border-gray-700">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Benefícios da Hidratação
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl border-2 border-cyan-200 dark:border-cyan-700">
              <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">🧠 Melhora a Concentração</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                A hidratação adequada melhora a função cognitiva e a memória
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl border-2 border-cyan-200 dark:border-cyan-700">
              <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">⚡ Aumenta a Energia</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Combate a fadiga e mantém você ativo durante todo o dia
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl border-2 border-cyan-200 dark:border-cyan-700">
              <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">🔥 Acelera o Metabolismo</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Ajuda na queima de calorias e no processo de emagrecimento
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl border-2 border-cyan-200 dark:border-cyan-700">
              <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">✨ Pele Saudável</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Mantém a pele hidratada, radiante e com aparência jovem
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl border-2 border-cyan-200 dark:border-cyan-700">
              <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">🫀 Saúde Cardiovascular</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Facilita a circulação sanguínea e reduz a pressão arterial
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl border-2 border-cyan-200 dark:border-cyan-700">
              <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">🦴 Articulações Saudáveis</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Lubrifica as articulações e previne dores musculares
              </p>
            </div>
          </div>
        </section>

        {/* Sinais de Desidratação */}
        <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 border border-orange-200 dark:border-orange-700">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            ⚠️ Sinais de Desidratação
          </h2>

          <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl border-2 border-orange-200 dark:border-orange-700">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fique atento aos seguintes sinais:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
                <span>Sede excessiva e boca seca</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
                <span>Urina escura e em pouca quantidade</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
                <span>Dor de cabeça e tontura</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
                <span>Fadiga e falta de energia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
                <span>Pele seca e lábios rachados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
                <span>Constipação intestinal</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
