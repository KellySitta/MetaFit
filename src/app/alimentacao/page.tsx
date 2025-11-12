"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, UtensilsCrossed, Coffee, Salad, Cookie, Moon, Info } from "lucide-react";

export default function AlimentacaoPage() {
  const router = useRouter();

  // Dados do cardápio (valores fixos para exemplo - você pode passar via query params ou context)
  const dailyCalories = 1500; // Exemplo
  const breakfastCal = Math.round(dailyCalories * 0.25);
  const lunchCal = Math.round(dailyCalories * 0.35);
  const snackCal = Math.round(dailyCalories * 0.10);
  const dinnerCal = Math.round(dailyCalories * 0.30);

  const mealPlan = {
    breakfast: {
      name: "Café da Manhã",
      calories: breakfastCal,
      options: [
        {
          title: "Opção 1 - Proteica",
          items: [
            "2 ovos mexidos com tomate e espinafre",
            "1 fatia de pão integral",
            "1 xícara de café com leite desnatado",
            "1 fruta pequena (maçã ou pera)"
          ]
        },
        {
          title: "Opção 2 - Leve",
          items: [
            "Iogurte grego natural (150g) com granola light",
            "1 banana pequena",
            "1 colher de sopa de chia",
            "Chá verde ou café sem açúcar"
          ]
        },
        {
          title: "Opção 3 - Energética",
          items: [
            "Tapioca pequena com queijo branco",
            "Suco verde (couve, limão, gengibre)",
            "1 fatia de melão"
          ]
        }
      ]
    },
    lunch: {
      name: "Almoço",
      calories: lunchCal,
      options: [
        {
          title: "Opção 1 - Completa",
          items: [
            "Peito de frango grelhado (120g)",
            "Arroz integral (3 colheres de sopa)",
            "Feijão (1 concha pequena)",
            "Salada verde à vontade com azeite",
            "Legumes cozidos (brócolis, cenoura)"
          ]
        },
        {
          title: "Opção 2 - Peixe",
          items: [
            "Filé de peixe assado (150g)",
            "Batata doce (1 unidade média)",
            "Salada de folhas verdes",
            "Legumes grelhados",
            "1 fruta de sobremesa"
          ]
        },
        {
          title: "Opção 3 - Vegetariana",
          items: [
            "Grão de bico refogado com legumes",
            "Quinoa (4 colheres de sopa)",
            "Salada colorida com azeite",
            "Tofu grelhado (100g)",
            "Suco natural sem açúcar"
          ]
        }
      ]
    },
    snack: {
      name: "Lanche da Tarde",
      calories: snackCal,
      options: [
        {
          title: "Opção 1 - Prático",
          items: [
            "1 iogurte natural desnatado",
            "10 amêndoas ou castanhas",
            "Chá verde"
          ]
        },
        {
          title: "Opção 2 - Doce Saudável",
          items: [
            "1 fatia de bolo integral de banana",
            "Café com leite desnatado"
          ]
        },
        {
          title: "Opção 3 - Leve",
          items: [
            "Frutas picadas (150g)",
            "1 colher de pasta de amendoim",
            "Água de coco"
          ]
        }
      ]
    },
    dinner: {
      name: "Jantar",
      calories: dinnerCal,
      options: [
        {
          title: "Opção 1 - Leve",
          items: [
            "Sopa de legumes com frango desfiado",
            "Salada verde",
            "2 torradas integrais",
            "Chá de camomila"
          ]
        },
        {
          title: "Opção 2 - Omelete",
          items: [
            "Omelete de 2 ovos com legumes",
            "Salada de rúcula com tomate cereja",
            "1 fatia de pão integral",
            "Suco verde"
          ]
        },
        {
          title: "Opção 3 - Proteica",
          items: [
            "Carne magra grelhada (100g)",
            "Purê de abóbora",
            "Salada de folhas",
            "Legumes no vapor",
            "Chá de ervas"
          ]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-emerald-100 dark:border-gray-700 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Voltar</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-orange-400 to-red-600 p-3 rounded-2xl shadow-lg">
              <UtensilsCrossed className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Cardápio Saudável
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Plano alimentar de <strong>{dailyCalories} calorias/dia</strong>
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        <div className="space-y-6">
          {/* Café da Manhã */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-yellow-200 dark:border-yellow-700">
            <div className="flex items-center gap-3 mb-4">
              <Coffee className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{mealPlan.breakfast.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">~{mealPlan.breakfast.calories} calorias</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {mealPlan.breakfast.options.map((option, idx) => (
                <div key={idx} className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-yellow-200 dark:border-yellow-600">
                  <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">{option.title}</p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    {option.items.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-orange-600 dark:text-orange-400">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Almoço */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-green-200 dark:border-green-700">
            <div className="flex items-center gap-3 mb-4">
              <Salad className="w-6 h-6 text-green-600 dark:text-green-400" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{mealPlan.lunch.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">~{mealPlan.lunch.calories} calorias</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {mealPlan.lunch.options.map((option, idx) => (
                <div key={idx} className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-green-200 dark:border-green-600">
                  <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">{option.title}</p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    {option.items.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-green-600 dark:text-green-400">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Lanche da Tarde */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-pink-200 dark:border-pink-700">
            <div className="flex items-center gap-3 mb-4">
              <Cookie className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{mealPlan.snack.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">~{mealPlan.snack.calories} calorias</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {mealPlan.snack.options.map((option, idx) => (
                <div key={idx} className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-pink-200 dark:border-pink-600">
                  <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">{option.title}</p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    {option.items.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-pink-600 dark:text-pink-400">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Jantar */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-indigo-200 dark:border-indigo-700">
            <div className="flex items-center gap-3 mb-4">
              <Moon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{mealPlan.dinner.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">~{mealPlan.dinner.calories} calorias</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {mealPlan.dinner.options.map((option, idx) => (
                <div key={idx} className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-indigo-200 dark:border-indigo-600">
                  <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">{option.title}</p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    {option.items.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-indigo-600 dark:text-indigo-400">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Dicas Nutricionais */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-amber-200 dark:border-amber-700">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-700 dark:text-gray-300">
                <p className="font-semibold mb-2">Dicas importantes:</p>
                <ul className="space-y-1 ml-4">
                  <li>• Escolha uma opção de cada refeição por dia</li>
                  <li>• Varie as opções ao longo da semana para não enjoar</li>
                  <li>• Beba água antes e durante as refeições</li>
                  <li>• Evite frituras, açúcares e alimentos ultraprocessados</li>
                  <li>• Mastigue bem e coma devagar para melhor digestão</li>
                  <li>• Ajuste as porções conforme sua fome e saciedade</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
