import { whatsappUrl } from "@/lib/site";
import { CarIcon, ClockIcon, HomeIcon, WhatsAppIcon } from "./icons";

const quickInfo = [
  { icon: HomeIcon, label: "Atendimento fixo e domicílio" },
  { icon: ClockIcon, label: "Terça a sábado, 9h às 19h" },
  { icon: CarIcon, label: "Jardim Santa Marta, Sorocaba" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-silver/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-silver/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black/50">
          Barbearia · Sorocaba
        </p>

        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight text-black sm:text-5xl md:text-6xl">
          Corte e barba com técnica, na barbearia ou no seu endereço.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-black/70">
          Serviços de barbearia com precisão e acabamento consistente. Atendimento
          na GALLAB ou em domicílio, com agendamento direto pelo WhatsApp.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href={whatsappUrl("Olá! Gostaria de agendar um horário na GALLAB.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Agendar pelo WhatsApp
          </a>
          <a
            href="#servicos"
            className="flex items-center gap-2 rounded-full border border-black/20 px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:border-black/40"
          >
            Ver serviços e preços
          </a>
        </div>

        <dl className="mt-14 grid gap-6 border-t border-silver/40 pt-8 sm:grid-cols-3">
          {quickInfo.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="h-5 w-5 shrink-0 text-black/60" />
              <dd className="text-sm font-medium text-black/70">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
