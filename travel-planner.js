/* travel-planner.js — Bilingual (ES / EN) */

const destinationCatalog = {
  japan: {
    name: { es: "Japón", en: "Japan" },
    flag: "🇯🇵",
    cities: ["Tokio", "Kioto", "Osaka", "Monte Fuji"],
    locale: {
      survival: [
        { phrase: "Kore wa ikura desu ka?", pronunciation: { es: "Kore wa ikura desu ka? • ¿Cuánto cuesta esto?", en: "Kore wa ikura desu ka? • How much is this?" } },
        { phrase: "Arigatou gozaimasu", pronunciation: { es: "A-ri-ga-to-u go-za-i-ma-su • Muchas gracias", en: "A-ri-ga-to-u go-za-i-ma-su • Thank you very much" } },
        { phrase: "Sumimasen", pronunciation: { es: "Su-mi-ma-sen • Disculpe / Perdón", en: "Su-mi-ma-sen • Excuse me / Sorry" } }
      ]
    },
    interests: {
      culture: [
        {
          morning: { es: "Visita los templos de Asakusa y el barrio de Senso-ji con una caminata tranquila en la mañana.", en: "Visit the historic Senso-ji temple and Asakusa district with a peaceful morning walk." },
          afternoon: { es: "Recorre el distrito histórico de Higashiyama y disfruta de un paseo cultural por Gion.", en: "Stroll through the historic Higashiyama district and enjoy a cultural walking tour in Gion." },
          night: { es: "Cena tradicional en un ryokan con kaiseki y un paseo nocturno por Pontocho.", en: "Traditional kaiseki dinner and illuminated evening walk through Pontocho alley." },
          tourLabel: { es: "Tour de 1 día por Tokio y Kioto cultural", en: "1-Day Tokyo & Kyoto Cultural Heritage Tour" },
          tourUrl: "https://www.getyourguide.com/tokyo-l55/tokyo-kyoto-shinkansen-day-trip-t281733/?partner_id=GYP"
        },
        {
          morning: { es: "Explora el santuario Fushimi Inari y sus miles de torii bermellón.", en: "Explore the iconic Fushimi Inari Shrine and its thousands of vermilion torii gates." },
          afternoon: { es: "Visita Kiyomizu-dera y el barrio tradicional con casas de té.", en: "Visit Kiyomizu-dera wooden temple and traditional teahouses in the hillside." },
          night: { es: "Paseo iluminado por Gion y cena de estilo izakaya.", en: "Evening lantern walk in Gion followed by an authentic izakaya dining experience." },
          tourLabel: { es: "Tour cultural por Kyoto y Fushimi Inari", en: "Kyoto & Fushimi Inari Cultural Walking Tour" },
          tourUrl: "https://www.getyourguide.com/kyoto-l110/fushimi-inari-temple-tour-t163053/?partner_id=GYP"
        },
        {
          morning: { es: "Recorre el histórico Castillo de Osaka y sus jardines.", en: "Tour the historic Osaka Castle and surrounding panoramic gardens." },
          afternoon: { es: "Descubre el legado histórico y la arquitectura moderna alrededor del río.", en: "Discover cultural landmarks and modern architecture along the scenic river canal." },
          night: { es: "Cena junto al canal y paseo bajo los letreros de neón de Dotonbori.", en: "Canal-side dinner and neon street walk in lively Dotonbori." },
          tourLabel: { es: "Osaka & Dotonbori cultural experience", en: "Osaka Heritage & Dotonbori Night Experience" },
          tourUrl: "https://www.getyourguide.com/osaka-l155/osaka-dotonbori-night-food-tour-t201540/?partner_id=GYP"
        }
      ],
      food: [
        {
          morning: { es: "Mercado tradicional con desayuno gourmet y café de especialidad.", en: "Traditional market breakfast with local specialties and craft coffee." },
          afternoon: { es: "Explora ramen, okonomiyaki y street food en Tsukiji o Shinsekai.", en: "Savor fresh ramen, okonomiyaki and street bites in Tsukiji outer market." },
          night: { es: "Cena recomendada: sushi omakase o izakaya con sake de temporada.", en: "Chef-choice Omakase sushi dinner paired with seasonal sake." },
          tourLabel: { es: "Tour Gastronómico por Tokio y Osaka", en: "Tokyo & Osaka Ultimate Street Food Tour" },
          tourUrl: "https://www.getyourguide.com/tokyo-l55/tokyo-food-tour-t11609/?partner_id=GYP"
        },
        {
          morning: { es: "Ruta por callejones gastronómicos de Kioto con té matcha y dulces wagashi.", en: "Morning matcha tea ceremony and traditional wagashi sweets in Kyoto." },
          afternoon: { es: "Prueba street food reinventada en el mercado Nishiki.", en: "Taste local street food delicacies at the 400-year-old Nishiki Market." },
          night: { es: "Cena de tempura crujiente o fideos udon artesanales bajo los faroles de Gion.", en: "Crispy artisan tempura and udon dinner in lantern-lit alleys." },
          tourLabel: { es: "Gastronomía local en Kioto", en: "Kyoto Gourmet Night Food & Drink Tour" },
          tourUrl: "https://www.getyourguide.com/kyoto-l110/kyoto-gourmet-food-tour-t27608/?partner_id=GYP"
        },
        {
          morning: { es: "Desayuno en cafetería retro 'Kissaten' con tostadas japonesas.", en: "Classic breakfast at a retro Kissaten café with thick Japanese toast." },
          afternoon: { es: "Explora la capital gastronómica: takoyaki, kushikatsu y gyoza.", en: "Street food feast in Osaka: fresh takoyaki, crispy kushikatsu and gyoza." },
          night: { es: "Cena de mercado con sake y ambiente festivo nocturno.", en: "Night market dinner with craft beer, sake and lively local vibes." },
          tourLabel: { es: "Tour de comida callejera en Osaka", en: "Osaka Street Food & Local Flavor Tour" },
          tourUrl: "https://www.getyourguide.com/osaka-l155/osaka-food-tour-t35347/?partner_id=GYP"
        }
      ],
      shopping: [
        {
          morning: { es: "Explora Harajuku y Omotesando para moda de vanguardia y diseño.", en: "Explore Harajuku Takeshita Street and luxury architecture in Omotesando." },
          afternoon: { es: "Visita el cruce de Shibuya, tiendas departamentales y Shibuya Sky.", en: "Experience Shibuya Crossing, iconic shopping malls and Shibuya Sky views." },
          night: { es: "Cena en el distrito de Shibuya y paseo por las luces de neón.", en: "Dinner in Shibuya followed by a futuristic neon night walk." },
          tourLabel: { es: "Tokyo Street Fashion & Shibuya Night Tour", en: "Tokyo Fashion, Trends & Shibuya Night Walk" },
          tourUrl: "https://www.getyourguide.com/tokyo-l55/shibuya-omotesando-fashion-tour-t143947/?partner_id=GYP"
        },
        {
          morning: { es: "Explora artesanías, cerámicas y kimonos en Kioto.", en: "Browse handmade ceramics, kimono boutiques and traditional crafts." },
          afternoon: { es: "Recorre galerías cubiertas y tiendas de manga y papelería japonesa.", en: "Explore covered arcades, stationery shops and contemporary manga stores." },
          night: { es: "Cena elegante y compras nocturnas cerca del río Kamo.", en: "Riverside dinner and boutique shopping along the Kamo River." },
          tourLabel: { es: "Kioto Shopping & Design Tour", en: "Kyoto Artisan Craft & Boutique Tour" },
          tourUrl: "https://www.getyourguide.com/kyoto-l110/kyoto-street-shopping-tour-t199431/?partner_id=GYP"
        },
        {
          morning: { es: "Compras en Shinsaibashi y galerías comerciales de Osaka.", en: "Shopping spree down Shinsaibashi shopping arcade in Osaka." },
          afternoon: { es: "Explora Denden Town (Nipponbashi): paraíso de anime, figuras y retro gaming.", en: "Explore Nipponbashi (Denden Town) for anime, figures and retro gaming." },
          night: { es: "Cena y compras de souvenirs luminosos en Dotonbori.", en: "Late-night souvenir shopping and street food dinner in Dotonbori." },
          tourLabel: { es: "Osaka Anime & Shopping Tour", en: "Osaka Anime, Pop-Culture & Shopping Adventure" },
          tourUrl: "https://www.getyourguide.com/osaka-l155/osaka-anime-shopping-tour-t117474/?partner_id=GYP"
        }
      ],
      nature: [
        {
          morning: { es: "Excursión hacia las faldas y miradores panorámicos del Monte Fuji.", en: "Scenic morning journey toward panoramic Mount Fuji viewpoints." },
          afternoon: { es: "Paseo en barco por el Lago Ashi y teleférico panorámico en Hakone.", en: "Lake Ashi sightseeing cruise and Hakone ropeway with volcanic views." },
          night: { es: "Cena con aguas termales (Onsen) y vista a las montañas.", en: "Relaxing Onsen hot springs experience and traditional mountain dinner." },
          tourLabel: { es: "Tour de 1 día al Monte Fuji y Hakone", en: "Mount Fuji & Hakone Day Trip with Lake Cruise" },
          tourUrl: "https://www.getyourguide.com/tokyo-l55/mt-fuji-hakone-day-tour-t12596/?partner_id=GYP"
        },
        {
          morning: { es: "Camina por el místico Bosque de Bambú de Arashiyama.", en: "Morning walk through the serene Arashiyama Bamboo Grove in Kyoto." },
          afternoon: { es: "Visita al Parque de los Monos y jardines Zen de Tenryu-ji.", en: "Visit Iwatayama Monkey Park and Tenryu-ji UNESCO Zen garden." },
          night: { es: "Cena serena y descanso bajo los faroles de madera.", en: "Tranquil evening dinner surrounded by mountain nature." },
          tourLabel: { es: "Kioto Naturaleza: Arashiyama & Bosque de Bambú", en: "Kyoto Nature: Arashiyama Bamboo Grove & Temples" },
          tourUrl: "https://www.getyourguide.com/kyoto-l110/kyoto-nature-tour-t100098/?partner_id=GYP"
        },
        {
          morning: { es: "Paseo escénico por las cascadas y senderos del Parque Minoh en Osaka.", en: "Scenic morning hike to Minoh Waterfalls through vibrant autumn maple forests." },
          afternoon: { es: "Visita a un mirador natural y descanso en casa de té.", en: "Panoramic hilltop viewpoint and relaxing traditional tea break." },
          night: { es: "Cena en azotea con vista a las montañas iluminadas.", en: "Rooftop dinner overlooking the illuminated city and mountains." },
          tourLabel: { es: "Cascadas de Minoh & Naturaleza en Osaka", en: "Minoh Waterfall & Scenic Nature Escape in Osaka" },
          tourUrl: "https://www.getyourguide.com/osaka-l155/osaka-city-nature-tour-t315489/?partner_id=GYP"
        }
      ]
    }
  },

  korea: {
    name: { es: "Corea del Sur", en: "South Korea" },
    flag: "🇰🇷",
    cities: ["Seúl", "Busan", "Isla Jeju"],
    locale: {
      survival: [
        { phrase: "Mianhamnida", pronunciation: { es: "Mi-an-ha-mi-ni-da • Perdón / Disculpe", en: "Mi-an-ham-ni-da • I'm sorry / Excuse me" } },
        { phrase: "Juseyo", pronunciation: { es: "Ju-se-yo • Por favor (déme esto)", en: "Ju-se-yo • Please give me this" } },
        { phrase: "Eolmaeyo?", pronunciation: { es: "Eol-ma-ye-yo? • ¿Cuánto cuesta?", en: "Eol-ma-ye-yo? • How much is it?" } }
      ]
    },
    interests: {
      culture: [
        {
          morning: { es: "Explora el Palacio Gyeongbokgung con traje tradicional Hanbok.", en: "Explore Gyeongbokgung Royal Palace wearing a traditional Korean Hanbok." },
          afternoon: { es: "Paseo cultural por las casas hanok de Bukchon y galerías de arte.", en: "Wander through Bukchon Hanok Village traditional alleys and craft workshops." },
          night: { es: "Cena coreana tradicional y paseo bajo la iluminada Torre N Seoul.", en: "Traditional Korean dinner followed by panoramic night views at N Seoul Tower." },
          tourLabel: { es: "Palacio Gyeongbokgung y Aldea Hanok en Seúl", en: "Seoul Royal Palaces & Hanok Village Walking Tour" },
          tourUrl: "https://www.getyourguide.com/seoul-l205/seoul-palace-hanok-tour-t14511/?partner_id=GYP"
        },
        {
          morning: { es: "Visita al Templo Jogyesa y paseo por el barrio artístico de Insadong.", en: "Morning visit to peaceful Jogyesa Temple and artisan shops in Insadong." },
          afternoon: { es: "Recorrido por la muralla histórica de Hanyangdoseong.", en: "Scenic stroll along the ancient Seoul City Fortress Wall." },
          night: { es: "Cena tradicional y paseo por el arroyo Cheonggyecheon iluminado.", en: "Dinner and romantic evening walk along the illuminated Cheonggyecheon Stream." },
          tourLabel: { es: "Tour Cultural Nocturno en Seúl", en: "Seoul Night Culture & Historical Heritage Tour" },
          tourUrl: "https://www.getyourguide.com/seoul-l205/seoul-night-cultural-tour-t234774/?partner_id=GYP"
        },
        {
          morning: { es: "Visita al colorido pueblo cultural Gamcheon en Busan.", en: "Explore the vibrant hillside Gamcheon Culture Village in Busan." },
          afternoon: { es: "Templo Haedong Yonggungsa frente al mar y miradores costeros.", en: "Visit the stunning seaside Haedong Yonggungsa Temple." },
          night: { es: "Cena de K-BBQ y espectáculo de luces en la playa Haeundae.", en: "Korean BBQ feast and night skyline walk along Haeundae Beach." },
          tourLabel: { es: "Busan: Gamcheon & Templo frente al Mar", en: "Busan Highlights: Gamcheon Village & Seaside Temple" },
          tourUrl: "https://www.getyourguide.com/busan-l417/busan-museums-and-coast-tour-t499201/?partner_id=GYP"
        }
      ],
      food: [
        {
          morning: { es: "Desayuno con sopa caliente K-gukbap y café coreano.", en: "Authentic Korean Gukbap soup breakfast and specialty coffee." },
          afternoon: { es: "Mercado Gwangjang: come mayak kimbap, bindaetteok y dumplings.", en: "Street food crawl at famous Gwangjang Market (Kimbap, pancakes, dumplings)." },
          night: { es: "Cena: barbacoa coreana (Samgyeopsal) con soju y cerveza Somaek.", en: "Sizzling K-BBQ (Samgyeopsal) dinner paired with soju." },
          tourLabel: { es: "Tour Gastronómico y Mercado Gwangjang", en: "Seoul Food Tour & Gwangjang Night Market" },
          tourUrl: "https://www.getyourguide.com/seoul-l205/seoul-food-tour-t22964/?partner_id=GYP"
        },
        {
          morning: { es: "Visita al mercado de pescado Jagalchi en Busan.", en: "Morning fresh catch experience at Jagalchi Fish Market in Busan." },
          afternoon: { es: "Street food en Nampodong: hotteok de semillas y tteokbokki.", en: "Street food in Nampodong: seed hotteok, spicy tteokbokki and fish cakes." },
          night: { es: "Cena de mariscos frescos frente al puente Gwangan iluminado.", en: "Fresh seafood dinner overlooking the illuminated Diamond Bridge." },
          tourLabel: { es: "Busan Street Food & Mercado Jagalchi", en: "Busan Gourmet Food & Jagalchi Market Tour" },
          tourUrl: "https://www.getyourguide.com/busan-l417/busan-food-tour-t315340/?partner_id=GYP"
        },
        {
          morning: { es: "Desayuno en Jeju con cerdo negro y mandarinas de la isla.", en: "Famous Jeju Black Pork breakfast and fresh island citrus juice." },
          afternoon: { es: "Mercado tradicional Dongmun de Jeju con mariscos asados.", en: "Explore Dongmun Traditional Market and fresh abalone skewers." },
          night: { es: "Cena junto al océano con brisa marina y pescado a la parrilla.", en: "Oceanfront grilled seafood feast with coastal sunset views." },
          tourLabel: { es: "Tour Gastronómico por la Isla de Jeju", en: "Jeju Island Culinary & Street Food Tour" },
          tourUrl: "https://www.getyourguide.com/jeju-l913/jeju-food-tour-t43339/?partner_id=GYP"
        }
      ],
      shopping: [
        {
          morning: { es: "Moda joven, cosmética coreana y arte urbano en Hongdae.", en: "Youth fashion, K-beauty boutiques and indie art in lively Hongdae." },
          afternoon: { es: "Compras de skincare de clase mundial en Myeongdong.", en: "World-class K-skincare and cosmetic shopping in Myeongdong." },
          night: { es: "Paseo nocturno por tiendas de K-Pop y cafés temáticos.", en: "K-Pop album stores and Instagrammable aesthetic cafés." },
          tourLabel: { es: "K-Beauty & K-Pop Shopping en Seúl", en: "Seoul K-Pop & K-Beauty Fashion Shopping Tour" },
          tourUrl: "https://www.getyourguide.com/seoul-l205/seoul-shopping-k-pop-tour-t291913/?partner_id=GYP"
        },
        {
          morning: { es: "Compras en los rascacielos de Gangnam y centro Coex Mall.", en: "Luxury shopping in Gangnam and the famous Starfield COEX Library." },
          afternoon: { es: "Visita al mirador Seoul Sky en la Torre Lotte World.", en: "Breathtaking views from Seoul Sky at Lotte World Tower (123 floors)." },
          night: { es: "Cena elegante y vida nocturna en Gangnam.", en: "Glamorous dinner and nightlife experience in Gangnam." },
          tourLabel: { es: "Entrada VIP Torre Lotte World & Gangnam", en: "VIP Lotte World Tower Sky Observatory & Gangnam" },
          tourUrl: "https://www.getyourguide.com/seoul-l205/lotte-world-tower-ticket-t59458/?partner_id=GYP"
        },
        {
          morning: { es: "Compras en el centro comercial Shinsegae Centum City en Busan.", en: "Shop at Centum City (World's largest department store) in Busan." },
          afternoon: { es: "Recorrido de boutiques de diseño local en Seomyeon.", en: "Trendy fashion and cosmetic boutiques in Seomyeon fashion street." },
          night: { es: "Cena y paseo de compras nocturno junto a la marina.", en: "Marina night walk, chic cafés and late-night boutique shopping." },
          tourLabel: { es: "Busan Fashion & Shopping Night Tour", en: "Busan Fashion, Shopping & Marina Night Life" },
          tourUrl: "https://www.getyourguide.com/busan-l417/busan-shopping-night-tour-t299892/?partner_id=GYP"
        }
      ],
      nature: [
        {
          morning: { es: "Senderismo en el Parque Nacional Bukhansan con vistas a Seúl.", en: "Scenic morning hike in Bukhansan National Park overlooking Seoul." },
          afternoon: { es: "Paseo en bicicleta por el río Han y picnic coreano.", en: "Riverside bike ride along the Han River with a classic ramen picnic." },
          night: { es: "Crucero nocturno por el río Han con música en vivo.", en: "Han River Night Cruise with fireworks and skyline view." },
          tourLabel: { es: "Excursión a Parque Bukhansan y Río Han", en: "Seoul Bukhansan Nature Hike & Han River Cruise" },
          tourUrl: "https://www.getyourguide.com/seoul-l205/seoraksan-mountain-day-tour-t88512/?partner_id=GYP"
        },
        {
          morning: { es: "Caminata por la pasarela de cristal Oryukdo Skywalk sobre el mar en Busan.", en: "Breathtaking cliffside walk on Oryukdo Skywalk over ocean waves." },
          afternoon: { es: "Paseo en el tren costero de Haeundae Blue Line Park.", en: "Ride the retro Haeundae Blue Line coastal train along ocean cliffs." },
          night: { es: "Cena frente al mar en Songdo con vistas del teleférico marino.", en: "Seaside dinner at Songdo Beach with marine cable car views." },
          tourLabel: { es: "Busan Costa y Tren Panorámico Blue Line", en: "Busan Coast & Haeundae Blue Line Sky Capsule Tour" },
          tourUrl: "https://www.getyourguide.com/busan-l417/busan-coast-hike-tour-t377883/?partner_id=GYP"
        },
        {
          morning: { es: "Subida al cráter volcánico Seongsan Ilchulbong en Jeju.", en: "Sunrise hike up Seongsan Ilchulbong volcanic tuff cone in Jeju." },
          afternoon: { es: "Visita a las cascadas Cheonjiyeon y acantilados de basalto Jusangjeolli.", en: "Visit Cheonjiyeon Waterfalls and Jusangjeolli volcanic cliff pillars." },
          night: { es: "Cena relajante frente al atardecer en las playas de Jeju.", en: "Sunset coastal dinner with ocean breeze on Jeju Island." },
          tourLabel: { es: "Tour por los Paisajes Volcánicos de Jeju", en: "Jeju UNESCO Volcanic Wonders & Waterfalls Day Tour" },
          tourUrl: "https://www.getyourguide.com/jeju-l913/jeju-natural-landscapes-tour-t417292/?partner_id=GYP"
        }
      ]
    }
  },

  france: {
    name: { es: "Francia", en: "France" },
    flag: "🇫🇷",
    cities: ["París", "Niza", "Versalles"],
    locale: {
      survival: [
        { phrase: "Bonjour", pronunciation: { es: "Bon-zhoor • Hola / Buenos días", en: "Bon-zhoor • Hello / Good morning" } },
        { phrase: "Merci beaucoup", pronunciation: { es: "Mer-si bo-koo • Muchas gracias", en: "Mehr-see boh-koo • Thank you very much" } },
        { phrase: "Combien ça coûte ?", pronunciation: { es: "Kom-byen sa kout • ¿Cuánto cuesta?", en: "Kom-byen sah koot • How much does it cost?" } }
      ]
    },
    interests: {
      culture: [
        {
          morning: { es: "Visita guiada al Museo del Louvre y la Gioconda.", en: "Morning guided tour of the Louvre Museum and master artworks." },
          afternoon: { es: "Paseo por la Catedral de Notre-Dame y el barrio Latino.", en: "Stroll around Notre-Dame Cathedral and the historic Latin Quarter." },
          night: { es: "Crucero nocturno por el Río Sena con vistas a la Torre Eiffel iluminada.", en: "Romantic Seine River Night Cruise under the sparkling Eiffel Tower." },
          tourLabel: { es: "París: Louvre, Notre-Dame y Crucero por el Sena", en: "Paris: Louvre Highlights & Seine River Cruise" },
          tourUrl: "https://www.getyourguide.com/paris-l150/paris-seine-cruise-tour-t15052/?partner_id=GYP"
        },
        {
          morning: { es: "Excursión al Palacio de Versalles y la Galería de los Espejos.", en: "Morning excursion to Versailles Palace & the Hall of Mirrors." },
          afternoon: { es: "Recorrido por los inmensos jardines y el Gran Trianón.", en: "Explore Versailles grand fountains, gardens and the Grand Trianon." },
          night: { es: "Regreso a París para cenar en un bistro histórico en Montmartre.", en: "Return to Paris for an intimate French bistro dinner in Montmartre." },
          tourLabel: { es: "Palacio y Jardines de Versalles con Acceso Prioritario", en: "Versailles Palace & Gardens Priority Access Tour" },
          tourUrl: "https://www.getyourguide.com/paris-l150/versailles-palace-tour-t11631/?partner_id=GYP"
        },
        {
          morning: { es: "Paseo por el casco antiguo de Niza (Vieux Nice) y mercado de flores.", en: "Wander through colorful Vieux Nice and the famous Cours Saleya flower market." },
          afternoon: { es: "Vistas panorámicas desde la Colina del Castillo sobre la Costa Azul.", en: "Panoramic vistas over the French Riviera from Castle Hill (Colline du Château)." },
          night: { es: "Cena mediterránea en la icónica Promenade des Anglais.", en: "Mediterranean seaside dining along the Promenade des Anglais." },
          tourLabel: { es: "Niza y Costa Azul: Casco Antiguo y Colina del Castillo", en: "Nice & French Riviera: Old Town & Castle Hill Tour" },
          tourUrl: "https://www.getyourguide.com/nice-l355/nice-city-tour-t98210/?partner_id=GYP"
        }
      ],
      food: [
        {
          morning: { es: "Desayuno parisino con croissant recién horneado y café au lait.", en: "Classic Parisian breakfast with fresh buttery croissant and café au lait." },
          afternoon: { es: "Ruta gastronómica por Le Marais: quesos artesanos, baguettes y macarons.", en: "Gourmet walking tour in Le Marais: artisan cheeses, baguettes & macarons." },
          night: { es: "Cena en un clásico bistro francés con pato confitado y vino tinto.", en: "Traditional French bistro dinner with duck confit and Bordeaux wine." },
          tourLabel: { es: "Tour Gastronómico y Cata de Vinos en París", en: "Paris Gourmet Food, Cheese & Wine Tasting Tour" },
          tourUrl: "https://www.getyourguide.com/paris-l150/paris-food-tour-t16451/?partner_id=GYP"
        },
        {
          morning: { es: "Degustación de especialidades provenzales en Niza: Socca y ensalada niçoise.", en: "Taste authentic Niçois specialties: crispy Socca flatbread and fresh salad." },
          afternoon: { es: "Visita a un viñedo local en Bellet con cata de vinos de la Riviera.", en: "Scenic visit to Bellet vineyards for an exclusive French Riviera wine tasting." },
          night: { es: "Cena de mariscos frescos en el puerto de Niza bajo las estrellas.", en: "Fresh seafood dinner by the port of Nice under the stars." },
          tourLabel: { es: "Niza: Tour Gastronómico y Vinos de Provenza", en: "Nice: Provencal Food & Wine Tasting Walking Tour" },
          tourUrl: "https://www.getyourguide.com/nice-l355/nice-food-wine-tour-t72101/?partner_id=GYP"
        },
        {
          morning: { es: "Paseo por el Mercado Aligre de París con ostras y quesos de campo.", en: "Browse the historic Marché d'Aligre for fresh oysters and artisanal cheeses." },
          afternoon: { es: "Clase de repostería francesa para aprender a hacer eclairs y crepes.", en: "Hands-on French pastry masterclass: create authentic macarons and crepes." },
          night: { es: "Cena gourmet en Saint-Germain-des-Prés.", en: "Fine dining evening in intellectual Saint-Germain-des-Prés." },
          tourLabel: { es: "Taller de Repostería Francesa y Macarons en París", en: "Paris Macaron & French Baking Masterclass" },
          tourUrl: "https://www.getyourguide.com/paris-l150/paris-market-tour-t190539/?partner_id=GYP"
        }
      ],
      shopping: [
        {
          morning: { es: "Paseo por la avenida de los Campos Elíseos y el Arco del Triunfo.", en: "Stroll down iconic Champs-Élysées and climb the Arc de Triomphe." },
          afternoon: { es: "Compras de moda en las Galerías Lafayette y terraza panorámica.", en: "High-fashion shopping at Galeries Lafayette and rooftop city views." },
          night: { es: "Cena elegante y compras de alta costura en la Rue Saint-Honoré.", en: "Chic dinner and luxury window-shopping along Rue Saint-Honoré." },
          tourLabel: { es: "París: Tour de Moda, Historia y Galeries Lafayette", en: "Paris Fashion & Iconic Department Stores Tour" },
          tourUrl: "https://www.getyourguide.com/paris-l150/paris-fashion-shopping-tour-t215632/?partner_id=GYP"
        },
        {
          morning: { es: "Boutiques de perfumería artesanal y moda en Niza.", en: "Artisan perfumery workshops and designer boutiques in Nice." },
          afternoon: { es: "Excursión a Mónaco y Montecarlo para un tour de lujo.", en: "Day excursion to Monaco & Monte Carlo luxury shopping districts." },
          night: { es: "Cena en el casino de Montecarlo y regreso a la costa.", en: "Glamorous evening in Monte Carlo overlooking superyachts." },
          tourLabel: { es: "Tour de Lujo: Niza, Mónaco y Montecarlo", en: "Nice to Monaco & Monte Carlo Luxury Day Tour" },
          tourUrl: "https://www.getyourguide.com/nice-l355/nice-shopping-tour-t333510/?partner_id=GYP"
        },
        {
          morning: { es: "Explora los pasajes cubiertos históricos del siglo XIX en París.", en: "Discover 19th-century secret covered passages and antique bookshops in Paris." },
          afternoon: { es: "Compras vintage y tiendas de diseño independiente en Le Marais.", en: "Vintage shopping and independent designer stores in Le Marais." },
          night: { es: "Cena y café bohemio en la Plaza de los Vosgos.", en: "Bohemian café dinner at historic Place des Vosges." },
          tourLabel: { es: "Pasajes Secretos y Tiendas Ocultas de París", en: "Paris Secret Covered Passages & Vintage Hidden Gems Tour" },
          tourUrl: "https://www.getyourguide.com/paris-l150/paris-night-shopping-tour-t268526/?partner_id=GYP"
        }
      ],
      nature: [
        {
          morning: { es: "Paseo por los Jardines de Luxemburgo y el Panteón.", en: "Morning stroll in Luxembourg Gardens and the Latin Quarter." },
          afternoon: { es: "Paseo en bicicleta por los senderos verdes del Bosque de Boulogne.", en: "Peaceful bike ride through the green trails of Bois de Boulogne." },
          night: { es: "Cena en terraza frente al Sena con brisa parisina.", en: "Riverside terrace dinner enjoying the cool Paris evening breeze." },
          tourLabel: { es: "Tour en Bicicleta por los Parques y el Sena de París", en: "Paris Highlights & River Seine Scenic Bike Tour" },
          tourUrl: "https://www.getyourguide.com/paris-l150/paris-river-seine-cruise-tour-t168982/?partner_id=GYP"
        },
        {
          morning: { es: "Excursión a los acantilados de Èze con vistas panorámicas al Mediterráneo.", en: "Clifftop village of Èze with breathtaking Mediterranean panoramic views." },
          afternoon: { es: "Paseo por Saint-Jean-Cap-Ferrat y la Villa Ephrussi de Rothschild.", en: "Walk along Saint-Jean-Cap-Ferrat peninsula and gardens of Villa Ephrussi." },
          night: { es: "Cena provenzal junto al mar en la bahía de Villefranche.", en: "Romantic seaside dinner in picturesque Villefranche-sur-Mer bay." },
          tourLabel: { es: "Costa Azul: Èze, Mónaco y Vistas Panorámicas", en: "French Riviera: Èze Medieval Village & Cap-Ferrat Tour" },
          tourUrl: "https://www.getyourguide.com/nice-l355/cote-dazur-coast-tour-t214398/?partner_id=GYP"
        },
        {
          morning: { es: "Visita a los jardines de Claude Monet en Giverny.", en: "Morning visit to Claude Monet's water lily gardens in Giverny." },
          afternoon: { es: "Paseo por el estanque de los nenúfares y el puente japonés.", en: "Walk around the iconic Japanese bridge and weeping willow ponds." },
          night: { es: "Regreso a París para una cena tranquila de campo.", en: "Return to Paris for a relaxing countryside-style bistro dinner." },
          tourLabel: { es: "Giverny: Jardines y Casa de Claude Monet", en: "Giverny & Monet's Garden Tour from Paris" },
          tourUrl: "https://www.getyourguide.com/paris-l150/versailles-gardens-tour-t223867/?partner_id=GYP"
        }
      ]
    }
  }
};

