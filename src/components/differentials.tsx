import {
  CalendarCheckIcon,
  ScissorsIcon,
  ShieldCheckIcon,
  SparkleIcon,
} from "./icons";

const items = [
  {
    icon: ScissorsIcon,
    title: "Técnica em fades e desenhos",
    description:
      "Acabamento apurado em degradês, navalhados e cortes personalizados.",
  },
  {
    icon: CalendarCheckIcon,
    title: "Atendimento com hora marcada",
    description: "Agendamento direto pelo WhatsApp, sem fila de espera.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Higiene e materiais adequados",
    description: "Instrumentos higienizados a cada atendimento.",
  },
  {
    icon: SparkleIcon,
    title: "Serviços além do corte",
    description: "Química, tratamentos SPA e barboterapia no mesmo lugar.",
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black/50">
          Diferenciais
        </p>
        <h2 className="mt-3 text-3xl font-extrabold text-black sm:text-4xl">
          Por que agendar com a GALLAB
        </h2>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, description }) => (
          <div key={title} className="rounded-2xl border border-silver/40 p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-bold text-black">{title}</h3>
            <p className="mt-2 text-sm text-black/70">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
