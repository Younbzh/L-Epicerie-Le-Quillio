export const siteConfig = {
  name: "L'Épicerie",
  fullName: "L'Épicerie - Le Cœur du Village",
  tagline: "Votre commerce de proximité",
  description: "Épicerie de village au Quillio : produits frais et locaux, terrasse conviviale, hébergement. Ouvert 7j/7 !",
  
  contact: {
    address: "1 Route Départementale 35, 22460 Le Quillio",
    commune: "Le Quillio",
    department: "Côtes-d'Armor",
    region: "Bretagne",
    phone: "06 69 02 22 92",
    email: "contact@lepicerie-lequillio.fr",
    location: {
      lat: 48.1667,
      lng: -2.9167
    }
  },

  hours: {
    schedule: {
      "Lundi - Samedi": "7h-13h • 16h-20h",
      "Dimanche": "8h-13h"
    },
    note: "Ouvert 7 jours sur 7",
    terrasse: "Terrasse ouverte avril-septembre • 16h-20h"
  },

  presentation: {
    title: "Bienvenue dans votre épicerie de village",
    description: "Au cœur du Quillio, L'Épicerie vous accueille tous les jours pour vos courses du quotidien. Un lieu convivial où se mêlent produits de qualité, sourire et bonne humeur !"
  },

  products: {
    title: "Nos Produits",
    categories: [
      {
        name: "Pain & Viennoiseries",
        emoji: "🥖",
        items: ["Pain frais quotidien", "Viennoiseries", "Gâteaux bretons"]
      },
      {
        name: "Produits Frais",
        emoji: "🥛",
        items: ["Lait", "Œufs", "Fromages locaux", "Beurre", "Yaourts"]
      },
      {
        name: "Fruits & Légumes",
        emoji: "🥕",
        items: ["Légumes de producteurs locaux", "Fruits de saison"]
      },
      {
        name: "Épicerie",
        emoji: "🛒",
        items: ["Conserves", "Pâtes & riz", "Huiles", "Condiments"]
      },
      {
        name: "Terroir Breton",
        emoji: "🇫🇷",
        items: ["Cidre", "Pâté Hénaff", "Sardines", "Confitures artisanales", "Miel local"]
      },
      {
        name: "Surgelés & Glaces",
        emoji: "🍦",
        items: ["Glaces artisanales", "Produits surgelés"]
      }
    ]
  },

  services: {
    title: "Nos Services",
    list: [
      {
        name: "Relais Colis",
        description: "Point Mondial Relay - Dépôt et retrait de colis",
        icon: "📦"
      },
      {
        name: "Dépôt de Pain",
        description: "Pain frais livré chaque matin",
        icon: "🥖"
      },
      {
        name: "Click & Collect",
        description: "Commandez par téléphone, on prépare vos courses",
        icon: "📱"
      },
      {
        name: "Station Vélo",
        description: "Parking vélos sécurisé, gonfleur, kit de réparation",
        icon: "🚴"
      },
      {
        name: "WiFi Gratuit",
        description: "Connexion gratuite pour nos clients",
        icon: "📶"
      },
      {
        name: "Impression",
        description: "Service d'impression et photocopies",
        icon: "🖨️"
      }
    ]
  },

  terrasse: {
    title: "Notre Terrasse",
    description: "Un espace convivial pour toute la famille",
    boissons: {
      title: "Boissons",
      categories: [
        {
          name: "Boissons fraîches",
          items: ["Sodas", "Jus de fruits", "Limonade", "Thé glacé"]
        },
        {
          name: "Boissons chaudes",
          items: ["Café", "Chocolat chaud", "Thé", "Tisanes"]
        },
        {
          name: "Snacking",
          items: ["Crêpes", "Galettes", "Viennoiseries", "Glaces"]
        }
      ]
    },
    atouts: [
      "Terrasse ombragée",
      "Aire de jeux à proximité",
      "Ambiance familiale",
      "Sans alcool"
    ]
  },

  hebergement: {
    title: "Hébergement Étape",
    description: "Chambres confortables pour une ou plusieurs nuits",
    chambres: [
      {
        type: "Chambre double",
        tarif: "45-60€/nuit",
        equipements: ["Lit double", "Salle de bain privée", "WiFi"]
      },
      {
        type: "Chambre simple",
        tarif: "35-45€/nuit", 
        equipements: ["Lit simple", "Salle de bain partagée", "WiFi"]
      }
    ],
    services: ["Petit-déjeuner disponible", "Parking gratuit", "Accès 24h/24"],
    clientele: ["Cyclotouristes (Voie Verte)", "Routiers et commerciaux", "Touristes Centre-Bretagne", "Travailleurs en déplacement"]
  },

  localisation: {
    titre: "Au cœur de la Bretagne",
    description: "Le Quillio, commune labellisée 'Patrimoine Rural de Bretagne'",
    proximite: [
      { ville: "Loudéac", distance: "10 km" },
      { ville: "Saint-Brieuc", distance: "25 min" },
      { ville: "Pontivy", distance: "20 min" }
    ],
    acces: "Sur la RD35 • 2200 véhicules/jour • Parking gratuit"
  },

  colors: {
    // Palette chaleureuse et joyeuse
    beigeChaud: "#f5e6d3",    // Beige chaud crème
    orangeDoux: "#ff9966",    // Orange doux accueillant
    jauneMiel: "#ffc857",     // Jaune miel lumineux
    rougeTerroir: "#d9534f",  // Rouge chaud convivial
    vertNature: "#8eb69b",    // Vert nature doux
    marron: "#8b6f47",        // Marron bois chaleureux
    blanc: "#ffffff",
    noirTexte: "#2d2d2d"
  },

  seo: {
    title: "L'Épicerie Le Quillio | Commerce de Proximité - Produits Locaux",
    description: "Épicerie de village au Quillio (22460) : produits frais et locaux, pain quotidien, terrasse conviviale, hébergement. Ouvert 7j/7. Services : relais colis, Click & Collect, WiFi. ☎ 06 69 02 22 92",
    keywords: [
      "épicerie Le Quillio",
      "commerce Le Quillio",
      "produits locaux Le Quillio",
      "pain frais Le Quillio",
      "épicerie Côtes d'Armor",
      "terrasse Le Quillio",
      "hébergement Le Quillio",
      "relais colis Le Quillio",
      "commerce de proximité",
      "produits bretons",
      "22460"
    ]
  }
};