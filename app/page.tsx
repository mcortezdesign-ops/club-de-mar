import Image from "next/image";
import s from "./page.module.css";
import type { Product, Pack, Recipe } from "./lib/types";
import { Navbar } from "./components/Navbar";
import { ProductCard } from "./components/ProductCard";
import { FeaturedCard } from "./components/FeaturedCard";
import { CartPanel } from "./components/CartPanel";

// ── Data ───────────────────────────────────────────────────────────────────

const products: Product[] = [
  // FRESCOS DEL DÍA
  {
    id: 1,
    name: "Filet de Merluza",
    description: "Filete fresco sin espinas, limpio y listo para cocinar.",
    price: "$15.500/kg",
    image: "/filet_de_merluza.jpg",
    category: "frescos",
    nutrition: ["Proteína ~17g/100g", "Muy bajo en grasa (<2g)", "Fácil digestión"],
    cooking: ["A la plancha con ajo y aceite de oliva", "Al horno con papas y limón"],
    origin: "Argentina",
    type: "Fresco",
    unit: "1 kg",
  },
  {
    id: 2,
    name: "Besugo Mediano",
    description: "Pescado de mar de carne blanca y sabor suave.",
    price: "$11.500/kg",
    image: "/besugo_mediano.jpg",
    category: "frescos",
    nutrition: ["Proteína ~18g/100g", "Rico en vitamina B12", "Bajo en calorías (~96 kcal)"],
    cooking: ["Al horno con vino blanco y hierbas", "A la parrilla con limón y sal gruesa"],
    origin: "Argentina",
    type: "Fresco",
    unit: "1 kg",
  },
  {
    id: 3,
    name: "Corvina",
    description: "Carne firme y sabrosa, ideal para distintas preparaciones.",
    price: "$9.900/kg",
    image: "/corvina.jpg",
    category: "frescos",
    nutrition: ["Proteína ~18g/100g", "Bajo en grasa y colesterol", "Fuente de fósforo"],
    cooking: ["A la plancha con ajo y perejil", "Al horno rellena con vegetales"],
    origin: "Argentina",
    type: "Fresco",
    unit: "1 kg",
  },
  {
    id: 4,
    name: "Trucha Mariposa",
    description: "Apertura en mariposa para una presentación espectacular a la parrilla.",
    price: "$28.900/kg",
    image: "/trucha_mariposa.jpg",
    category: "frescos",
    nutrition: ["Proteína ~20g/100g", "Rica en Omega-3", "Fuente de vitamina D"],
    cooking: ["A la plancha con mantequilla y almendras", "A la parrilla con hierbas provenzales"],
    origin: "Chile",
    type: "Fresco",
    unit: "1 kg",
  },
  {
    id: 5,
    name: "Filet de Truchón",
    description: "Filete de trucha grande, de textura firme y sabor intenso.",
    price: "$35.900/kg",
    image: "/filet_de_truchon.jpg",
    category: "frescos",
    nutrition: ["Proteína ~21g/100g", "Omega-3 destacado", "Vitamina B12 y D"],
    cooking: ["Al horno con limón y alcaparras", "A la plancha con salsa de tomate fresco"],
    origin: "Chile",
    type: "Fresco",
    unit: "1 kg",
  },
  {
    id: 6,
    name: "Filet de Salmón Rosado",
    description: "Penca entera. Carne rosada, jugosa y de sabor único.",
    price: "$38.900/kg",
    image: "/filet_de_salmon_rosado.jpg",
    category: "frescos",
    nutrition: ["Proteína ~20g/100g", "Omega-3 muy alto", "Rico en vitamina D"],
    cooking: ["A la plancha con piel crujiente", "Al horno en papillote con vegetales"],
    origin: "Chile",
    type: "Fresco",
    unit: "1 kg",
  },
  // CONGELADOS PREMIUM
  {
    id: 7,
    name: "Calamar",
    description: "Calamar entero limpio de primera calidad, versátil en cocina.",
    price: "$14.900/kg",
    image: "/calamar.jpg",
    category: "congelados",
    nutrition: ["Proteína ~16g/100g", "Muy bajo en grasa", "Fuente de vitamina B12"],
    cooking: ["A la plancha con ajo y limón", "Relleno y gratinado al horno"],
    origin: "Argentina",
    type: "Congelado",
    unit: "1 kg",
  },
  {
    id: 8,
    name: "Tubos para Rabas",
    description: "Tubos de calamar seleccionados, calibre ideal para rabas perfectas.",
    price: "$26.900/kg",
    image: "/tubos_para_rabas.jpg",
    category: "congelados",
    nutrition: ["Proteína ~16g/100g", "Bajo en grasa", "Fuente de fósforo y zinc"],
    cooking: ["Rebozados y fritos (rabas clásicas)", "A la plancha con chimichurri"],
    origin: "Argentina",
    type: "Congelado",
    unit: "1 kg",
  },
  {
    id: 9,
    name: "Calamarete Español",
    description: "Calamarete de pequeño tamaño, más tierno e intenso de sabor.",
    price: "$25.500/kg",
    image: "/calamarete_español.jpg",
    category: "congelados",
    nutrition: ["Proteína ~16g/100g", "Muy bajo en grasa", "Fuente de zinc y selenio"],
    cooking: ["En su tinta con arroz", "A la plancha con ajo y guindilla"],
    origin: "España",
    type: "Congelado",
    unit: "1 kg",
  },
  {
    id: 10,
    name: "Salmón Ahumado",
    description: "Sobre de 200g. Ahumado artesanal, listo para comer.",
    price: "$16.500",
    image: "/salmon_ahumado.jpg",
    category: "congelados",
    nutrition: ["Proteína ~25g/100g", "Omega-3 alto", "Altísima densidad nutricional"],
    cooking: ["En tostadas con queso crema y alcaparras", "Con pasta en salsa crema"],
    origin: "Argentina",
    type: "Congelado",
    unit: "200 g",
  },
  {
    id: 11,
    name: "Mix de Mariscos",
    description: "Selección de mariscos variados, ideal para arroces y paellas.",
    price: "$27.900/kg",
    image: "/mix_de_mariscos.jpg",
    category: "congelados",
    nutrition: ["Proteína ~17g/100g", "Variedad de minerales y oligoelementos", "Bajo en calorías"],
    cooking: ["En paella o risotto de mariscos", "Salteado con ajo y vino blanco"],
    origin: "Argentina",
    type: "Congelado",
    unit: "1 kg",
  },
  {
    id: 12,
    name: "Langostino Pelado",
    description: "Sin cabeza ni cáscara, listo para usar directamente.",
    price: "$27.500/kg",
    image: "/langostinos.png",
    category: "congelados",
    nutrition: ["Proteína ~20g/100g", "Muy bajo en grasa (<1g)", "Fuente de zinc y selenio"],
    cooking: ["Al ajillo con pasta", "Salteado con mantequilla, ajo y limón"],
    origin: "Argentina",
    type: "Congelado",
    unit: "1 kg",
  },
  {
    id: 13,
    name: "Camarón Pelado",
    description: "Camarones de calibre mediano, pelados y listos para cocinar.",
    price: "$27.900/kg",
    image: "/camaron.png",
    category: "congelados",
    nutrition: ["Proteína ~19g/100g", "Bajo en calorías (~85 kcal)", "Fuente de yodo"],
    cooking: ["Al ajillo con arroz", "En risotto de mariscos"],
    origin: "Argentina",
    type: "Congelado",
    unit: "1 kg",
  },
  {
    id: 14,
    name: "Langostino Entero",
    description: "Con cabeza, ideal para la parrilla o como presentación.",
    price: "$21.900/kg",
    image: "/langostino_entero.jpg",
    category: "congelados",
    nutrition: ["Proteína ~20g/100g", "Rico en selenio", "Bajo en grasa"],
    cooking: ["A la parrilla con limón y sal gruesa", "Al vapor con mantequilla y hierbas"],
    origin: "Argentina",
    type: "Congelado",
    unit: "1 kg",
  },
  {
    id: 15,
    name: "Mejillón Pelado",
    description: "Mejillones cocidos y pelados, listos para incorporar a tus platos.",
    price: "$24.900/kg",
    image: "/mejillones_sin_valva.png",
    category: "congelados",
    nutrition: ["Proteína ~12g/100g", "Rico en hierro y vitamina C", "Omega-3 presente"],
    cooking: ["En salsa de tomate con pasta", "Al vapor con vino blanco y ajo"],
    origin: "Chile",
    type: "Congelado",
    unit: "1 kg",
  },
  {
    id: 16,
    name: "Berberecho",
    description: "Pequeños moluscos de sabor intenso a mar, muy valorados en cocina española.",
    price: "$25.500/kg",
    image: "/berberecho.jpg",
    category: "congelados",
    nutrition: ["Muy rico en hierro", "Bajo en calorías (~74 kcal)", "Fuente de vitaminas del grupo B"],
    cooking: ["Al vapor con limón y perejil", "En arroces y paellas"],
    origin: "España",
    type: "Congelado",
    unit: "1 kg",
  },
  {
    id: 17,
    name: "Kani Kama Santa Elena",
    description: "Paquete de 250g. Palitos de cangrejo de primera marca.",
    price: "$6.300/paquete",
    image: "/kanikama.png",
    category: "congelados",
    nutrition: ["Bajo en grasa", "Fuente de proteína (~8g/100g)", "Muy versátil en cocina"],
    cooking: ["En ensaladas y sushi rolls", "En sandwich con palta y mayonesa"],
    origin: "Argentina",
    type: "Congelado",
    unit: "250 g",
  },
  {
    id: 18,
    name: "Sardina Portuguesa",
    description: "Sardinas enteras de alta calidad, perfectas para la parrilla.",
    price: "$24.500/kg",
    image: "/sardina_portuguesa.jpg",
    category: "congelados",
    nutrition: ["Omega-3 muy alto", "Rico en calcio y vitamina D", "Proteína ~25g/100g"],
    cooking: ["A la parrilla con limón y sal gruesa", "Al horno con tomate y hierbas"],
    origin: "Portugal",
    type: "Congelado",
    unit: "1 kg",
  },
  {
    id: 19,
    name: "Lomo de Atún Rojo",
    description: "Corte premium del atún rojo, de textura firme y sabor profundo.",
    price: "$48.900/kg",
    image: "/lomo_de_atun_rojo.jpg",
    category: "congelados",
    nutrition: ["Proteína muy alta (~30g/100g)", "Muy bajo en grasa", "Omega-3 alto"],
    cooking: ["A la plancha vuelta y vuelta (jugoso al centro)", "En tataki con soja y jengibre"],
    origin: "Importado",
    type: "Congelado",
    unit: "1 kg",
  },
  {
    id: 20,
    name: "Pulpito Español",
    description: "Pulpito entero de pequeño tamaño, tierno y de sabor intenso.",
    price: "$32.900/kg",
    image: "/pulpito_español.jpg",
    category: "congelados",
    nutrition: ["Muy bajo en grasa", "Fuente de vitamina B12", "Rico en hierro y taurina"],
    cooking: ["A la plancha con pimentón dulce y aceite", "Guisado con papas y laurel"],
    origin: "España",
    type: "Congelado",
    unit: "1 kg",
  },
  {
    id: 21,
    name: "Bacalao Noruego",
    description: "Bacalao de Noruega, proteína magra excepcional con sabor clásico.",
    price: "$39.800/kg",
    image: "/bacalao_noruego.jpg",
    category: "congelados",
    nutrition: ["Proteína magra excepcional (~23g/100g)", "Muy bajo en grasa (<1g)", "Rico en vitaminas B"],
    cooking: ["A la vizcaína con tomate y pimiento", "Al pil pil (receta tradicional)"],
    origin: "Noruega",
    type: "Congelado",
    unit: "1 kg",
  },
  {
    id: 22,
    name: "Merluza Negra",
    description: "Producto de lujo. Textura untuosa y sabor delicado, muy apreciado mundialmente.",
    price: "Consultar precio",
    image: "/merluza_negra.jpg",
    category: "congelados",
    nutrition: ["Omega-3 muy alto", "Textura y sabor excepcionales", "Vitamina D destacada"],
    cooking: ["A la plancha con mantequilla de hierbas", "Al vapor con jengibre y soja"],
    origin: "Antártida",
    type: "Congelado",
    unit: "1 kg",
  },
  {
    id: 23,
    name: "Vieiras",
    description: "Vieiras selectas de sabor suave y textura mantecosa.",
    price: "Consultar precio",
    image: "/vieiras.png",
    category: "congelados",
    nutrition: ["Proteína ~17g/100g", "Rico en magnesio y zinc", "Bajo en calorías (~88 kcal)"],
    cooking: ["A la plancha con mantequilla y ajo (4-5 min)", "Gratinadas con queso y provenzal"],
    origin: "Chile",
    type: "Congelado",
    unit: "1 kg",
  },
  {
    id: 24,
    name: "Pulpo Español",
    description: "Pulpo entero de origen español, tierno y de calidad superior.",
    price: "Consultar precio",
    image: "/pulpo_congelado.png",
    category: "congelados",
    nutrition: ["Muy bajo en grasa", "Fuente de vitamina B12", "Rico en hierro y proteínas"],
    cooking: ["A la gallega con pimentón y aceite de oliva", "A la plancha con sal gruesa y limón"],
    origin: "España",
    type: "Congelado",
    unit: "1 kg",
  },
  // REBOZADOS
  {
    id: 25,
    name: "Filet de Merluza Rebozado",
    description: "Filete de merluza con rebozado artesanal. Crujiente por fuera, jugoso por dentro.",
    price: "$19.500/kg",
    image: "/filet_de_merluza_rebozado.jpeg",
    category: "rebozados",
    nutrition: ["Fuente de proteína (~13g/100g)", "Listo en minutos", "Ideal para niños y toda la familia"],
    cooking: ["Al horno a 200°C sin aceite (25 min)", "Frito en poco aceite (8-10 min)"],
    origin: "Argentina",
    type: "Rebozado",
    unit: "1 kg",
  },
];

