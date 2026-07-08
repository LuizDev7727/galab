import { address, instagramUrl, whatsappUrl } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-silver/40 bg-black text-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xl font-extrabold tracking-[0.2em]">GALLAB</p>
            <p className="mt-3 max-w-xs text-sm text-white/60">
              {address.street}
              <br />
              {address.neighborhood} — {address.city}
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href={whatsappUrl("Olá! Gostaria de agendar um horário na GALLAB.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <p className="mt-12 text-xs text-white/40">
          © {new Date().getFullYear()} GALLAB. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
