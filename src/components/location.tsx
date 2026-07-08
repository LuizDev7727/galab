import { address, businessHours, mapsEmbedSrc } from "@/lib/site";
import { ClockIcon, MapPinIcon } from "./icons";

export function Location() {
  return (
    <section id="localizacao" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black/50">
          Localização
        </p>
        <h2 className="mt-3 text-3xl font-extrabold text-black sm:text-4xl">
          Onde encontrar a GALLAB
        </h2>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
        <div className="overflow-hidden rounded-2xl border border-silver/40">
          <iframe
            src={mapsEmbedSrc}
            title="Localização da GALLAB no Google Maps"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 320 }}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <div className="space-y-4">
          <div className="flex gap-4 rounded-2xl border border-silver/40 p-6">
            <MapPinIcon className="h-6 w-6 shrink-0 text-black" />
            <div>
              <h3 className="font-bold text-black">Endereço</h3>
              <p className="mt-1 text-sm text-black/70">
                {address.street}
                <br />
                {address.neighborhood} — {address.city}
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl border border-silver/40 p-6">
            <ClockIcon className="h-6 w-6 shrink-0 text-black" />
            <div className="w-full">
              <h3 className="font-bold text-black">Horário de funcionamento</h3>
              <ul className="mt-2 space-y-1 text-sm text-black/70">
                {businessHours.map((entry) => (
                  <li key={entry.day} className="flex justify-between gap-4">
                    <span>{entry.day}</span>
                    <span className="font-medium text-black">{entry.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
