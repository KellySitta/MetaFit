"use client";

import { useRouter } from "next/navigation";
import { Check, Crown, Sparkles, Heart, Apple, Dumbbell, Moon, Coffee, Pill, ArrowLeft, Zap } from "lucide-react";

export default function PlanosPage() {
  const router = useRouter();

  const plans = [
    {
      name: "Mensal",
      price: "37,90",
      period: "mês",
      savings: null,
      popular: false,
      gradient: "from-cyan-400 via-blue-500 to-purple-600",
      borderColor: "border-cyan-400/30",
      bgGradient: "from-cyan-500/20 to-blue-500/20",
      firstMonth: "19,90",
    },
    {
      name: "Trimestral",
      price: "27,90",
      period: "mês",
      savings: "Economize 26%",
      popular: true,
      gradient: "from-purple-400 via-pink-500 to-purple-600",
      borderColor: "border-purple-400/30",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      firstMonth: "19,90",
    },
    {
      name: "Anual",
      price: "17,90",
      period: "mês",
      savings: "Economize 53%",
      popular: false,
      gradient: "from-blue-400 via-indigo-500 to-purple-600",
      borderColor: "border-blue-400/30",
      bgGradient: "from-blue-500/20 to-indigo-500/20",
      firstMonth: "19,90",
    },
  ];

  const benefits = [
    { icon: Apple, text: "Cardápios personalizados para todas as refeições" },
    { icon: Coffee, text: "Receitas exclusivas de chás detox e emagrecedores" },
    { icon: Dumbbell, text: "Guia completo de exercícios para queima de calorias" },
    { icon: Moon, text: "Dicas especializadas para melhorar qualidade do sono" },
    { icon: Pill, text: "Guia detalhado de aplicação de medicamentos GLP-1" },
    { icon: Heart, text: "Acompanhamento de IMC e metas de peso" },
    { icon: Sparkles, text: "Suporte prioritário e atualizações constantes" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-10 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-white/70 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Voltar</span>
            </button>
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-3 rounded-2xl shadow-2xl shadow-cyan-500/50 transform hover:scale-105 transition-transform duration-300">
                <Zap className="w-7 h-7 sm:w-9 sm:h-9 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent tracking-tight">
                  MetaFit
                </h1>
                <p className="text-xs sm:text-sm text-white/70 font-medium">Escolha seu plano</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-2xl shadow-cyan-500/50">
            <Crown className="w-4 h-4" />
            Acesso Premium
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Transforme Sua Vida com
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Emagrecimento Saudável
            </span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-medium">
            Escolha o plano ideal e tenha acesso completo a todas as ferramentas para alcançar seus objetivos
          </p>
        </div>

        {/* Oferta Especial Banner */}
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 rounded-3xl p-6 mb-8 text-center shadow-2xl">
          <div className="inline-flex bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
            <span className="text-white font-black text-sm">🔥 OFERTA ESPECIAL</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-black text-white mb-2">
            Primeiro Mês por R$ 19,90
          </h3>
          <p className="text-white/90 font-medium">
            Experimente com desconto especial no primeiro mês em qualquer plano!
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border-2 ${plan.borderColor} transform hover:scale-[1.02] transition-all duration-300 ${
                plan.popular ? "ring-4 ring-purple-400/50" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-2xl flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Mais Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <div className={`inline-flex bg-gradient-to-br ${plan.gradient} p-4 rounded-2xl shadow-2xl mb-4`}>
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
                {plan.savings && (
                  <div className="inline-block bg-green-500/20 backdrop-blur-sm text-green-300 px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-green-400/30">
                    {plan.savings}
                  </div>
                )}
              </div>

              {/* First Month Price */}
              <div className="text-center mb-4 p-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl border border-orange-400/30">
                <p className="text-xs text-orange-300 font-bold mb-1">1º MÊS</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-xl font-bold text-white">R$</span>
                  <span className="text-4xl font-black bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
                    {plan.firstMonth}
                  </span>
                </div>
              </div>

              {/* Regular Price */}
              <div className="text-center mb-8">
                <p className="text-xs text-white/60 font-bold mb-1">APÓS O PRIMEIRO MÊS</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-bold text-white">R$</span>
                  <span className="text-5xl font-black bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-white/70">/{plan.period}</span>
                </div>
                {plan.name === "Trimestral" && (
                  <p className="text-sm text-white/60 mt-2">Cobrado R$ 83,70 a cada 3 meses</p>
                )}
                {plan.name === "Anual" && (
                  <p className="text-sm text-white/60 mt-2">Cobrado R$ 214,80 por ano</p>
                )}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white font-black py-4 rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-[1.02] transition-all duration-300 mb-6`}
              >
                Começar Agora
              </button>

              {/* Features Preview */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-white/90 mb-3">Inclui:</p>
                {benefits.slice(0, 4).map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`bg-gradient-to-br ${plan.gradient} p-1.5 rounded-lg flex-shrink-0 shadow-lg`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-white/70">{benefit.text}</span>
                  </div>
                ))}
                <p className="text-xs text-white/50 italic pt-2">+ muito mais...</p>
              </div>
            </div>
          ))}
        </div>

        {/* All Benefits Section */}
        <section className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
              Tudo que Você Terá Acesso
            </h3>
            <p className="text-white/70 font-medium">
              Todos os planos incluem acesso completo a todas as funcionalidades
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20"
              >
                <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-3 rounded-xl flex-shrink-0 shadow-lg">
                  <benefit.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">{benefit.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Guarantee Section */}
        <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl p-8 text-white text-center shadow-2xl mb-12">
          <div className="inline-flex bg-white/20 backdrop-blur-sm p-4 rounded-2xl mb-4">
            <Heart className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black mb-3">Garantia de 7 Dias</h3>
          <p className="text-white/90 max-w-2xl mx-auto mb-6 font-medium">
            Experimente sem riscos! Se não ficar satisfeito nos primeiros 7 dias, devolvemos 100% do seu investimento.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Sem taxas ocultas</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Cancele quando quiser</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Suporte dedicado</span>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-black text-white mb-6 text-center">
            Perguntas Frequentes
          </h3>
          <div className="space-y-4 max-w-3xl mx-auto">
            <details className="p-4 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20">
              <summary className="font-semibold text-white cursor-pointer">
                Posso cancelar minha assinatura a qualquer momento?
              </summary>
              <p className="mt-3 text-sm text-white/70">
                Sim! Você pode cancelar sua assinatura a qualquer momento sem multas ou taxas adicionais. O acesso permanece ativo até o fim do período pago.
              </p>
            </details>
            <details className="p-4 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20">
              <summary className="font-semibold text-white cursor-pointer">
                Como funciona a garantia de 7 dias?
              </summary>
              <p className="mt-3 text-sm text-white/70">
                Se você não estiver satisfeito com o MetaFit nos primeiros 7 dias, basta entrar em contato e faremos o reembolso integral, sem perguntas.
              </p>
            </details>
            <details className="p-4 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20">
              <summary className="font-semibold text-white cursor-pointer">
                Qual a diferença entre os planos?
              </summary>
              <p className="mt-3 text-sm text-white/70">
                Todos os planos têm acesso aos mesmos recursos. A diferença está no período de cobrança e na economia: quanto maior o período, maior o desconto no valor mensal.
              </p>
            </details>
            <details className="p-4 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20">
              <summary className="font-semibold text-white cursor-pointer">
                Os cardápios são personalizados?
              </summary>
              <p className="mt-3 text-sm text-white/70">
                Sim! Os cardápios são adaptados com base nas suas informações de peso, altura, idade e objetivos, garantindo um plano alimentar adequado para você.
              </p>
            </details>
          </div>
        </section>
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