const durationCatalog = {
  3: { label: { es: "3 Días (Express)", en: "3 Days (Express)" }, days: 3 },
  5: { label: { es: "5 Días (Esencial)", en: "5 Days (Essential)" }, days: 5 },
  7: { label: { es: "7 Días (Inmersión Total)", en: "7 Days (Total Immersion)" }, days: 7 }
};

function getCurrentLang() {
  return (window.state && window.state.lang) || localStorage.getItem('hubLang') || 'es';
}

function getDayPlan(dayNumber, destinationKey, interestKey, lang) {
  const destination = destinationCatalog[destinationKey];
  const activities = destination.interests[interestKey];
  const selectedActivity = activities[(dayNumber - 1) % activities.length];

  const phraseSet = destination.locale.survival;
  const selectedPhrase = phraseSet[(dayNumber - 1) % phraseSet.length];

  const city = destination.cities[(dayNumber - 1) % destination.cities.length];

  return {
    day: dayNumber,
    city,
    morning: selectedActivity.morning[lang] || selectedActivity.morning.es,
    afternoon: selectedActivity.afternoon[lang] || selectedActivity.afternoon.es,
    night: selectedActivity.night[lang] || selectedActivity.night.es,
    phrase: selectedPhrase.phrase,
    pronunciation: selectedPhrase.pronunciation[lang] || selectedPhrase.pronunciation.es,
    tourLabel: selectedActivity.tourLabel[lang] || selectedActivity.tourLabel.es,
    tourUrl: selectedActivity.tourUrl
  };
}