const FEATURED_IDS = [6, 12, 23];

const packs: Pack[] = [
  {
    id: "mediterraneo",
    name: "Pack Mediterráneo",
    description: "Una selección del Mediterráneo para compartir. Perfecta para una paella, mesa de mariscos o una reunión especial.",
    items: ["Pulpito Español", "Mejillón Pelado", "Berberecho", "Calamarete Español"],
  },
  {
    id: "parrilla",
    name: "Pack Parrilla",
    description: "Para los que aman el mar a las brasas. Todos los cortes que brillan en la parrilla y conquistan a cualquier invitado.",
    items: ["Langostino Entero", "Sardina Portuguesa", "Lomo de Atún Rojo", "Trucha Mariposa"],
  },
  {
    id: "clasicos",
    name: "Pack Clásicos",
    description: "Los sabores que siempre funcionan. Ideal para tener en el freezer y cocinar cuando se te antoje.",
    items: ["Filet de Merluza", "Camarón Pelado", "Langostino Pelado", "Kani Kama Santa Elena"],
  },
];

const recipes: Recipe[] = [
  {
    id: "merluza-horno",
    name: "Merluza al horno con papas y limón",
    difficulty: "Fácil",
    time: "35 min",
    image: "/receta_merluza.jpg",
    ingredients: [
      "Filet de merluza",
      "2 papas medianas en rodajas",
      "1 limón (jugo y ralladura)",
      "3 dientes de ajo picados",
      "Aceite de oliva, sal, pimienta",
      "Perejil fresco",
    ],
    steps: [
      "Precalentar el horno a 200°C.",
      "Disponer las papas en rodajas en una fuente, rociar con aceite, ajo y sal. Cocinar 20 minutos.",
      "Colocar el filet de merluza sobre las papas. Agregar jugo de limón, ralladura y condimentar con sal y pimienta.",
      "Hornear 15 minutos más hasta que el pescado esté cocido y se desmenuce fácilmente.",
      "Servir caliente con perejil picado fresco por encima.",
    ],
  },
  {
    id: "langostinos-ajillo",
    name: "Langostinos al ajillo con pasta",
    difficulty: "Fácil",
    time: "20 min",
    image: "/receta_langostinos.jpg",
    ingredients: [
      "Langostinos pelados",
      "250g de espagueti",
      "4 dientes de ajo laminados",
      "Aceite de oliva, ají molido",
      "Jugo de medio limón",
      "Perejil fresco y sal",
    ],
    steps: [
      "Cocinar la pasta en agua con sal según las indicaciones del paquete.",
      "En una sartén, calentar el aceite de oliva a fuego medio y dorar el ajo laminado.",
      "Añadir los langostinos, cocinar 3-4 minutos hasta que se pongan rosados y apagar.",
      "Condimentar con ají molido, sal y jugo de limón.",
      "Mezclar con la pasta escurrida, espolvorear perejil y servir de inmediato.",
    ],
  },
  {
    id: "salmon-plancha",
    name: "Salmón a la plancha con ensalada verde",
    difficulty: "Fácil",
    time: "25 min",
    image: "/receta_salmon.jpg",
    ingredients: [
      "Filet de salmón rosado",
      "Rúcula y espinaca baby",
      "Tomates cherry",
      "Aceite de oliva, limón",
      "Sal, pimienta, sésamo tostado",
    ],
    steps: [
      "Condimentar el salmón con sal, pimienta y un chorro de aceite de oliva.",
      "Calentar una sartén o plancha a fuego alto hasta que esté bien caliente.",
      "Cocinar el salmón 4 minutos por lado hasta que esté dorado por fuera y jugoso al centro.",
      "Preparar la ensalada con hojas verdes y tomates, aliñar con aceite y jugo de limón.",
      "Servir el salmón sobre la ensalada, espolvorear sésamo tostado y un hilo de aceite de oliva.",
    ],
  },
];

