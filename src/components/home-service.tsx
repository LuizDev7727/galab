import Image from "next/image";
import { CarIcon, HomeIcon } from "./icons";

export function HomeService() {
  return (
    <section id="atendimento" className="scroll-mt-20 bg-silver/10 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
        <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-silver/40">
          <Image
            src="/fotos/foto-dentro.jpeg"
            alt="Estrutura interna da barbearia GALLAB, com cadeira e bancada de trabalho"
            width={1041}
            height={1600}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black/50">
            Atendimento
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-black sm:text-4xl">
            Na barbearia ou no seu endereço
          </h2>
          <p className="mt-4 text-black/70">
            A GALLAB funciona em espaço próprio no Jardim Santa Marta e também
            atende em domicílio, com estrutura equivalente à do espaço fixo.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex gap-4 rounded-2xl border border-silver/40 bg-white p-5">
              <HomeIcon className="h-6 w-6 shrink-0 text-black" />
              <div>
                <h3 className="font-bold text-black">Na GALLAB</h3>
                <p className="mt-1 text-sm text-black/70">
                  Atendimento no espaço próprio, no Jardim Santa Marta, Sorocaba.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-silver/40 bg-white p-5">
              <CarIcon className="h-6 w-6 shrink-0 text-black" />
              <div>
                <h3 className="font-bold text-black">Em domicílio</h3>
                <p className="mt-1 text-sm text-black/70">
                  R$ 35 no Jardim Santa Marta, sem taxa de deslocamento. Fora do
                  bairro, a partir de 2 km, +R$ 15 sobre o valor do serviço.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
