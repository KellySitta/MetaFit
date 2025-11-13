"use client";
import { supabase } from './supabase';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Scale, Target, TrendingDown, Heart, Apple, Dumbbell, Droplets, Moon, Pill, Syringe, AlertCircle, CheckCircle2, Info, UtensilsCrossed, Coffee, Salad, Cookie, Crown, Sparkles, Lock, Activity, Zap } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<'quiz' | 'app'>('quiz');
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [targetWeight, setTargetWeight] = useState("");
  const [usesGLP1, setUsesGLP1] = useState(false);
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState("");
  const [showTeas, setShowTeas] = useState(false);
  const [showLockedModal, setShowLockedModal] = useState(false);
  
  // Estados para GLP-1
  const [selectedMedication, setSelectedMedication] = useState("");
  const [penStrength, setPenStrength] = useState("");
  const [currentDose, setCurrentDose] = useState("");

  // Simular status de assinatura (false = não assinante)
  const [isSubscribed, setIsSubscribed] = useState(false);

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // converter cm para metros
    
    if (w > 0 && h > 0) {
      const bmiValue = w / (h * h);
      setBmi(parseFloat(bmiValue.toFixed(1)));
      
      if (bmiValue < 18.5) setBmiCategory("Abaixo do peso");
      else if (bmiValue < 25) setBmiCategory("Peso normal");
      else if (bmiValue < 30) setBmiCategory("Sobrepeso");
      else setBmiCategory("Obesidade");
    }
  };

  // Calcular peso ideal baseado em altura e idade
  const calculateIdealWeight = () => {
    const h = parseFloat(height) / 100; // converter cm para metros
    const a = parseFloat(age);
    
    if (h > 0 && a > 0) {
      // Fórmula de Devine ajustada por idade (assumindo sexo feminino para ser conservador)
      let idealWeight = 45.5 + 2.3 * ((h * 100 - 152.4) / 2.54);
      
      // Ajuste por idade (pessoas mais velhas podem ter peso ideal ligeiramente maior)
      if (a > 50) {
        idealWeight += 2;
      }
      
      return idealWeight.toFixed(1);
    }
    return "0";
  };

  // Calcular quanto está acima do peso ideal
  const calculateOverweight = () => {
    const w = parseFloat(weight);
    const ideal = parseFloat(calculateIdealWeight());
    
    if (w > 0 && ideal > 0 && w > ideal) {
      return (w - ideal).toFixed(1);
    }
    return "0";
  };

  // Cálculo de hidratação: 35ml por kg de peso
  const calculateWaterIntake = () => {
    const w = parseFloat(weight);
    if (w > 0) {
      const liters = (w * 35) / 1000; // 35ml por kg convertido para litros
      return liters.toFixed(1);
    }
    return "0";
  };

  // Cálculo de calorias diárias recomendadas (fórmula simplificada)
  const calculateDailyCalories = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    
    if (w > 0 && h > 0 && a > 0) {
      // Fórmula de Harris-Benedict simplificada (assumindo sexo feminino para ser mais conservador)
      const bmr = 655 + (9.6 * w) + (1.8 * h) - (4.7 * a);
      // Multiplicador para atividade leve (1.375) e déficit calórico de 20% para perda de peso
      const dailyCalories = Math.round((bmr * 1.375) * 0.8);
      return dailyCalories;
    }
    return 0;
  };

  // Configurações de medicamentos GLP-1
  const medications = {
    ozempic: {
      name: "Ozempic (Semaglutida)",
      strengths: [
        { value: "2mg", label: "2mg (caneta vermelha)", doses: [0.25, 0.5, 1] },
        { value: "4mg", label: "4mg (caneta azul)", doses: [0.25, 0.5, 1, 1.7, 2] }
      ],
      schedule: [
        { week: "Semanas 1-4", dose: 0.25, frequency: "1x por semana" },
        { week: "Semanas 5-8", dose: 0.5, frequency: "1x por semana" },
        { week: "Semana 9+", dose: 1, frequency: "1x por semana (dose de manutenção)" }
      ]
    },
    wegovy: {
      name: "Wegovy (Semaglutida)",
      strengths: [
        { value: "2.4mg", label: "2.4mg", doses: [0.25, 0.5, 1, 1.7, 2.4] }
      ],
      schedule: [
        { week: "Semanas 1-4", dose: 0.25, frequency: "1x por semana" },
        { week: "Semanas 5-8", dose: 0.5, frequency: "1x por semana" },
        { week: "Semanas 9-12", dose: 1, frequency: "1x por semana" },
        { week: "Semanas 13-16", dose: 1.7, frequency: "1x por semana" },
        { week: "Semana 17+", dose: 2.4, frequency: "1x por semana (dose de manutenção)" }
      ]
    },
    saxenda: {
      name: "Saxenda (Liraglutida)",
      strengths: [
        { value: "6mg", label: "6mg (18mg/3ml)", doses: [0.6, 1.2, 1.8, 2.4, 3.0] }
      ],
      schedule: [
        { week: "Semana 1", dose: 0.6, frequency: "1x por dia" },
        { week: "Semana 2", dose: 1.2, frequency: "1x por dia" },
        { week: "Semana 3", dose: 1.8, frequency: "1x por dia" },
        { week: "Semana 4", dose: 2.4, frequency: "1x por dia" },
        { week: "Semana 5+", dose: 3.0, frequency: "1x por dia (dose de manutenção)" }
      ]
    }
  };

  const getClicksForDose = (medication: string, strength: string, dose: number) => {
    if (medication === "ozempic") {
      if (strength === "2mg") {
        // Caneta 2mg: cada clique = 0.25mg
        return dose / 0.25;
      } else if (strength === "4mg") {
        // Caneta 4mg: cada clique varia
        if (dose === 0.25) return 1;
        if (dose === 0.5) return 2;
        if (dose === 1) return 4;
        if (dose === 1.7) return 7;
        if (dose === 2) return 8;
      }
    } else if (medication === "wegovy") {
      // Wegovy: canetas pré-preenchidas com dose única
      return "Dose única (caneta descartável)";
    } else if (medication === "saxenda") {
      // Saxenda: cada clique = 0.6mg
      return dose / 0.6;
    }
    return 0;
  };

  const handleLockedFeature = () => {
    setShowLockedModal(true);
  };

  const tips = [
    { icon: Apple, title: "Alimentação", desc: "Cardápios pensados para café da manhã, almoço, lanche da tarde e jantar", locked: true },
    { icon: Droplets, title: "Hidratação", desc: "Mantenha-se hidratado com a quantidade ideal de água", locked: true },
    { icon: Dumbbell, title: "Exercícios", desc: "30 minutos de atividade física diária", link: "/exercicios", locked: true },
    { icon: Moon, title: "Sono", desc: "Durma 7-8 horas por noite", link: "/sono", locked: true },
    { icon: Coffee, title: "Chás", desc: "Receitas de chás detox e emagrecedores", action: () => setShowTeas(true), locked: true },
    { icon: Activity, title: "Acompanhe seu progresso", desc: "Registre seu peso semanalmente e veja seu histórico", action: () => router.push('/progresso'), locked: true },
  ];

  const teasRecipes = [
    {
      name: "Chá Verde com Limão",
      ingredients: ["1 sachê de chá verde", "Suco de 1/2 limão", "200ml de água quente"],
      benefits: ["Acelera o metabolismo", "Rico em antioxidantes", "Auxilia na queima de gordura", "Melhora a digestão"],
      preparation: "Ferva a água, adicione o sachê de chá verde e deixe em infusão por 3-5 minutos. Adicione o suco de limão e beba morno."
    },
    {
      name: "Chá de Hibisco",
      ingredients: ["2 colheres de sopa de hibisco seco", "500ml de água", "Gengibre a gosto (opcional)"],
      benefits: ["Diurético natural", "Reduz inchaço", "Controla pressão arterial", "Rico em vitamina C"],
      preparation: "Ferva a água com o hibisco por 5 minutos. Coe e beba gelado ou morno ao longo do dia."
    },
    {
      name: "Chá de Gengibre com Canela",
      ingredients: ["1 pedaço de gengibre (3cm)", "1 pau de canela", "300ml de água", "Mel a gosto"],
      benefits: ["Termogênico natural", "Acelera metabolismo", "Anti-inflamatório", "Melhora circulação"],
      preparation: "Ferva todos os ingredientes por 10 minutos. Coe, adicione mel se desejar e beba morno."
    },
    {
      name: "Chá Detox de Cavalinha",
      ingredients: ["1 colher de sopa de cavalinha", "250ml de água quente", "Hortelã a gosto"],
      benefits: ["Elimina toxinas", "Diurético potente", "Reduz retenção de líquidos", "Fortalece unhas e cabelos"],
      preparation: "Adicione a cavalinha na água quente e deixe em infusão por 10 minutos. Coe e beba."
    },
    {
      name: "Chá de Carqueja",
      ingredients: ["2 colheres de sopa de carqueja", "500ml de água"],
      benefits: ["Auxilia digestão", "Desintoxica o fígado", "Controla glicemia", "Reduz colesterol"],
      preparation: "Ferva a água com a carqueja por 5 minutos. Deixe esfriar, coe e beba ao longo do dia."
    },
    {
      name: "Chá Branco com Hortelã",
      ingredients: ["1 sachê de chá branco", "Folhas de hortelã fresca", "200ml de água quente"],
      benefits: ["Antioxidante poderoso", "Acelera metabolismo", "Melhora concentração", "Baixo teor de cafeína"],
      preparation: "Ferva a água, adicione o chá branco e hortelã. Deixe em infusão por 3 minutos e beba."
    }
  ];

  const selectedMed = selectedMedication ? medications[selectedMedication as keyof typeof medications] : null;
  const selectedStrength = selectedMed?.strengths.find(s => s.value === penStrength);
  const clicks = currentDose && selectedMed ? getClicksForDose(selectedMedication, penStrength, parseFloat(currentDose)) : 0;

  // Renderizar Quiz
  if (currentStep === 'quiz') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Efeitos de fundo modernos */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="max-w-2xl w-full relative z-10">
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 sm:p-12 border border-white/20">
            {/* Header do Quiz */}
            <div className="text-center mb-8">
              <div className="inline-flex bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-5 rounded-3xl shadow-2xl mb-6 transform hover:scale-105 transition-transform duration-300">
                <Zap className="w-14 h-14 text-white" />
              </div>
              <h1 className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent mb-3 tracking-tight">
                MetaFit
              </h1>
              <p className="text-white/90 text-lg font-medium">
                Transforme seu corpo, transforme sua vida
              </p>
            </div>

            {/* Perguntas do Quiz */}
            <div className="space-y-5">
              {/* Nome */}
              <div>
                <label className="block text-sm font-bold text-white/90 mb-2">
                  Qual é o seu nome?
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Maria Silva"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/50 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 transition-all outline-none font-medium"
                />
              </div>

              {/* Peso */}
              <div>
                <label className="block text-sm font-bold text-white/90 mb-2">
                  Qual é o seu peso atual? (kg)
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Ex: 75"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/50 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 transition-all outline-none font-medium"
                />
              </div>

              {/* Altura */}
              <div>
                <label className="block text-sm font-bold text-white/90 mb-2">
                  Qual é a sua altura? (cm)
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Ex: 170"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/50 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 transition-all outline-none font-medium"
                />
              </div>

              {/* Idade */}
              <div>
                <label className="block text-sm font-bold text-white/90 mb-2">
                  Qual é a sua idade?
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Ex: 30"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/50 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 transition-all outline-none font-medium"
                />
              </div>

              {/* Meta de Peso */}
              <div>
                <label className="block text-sm font-bold text-white/90 mb-2">
                  Qual é o seu peso desejado? (kg)
                </label>
                <input
                  type="number"
                  value={targetWeight}
                  onChange={(e) => setTargetWeight(e.target.value)}
                  placeholder="Ex: 65"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/50 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 transition-all outline-none font-medium"
                />
              </div>

              {/* GLP-1 */}
              <div className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl border-2 border-purple-300/30">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-400 to-pink-600 p-3 rounded-xl flex-shrink-0 shadow-lg">
                    <Pill className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <label className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={usesGLP1}
                        onChange={(e) => setUsesGLP1(e.target.checked)}
                        className="w-5 h-5 rounded border-2 border-purple-300 text-purple-600 focus:ring-4 focus:ring-purple-500/30 cursor-pointer transition-all"
                      />
                      <span className="ml-3 text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        Uso medicação GLP-1
                      </span>
                    </label>
                    <p className="mt-2 text-sm text-white/70 ml-8">
                      Ozempic, Wegovy, Saxenda ou similares
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botão Continuar */}
            <button
              onClick={() => {
                calculateBMI();
                // Salvar peso e nome no localStorage para usar em outras páginas
                if (typeof window !== 'undefined') {
                  localStorage.setItem('userWeight', weight);
                  localStorage.setItem('userName', name);
                }
                setCurrentStep('app');
              }}
              disabled={!name || !weight || !height || !age || !targetWeight}
              className="w-full mt-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-500 hover:via-blue-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-black text-lg py-5 rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-[1.02] transition-all duration-300"
            >
              Começar Minha Transformação
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Renderizar App Principal
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-10 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-3 rounded-2xl shadow-2xl shadow-cyan-500/50 transform hover:scale-105 transition-transform duration-300">
              <Zap className="w-7 h-7 sm:w-9 sm:h-9 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent tracking-tight">
                MetaFit
              </h1>
              <p className="text-xs sm:text-sm text-white/70 font-medium">Transforme seu corpo, transforme sua vida</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        {/* Resumo do Perfil */}
        <section className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 mb-6 sm:mb-8 border border-white/20">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
            Olá, {name}! 👋
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* IMC */}
            <div className="p-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl border-2 border-cyan-400/30 shadow-xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <Scale className="w-5 h-5 text-cyan-300" />
                <p className="text-sm text-white/80 font-bold">IMC</p>
              </div>
              <p className="text-4xl font-black text-cyan-300">{bmi}</p>
              <p className="text-sm text-white/70 mt-1 font-medium">{bmiCategory}</p>
            </div>

            {/* Peso Atual */}
            <div className="p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl border-2 border-blue-400/30 shadow-xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <Scale className="w-5 h-5 text-blue-300" />
                <p className="text-sm text-white/80 font-bold">Peso Atual</p>
              </div>
              <p className="text-4xl font-black text-blue-300">{weight} kg</p>
            </div>

            {/* Peso Ideal */}
            <div className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl border-2 border-purple-400/30 shadow-xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-purple-300" />
                <p className="text-sm text-white/80 font-bold">Peso Ideal</p>
              </div>
              <p className="text-4xl font-black text-purple-300">{calculateIdealWeight()} kg</p>
              <p className="text-sm text-white/70 mt-1 font-medium">
                Para sua altura e idade
              </p>
            </div>

            {/* Acima do Peso */}
            <div className="p-6 bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl border-2 border-orange-400/30 shadow-xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <TrendingDown className="w-5 h-5 text-orange-300" />
                <p className="text-sm text-white/80 font-bold">Acima do Peso</p>
              </div>
              <p className="text-4xl font-black text-orange-300">{calculateOverweight()} kg</p>
              <p className="text-sm text-white/70 mt-1 font-medium">
                Meta: {targetWeight} kg
              </p>
            </div>
          </div>
        </section>

        {/* Guia de Aplicação GLP-1 - BLOQUEADO */}
        {usesGLP1 && (
          <section className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 mb-6 sm:mb-8 border border-purple-400/30">
            {/* Overlay de bloqueio */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-3xl z-10 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="inline-flex bg-gradient-to-br from-purple-500 to-pink-600 p-5 rounded-3xl mb-4 shadow-2xl">
                  <Lock className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-black text-white mb-2">Conteúdo Premium</h3>
                <p className="text-white/90 mb-4 font-medium">Assine um plano para acessar o guia completo</p>
                <button
                  onClick={() => router.push('/planos')}
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-black px-8 py-4 rounded-2xl shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
                >
                  Ver Planos
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-purple-400 to-pink-600 p-3 rounded-xl shadow-lg">
                <Syringe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Guia de Aplicação GLP-1</h2>
            </div>

            {/* Seleção de Medicamento */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-white/80 mb-2">
                Qual medicamento você usa?
              </label>
              <select
                disabled
                value={selectedMedication}
                className="w-full px-4 py-3 rounded-xl border-2 border-white/20 bg-white/5 text-white/40 cursor-not-allowed outline-none"
              >
                <option value="">Selecione o medicamento</option>
                <option value="ozempic">Ozempic (Semaglutida)</option>
                <option value="wegovy">Wegovy (Semaglutida)</option>
                <option value="saxenda">Saxenda (Liraglutida)</option>
              </select>
            </div>
          </section>
        )}

        {/* Call to Action - Planos */}
        <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-3xl shadow-2xl p-8 mb-6 sm:mb-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTZjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMjRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
          <div className="relative z-10">
            <div className="inline-flex bg-white/20 backdrop-blur-sm p-5 rounded-3xl mb-4 shadow-2xl">
              <Crown className="w-12 h-12" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-3">
              Desbloqueie Todo o Potencial
            </h2>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto font-medium">
              Tenha acesso completo a cardápios personalizados, receitas exclusivas, guias de exercícios e muito mais!
            </p>
            <button
              onClick={() => router.push('/planos')}
              className="bg-white text-purple-600 font-black px-10 py-5 rounded-2xl shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 text-lg"
            >
              <Sparkles className="w-6 h-6" />
              Ver Planos Premium
            </button>
          </div>
        </section>

        {/* Dicas de Saúde - TODOS BLOQUEADOS */}
        <section className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/20">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
            Dicas para Emagrecer com Saúde
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {tips.map((tip, index) => {
              return (
                <button
                  key={index}
                  onClick={handleLockedFeature}
                  className="relative p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/30 transform hover:scale-105 transition-all duration-300 cursor-pointer text-left w-full"
                >
                  <div className="absolute top-3 right-3 bg-gradient-to-br from-purple-500 to-pink-600 text-white p-2 rounded-xl shadow-lg">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-3 rounded-xl flex-shrink-0 shadow-lg">
                      <tip.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-lg text-white mb-2">{tip.title}</h3>
                      <p className="text-white/70 text-sm font-medium">{tip.desc}</p>
                      <p className="text-purple-300 text-xs font-bold mt-2">
                        🔒 Disponível no plano Premium
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl text-white shadow-2xl">
            <p className="text-center text-sm sm:text-base font-bold">
              💡 <strong>Lembre-se:</strong> Emagrecimento saudável é gradual. Consulte sempre um profissional de saúde!
            </p>
          </div>
        </section>

        {/* Modal de Conteúdo Bloqueado */}
        {showLockedModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-3xl shadow-2xl max-w-md w-full p-8 text-center border border-white/20">
              <div className="inline-flex bg-gradient-to-br from-purple-400 to-pink-600 p-5 rounded-3xl mb-4 shadow-2xl">
                <Lock className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-black text-white mb-3">
                Conteúdo Premium
              </h2>
              <p className="text-white/80 mb-6 font-medium">
                Este conteúdo está disponível apenas para assinantes. Assine um plano para ter acesso completo!
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    setShowLockedModal(false);
                    router.push('/planos');
                  }}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-black px-6 py-4 rounded-2xl shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
                >
                  Ver Planos
                </button>
                <button
                  onClick={() => setShowLockedModal(false)}
                  className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-6 py-4 rounded-2xl transition-all duration-300 border border-white/20"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-xl border-t border-white/10 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-center">
          <p className="text-sm text-white/70 font-medium">
            Feito com <Heart className="w-4 h-4 inline text-red-500" /> para sua transformação
          </p>
        </div>
      </footer>
    </div>
  );
}