const deliveryZones = [
  "Abril Club de Campo",
  "Barrancas de Iraola",
  "Barrio Cerrado Dorrego",
  "Los Troncos",
  "Las Golondrinas",
  "El Carmen",
  "El Carmencito",
  "Fincas de Iraola 1",
  "Fincas de Iraola 2",
  "Fincas de Hudson",
  "Greenville Polo & Resort",
  "Hudson Park",
  "Las Acacias de Hudson",
  "Nuevo Quilmes",
  "Pueblos del Plata",
  "Quilmes Centro",
  "Bernal Centro",
];

const categoryMeta = {
  frescos:    { label: "Frescos del Día",    eyebrow: "Del mar a tu mesa" },
  congelados: { label: "Congelados Premium", eyebrow: "Selección de autor" },
  rebozados:  { label: "Rebozados",          eyebrow: "Listos en minutos" },
};

// ── Components ─────────────────────────────────────────────────────────────

function PackCard({ pack }: { pack: Pack }) {
  const WHATSAPP = "5491164034993";
  return (
    <article className={s.packCard}>
      <h3 className={s.packName}>{pack.name}</h3>
      <p className={s.packDesc}>{pack.description}</p>
      <ul className={s.packItems}>
        {pack.items.map(item => <li key={item}>{item}</li>)}
      </ul>
      <div className={s.packFooter}>
        <a
          href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hola, me interesa el ${pack.name} de Club de Mar. ¿Pueden confirmar disponibilidad?`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={s.waBtn}
          aria-label={`Consultar ${pack.name} por WhatsApp`}
        >
          Consultar por WhatsApp
        </a>
      </div>
    </article>
  );
}

function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className={s.recetaCard}>
      <div className={s.recetaImgWrap}>
        <Image
          src={recipe.image}
          alt={recipe.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={s.recetaImg}
        />
      </div>
      <div className={s.recetaContent}>
        <div className={s.recetaMeta}>
          <span className={s.recetaBadge}>{recipe.difficulty}</span>
          <span className={s.recetaBadge}>{recipe.time}</span>
        </div>
        <h3 className={s.recetaName}>{recipe.name}</h3>
        <div>
          <p className={s.recetaMicroLabel}>Ingredientes</p>
          <ul className={s.recetaList}>
            {recipe.ingredients.map(i => <li key={i}>{i}</li>)}
          </ul>
        </div>
        <div>
          <p className={s.recetaMicroLabel}>Preparación</p>
          <ol className={s.recetaSteps}>
            {recipe.steps.map(step => <li key={step}>{step}</li>)}
          </ol>
        </div>
      </div>
    </article>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function Home() {
  const categoriesInOrder: Array<keyof typeof categoryMeta> = ["frescos", "congelados", "rebozados"];
  const featuredProducts = products.filter(p => FEATURED_IDS.includes(p.id));

  return (
    <>
      <Navbar />

      <main className={s.pageMain}>
        {/* ── Hero ── */}
        <section id="inicio" className={s.hero} aria-label="Portada">
          <Image
            src="/pez_web_clubdemar.jpg"
            alt="Club de Mar — Productos del mar"
            fill
            priority
            sizes="100vw"
            className={s.heroImg}
          />
          <div className={s.heroOverlay} aria-hidden="true" />
          <div className={s.heroContent}>
            <Image
              src="/CLUBDEMAR_AZUL_GRIS.png"
              alt="Club de Mar"
              width={240}
              height={70}
              priority
              className={s.heroLogo}
            />
            <h1 className={s.heroTagline}>Para los que saben elegir</h1>
            <p className={s.heroSub}>
              Productos seleccionados con entrega en zona sur de Buenos Aires
            </p>
            <a href="#destacados" className={s.heroBtn}>
              Ver productos
            </a>
          </div>
        </section>

        {/* ── Delivery zones ── */}
        <section aria-labelledby="zones-title">
          <div className={s.zones}>
            <div className={s.container}>
              <h2 className={s.zonesTitle} id="zones-title">Ya nos eligen en:</h2>
              <p className={s.zonesInline}>{deliveryZones.join(' · ')}</p>
            </div>
          </div>
        </section>

        {/* ── Destacados ── */}
        <section id="destacados" className={s.featured} aria-labelledby="destacados-title">
          <div className={s.container}>
            <p className={s.sectionEyebrow}>Selección especial</p>
            <h2 className={s.sectionTitle} id="destacados-title">Destacados</h2>
            <div className={s.featuredGrid}>
              {featuredProducts.map(product => (
                <FeaturedCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Products ── */}
        <section id="productos" className={s.products} aria-labelledby="productos-title">
          <div className={s.container}>
            <p className={s.sectionEyebrow}>Lo que traemos</p>
            <h2 className={s.sectionTitle} id="productos-title">Nuestros productos</h2>

            {categoriesInOrder.map(cat => {
              const meta = categoryMeta[cat];
              const items = products.filter(p => p.category === cat);
              return (
                <div key={cat} className={s.categorySection}>
                  <h3 className={s.categoryTitle}>{meta.label}</h3>
                  <div className={s.productGrid}>
                    {items.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Packs ── */}
        <section id="packs" className={s.packs} aria-labelledby="packs-title">
          <div className={s.container}>
            <p className={s.sectionEyebrow}>Combinaciones listas</p>
            <h2 className={s.sectionTitle} id="packs-title">Nuestros packs</h2>
            <div className={s.packsGrid}>
              {packs.map(pack => <PackCard key={pack.id} pack={pack} />)}
            </div>
          </div>
        </section>

        {/* ── Recetas ── */}
        <section id="recetas" className={s.recetas} aria-labelledby="recetas-title">
          <div className={s.container}>
            <p className={s.sectionEyebrow}>Inspiración para cocinar</p>
            <h2 className={s.sectionTitle} id="recetas-title">Recetas</h2>
            <div className={s.recetasGrid}>
              {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
            </div>
          </div>
        </section>

        {/* ── Quiénes Somos ── */}
        <section id="quienes-somos" className={s.quienes} aria-labelledby="qs-title">
          <div className={s.container}>
            <p className={s.sectionEyebrow}>Nuestra historia</p>
            <h2 className={s.sectionTitle} id="qs-title">Quiénes Somos</h2>
            <div className={s.quienesBody}>
              <p className={s.quienesText}>
                Club de Mar nace del conocimiento de más de 27 años en la industria del mar.
                Seleccionamos cada producto con criterio profesional para llevarlo directo a tu mesa,
                donde las pescaderías no llegan.
                <br /><br />
                Creemos que comer bien no debería ser difícil: por eso te traemos el mar a tu barrio,
                con la frescura y calidad que merecés. Cada producto que ofrecemos pasa por un proceso
                de selección riguroso, priorizando el origen, la cadena de frío y el sabor auténtico.
                <br /><br />
                Nuestro compromiso es simple: que en cada entrega, sientas la diferencia.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className={s.footer}>
        <div className={s.footerInner}>
          <Image
            src="/CLUBDEMAR_AZUL_GRIS.png"
            alt="Club de Mar"
            width={160}
            height={44}
            className={s.footerLogo}
          />
          <a
            href={`https://wa.me/5491164034993?text=${encodeURIComponent('Hola, me gustaría hacer un pedido en Club de Mar.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className={s.footerWa}
          >
            WhatsApp: +54 9 11 6403-4993
          </a>
          <p className={s.footerCopy}>
            © 2026 Club de Mar. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* ── Floating Cart ── */}
      <CartPanel />
    </>
  );
}
