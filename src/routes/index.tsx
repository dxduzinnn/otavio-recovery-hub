import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  BicepsFlexed,
  CircleDot,
  Clock3,
  HeartPulse,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Sparkles,
  Waves,
  X,
} from "lucide-react";
import { useState, type ReactNode } from "react";

const whatsappUrl = "https://wa.me/5515988229300?text=Ol%C3%A1!%20Gostaria%20de%20marcar%20minha%20Sess%C3%A3o";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Otávio Marques | Fisioterapia e Massoterapia" },
      {
        name: "description",
        content: "Atendimento personalizado em fisioterapia, massoterapia e recovery esportivo com Otávio Marques.",
      },
    ],
  }),
  component: Index,
});

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logo.jpeg"
      alt="Thera Recovery Logo"
      className={`h-8 w-8 object-contain rounded ${className}`}
    />
  );
}

const services = [
  {
    icon: Waves,
    number: "01",
    title: "Liberação Miofascial & Massoterapia",
    text: "Técnicas manuais direcionadas ao alívio de pontos de tensão, ganho de mobilidade e relaxamento muscular.",
  },
  {
    icon: CircleDot,
    number: "02",
    title: "Ventosaterapia",
    text: "Recurso terapêutico para aliviar dores localizadas, estimular a circulação e auxiliar na drenagem.",
  },
  {
    icon: Activity,
    number: "03",
    title: "Compressão Pneumática & Recovery",
    text: "Botas de compressão para recuperação muscular pós-treino, redução do inchaço e sensação de fadiga.",
  },
  {
    icon: HeartPulse,
    number: "04",
    title: "Fisioterapia Preventiva & Reabilitação",
    text: "Cuidado individualizado para prevenir lesões, recuperar movimentos e retomar suas atividades com segurança.",
  },
];

const benefits = [
  [BicepsFlexed, "Alívio da tensão", "Redução de dores e pontos de rigidez muscular."],
  [Activity, "Mais mobilidade", "Ganho de flexibilidade e amplitude de movimento."],
  [HeartPulse, "Circulação ativa", "Estímulo do fluxo sanguíneo e da oxigenação."],
  [Waves, "Drenagem", "Auxílio na eliminação de toxinas e redução do inchaço."],
  [Sparkles, "Equilíbrio corporal", "Suporte ao alinhamento postural e muscular."],
  [CircleDot, "Bem-estar", "Relaxamento profundo para corpo e mente."],
] as const;

const gallery = [
  { src: "/massoterapia-beneficios.jpeg", alt: "Otávio Marques realizando técnica de massoterapia", label: "Massoterapia" },
  { src: "/ventosaterapia-beneficios.jpeg", alt: "Sessão de ventosaterapia", label: "Ventosaterapia" },
  { src: "/recovery-compressao.jpeg", alt: "Sessão com botas de compressão pneumática", label: "Recovery esportivo" },
];