function buildItinerary(destinationKey, durationKey, interestKey, lang) {
  const destination = destinationCatalog[destinationKey];
  const duration = durationCatalog[durationKey];
  const totalDays = duration.days;

  const itinerary = [];

  for (let day = 1; day <= totalDays; day += 1) {
    itinerary.push(getDayPlan(day, destinationKey, interestKey, lang));
  }

  return {
    destination,
    duration,
    interestKey,
    itinerary,
    lang
  };
}

function renderTravelItinerary(plan) {
  const target = document.getElementById("plannerResult");
  if (!target) return;

  const lang = plan.lang || getCurrentLang();

  const labels = {
    es: {
      day: "Día",
      morning: "🌅 Mañana",
      afternoon: "☀️ Tarde",
      night: "🌙 Noche",
      phraseTitle: "💬 Frase de supervivencia",
      tourTitle: "🎟️ Actividad / Tour Recomendado",
      headerTitle: "Itinerario Personalizado de Viaje",
      printBtn: "🖨️ Imprimir / Guardar PDF",
      ctaPreply: "🎓 Prepárate con un tutor nativo en Preply →",
      ctaKit: "📥 Guía gratis en PDF para viajeros →"
    },
    en: {
      day: "Day",
      morning: "🌅 Morning",
      afternoon: "☀️ Afternoon",
      night: "🌙 Night",
      phraseTitle: "💬 Survival Phrase of the Day",
      tourTitle: "🎟️ Recommended Tour & Activity",
      headerTitle: "Custom Travel Itinerary",
      printBtn: "🖨️ Print / Save as PDF",
      ctaPreply: "🎓 Practice with a native tutor on Preply →",
      ctaKit: "📥 Download Free Survival PDF Guide →"
    }
  }[lang] || labels.es;

  const itineraryHtml = plan.itinerary
    .map((day) => {
      return `
        <article class="day-card">
          <div class="day-card-header">
            <h4>${labels.day} ${day.day} — ${day.city}</h4>
            <span class="day-number">${day.day}</span>
          </div>

          <div class="time-block">
            <span class="time-label">${labels.morning}</span>
            <p class="time-content">${day.morning}</p>
          </div>

          <div class="time-block">
            <span class="time-label">${labels.afternoon}</span>
            <p class="time-content">${day.afternoon}</p>
          </div>

          <div class="time-block">
            <span class="time-label">${labels.night}</span>
            <p class="time-content">${day.night}</p>
          </div>

          <div class="phrase-box">
            <span class="phrase-title">${labels.phraseTitle}</span>
            <strong>${day.phrase}</strong>
            <small>${day.pronunciation}</small>
          </div>

          <div class="tour-card">
            <strong>${labels.tourTitle}</strong>
            <a href="${day.tourUrl}" target="_blank" rel="noopener">
              ${day.tourLabel} →
            </a>
          </div>
        </article>
      `;
    })
    .join("");

  const destName = plan.destination.name[lang] || plan.destination.name.es;
  const durLabel = plan.duration.label[lang] || plan.duration.label.es;

  const summary = `
    <div class="itinerary-shell">
      <div class="itinerary-header">
        <div>
          <div class="itinerary-meta">${plan.destination.flag} ${destName} · ${durLabel}</div>
          <h3>${labels.headerTitle}</h3>
        </div>

        <div class="itinerary-actions">
          <button class="print-btn" id="printItineraryBtn" type="button">${labels.printBtn}</button>
        </div>
      </div>

      <div class="itinerary-grid">
        ${itineraryHtml}
      </div>

      <div class="planner-footer-links">
        <a
          href="https://preply.sjv.io/c/7528742/1987575/24422"
          target="_blank"
          rel="noopener"
        >
          ${labels.ctaPreply}
        </a>
        <a
          href="https://resource-hub-seven-mu.vercel.app/#recursos"
          target="_blank"
          rel="noopener"
        >
          ${labels.ctaKit}
        </a>
      </div>
    </div>
  `;

  target.innerHTML = summary;
  target.classList.remove("hidden");

  const printButton = document.getElementById("printItineraryBtn");
  if (printButton) {
    printButton.addEventListener("click", () => {
      window.print();
    });
  }
}

function regenerateCurrentPlan() {
  const destEl = document.getElementById("destinationSelect");
  const durEl = document.getElementById("durationSelect");
  const intEl = document.getElementById("interestSelect");

  const destination = destEl ? destEl.value : "japan";
  const duration = durEl ? durEl.value : "5";
  const interest = intEl ? intEl.value : "culture";
  const lang = getCurrentLang();

  const plan = buildItinerary(destination, duration, interest, lang);
  renderTravelItinerary(plan);
}

function handleFormSubmit(event) {
  event.preventDefault();
  regenerateCurrentPlan();
}

// Expose to window for global app.js language switch
window.regenerateTravelPlanner = regenerateCurrentPlan;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("travelPlannerForm");
  if (!form) return;

  form.addEventListener("submit", handleFormSubmit);
  regenerateCurrentPlan();
});
