import Image from "next/image";

const photos = [
  { src: "625118324_18171829333387952_738991037281450782_n.webp", alt: "Degradê com desenho navalhado lateral" },
  { src: "649524391_18569554891026248_583986943149930692_n.webp", alt: "Corte curto com risco lateral" },
  { src: "622489034_18003362192697345_1737522179135663128_n.webp", alt: "Corte infantil com desenho navalhado" },
  { src: "643555030_18567954922026248_706139206420422104_n.webp", alt: "Corte clássico com fade e barba" },
  { src: "541910777_18526306102026248_855454270952934298_n.webp", alt: "Corte ondulado com fade" },
  { src: "542367021_18526305580026248_744051893443019160_n.webp", alt: "Corte moderno com fade baixo" },
  { src: "619155766_17920191189248568_1216913721368174205_n.webp", alt: "Corte cacheado com fade baixo" },
  { src: "626411469_18141623125473123_8031064838344602051_n.webp", alt: "Corte social com fade médio" },
  { src: "621158194_17977758131976689_6472599890796051395_n.webp", alt: "Corte curto com desenho navalhado em linhas" },
  { src: "627391307_18111658009564686_1407470023333007708_n.webp", alt: "Corte curto clássico com desenho lateral" },
  { src: "619610319_17993494712912168_8961835889319074074_n.webp", alt: "Moicano com fade alto" },
  { src: "631495592_18361833595160320_7365926185969268226_n.webp", alt: "Corte cacheado curto com fade baixo" },
  { src: "625926361_18119071513581296_6304067646152076595_n.webp", alt: "Corte com topete e fade alto" },
  { src: "622841705_18092026958056453_7597994328499431868_n.webp", alt: "Corte curto com fade baixo" },
  { src: "622325526_18079842769998776_954013431958226093_n.webp", alt: "Corte social com desenho navalhado" },
];

export function Gallery() {
  return (
    <section id="galeria" className="scroll-mt-20 bg-silver/10 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black/50">
            Galeria
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-black sm:text-4xl">
            Trabalhos realizados
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-square overflow-hidden rounded-xl border border-silver/40"
            >
              <Image
                src={`/fotos/${photo.src}`}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
