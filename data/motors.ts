export type Motor = {
  slug: string;
  name: string;
  brand: string;
  category: "Matic" | "Sport" | "Trail";
  pricePerDay: number;
  priceWeekly: number;
  priceMonthly: number;
  image: string;
  tagline: string;
  description: string;
  specs: {
    engine: string;
    transmission: string;
    fuel: string;
    seats: number;
    consumption: string;
    topSpeed: string;
  };
  features: string[];
};

export const motors: Motor[] = [
  {
    slug: "honda-scoopy",
    name: "Honda Scoopy",
    brand: "Honda",
    category: "Matic",
    pricePerDay: 80000,
    priceWeekly: 500000,
    priceMonthly: 1800000,
    image: "/motors/motor-scoopy.jpg",
    tagline: "Stylish retro untuk keliling kota",
    description:
      "Honda Scoopy adalah pilihan ideal untuk berkeliling area Seminyak, Canggu, dan Ubud. Bodi ringan, irit BBM, dan mudah dikendarai untuk pemula sekalipun.",
    specs: {
      engine: "110cc eSP",
      transmission: "Automatic",
      fuel: "Pertalite / Pertamax",
      seats: 2,
      consumption: "± 60 km/liter",
      topSpeed: "90 km/jam",
    },
    features: ["2 Helm SNI", "Jas Hujan", "STNK Original", "Antar Jemput Gratis"],
  },
  {
    slug: "honda-vario-160",
    name: "Honda Vario 160",
    brand: "Honda",
    category: "Matic",
    pricePerDay: 110000,
    priceWeekly: 700000,
    priceMonthly: 2500000,
    image: "/motors/motor-vario.jpg",
    tagline: "Bertenaga, nyaman untuk perjalanan jauh",
    description:
      "Vario 160 menawarkan performa lebih bertenaga dengan mesin 160cc. Cocok untuk perjalanan jauh ke Uluwatu, Nusa Dua, atau Bedugul dengan kondisi jalan menanjak.",
    specs: {
      engine: "160cc eSP+",
      transmission: "Automatic",
      fuel: "Pertamax",
      seats: 2,
      consumption: "± 45 km/liter",
      topSpeed: "120 km/jam",
    },
    features: ["2 Helm SNI", "Jas Hujan", "ABS Brake", "Keyless System"],
  },
  {
    slug: "yamaha-nmax-155",
    name: "Yamaha NMAX 155",
    brand: "Yamaha",
    category: "Matic",
    pricePerDay: 130000,
    priceWeekly: 850000,
    priceMonthly: 3000000,
    image: "/motors/motor-nmax.jpg",
    tagline: "Premium maxi-scooter dengan kenyamanan terbaik",
    description:
      "NMAX 155 adalah maxi-scooter favorit untuk wisatawan. Bagasi luas, posisi berkendara nyaman, dan suspensi empuk membuat perjalanan jauh terasa menyenangkan.",
    specs: {
      engine: "155cc VVA",
      transmission: "Automatic CVT",
      fuel: "Pertamax",
      seats: 2,
      consumption: "± 40 km/liter",
      topSpeed: "130 km/jam",
    },
    features: ["2 Helm SNI", "Jas Hujan", "Bagasi 23L", "ABS Brake"],
  },
  {
    slug: "honda-pcx-160",
    name: "Honda PCX 160",
    brand: "Honda",
    category: "Matic",
    pricePerDay: 150000,
    priceWeekly: 950000,
    priceMonthly: 3500000,
    image: "/motors/motor-pcx.jpg",
    tagline: "Premium scooter untuk pengalaman touring kelas atas",
    description:
      "PCX 160 menghadirkan kemewahan dalam berkendara. Cocok untuk Anda yang menginginkan pengalaman premium saat menjelajah Bali.",
    specs: {
      engine: "160cc eSP+",
      transmission: "Automatic",
      fuel: "Pertamax",
      seats: 2,
      consumption: "± 45 km/liter",
      topSpeed: "130 km/jam",
    },
    features: ["2 Helm SNI", "Jas Hujan", "Smart Key", "ABS + Traction Control"],
  },
  {
    slug: "honda-beat",
    name: "Honda BeAT",
    brand: "Honda",
    category: "Matic",
    pricePerDay: 70000,
    priceWeekly: 430000,
    priceMonthly: 1500000,
    image: "/motors/motor-beat.jpg",
    tagline: "Paling ekonomis, lincah di lalu lintas Bali",
    description:
      "Honda BeAT adalah pilihan ekonomis untuk wisatawan dengan budget terbatas. Ringan, irit, dan mudah parkir di area Kuta atau Legian.",
    specs: {
      engine: "110cc eSP",
      transmission: "Automatic",
      fuel: "Pertalite",
      seats: 2,
      consumption: "± 65 km/liter",
      topSpeed: "85 km/jam",
    },
    features: ["2 Helm SNI", "Jas Hujan", "STNK Original", "Bodi Ringan"],
  },
  {
    slug: "kawasaki-klx-150",
    name: "Kawasaki KLX 150",
    brand: "Kawasaki",
    category: "Trail",
    pricePerDay: 175000,
    priceWeekly: 1100000,
    priceMonthly: 4000000,
    image: "/motors/motor-klx.jpg",
    tagline: "Trail bike untuk petualangan off-road di Bali",
    description:
      "KLX 150 cocok untuk Anda yang ingin menjelajah jalur off-road, air terjun tersembunyi, atau medan tanah di area Munduk dan Kintamani.",
    specs: {
      engine: "150cc SOHC",
      transmission: "5-Speed Manual",
      fuel: "Pertamax",
      seats: 2,
      consumption: "± 35 km/liter",
      topSpeed: "110 km/jam",
    },
    features: ["2 Helm Trail", "Jas Hujan", "Ban Dual Purpose", "Suspensi Long Travel"],
  },
];

export const getMotor = (slug: string) => motors.find((m) => m.slug === slug);

export const formatRupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(n);
