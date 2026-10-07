import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import capa from "@/assets/capa-ebook.png";
import img2 from "@/assets/img2.jpg";
import antesDepois from "@/assets/antes-depois.jpg";

const CHECKOUT = "https://pay.kursinha.com/c/6ac4faa661f92e9dab34689c";
const TITLE = "Volta a te reconhecer ao espelho em 7 dias";
const DESC = "Desafio de 7 dias: 15 minutos por dia, produtos acessíveis, sem milagres. Recebe o e-book no WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const days = [
  ["Encarar", "olhar-te ao espelho sem fugir"],
  ["Limpar", "uma pele fresca e limpa"],
  ["Reativar", "massagem facial de 5 minutos"],
  ["Alimentar", "nutrir a pele por dentro"],
  ["Proteger", "travar o que envelhece a pele"],
  ["Realçar", "aparecer bem em foto e vídeo"],
  ["Renascer", "ver a mulher que voltou"],
];

const faqs = [
  ["Serve para pele negra?", "Sim. Os cuidados servem a todos os tipos de pele, com orientação sobre sol e manchas."],
  ["Preciso de muitos produtos?", "Não. Só o essencial: sabonete suave, hidratante, protetor solar, mel e aloé vera."],
  ["Quanto tempo por dia?", "Cerca de 15 minutos."],
  ["Como recebo o e-book?", "Por WhatsApp, em PDF, logo após a confirmação do pagamento."],
];

function Cta() {
  return (
    <a
      href={CHECKOUT}
      className="block w-full rounded-xl bg-gold py-4 text-center font-semibold text-gold-foreground transition hover:brightness-110"
    >
      Quero começar o meu desafio
    </a>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-b-0">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between px-4 py-4 text-left font-semibold">
        {q}
        <span className={`text-gold transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <p className="px-4 pb-4 text-muted-foreground">{a}</p>}
    </div>
  );
}

function Index() {
  return (
    <main className="mx-auto max-w-xl bg-background text-foreground">
      <section className="relative">
        <img src={capa} alt="Mulher sorridente com toalha na cabeça" className="block w-full" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-10">
          <div className="mb-6 h-1 w-12 bg-crimson" />
          <h1 className="font-display text-5xl font-bold leading-tight">
            Volta a te reconhecer ao espelho em <span className="text-gold">7 dias</span>
          </h1>
          <p className="mb-6 mt-4 text-lg">15 minutos por dia. Produtos acessíveis. Sem milagres.</p>
          <Cta />
        </div>
      </section>

      <div className="space-y-20 px-5 py-16">
        <section>
          <img src={img2} alt="Imagem ilustrativa" className="w-full rounded-2xl" />
          <p className="mt-2 text-xs text-muted-foreground">Imagem ilustrativa</p>
          <h2 className="mt-4 font-display text-3xl font-bold">Já desviaste o olhar do espelho?</h2>
          <p className="mt-5 text-lg">Já apagaste fotos tuas. Já evitaste vídeos. Já pensaste: 'Quando é que isto aconteceu?'</p>
          <blockquote className="mt-6 border-l-4 border-crimson pl-5 font-display text-2xl text-gold">
            Isto não é vaidade. É a tua autoestima a pedir atenção.
          </blockquote>
        </section>

        <section>
          <img src={antesDepois} alt="Antes e depois" className="w-full rounded-2xl" />
          <h2 className="mb-6 mt-6 font-display text-3xl font-bold">7 dias. Uma missão por dia.</h2>
          <div className="grid grid-cols-2 gap-3">
            {days.map(([t, d], i) => (
              <div key={t} className={`rounded-xl border border-border bg-card p-4 ${i === 6 ? "col-span-2" : ""}`}>
                <div className="font-display text-2xl text-gold">{i + 1}</div>
                <div className="font-semibold">{t}</div>
                <div className="text-sm text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <img src={capa} alt="Capa do e-book Volta a Te Reconhecer" className="w-full rounded-2xl" />
          <h2 className="mb-6 mt-6 font-display text-3xl font-bold">Tudo o que recebes</h2>
          <ul className="space-y-4 text-lg">
            <li>✅ E-book Volta a Te Reconhecer: o desafio completo dos 7 dias</li>
            <li>🎁 Checklist de produtos acessíveis</li>
            <li>🎁 Massagem de 5 minutos para fazer sempre</li>
            <li>🎁 Ficha "Antes e Depois"</li>
            <li>🔒 Garantia de 7 dias</li>
          </ul>
          <div className="mt-8 text-center">
            <div className="text-lg text-muted-foreground line-through decoration-crimson">25.000 Kz</div>
            <div className="font-display text-6xl font-bold text-gold">5.670 Kz</div>
            <p className="mx-auto mb-6 mt-4 text-sm text-muted-foreground">
              Pagas por Multicaixa Express, referência ou transferência. Recebes o e-book no WhatsApp após a confirmação.
            </p>
          </div>
          <Cta />
        </section>

        <section>
          <img src={img2} alt="Mulher a cuidar da pele" className="w-full rounded-2xl" />
          <h2 className="mb-6 mt-6 font-display text-3xl font-bold">
            A mulher que procuras já existe. <span className="text-gold">Só precisa de ser lembrada.</span>
          </h2>
          <Cta />
          <div className="mt-6 rounded-xl border border-border">
            {faqs.map(([q, a]) => <Faq key={q} q={q} a={a} />)}
          </div>
        </section>

        <p className="text-center text-xs text-muted-foreground">
          Este desafio é cuidado pessoal e não substitui acompanhamento médico. As imagens são ilustrativas.
        </p>
      </div>
    </main>
  );
}
