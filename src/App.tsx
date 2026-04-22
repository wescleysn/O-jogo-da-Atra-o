import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation, useInView } from "motion/react";
import { 
  Heart, 
  ChevronRight, 
  Lock, 
  CheckCircle2, 
  UserRound, 
  MessageCircleHeart, 
  Sparkles, 
  Timer, 
  ArrowRight,
  ShieldCheck,
  Zap,
  PhoneOff,
  Star,
  Plus,
  Minus,
  Instagram,
  Facebook,
  ShieldAlert,
  Crown,
  Gift
} from "lucide-react";

// FadeIn Component
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      className={className}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 }
      }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className="text-xl md:text-2xl font-serif italic text-white group-hover:text-brand transition-colors">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-brand" /> : <Plus className="w-5 h-5 text-white/20" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-white/50 leading-relaxed text-lg font-light">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 600));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-vibe-bg text-white font-sans selection:bg-brand selection:text-white overflow-x-hidden relative">
      <div className="noise" />

      {/* Scarcity Banner */}
      <div className="bg-brand py-3 text-center text-[9px] md:text-sm font-black tracking-[0.2em] md:tracking-[0.4em] uppercase z-[100] relative px-4">
        ⚠️ Oferta Exclusiva: Expira em {formatTime(timeLeft)}
      </div>

      {/* Hero Section */}
      <header className="relative pt-12 md:pt-20 lg:pt-32 pb-20 md:pb-28 lg:pb-32 px-4 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[1200px] h-[400px] md:h-[800px] bg-brand/10 blur-[80px] md:blur-[160px] rounded-full -z-10" />
        
        <FadeIn>
          <div className="inline-flex items-center gap-2 mb-6 md:mb-8 py-2 px-4 md:px-6 rounded-full glass border-brand/20">
            <Sparkles className="w-3 md:w-4 h-3 md:h-4 text-brand" />
            <span className="text-[9px] md:text-xs font-black tracking-widest uppercase text-brand">Segredo Revelado</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="max-w-[18ch] md:max-w-4xl lg:max-w-5xl font-serif text-4xl sm:text-5xl md:text-6xl lg:text-9xl leading-[0.95] mb-8 md:mb-10 font-bold italic tracking-tighter">
            Faça ele sentir um <span className="text-brand drop-shadow-[0_0_20px_rgba(220,38,38,0.4)]">vazio insuportável</span> sem você
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="max-w-2xl text-base md:text-lg lg:text-2xl text-white/50 leading-relaxed mb-10 md:mb-12 font-light px-2 prose prose-invert">
            O método silencioso que inverte o jogo e faz ele implorar pela sua atenção — mesmo que ele esteja frio e distante agora.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
           <a href="https://pay.kiwify.com.br/6hsaomY" target="_blank" rel="noopener noreferrer" className="group relative w-fit px-8 md:px-12 py-4 md:py-5 bg-brand hover:brightness-110 transition-all duration-500 rounded-2xl md:rounded-full text-white font-black text-sm md:text-lg shadow-[0_20px_50px_rgba(220,38,38,0.4)] flex items-center gap-3 md:gap-4 hover:scale-[1.03] active:scale-95 no-underline uppercase">
            quero virar o jogo agora
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
          </a>
        </FadeIn>
      </header>

      {/* Social Proof Marks - Responsive Grid */}
      <div className="border-y border-white/5 bg-white/[0.01] py-10 md:py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:flex md:justify-center items-center justify-items-center gap-8 md:gap-16 lg:gap-32 opacity-20 grayscale transition-all duration-700 hover:opacity-50 select-none">
          <span className="font-serif italic text-2xl md:text-4xl font-bold tracking-tighter">VOGUE</span>
          <span className="font-serif italic text-2xl md:text-4xl font-bold tracking-tighter">COSMOPOLITAN</span>
          <span className="font-serif italic text-2xl md:text-4xl font-bold tracking-tighter col-span-2 md:col-span-1">GLAMOUR</span>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4">
        {/* Pain/Storytelling Section */}
        <section className="py-20 md:py-40 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <FadeIn className="space-y-6 md:space-y-10">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-8xl italic font-bold leading-[1.1] text-white tracking-tighter">
              Ele parou de te <span className="text-brand">procurar</span>?
            </h2>
            <div className="space-y-6 md:space-y-8 text-lg md:text-xl lg:text-2xl text-white/50 font-light leading-relaxed">
              <p>Aquilo que era paixão virou frieza. O celular dele parou de vibrar com o seu nome. Você sente que ele está escapando entre seus dedos.</p>
              <p className="text-white font-bold italic border-l-4 border-brand pl-6 md:pl-8 bg-brand/5 py-6 md:py-8 rounded-r-3xl text-base md:text-xl">
                "Por que ele mudou? O que eu fiz de errado?"
              </p>
              <p>O problema não é você. O erro é que você entregou todo o seu poder emocional na mão dele. Vamos tomá-lo de volta hoje.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="relative group mt-8 lg:mt-0">
            <div className="aspect-[4/5] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden glass p-3 md:p-4 transform lg:rotate-3 group-hover:rotate-0 transition-all duration-1000 shadow-2xl">
               <img 
                 src="https://uniform-emerald-gcw5q2zqq0.edgeone.app/Gemini_Generated_Image_qa4zygqa4zygqa4z.png" 
                 alt="Depoimento Real" 
                 className="w-full h-full object-cover rounded-[2rem] md:rounded-[3rem] contrast-[1.7] brightness-[1.1] saturate-[1.2] shadow-[0_0_50px_rgba(220,38,38,0.3)]"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-x-6 md:inset-x-12 bottom-6 md:bottom-12 p-6 md:p-8 glass rounded-[1.5rem] md:rounded-[2.5rem] text-center shadow-2xl backdrop-blur-3xl border-white/10">
                  <p className="font-serif italic text-lg md:text-2xl text-white">"Ele ficava dias offline para mim..."</p>
                  <p className="text-[8px] md:text-[10px] text-brand font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mt-2 md:mt-3">Caso Real: Aluna V.S.</p>
               </div>
            </div>
          </FadeIn>
        </section>

        {/* Bento Grid - Errors */}
        <section className="py-20 md:py-24 lg:py-32">
          <FadeIn className="text-center mb-16 md:mb-24 lg:mb-32">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-9xl italic font-bold mb-6 md:mb-8 tracking-tighter">O que mata o <span className="text-brand">Desejo</span></h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white/40 font-light italic">E como parar esse vazamento emocional agora.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FadeIn className="md:col-span-2 glass rounded-[2.5rem] md:rounded-[4rem] lg:rounded-[5rem] p-8 md:p-12 lg:p-16 space-y-6 md:space-y-10 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-48 md:w-80 h-48 md:h-80 bg-brand/10 blur-[80px] md:blur-[120px] pointer-events-none" />
               <Zap className="w-10 md:w-16 h-10 md:h-16 text-brand" />
               <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif italic font-bold text-white tracking-tighter">Disponibilidade Tóxica</h3>
               <p className="text-lg md:text-xl lg:text-2xl text-white/50 leading-relaxed font-light">Estar sempre lá, responder na hora e desmarcar sua vida por ele matou o instinto de caça. Para ele, você virou um item garantido.</p>
            </FadeIn>

            <FadeIn delay={0.2} className="glass rounded-[2.5rem] md:rounded-[5rem] p-8 md:p-16 space-y-6 md:space-y-10 bg-gradient-to-br from-brand/10 to-transparent">
               <ShieldAlert className="w-10 md:w-16 h-10 md:h-16 text-brand" />
               <h3 className="text-2xl md:text-4xl font-serif italic font-bold text-white tracking-tighter">Pressão Direta</h3>
               <p className="text-base md:text-xl text-white/50 leading-relaxed font-light">Cobrar explicações ou 'falar de relação' ativa o gatilho de fuga imediata no cérebro masculino.</p>
            </FadeIn>

            <FadeIn delay={0.4} className="glass rounded-[2.5rem] md:rounded-[5rem] p-8 md:p-16 space-y-6 md:space-y-10">
               <Lock className="w-10 md:w-16 h-10 md:h-16 text-brand" />
               <h3 className="text-2xl md:text-4xl font-serif italic font-bold text-white tracking-tighter">Total Transparência</h3>
               <p className="text-base md:text-xl text-white/50 leading-relaxed font-light">O mistério é o combustível do desejo. Quando ele sabe tudo o que você faz, o interesse morre no tédio.</p>
            </FadeIn>

            <FadeIn delay={0.6} className="md:col-span-2 glass rounded-[2.5rem] md:rounded-[5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-8 md:gap-16 group">
               <div className="w-40 md:w-56 h-40 md:h-56 rounded-full border-4 md:border-8 border-brand/10 p-2 overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-700">
                  <img src="https://images.unsplash.com/photo-1518020382113-a7182b27b795?q=80&w=1000" className="w-full h-full object-cover rounded-full grayscale" />
               </div>
               <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                  <h3 className="text-3xl md:text-5xl font-serif italic font-bold text-white tracking-tighter">Falta do Medo da Perda</h3>
                  <p className="text-lg md:text-2xl text-white/50 leading-relaxed font-light">Ele dorme em paz sabendo que você está ali. O dia que ele sentir que pode te perder, a postura dele mudará completamente.</p>
               </div>
            </FadeIn>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-32 overflow-hidden">
          <FadeIn className="text-center mb-16 md:mb-24">
            <h2 className="font-serif text-4xl md:text-7xl italic font-bold mb-6 md:mb-8 tracking-tighter">Quem <span className="text-brand">Virou o Jogo</span></h2>
            <p className="text-lg md:text-2xl text-white/40 font-light italic">Mulheres que recuperaram o poder e o interesse deles.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Marcela R.",
                text: "Ele me mandou mensagem depois de 3 semanas de silêncio absoluto. Eu nem acreditei quando vi a notificação. O método funciona de verdade!",
                tag: "Voltou a procurar"
              },
              {
                name: "Juliana F.",
                text: "O jogo inverteu. Agora é ele quem fica perguntando onde eu estou e com quem. Sinto que recuperei minha dignidade e o controle.",
                tag: "Inverteu o jogo"
              },
              {
                name: "Amanda K.",
                text: "Apliquei a técnica da indisponibilidade e ele pirou. No mesmo dia me chamou pra jantar e pediu desculpas pelo jeito frio.",
                tag: "Pediu desculpas"
              }
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 0.1} className="glass rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 space-y-6 relative group hover:bg-brand/5 transition-all duration-500">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-brand text-brand" />)}
                </div>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light italic">"{t.text}"</p>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center">
                      <UserRound className="w-5 h-5 text-brand" />
                    </div>
                    <span className="font-bold text-white tracking-tight">{t.name}</span>
                  </div>
                  <span className="text-[10px] text-brand font-black uppercase tracking-widest">{t.tag}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Featured Result (WhatsApp Style) */}
          <FadeIn delay={0.4} className="mt-12 md:mt-20 max-w-4xl mx-auto">
             <div className="glass rounded-[2.5rem] md:rounded-[5rem] p-8 md:p-16 border-l-8 border-brand relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[100px] -z-10" />
                <MessageCircleHeart className="w-12 h-12 text-brand mb-8 opacity-50" />
                <div className="space-y-6">
                   <div className="bg-white/5 p-6 rounded-2xl rounded-tl-none max-w-[80%] border border-white/5">
                      <p className="text-white/60 text-sm mb-1 uppercase font-black tracking-tighter">Ele:</p>
                      <p className="text-lg md:text-xl italic font-serif">"Oi... andei pensando muito na gente. Queria saber se você está livre amanhã. Sinto sua falta."</p>
                   </div>
                   <div className="bg-brand/20 p-6 rounded-2xl rounded-tr-none max-w-[80%] ml-auto border border-brand/20 text-right">
                      <p className="text-white/60 text-sm mb-1 uppercase font-black tracking-tighter">Você (aplicando o segredo):</p>
                      <p className="text-lg md:text-xl italic font-serif">"Oi! Amanhã não consigo, estou com a agenda cheia. Talvez no fim de semana."</p>
                   </div>
                </div>
                <p className="mt-10 text-center text-white/40 text-sm font-light">Este é o nível de controle que você terá. Ele correndo atrás, você decidindo o tempo.</p>
             </div>
          </FadeIn>
        </section>

        {/* CTA Section */}
        <section id="oferta" className="py-24 md:py-52 scroll-mt-20">
          <FadeIn className="max-w-2xl mx-auto glass rounded-[3rem] md:rounded-[6rem] p-8 md:p-24 border-2 border-brand/40 shadow-[0_50px_120px_rgba(220,38,38,0.3)] relative text-center group">
             <div className="absolute -inset-1 bg-brand/10 blur-3xl rounded-[3rem] md:rounded-[6rem] -z-10 group-hover:bg-brand/20 transition-all duration-1000" />
             <Crown className="w-12 md:w-20 h-12 md:h-20 text-brand mx-auto mb-8 md:mb-12" />
             <h2 className="font-serif text-4xl md:text-6xl lg:text-9xl font-bold italic mb-8 md:mb-10 leading-none tracking-tighter">Inverta o <span className="text-brand">Jogo</span></h2>
             
             <div className="space-y-1 md:space-y-2 mb-10 md:mb-16">
                <p className="text-lg md:text-2xl text-white/20 line-through font-bold tracking-widest uppercase">R$ 47,90</p>
                <div className="flex justify-center items-baseline gap-2">
                   <span className="text-2xl md:text-4xl font-bold text-brand">R$</span>
                   <span className="text-7xl md:text-[8rem] lg:text-[12rem] font-serif font-black italic text-white leading-none tracking-tighter drop-shadow-2xl">12,90</span>
                </div>
                <p className="text-[10px] md:text-sm text-brand font-black tracking-[0.3em] md:tracking-[0.5em] uppercase mt-2">Pagamento Único &bull; Acesso Imediato</p>
             </div>

             <div className="space-y-4 md:space-y-6 text-left mb-10 md:mb-16 border-y border-white/5 py-8 md:py-10 opacity-70">
                {[
                  "Fazer ele sentir saudade",
                  "Fazer ele mandar mensagem primeiro",
                  "Fazer ele pensar em você o tempo todo",
                  "Recuperar o controle da relação",
                  "Acesso Vitalício"
                ].map((item, i) => <div key={i} className="flex gap-4 md:gap-5 items-center text-base md:text-lg font-light"><CheckCircle2 className="w-5 h-5 text-brand shrink-0" /> {item}</div>)}
             </div>

              <a href="https://pay.kiwify.com.br/6hsaomY" target="_blank" rel="noopener noreferrer" className="w-fit mx-auto px-8 md:px-14 py-4 md:py-5 bg-brand hover:brightness-110 text-white font-black text-sm md:text-lg rounded-full shadow-[0_15px_40px_rgba(220,38,38,0.4)] transition-all duration-500 hover:scale-105 active:scale-95 no-underline flex items-center justify-center gap-3 md:gap-4 uppercase">
                 quero virar o jogo agora
                 <ArrowRight className="w-5 md:w-6 h-5 md:h-6" />
              </a>

             <div className="flex flex-col items-center gap-8 md:gap-6 pt-10 md:pt-12">
                <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs font-bold text-white/30 uppercase tracking-[0.2em] md:tracking-[0.3em]">
                   <ShieldCheck className="w-4 md:w-5 h-4 md:h-5 text-green-500" />
                   Garantia Incondicional de 7 Dias
                </div>
                <div className="flex gap-4 opacity-30 grayscale items-center scale-90 md:scale-100">
                    <img src="https://img.icons8.com/color/48/visa.png" className="w-8 md:w-10 h-8 md:h-10 object-contain" />
                    <img src="https://img.icons8.com/color/48/mastercard.png" className="w-8 md:w-10 h-8 md:h-10 object-contain" />
                    <img src="https://img.icons8.com/color/48/pix.png" className="w-8 md:w-10 h-8 md:h-10 object-contain" />
                </div>
             </div>
          </FadeIn>
        </section>

        {/* FAQ Section */}
        <section className="py-24 md:py-40">
           <FadeIn className="text-center mb-16 md:mb-24">
              <h2 className="font-serif text-4xl md:text-7xl lg:text-8xl italic font-bold tracking-tighter">Dúvidas <span className="text-brand">Comuns</span></h2>
           </FadeIn>
           <div className="max-w-4xl mx-auto glass rounded-[2.5rem] md:rounded-[5rem] p-8 md:p-24 border-white/5">
              <FAQItem 
                question="E se ele me ignora há muito tempo?" 
                answer="A psicologia da atração não depende de tempo, mas de quebra de padrão. Ensinamos como quebrar o padrão de 'mulher previsível' e forçar o cérebro dele a notar você novamente." 
              />
              <FAQItem 
                question="Como vou receber o livro?" 
                answer="O envio é automático via e-mail assim que o pagamento for aprovado. Você recebe os dados de acesso para nossa plataforma segura." 
              />
              <FAQItem 
                question="Funciona para qualquer tipo de homem?" 
                answer="Sim. O método é baseado em instintos biológicos masculinos universais: o instinto de perseguição e a aversão à perda. Isso funciona no cérebro de qualquer homem." 
              />
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-24 md:py-40 px-4 border-t border-white/5 bg-black/60 backdrop-blur-3xl text-center space-y-16 mt-40">
        <div className="flex flex-col items-center gap-8">
           <h5 className="font-serif italic text-3xl md:text-5xl font-bold tracking-tighter text-white">O Jogo da Atração</h5>
           <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[9px] md:text-[10px] uppercase font-black tracking-[0.3em] md:tracking-[0.5em] text-white/20">
              <a href="#" className="hover:text-brand transition-colors no-underline">Privacidade</a>
              <a href="#" className="hover:text-brand transition-colors no-underline">Termos de Uso</a>
              <a href="#" className="hover:text-brand transition-colors no-underline">Suporte</a>
           </div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-10 opacity-20 px-4">
           <div className="w-16 md:w-32 h-[1px] bg-white/20 mx-auto" />
           <p className="text-[9px] md:text-xs leading-relaxed uppercase tracking-[0.2em] md:tracking-[0.3em] font-sans font-medium">
             Este site não faz parte do Facebook Inc. ou Google Inc. Este site NÃO é endossado por nenhuma dessas empresas.
           </p>
           <p className="text-[7px] md:text-[8px] tracking-[0.5em] md:tracking-[1em] text-white font-black uppercase">Protocolo Magnético &bull; 2024</p>
        </div>
      </footer>

      {/* Fixed Mobile CTA - Polish */}
      <div className="fixed bottom-6 left-6 right-6 z-[1000] lg:hidden">
         <motion.a 
           href="#oferta"
           initial={{ y: 50, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 1, type: "spring", stiffness: 100 }}
           className="w-full py-5 bg-brand text-white font-black text-base rounded-2xl shadow-[0_20px_40px_rgba(220,38,38,0.5)] flex items-center justify-center no-underline border border-white/10 backdrop-blur-md"
         >
           SIM! QUERO VIRAR O JOGO
         </motion.a>
      </div>
    </div>
  );
}