function CTA({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className={light ? "cta cta-light" : "cta"}
    >
      <MessageCircle size={18} aria-hidden="true" />
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="Otávio Marques — início">
          <BrandMark className="brand-mark" />
          <span>
            <strong>OTÁVIO MARQUES</strong>
            <small>FISIOTERAPIA & MASSOTERAPIA</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {[
            ["Sobre", "#sobre"],
            ["Serviços", "#servicos"],
            ["Benefícios", "#beneficios"],
            ["Galeria", "#galeria"],
            ["Contato", "#contato"],
          ].map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="header-cta">
          <MessageCircle size={17} /> Agendar
        </a>
        <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Abrir menu" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Navegação móvel">
            {[["Sobre", "#sobre"], ["Serviços", "#servicos"], ["Benefícios", "#beneficios"], ["Galeria", "#galeria"], ["Contato", "#contato"]].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<ArrowRight size={16} /></a>
            ))}
          </nav>
        )}
      </header>

      <section id="inicio" className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="eyebrow"><span /> CUIDADO • RECUPERAÇÃO • PERFORMANCE</p>
            <h1>Otávio Marques</h1>
            <p className="hero-title">Fisioterapia e Massoterapia</p>
            <p className="hero-copy">Atendimento personalizado que une técnica manual, recuperação e performance — para devolver movimento, aliviar tensões e preparar seu corpo para ir mais longe.</p>
            <CTA>Agende seu atendimento</CTA>
          </div>
          <div className="hero-media">
            <img src="/otavio-marques.jpeg" alt="Fisioterapeuta e massoterapeuta Otávio Marques" className="hero-image" />
          </div>
        </div>
        <a href="#sobre" className="scroll-cue" aria-label="Ir para a próxima seção"><span>CONHEÇA</span><ArrowDown size={18} /></a>
      </section>

      <section id="sobre" className="section about-section">
        <div className="section-inner about-grid">
          <div>
            <p className="eyebrow"><span /> SOBRE O PROFISSIONAL</p>
            <h2>Cuidado técnico.<br /><em>Olhar individual.</em></h2>
          </div>
          <div className="about-copy">
            <p className="lead">Cada corpo tem uma história, uma rotina e um objetivo. Por isso, cada atendimento começa com escuta e avaliação individualizada.</p>
            <p>Otávio Marques atua com fisioterapia e massoterapia, conectando recursos terapêuticos, técnicas manuais e recovery esportivo para promover alívio, mobilidade e uma recuperação mais consistente.</p>
            <p>Seu trabalho integra os ambientes da <strong>Thera Recovery</strong> e da <strong>Clínica Respire Bem</strong>, com foco em um cuidado próximo, responsável e orientado às necessidades de cada pessoa.</p>
            <div className="signature-line"><BrandMark className="signature-mark" /><span>RECUPERAR TAMBÉM FAZ PARTE DO TREINO.</span></div>
          </div>
        </div>
      </section>

      <section id="servicos" className="section services-section">
        <div className="section-inner">
          <div className="section-heading split-heading">
            <div><p className="eyebrow light"><span /> SERVIÇOS</p><h2>Recursos para o seu<br /><em>melhor movimento.</em></h2></div>
            <p>Um plano de cuidado construído de acordo com suas necessidades, rotina e objetivos.</p>
          </div>
          <div className="services-grid">
            {services.map(({ icon: Icon, number, title, text }) => (
              <article className="service-card" key={number}>
                <div className="service-top"><span>{number}</span><Icon size={27} strokeWidth={1.35} /></div>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="beneficios" className="section benefits-section">
        <div className="section-inner benefits-grid">
          <div className="benefits-intro">
            <p className="eyebrow"><span /> BENEFÍCIOS</p>
            <h2>Seu corpo pede<br /><em>recuperação.</em></h2>
            <blockquote>“Recuperar também<br />faz parte do treino!”</blockquote>
          </div>
          <div className="benefit-list">
            {benefits.map(([Icon, title, text]) => (
              <article key={title}><span className="benefit-icon"><Icon size={22} strokeWidth={1.4} /></span><div><h3>{title}</h3><p>{text}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="section gallery-section">
        <div className="section-inner">
          <div className="section-heading gallery-heading"><div><p className="eyebrow light"><span /> EXPERIÊNCIA</p><h2>Cuidado em cada <em>detalhe.</em></h2></div><p>Técnicas e recursos aplicados em um ambiente preparado para sua recuperação.</p></div>
          <div className="gallery-grid">
            {gallery.map((item, index) => <figure key={item.label} className={`gallery-item gallery-${index + 1}`}><img src={item.src} alt={item.alt} /><figcaption><span>0{index + 1}</span>{item.label}</figcaption></figure>)}
          </div>
        </div>
      </section>

      <section className="section partners-section">
        <div className="section-inner">
          <p className="eyebrow"><span /> CLÍNICAS & PARCERIAS</p>
          <div className="partners-row">
            <div><h2>Onde o cuidado<br /><em>acontece.</em></h2><p>Conheça os espaços e acompanhe as novidades.</p></div>
            <div className="partner-links">
              <a href="https://instagram.com/therarecovery_" target="_blank" rel="noreferrer"><BrandMark className="partner-logo" /><span><small>RECOVERY & PERFORMANCE</small>@therarecovery_</span><ArrowRight /></a>
              <a href="https://instagram.com/clinicarespirebem" target="_blank" rel="noreferrer"><HeartPulse className="partner-logo" strokeWidth={1.3} /><span><small>CLÍNICA PARCEIRA</small>@clinicarespirebem</span><ArrowRight /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="contact-section">
        <div className="section-inner contact-grid">
          <div><p className="eyebrow light"><span /> CONTATO</p><h2>Pronto para cuidar<br />do seu <em>movimento?</em></h2><p className="contact-copy">Fale diretamente com Otávio e agende uma avaliação.</p><CTA light>Agendar pelo WhatsApp</CTA></div>
          <div className="contact-details">
            <article><MapPin /><div><small>LOCALIZAÇÃO</small><strong>Rua Reverendo Henrique de Oliveira Carmago, 457 - Jardim Santa Rosália</strong><span>Sorocaba - SP</span></div></article>
            <article><Clock3 /><div><small>ATENDIMENTO</small><strong>Horários a definir</strong><span>Sob agendamento</span></div></article>
            <article><Instagram /><div><small>ACOMPANHE</small><a href="https://instagram.com/fisio.otaviomarques" target="_blank" rel="noreferrer">@fisio.otaviomarques</a></div></article>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="brand footer-brand"><BrandMark className="brand-mark" /><span><strong>OTÁVIO MARQUES</strong><small>FISIOTERAPIA & MASSOTERAPIA</small></span></div>
          <nav aria-label="Navegação do rodapé"><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#beneficios">Benefícios</a><a href="#galeria">Galeria</a></nav>
          <a className="footer-instagram" href="https://instagram.com/fisio.otaviomarques" target="_blank" rel="noreferrer"><Instagram size={18} /> @fisio.otaviomarques</a>
        </div>
        <div className="footer-bottom"><span>© 2026 Otávio Marques. Todos os direitos reservados.</span><span>Saúde • Recuperação • Performance</span></div>
      </footer>
    </main>
  );
}