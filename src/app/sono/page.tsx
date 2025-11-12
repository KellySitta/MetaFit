"use client";

import { useRouter } from "next/navigation";
import { Moon, ArrowLeft, Brain, Heart, Scale, Battery, Shield, Clock, Zap, TrendingDown } from "lucide-react";

export default function SonoPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-indigo-100 dark:border-gray-700 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/")}
              className="p-2 hover:bg-indigo-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-indigo-400 to-purple-600 p-2 sm:p-3 rounded-2xl shadow-lg">
                <Moon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Sono e Emagrecimento
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Por que dormir bem é essencial
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        {/* Introdução */}
        <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 mb-6 sm:mb-8 border border-indigo-100 dark:border-gray-700">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-gradient-to-br from-indigo-400 to-purple-600 p-4 rounded-2xl flex-shrink-0">
              <Moon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                O Sono é Fundamental para Emagrecer
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Dormir bem não é apenas descansar - é uma parte essencial do processo de emagrecimento saudável. 
                Durante o sono, seu corpo regula hormônios, recupera músculos e processa nutrientes de forma eficiente.
              </p>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl border-2 border-indigo-200 dark:border-indigo-700">
            <p className="text-center text-lg font-semibold text-gray-800 dark:text-gray-100">
              💤 <strong>Meta Ideal:</strong> 7-8 horas de sono por noite
            </p>
          </div>
        </section>

        {/* Por que o sono é importante */}
        <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 mb-6 sm:mb-8 border border-indigo-100 dark:border-gray-700">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Como o Sono Afeta o Emagrecimento
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Hormônios da Fome */}
            <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl border-2 border-red-200 dark:border-red-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-red-400 to-orange-600 p-3 rounded-xl flex-shrink-0">
                  <TrendingDown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">
                    Regula Hormônios da Fome
                  </h3>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-red-600 dark:text-red-400">•</span>
                  <span><strong>Grelina</strong> (hormônio da fome) aumenta quando você dorme pouco</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 dark:text-red-400">•</span>
                  <span><strong>Leptina</strong> (hormônio da saciedade) diminui com sono insuficiente</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 dark:text-red-400">•</span>
                  <span>Resultado: mais fome e vontade de comer alimentos calóricos</span>
                </li>
              </ul>
            </div>

            {/* Metabolismo */}
            <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl border-2 border-emerald-200 dark:border-emerald-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-emerald-400 to-teal-600 p-3 rounded-xl flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">
                    Acelera o Metabolismo
                  </h3>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400">•</span>
                  <span>Sono adequado mantém metabolismo funcionando bem</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400">•</span>
                  <span>Queima mais calorias em repouso</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400">•</span>
                  <span>Melhora processamento de carboidratos e gorduras</span>
                </li>
              </ul>
            </div>

            {/* Energia */}
            <div className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl border-2 border-yellow-200 dark:border-yellow-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-yellow-400 to-amber-600 p-3 rounded-xl flex-shrink-0">
                  <Battery className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">
                    Aumenta Energia e Disposição
                  </h3>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-yellow-600 dark:text-yellow-400">•</span>
                  <span>Mais energia para exercícios físicos</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600 dark:text-yellow-400">•</span>
                  <span>Melhor desempenho nos treinos</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600 dark:text-yellow-400">•</span>
                  <span>Menos fadiga durante o dia</span>
                </li>
              </ul>
            </div>

            {/* Recuperação Muscular */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-purple-400 to-pink-600 p-3 rounded-xl flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">
                    Recuperação Muscular
                  </h3>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Músculos se recuperam e crescem durante o sono</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Mais massa muscular = mais calorias queimadas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Reduz risco de lesões nos exercícios</span>
                </li>
              </ul>
            </div>

            {/* Cortisol */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-blue-400 to-cyan-600 p-3 rounded-xl flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">
                    Reduz Estresse e Cortisol
                  </h3>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span>Sono ruim aumenta cortisol (hormônio do estresse)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span>Cortisol alto favorece acúmulo de gordura abdominal</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span>Dormir bem mantém cortisol equilibrado</span>
                </li>
              </ul>
            </div>

            {/* Decisões Alimentares */}
            <div className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl border-2 border-pink-200 dark:border-pink-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-pink-400 to-rose-600 p-3 rounded-xl flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">
                    Melhores Escolhas Alimentares
                  </h3>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-pink-600 dark:text-pink-400">•</span>
                  <span>Sono adequado melhora autocontrole</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-600 dark:text-pink-400">•</span>
                  <span>Menos compulsão por doces e carboidratos</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-600 dark:text-pink-400">•</span>
                  <span>Facilita seguir dieta saudável</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dicas para Dormir Melhor */}
        <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 mb-6 sm:mb-8 border border-indigo-100 dark:border-gray-700">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Dicas para Melhorar seu Sono
          </h2>

          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">Horário Regular</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Durma e acorde no mesmo horário todos os dias, inclusive fins de semana. Isso regula seu relógio biológico.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
              <div className="flex items-start gap-3">
                <Moon className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">Ambiente Adequado</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Quarto escuro, silencioso e fresco (18-22°C). Use cortinas blackout e tampões de ouvido se necessário.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
              <div className="flex items-start gap-3">
                <Scale className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">Evite Refeições Pesadas</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Não coma grandes quantidades 2-3 horas antes de dormir. Prefira lanches leves se sentir fome.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">Limite Cafeína e Álcool</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Evite cafeína após 14h. Álcool pode fazer você dormir, mas prejudica a qualidade do sono.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
              <div className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">Desligue Telas</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Evite celular, TV e computador 1 hora antes de dormir. A luz azul atrapalha a produção de melatonina.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">Relaxe Antes de Dormir</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Leia um livro, tome banho morno, medite ou faça respiração profunda. Crie uma rotina relaxante.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alerta Final */}
        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl shadow-2xl p-6 sm:p-8 text-white">
          <div className="text-center">
            <Moon className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Priorize seu Sono!
            </h3>
            <p className="text-sm sm:text-base opacity-90 max-w-2xl mx-auto">
              Dormir bem é tão importante quanto alimentação e exercícios para emagrecer com saúde. 
              Faça do sono uma prioridade na sua rotina e veja os resultados!
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-indigo-100 dark:border-gray-700 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            💤 Durma bem, emagreça melhor!
          </p>
        </div>
      </footer>
    </div>
  );
}
