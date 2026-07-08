"use client";

import { useState } from "react";
import { whatsappUrl } from "@/lib/site";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./icons";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#galeria", label: "Galeria" },
  { href: "#localizacao", label: "Localização" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-silver/40 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="text-xl font-extrabold tracking-[0.2em] text-black">
          GALAB
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-black/70 transition-colors hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl("Olá! Gostaria de agendar um horário na GALAB.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black/85 md:flex"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Agendar horário
        </a>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-silver/60 text-black md:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-silver/40 bg-white px-5 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-black/80 hover:bg-silver/15"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappUrl("Olá! Gostaria de agendar um horário na GALAB.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Agendar horário
          </a>
        </nav>
      )}
    </header>
  );
}
