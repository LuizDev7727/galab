import { whatsappUrl } from "@/lib/site";

type ServiceItem = {
  name: string;
  price: string;
};

type ServiceGroup = {
  title: string;
  highlight?: boolean;
  items: ServiceItem[];
};

const groups: ServiceGroup[] = [
  {
    title: "Barbershop",
    items: [
      { name: "Corte", price: "R$ 35" },
      { name: "Barba", price: "R$ 35" },
      { name: "Sobrancelha", price: "R$ 15" },
      { name: "Corte e barba", price: "R$ 70" },
    ],
  },
  {
    title: "Combo",
    highlight: true,
    items: [{ name: "Corte, barba e sobrancelha", price: "R$ 80" }],
  },
  {
    title: "Químicas",
    items: [
      { name: "Alinhamento térmico", price: "a partir de R$ 80" },
      { name: "Luzes (touca)", price: "a partir de R$ 80" },
      { name: "Platinado", price: "a partir de R$ 200" },
    ],
  },
  {
    title: "Adicionais",
    items: [
      { name: "Depilação de nariz (cera)", price: "Sob consulta" },
      { name: "Depilação de orelha (cera)", price: "Sob consulta" },
      { name: "Freestyle", price: "Sob consulta" },
      { name: "Limpeza de nariz e orelha na máquina", price: "Sob consulta" },
    ],
  },
  {
    title: "Serviços SPA",
    items: [
      { name: "Hidratação", price: "Sob consulta" },
      { name: "Matização", price: "Sob consulta" },
      { name: "Barboterapia", price: "Sob consulta" },
      { name: "Escova e penteado", price: "Sob consulta" },
    ],
  },
];

export function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black/50">
          Serviços
        </p>
        <h2 className="mt-3 text-3xl font-extrabold text-black sm:text-4xl">
          Preços claros, sem surpresa
        </h2>
        <p className="mt-4 text-black/70">
          Valores dos serviços de barbearia. Itens sob consulta têm preço combinado
          diretamente pelo WhatsApp, conforme o serviço.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.title}
            className={`rounded-2xl border p-6 ${
              group.highlight
                ? "border-black bg-black text-white"
                : "border-silver/50 bg-white text-black"
            }`}
          >
            <h3 className="text-lg font-bold">{group.title}</h3>
            <ul className="mt-5 space-y-3">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className={`flex items-baseline justify-between gap-4 border-b pb-3 text-sm last:border-none last:pb-0 ${
                    group.highlight ? "border-white/15" : "border-silver/30"
                  }`}
                >
                  <span className={group.highlight ? "text-white/85" : "text-black/75"}>
                    {item.name}
                  </span>
                  <span className="shrink-0 font-semibold">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <a
        href={whatsappUrl("Olá! Gostaria de saber mais sobre os serviços da GALLAB.")}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex text-sm font-semibold text-black underline underline-offset-4"
      >
        Tirar dúvidas sobre um serviço pelo WhatsApp →
      </a>
    </section>
  );
}
