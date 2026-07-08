# GALAB

Landing page one-page da GALAB, barbearia em Sorocaba/SP. Apresenta serviços e
preços, atendimento no espaço fixo e em domicílio, diferenciais, galeria de
trabalhos, localização com mapa integrado e agendamento direto via WhatsApp.

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Biome](https://biomejs.dev) (lint e format)
- [pnpm](https://pnpm.io)

## Rodando localmente

```bash
pnpm install
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts

| Comando       | Descrição                         |
| ------------- | ---------------------------------- |
| `pnpm dev`    | Sobe o servidor de desenvolvimento |
| `pnpm build`  | Gera o build de produção           |
| `pnpm start`  | Sobe o build de produção           |
| `pnpm lint`   | Roda o Biome em modo checagem      |
| `pnpm format` | Formata o código com o Biome       |

## Estrutura

```
src/
  app/
    layout.tsx           # Fonte (Poppins), metadata e HTML raiz
    page.tsx              # Composição das seções da página
    globals.css            # Paleta de cores (@theme) e estilos globais
  components/
    header.tsx              # Navegação fixa + menu mobile
    hero.tsx                 # Seção de abertura
    services.tsx              # Tabela de serviços e preços
    home-service.tsx           # Atendimento fixo x domicílio
    differentials.tsx           # Diferenciais do serviço
    gallery.tsx                  # Grid de fotos de trabalhos
    location.tsx                  # Mapa, endereço e horário
    footer.tsx                     # Rodapé com contato e redes
    whatsapp-button.tsx             # Botão flutuante de WhatsApp
    icons.tsx                        # Ícones SVG usados nos componentes
  lib/
    site.ts       # Dados do negócio: WhatsApp, Instagram, endereço, mapa, horário
public/
  fotos/          # Fotos usadas na galeria e na seção de atendimento
```

## Paleta de cores

Definida em `src/app/globals.css`:

| Cor    | Hex       |
| ------ | --------- |
| Preto  | `#0a0a0a` |
| Prata  | `#c0c0c0` |
| Branco | `#ffffff` |

Disponíveis como classes Tailwind (`bg-black`, `text-silver`, `border-white`, etc.).

## Atualizando informações do negócio

Os dados exibidos no site (número de WhatsApp, Instagram, endereço, iframe do
Google Maps e horário de funcionamento) ficam centralizados em
`src/lib/site.ts` — basta editar esse arquivo para refletir mudanças.

Novas fotos para a galeria podem ser adicionadas em `public/fotos/` e
referenciadas em `src/components/gallery.tsx`.
