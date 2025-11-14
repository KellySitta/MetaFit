"use client";

import { Star, Zap, TrendingDown, Heart, Award, Users, CheckCircle2, Sparkles, Crown, ArrowRight, Mail } from "lucide-react";
import { useState } from "react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  
  // Novos estados para o formulário completo
  const [formData, setFormData] = useState({
    name: "",
    weight: "",
    height: "",
    age: "",
    targetWeight: ""
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Verificar se Supabase está configurado
    if (!isSupabaseConfigured() || !supabase) {
      setMessage("⚠️ Configure o Supabase para salvar os dados. Clique no banner laranja acima.");
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('leads')
        .insert([{ email, created_at: new Date().toISOString() }]);

      if (error) throw error;

      setMessage("✅ Email cadastrado com sucesso! Em breve você receberá novidades.");
      setEmail("");
    } catch (error) {
      setMessage("❌ Erro ao cadastrar. Tente novamente.");
      console.error("Erro ao salvar no Supabase:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setFormMessage("");

    // Verificar se Supabase está configurado
    if (!isSupabaseConfigured() || !supabase) {
      setFormMessage("⚠️ Configure o Supabase para salvar os dados. Clique no banner laranja acima.");
      setFormLoading(false);
      return;
    }

    // Validar campos obrigatórios
    if (!formData.name || !formData.weight || !formData.height || !formData.age || !formData.targetWeight) {
      setFormMessage("❌ Por favor, preencha todos os campos.");
      setFormLoading(false);
      return;
    }

    try {
      // Converter valores para números
      const weight = parseFloat(formData.weight);
      const height = parseFloat(formData.height);
      const age = parseInt(formData.age);
      const targetWeight = parseFloat(formData.targetWeight);

      // Validar se os números são válidos
      if (isNaN(weight) || isNaN(height) || isNaN(age) || isNaN(targetWeight)) {
        setFormMessage("❌ Por favor, insira valores numéricos válidos.");
        setFormLoading(false);
        return;
      }

      // Validar se idade é positiva
      if (age <= 0 || age > 150) {
        setFormMessage("❌ Por favor, insira uma idade válida.");
        setFormLoading(false);
        return;
      }

      const { error } = await supabase
        .from('user_profiles')
        .insert([{
          name: formData.name.trim(),
          weight: weight,
          height: height,
          age: age,
          target_weight: targetWeight,
          created_at: new Date().toISOString()
        }]);

      if (error) {
        console.error("Erro ao salvar no Supabase:", error);
        console.error("Detalhes do erro:", error);
        throw error;
      }

      setFormMessage("✅ Perfil cadastrado com sucesso! Vamos começar sua jornada.");
      setFormData({ name: "", weight: "", height: "", age: "", targetWeight: "" });
    } catch (error) {
      setFormMessage("❌ Erro ao cadastrar perfil. Verifique os dados e tente novamente.");
      console.error("Erro ao salvar no Supabase:", error);
    } finally {
      setFormLoading(false);
    }
  };

  const testimonials = [
    {
      name: "Ana Paula Silva",
      age: 34,
      weight: "12kg",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      text: "Perdi 12kg em 3 meses! O MetaFit mudou completamente minha relação com a comida e exercícios. Nunca me senti tão bem!",
      rating: 5
    },
    {
      name: "Carla Mendes",
      age: 28,
      weight: "8kg",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      text: "Incrível! Consegui emagrecer de forma saudável e sem passar fome. Os cardápios são deliciosos e fáceis de seguir.",
      rating: 5
    },
    {
      name: "Juliana Costa",
      age: 42,
      weight: "15kg",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
      text: "Depois dos 40 achei que seria impossível emagrecer. O MetaFit provou que eu estava errada! Resultado surpreendente!",
      rating: 5
    },
    {
      name: "Mariana Oliveira",
      age: 31,
      weight: "10kg",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      text: "O acompanhamento de GLP-1 foi essencial! Aprendi a usar minha medicação corretamente e os resultados foram incríveis.",
      rating: 5
    },
    {
      name: "Fernanda Santos",
      age: 36,
      weight: "18kg",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      text: "Melhor investimento que já fiz! Perdi 18kg e ganhei saúde, disposição e autoestima. Recomendo demais!",
      rating: 5
    },
    {
      name: "Patrícia Lima",
      age: 29,
      weight: "7kg",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
      text: "Os exercícios são perfeitos para quem não tem tempo! 30 minutos por dia e resultados visíveis em semanas.",
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: TrendingDown,
      title: "Perca Peso de Forma Saudável",
      description: "Método cientificamente comprovado para emagrecimento sustentável e duradouro"
    },
    {
      icon: Heart,
      title: "Cardápios Personalizados",
      description: "Refeições deliciosas e balanceadas para cada momento do seu dia"
    },
    {
      icon: Zap,
      title: "Exercícios Práticos",
      description: "Treinos de 30 minutos que cabem na sua rotina e trazem resultados reais"
    },
    {
      icon: Award,
      title: "Acompanhamento GLP-1",
      description: "Guia completo para uso correto de medicações como Ozempic e Saxenda"
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Milhares de pessoas transformando suas vidas juntas"
    },
    {
      icon: Sparkles,
      title: "Resultados Comprovados",
      description: "Mais de 50.000 pessoas já alcançaram seus objetivos"
    }
  ];

  const stats = [
    { number: "50.000+", label: "Vidas Transformadas" },
    { number: "12kg", label: "Perda Média de Peso" },
    { number: "4.9/5", label: "Avaliação dos Usuários" },
    { number: "90%", label: "Taxa de Sucesso" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Logo */}
          <div className="inline-flex bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-6 rounded-3xl shadow-2xl mb-8 transform hover:scale-105 transition-transform duration-300">
            <Zap className="w-16 h-16 text-white" />
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent mb-6 tracking-tight leading-tight">
            Transforme Seu Corpo<br />em 90 Dias
          </h1>

          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
            Mais de <span className="text-cyan-300 font-black">50.000 pessoas</span> já perderam peso de forma saudável com o método MetaFit. Chegou a sua vez!
          </p>

          {/* Formulário Completo com Supabase */}
          <div className="max-w-2xl mx-auto mb-12 bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-black text-white mb-6">Comece Sua Transformação</h3>
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div>
                <label className="block text-white/90 font-bold mb-2 text-left">Qual é o seu nome?</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Digite seu nome completo"
                  required
                  disabled={formLoading}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/50 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 transition-all outline-none font-medium"
                />
              </div>

              <div>
                <label className="block text-white/90 font-bold mb-2 text-left">Qual é o seu peso atual? (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.weight}
                  onChange={(e) => setFormData({...formData, weight: e.target.value})}
                  placeholder="Ex: 75.5"
                  required
                  disabled={formLoading}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/50 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 transition-all outline-none font-medium"
                />
              </div>

              <div>
                <label className="block text-white/90 font-bold mb-2 text-left">Qual é a sua altura? (cm)</label>
                <input
                  type="number"
                  value={formData.height}
                  onChange={(e) => setFormData({...formData, height: e.target.value})}
                  placeholder="Ex: 170"
                  required
                  disabled={formLoading}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/50 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 transition-all outline-none font-medium"
                />
              </div>

              <div>
                <label className="block text-white/90 font-bold mb-2 text-left">Qual é a sua idade?</label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  placeholder="Ex: 30"
                  required
                  disabled={formLoading}
                  min="1"
                  max="150"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/50 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 transition-all outline-none font-medium"
                />
              </div>

              <div>
                <label className="block text-white/90 font-bold mb-2 text-left">Qual é o seu peso alvo? (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.targetWeight}
                  onChange={(e) => setFormData({...formData, targetWeight: e.target.value})}
                  placeholder="Ex: 65.0"
                  required
                  disabled={formLoading}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/50 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 transition-all outline-none font-medium"
                />
              </div>

              <button
                type="submit"
                disabled={formLoading}
                className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-500 hover:via-blue-600 hover:to-purple-700 text-white font-black text-lg px-10 py-5 rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formLoading ? "Enviando..." : "Começar Agora"}
                {!formLoading && <ArrowRight className="w-6 h-6" />}
              </button>

              {formMessage && (
                <p className={`text-sm font-bold text-center ${formMessage.includes('✅') ? 'text-green-300' : formMessage.includes('⚠️') ? 'text-yellow-300' : 'text-red-300'}`}>
                  {formMessage}
                </p>
              )}
            </form>
          </div>

          {/* Email Capture Form */}
          <div className="max-w-2xl mx-auto mb-8">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="relative w-full sm:flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite seu melhor email"
                  required
                  disabled={loading}
                  className="w-full px-5 py-4 pl-12 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/50 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 transition-all outline-none font-medium"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-500 hover:via-blue-600 hover:to-purple-700 text-white font-black text-lg px-10 py-4 rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {loading ? "Enviando..." : "Quero Emagrecer"}
                {!loading && <ArrowRight className="w-6 h-6" />}
              </button>
            </form>
            {message && (
              <p className={`mt-4 text-sm font-bold ${message.includes('✅') ? 'text-green-300' : message.includes('⚠️') ? 'text-yellow-300' : 'text-red-300'}`}>
                {message}
              </p>
            )}
          </div>

          {/* CTA Button */}
          <a
            href="https://play.google.com/store" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-500 hover:via-blue-600 hover:to-purple-700 text-white font-black text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-7 h-7" />
            Baixar App Grátis
            <ArrowRight className="w-7 h-7" />
          </a>

          <p className="text-white/60 text-sm mt-4 font-medium">
            ⭐ Avaliação 4.9/5 • Mais de 10.000 avaliações
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
                <p className="text-4xl font-black bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </p>
                <p className="text-white/80 text-sm font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Por Que Escolher o MetaFit?
            </h2>
            <p className="text-xl text-white/80 font-medium">
              Tudo que você precisa para transformar seu corpo e sua vida
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/30 transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-4 rounded-2xl inline-flex mb-4 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white mb-3">{benefit.title}</h3>
                <p className="text-white/70 font-medium leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-2xl mb-4 shadow-2xl">
              <Crown className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Histórias de Sucesso Reais
            </h2>
            <p className="text-xl text-white/80 font-medium">
              Veja o que nossos usuários estão dizendo
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-purple-400/50 shadow-lg"
                  />
                  <div>
                    <h4 className="font-black text-white text-lg">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm font-medium">{testimonial.age} anos</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Weight Loss Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-2 rounded-full mb-4 shadow-lg">
                  <TrendingDown className="w-4 h-4 text-white" />
                  <span className="text-white font-black text-sm">-{testimonial.weight}</span>
                </div>

                {/* Testimonial Text */}
                <p className="text-white/80 font-medium leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTZjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMjRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex bg-white/20 backdrop-blur-sm p-5 rounded-3xl mb-6 shadow-2xl">
            <Sparkles className="w-14 h-14 text-white" />
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Comece Sua Transformação Hoje!
          </h2>

          <p className="text-xl text-white/90 mb-8 font-medium leading-relaxed">
            Junte-se a milhares de pessoas que já transformaram suas vidas com o MetaFit. Baixe grátis e comece agora!
          </p>

          {/* Features List */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto text-left">
            {[
              "Cardápios personalizados",
              "Exercícios de 30 minutos",
              "Acompanhamento GLP-1",
              "Receitas exclusivas",
              "Comunidade ativa",
              "Resultados em 90 dias"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <CheckCircle2 className="w-6 h-6 text-green-300 flex-shrink-0" />
                <span className="text-white font-bold">{feature}</span>
              </div>
            ))}
          </div>

          {/* Download Button */}
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-purple-600 hover:bg-gray-100 font-black text-2xl px-14 py-7 rounded-2xl shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300"
          >
            <Zap className="w-8 h-8" />
            Baixar Grátis Agora
            <ArrowRight className="w-8 h-8" />
          </a>

          <p className="text-white/80 text-sm mt-6 font-medium">
            ✨ Sem compromisso • Cancele quando quiser • Primeiro mês por apenas R$ 19,90
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-xl border-t border-white/10 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-3 rounded-2xl shadow-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              MetaFit
            </h3>
          </div>
          <p className="text-white/70 font-medium mb-2">
            Transforme seu corpo, transforme sua vida
          </p>
          <p className="text-white/50 text-sm font-medium">
            © 2024 MetaFit. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
