/* travel-planner.js */

const destinationCatalog = {
  japan: {
    name: "Japón",
    flag: "🇯🇵",
    cities: ["Tokio", "Kioto", "Osaka", "Monte Fuji"],
    locale: {
      survival: [
        { phrase: "Kore wa ikura desu ka?", pronunciation: "Kore wa ikura desu ka? • ¿Cuánto cuesta esto?" },
        { phrase: "Arigatou gozaimasu", pronunciation: "A-ri-ga-to-u go-za-i-ma-su • Muchas gracias" },
        { phrase: "Sumimasen", pronunciation: "Su-mi-ma-sen • Disculpe / Perdón" }
      ]
    },
    interests: {
      culture: [
        {
          morning: "Visita los templos de Asakusa y el barrio de Senso-ji con una caminata tranquila en la mañana.",
          afternoon: "Recorre el distrito histórico de Higashiyama y disfruta de un paseo cultural por Gion.",
          night: "Cena tradicional en un ryokan con kaiseki y un paseo nocturno por Pontocho.",
          tourLabel: "Tour de 1 día por Tokio y Kioto cultural",
          tourUrl: "https://www.getyourguide.com/tokyo-l55/tokyo-kyoto-shinkansen-day-trip-t281733/?partner_id=GYP"
        },
        {
          morning: "Explora el santuario Fushimi Inari y sus miles de torii.",
          afternoon: "Visita Kiyomizu-dera y el barrio de Higashiyama con cafés tradicionales.",
          night: "Paseo iluminado por Gion y cena de estilo izakaya.",
          tourLabel: "Tour cultural por Kyoto y Fushimi Inari",
          tourUrl: "https://www.getyourguide.com/kyoto-l110/fushimi-inari-temple-tour-t163053/?partner_id=GYP"
        },
        {
          morning: "Recorre el castillo de Osaka y el barrio de Dotonbori.",
          afternoon: "Descubre el legado histórico y la arquitectura moderna alrededor del río.",
          night: "Cena junto al canal y camino de luces en el centro de Osaka.",
          tourLabel: "Osaka & Dotonbori cultural experience",
          tourUrl: "https://www.getyourguide.com/osaka-l155/osaka-dotonbori-night-food-tour-t201540/?partner_id=GYP"
        }
      ],
      food: [
        {
          morning: "Mercado tradicional con desayuno tipo konbini premium y café local.",
          afternoon: "Explora ramen, okonomiyaki y street food en Shinsekai o Tsukiji.",
          night: "Cena recomendada: sushi omakase o izakaya con sake de temporada.",
          tourLabel: "Explora la gastronomía de Tokio y Osaka",
          tourUrl: "https://www.getyourguide.com/tokyo-l55/tokyo-food-tour-t11609/?partner_id=GYP"
        },
        {
          morning: "Recorrido por la food alley de Kyoto con wagashi, noodles y café en barrio tradicional.",
          afternoon: "Prueba un menú de comida callejera reinvención local en Pontocho.",
          night: "Cena de tempura, udon o sushi y paseo bajo luces de Gion.",
          tourLabel: "Gastronomía local en Kyoto",
          tourUrl: "https://www.getyourguide.com/kyoto-l110/kyoto-gourmet-food-tour-t27608/?partner_id=GYP"
        },
        {
          morning: "Desayuno de cafes con pastelitos y comida local en un barrio auténtico.",
          afternoon: "Explora Osaka como capital de street food: takoyaki, kushikatsu y ramen.",
          night: "Cena de mercado con sake y ambiente de vida nocturna.",
          tourLabel: "Tour de comida callejera en Osaka",
          tourUrl: "https://www.getyourguide.com/osaka-l155/osaka-food-tour-t35347/?partner_id=GYP"
        }
      ],
      shopping: [
        {
          morning: "Explora Harajuku y Omotesando para moda, cafés y estilo urbano.",
          afternoon: "Visita Shibuya y el centro comercial más premium y de última moda.",
          night: "Cena en el distrito de Shibuya y paseo por la zona neón.",
          tourLabel: "Tokyo Street Fashion & Shibuya Night Tour",
          tourUrl: "https://www.getyourguide.com/tokyo-l55/shibuya-omotesando-fashion-tour-t143947/?partner_id=GYP"
        },
        {
          morning: "Explora boutiques en Kyoto Studio Park & tradicional shopping street.",
          afternoon: "Recorre arcadas y tienda de manga y diseño contemporáneo.",
          night: "Cena y paseo por la zona de Gion con ambientación elegante.",
          tourLabel: "Kyoto shopping and design tour",
          tourUrl: "https://www.getyourguide.com/kyoto-l110/kyoto-street-shopping-tour-t199431/?partner_id=GYP"
        },
        {
          morning: "Compra en el centro comercial de Osaka y barrio de Nipponbashi.",
          afternoon: "Explora tiendas de anime, cultura pop y moda alternativa.",
          night: "Cena con ambiente urbano, luz y música en Dotonbori.",
          tourLabel: "Osaka Anime & Shopping Tour",
          tourUrl: "https://www.getyourguide.com/osaka-l155/osaka-anime-shopping-tour-t117474/?partner_id=GYP"
        }
      ],
      nature: [
        {
          morning: "Ruta al Monte Fuji y zonas cercanas con vistas panorámicas.",
          afternoon: "Paseo en lago y experiencia de senderismo o descanso al aire libre.",
          night: "Cena con paisaje de montaña y vistas de la noche.",
          tourLabel: "Tour de 1 día al Monte Fuji y Hakone",
          tourUrl: "https://www.getyourguide.com/tokyo-l55/mt-fuji-hakone-day-tour-t12596/?partner_id=GYP"
        },
        {
          morning: "Paseo por jardines Kamigamo o un sendero natural en la montaña.",
          afternoon: "Visita a un pueblo tradicional y caminata por territorio verde.",
          night: "Cena con ambiente sereno y noche tranquila bajo faroles.",
          tourLabel: "Kyoto nature and temple escape",
          tourUrl: "https://www.getyourguide.com/kyoto-l110/kyoto-nature-tour-t100098/?partner_id=GYP"
        },
        {
          morning: "Paseo escénico por reservas naturales y lagos de Osaka.",
          afternoon: "Visita a un mirador con vistas a la naturaleza y pausa para café.",
          night: "Cena en azotea con vistas panorámicas.",
          tourLabel: "Nature and city escape in Osaka",
          tourUrl: "https://www.getyourguide.com/osaka-l155/osaka-city-nature-tour-t315489/?partner_id=GYP"
        }
      ]
    }
  },

  korea: {
    name: "Corea del Sur",
    flag: "🇰🇷",
    cities: ["Seúl", "Busan", "Isla Jeju"],
    locale: {
      survival: [
        { phrase: "Mianhamnida", pronunciation: "Mi-an-ha-mi-ni-da • Perdón / Disculpe" },
        { phrase: "Juseyo", pronunciation: "Ju-se-yo • Por favor" },
        { phrase: "Eolmaeyo?", pronunciation: "Eol-ma-ye-yo? • ¿Cuánto cuesta?" }
      ]
    },
    interests: {
      culture: [
        {
          morning: "Explora Gyeongbokgung y la historia de la dinastía Joseon.",
          afternoon: "Tour por Bukchon Hanok Village y centros culturales tradicionales.",
          night: "Cena coreana en Myeongdong y paseo bajo luces de Seúl.",
          tourLabel: "Seoul Palace & Hanok Culture Tour",
          tourUrl: "https://www.getyourguide.com/seoul-l205/seoul-palace-hanok-tour-t14511/?partner_id=GYP"
        },
        {
          morning: "Templos y rincones culturales en la zona centro-sur de Seúl.",
          afternoon: "Museos y recorrido por la ciudad antigua con cafés artísticos.",
          night: "Cena con comida coreana tradicional y vida nocturna local.",
          tourLabel: "Cultural Seoul heart tour",
          tourUrl: "https://www.getyourguide.com/seoul-l205/seoul-night-cultural-tour-t234774/?partner_id=GYP"
        },
        {
          morning: "Visita a distritos patrimoniales y templos en Busan con guía local.",
          afternoon: "Explora museos, calles históricas y miradores al mar.",
          night: "Korean BBQ y paseo nocturno por la costa.",
          tourLabel: "Busan culture & coast day trip",
          tourUrl: "https://www.getyourguide.com/busan-l417/busan-museums-and-coast-tour-t499201/?partner_id=GYP"
        }
      ],
      food: [
        {
          morning: "Desayuno coreano con bibimbap, kimchi y café de barrio.",
          afternoon: "Explora mercados en Myeongdong, Hongdae y puestos callejeros.",
          night: "Cena recomendada: K-BBQ + soju y paseo nocturno por Seúl.",
          tourLabel: "Seoul street food & foodie tour",
          tourUrl: "https://www.getyourguide.com/seoul-l205/seoul-food-tour-t22964/?partner_id=GYP"
        },
        {
          morning: "Mercado de Busan y café tradicional con desayuno local.",
          afternoon: "Street food por la ciudad: tteokbokki, hotteok, fish cakes.",
          night: "Cena de mariscos y visita a la zona costera iluminada.",
          tourLabel: "Busan gourmet street food tour",
          tourUrl: "https://www.getyourguide.com/busan-l417/busan-food-tour-t315340/?partner_id=GYP"
        },
        {
          morning: "Ruta gastronómica con café local y postre en Jeju.",
          afternoon: "Paseo por el mercado y picoteo de especialidades regionales.",
          night: "Cena frente al mar con mariscos frescos.",
          tourLabel: "Jeju taste & coastal food tour",
          tourUrl: "https://www.getyourguide.com/jeju-l913/jeju-food-tour-t43339/?partner_id=GYP"
        }
      ],
      shopping: [
        {
          morning: "Explora Hongdae y el estilo K-pop, moda y diseño joven.",
          afternoon: "Recorre Myeongdong y tiendas de belleza y streetwear.",
          night: "Cena y paseo por la zona más vibrante de Seúl.",
          tourLabel: "K-pop & shopping tour in Seoul",
          tourUrl: "https://www.getyourguide.com/seoul-l205/seoul-shopping-k-pop-tour-t291913/?partner_id=GYP"
        },
        {
          morning: "Visita Lotte World y la zona de compras de la ciudad.",
          afternoon: "Experiencia VIP o mirador en la Torre Lotte World.",
          night: "Noche de luces, entretenimiento y skyline en Seúl.",
          tourLabel: "VIP Lotte World & Seoul Tower experience",
          tourUrl: "https://www.getyourguide.com/seoul-l205/lotte-world-tower-ticket-t59458/?partner_id=GYP"
        },
        {
          morning: "Recorrido de tiendas de belleza, moda y accesorios en Busan.",
          afternoon: "Visita de un centro de moda local con estilo urbano.",
          night: "Cena cerca del puerto y paseo de noche en la costa.",
          tourLabel: "Busan fashion & nightlife tour",
          tourUrl: "https://www.getyourguide.com/busan-l417/busan-shopping-night-tour-t299892/?partner_id=GYP"
        }
      ],
      nature: [
        {
          morning: "Ruta de senderismo y vistas panorámicas en Seoraksan o zonas verdes.",
          afternoon: "Paseo tranquilo en un parque con paisaje natural y descanso.",
          night: "Cena en un local con terraza y vistas de la ciudad.",
          tourLabel: "Seoul nature escape day trip",
          tourUrl: "https://www.getyourguide.com/seoul-l205/seoraksan-mountain-day-tour-t88512/?partner_id=GYP"
        },
        {
          morning: "Senderismo en Busan con miradores costeros y naturaleza.",
          afternoon: "Paseo de mar y relajación en zonas con vista al océano.",
          night: "Cena frente al mar con ambiente relajado.",
          tourLabel: "Busan coast and mountain day",
          tourUrl: "https://www.getyourguide.com/busan-l417/busan-coast-hike-tour-t377883/?partner_id=GYP"
        },
        {
          morning: "Visita a Jeju con cascadas, conos volcánicos y paisajes naturales.",
          afternoon: "Parque y relax para disfrutar del paisaje insular.",
          night: "Cena junto al mar con ambiente de brisa marina.",
          tourLabel: "Jeju island nature day tour",
          tourUrl: "https://www.getyourguide.com/jeju-l913/jeju-natural-landscapes-tour-t417292/?partner_id=GYP"
        }
      ]
    }
  },

  france: {
    name: "Francia",
    flag: "🇫🇷",
    cities: ["París", "Niza", "Versalles"],
    locale: {
      survival: [
        { phrase: "Bonjour", pronunciation: "Bon-zhoor • Hola / Buenos días" },
        { phrase: "Merci", pronunciation: "Mer-see • Gracias" },
        { phrase: "Combien ça coûte ?", pronunciation: "Kom-byen sa kout • ¿Cuánto cuesta?" }
      ]
    },
    interests: {
      culture: [
        {
          morning: "Visita el Museo del Louvre y sus salas más representativas.",
          afternoon: "Paseo por Le Marais y la arquitectura histórica de París.",
          night: "Cena romántica cerca del Sena y paseo iluminado por la ciudad.",
          tourLabel: "Tour de 1 día por París y crucero en el Sena",
          tourUrl: "https://www.getyourguide.com/paris-l150/paris-seine-cruise-tour-t15052/?partner_id=GYP"
        },
        {
          morning: "Explora Versalles y sus jardines en una visita guiada.",
          afternoon: "Recorrido por palacios, arquitectura y salones históricos.",
          night: "Cena elegante y recorrido nocturno por París.",
          tourLabel: "Versailles palace & gardens tour",
          tourUrl: "https://www.getyourguide.com/paris-l150/versailles-palace-tour-t11631/?partner_id=GYP"
        },
        {
          morning: "Museos y arquitectura clásica en Niza con ambiente mediterráneo.",
          afternoon: "Paseo cultural por calles con cafés y mercados locales.",
          night: "Cena junto al mar y paseo iluminado en la costa.",
          tourLabel: "Niza cultural coast tour",
          tourUrl: "https://www.getyourguide.com/nice-l355/nice-city-tour-t98210/?partner_id=GYP"
        }
      ],
      food: [
        {
          morning: "Desayuno parisino con croissant, café y panadería local.",
          afternoon: "Tour gastronómico por bistros, mercados y queserías.",
          night: "Cena clásica francesa con vino y ambiente de boulevard.",
          tourLabel: "Paris food & wine experience",
          tourUrl: "https://www.getyourguide.com/paris-l150/paris-food-tour-t16451/?partner_id=GYP"
        },
        {
          morning: "Explora un mercado local y productos de temporada en Niza.",
          afternoon: "Paseo gastronómico con tapas mediterráneas y aperitivos.",
          night: "Cena de pescado y marisco con vista al mar.",
          tourLabel: "Nice Mediterranean food itinerary",
          tourUrl: "https://www.getyourguide.com/nice-l355/nice-food-wine-tour-t72101/?partner_id=GYP"
        },
        {
          morning: "Paseo por mercados de París con pan, queso y frutas frescas.",
          afternoon: "Prueba especialidades en un barrio gastronómico histórico.",
          night: "Cena elegante e inspirada en la cocina francesa moderna.",
          tourLabel: "French market & bistro tour",
          tourUrl: "https://www.getyourguide.com/paris-l150/paris-market-tour-t190539/?partner_id=GYP"
        }
      ],
      shopping: [
        {
          morning: "Explora el distrito de Champs-Élysées y boutiques premium.",
          afternoon: "Compra en Le Marais y tiendas de moda vintage.",
          night: "Cena en Saint-Germain y paseo por la iluminación de París.",
          tourLabel: "Paris shopping & fashion experience",
          tourUrl: "https://www.getyourguide.com/paris-l150/paris-fashion-shopping-tour-t215632/?partner_id=GYP"
        },
        {
          morning: "Recorrido por boutiques y joyerías únicas en Niza.",
          afternoon: "Tiempo libre para moda, accesorios y estilo mediterráneo.",
          night: "Cena elegante en la avenida principal y paseo por el puerto.",
          tourLabel: "Nice luxury shopping day",
          tourUrl: "https://www.getyourguide.com/nice-l355/nice-shopping-tour-t333510/?partner_id=GYP"
        },
        {
          morning: "Recorrido por una zona comercial parisina con galerías cubiertas.",
          afternoon: "Tiempo para moda, regalos y objetos locales de diseño.",
          night: "Paseo en la ciudad con gastronomía y ambiente parisino.",
          tourLabel: "Paris city shopping + night walk",
          tourUrl: "https://www.getyourguide.com/paris-l150/paris-night-shopping-tour-t268526/?partner_id=GYP"
        }
      ],
      nature: [
        {
          morning: "Paseo por el bosque de Vincennes o jardines botánicos.",
          afternoon: "Ruta escénica con vistas en París y río Sena.",
          night: "Cena ligera con vistas desde un mirador o terraza.",
          tourLabel: "Paris nature & river cruise",
          tourUrl: "https://www.getyourguide.com/paris-l150/paris-river-seine-cruise-tour-t168982/?partner_id=GYP"
        },
        {
          morning: "Excursión a la Costa Azul con playas y colinas mediterráneas.",
          afternoon: "Paseo tranquilo por jardines con vistas al mar.",
          night: "Cena junto al puerto y paseo nocturno en Niza.",
          tourLabel: "Nice coastal viewpoint tour",
          tourUrl: "https://www.getyourguide.com/nice-l355/cote-dazur-coast-tour-t214398/?partner_id=GYP"
        },
        {
          morning: "Visita a Versalles y sus extensos jardines en una ruta serena.",
          afternoon: "Paseo de naturaleza, fuentes y estanques históricos.",
          night: "Cena clásica con poca prisa y ambientación elegante.",
          tourLabel: "Versailles gardens & palace walk",
          tourUrl: "https://www.getyourguide.com/paris-l150/versailles-gardens-tour-t223867/?partner_id=GYP"
        }
      ]
    }
  }
};

const durationCatalog = {
  3: { label: "3 Días (Express)", days: 3 },
  5: { label: "5 Días (Esencial)", days: 5 },
  7: { label: "7 Días (Inmersión Total)", days: 7 }
};

function getDayPlan(dayNumber, destinationKey, interestKey) {
  const destination = destinationCatalog[destinationKey];
  const activities = destination.interests[interestKey];
  const selectedActivity = activities[(dayNumber - 1) % activities.length];

  const phraseSet = destination.locale.survival;
  const selectedPhrase = phraseSet[(dayNumber - 1) % phraseSet.length];

  const city = destination.cities[(dayNumber - 1) % destination.cities.length];

  return {
    day: dayNumber,
    city,
    morning: selectedActivity.morning,
    afternoon: selectedActivity.afternoon,
    night: selectedActivity.night,
    phrase: selectedPhrase.phrase,
    pronunciation: selectedPhrase.pronunciation,
    tourLabel: selectedActivity.tourLabel,
    tourUrl: selectedActivity.tourUrl
  };
}

function buildItinerary(destinationKey, durationKey, interestKey) {
  const destination = destinationCatalog[destinationKey];
  const duration = durationCatalog[durationKey];
  const totalDays = duration.days;

  const itinerary = [];

  for (let day = 1; day <= totalDays; day += 1) {
    itinerary.push(getDayPlan(day, destinationKey, interestKey));
  }

  return {
    destination,
    duration,
    interestKey,
    itinerary
  };
}

function renderItinerary(plan) {
  const target = document.getElementById("plannerResult");
  if (!target) return;

  const itineraryHtml = plan.itinerary
    .map((day) => {
      return `
        <article class="day-card">
          <div class="day-card-header">
            <h4>Día ${day.day} — ${day.city}</h4>
            <span class="day-number">${day.day}</span>
          </div>

          <div class="time-block">
            <span class="time-label">🌅 Mañana</span>
            <p class="time-content">${day.morning}</p>
          </div>

          <div class="time-block">
            <span class="time-label">☀️ Tarde</span>
            <p class="time-content">${day.afternoon}</p>
          </div>

          <div class="time-block">
            <span class="time-label">🌙 Noche</span>
            <p class="time-content">${day.night}</p>
          </div>

          <div class="phrase-box">
            <span class="phrase-title">💬 Frase de supervivencia</span>
            <strong>${day.phrase}</strong>
            <small>${day.pronunciation}</small>
          </div>

          <div class="tour-card">
            <strong>🎟️ Actividad / Tour Recomendado</strong>
            <a href="${day.tourUrl}" target="_blank" rel="noopener">
              ${day.tourLabel} →
            </a>
          </div>
        </article>
      `;
    })
    .join("");

  const summary = `
    <div class="itinerary-shell">
      <div class="itinerary-header">
        <div>
          <div class="itinerary-meta">${plan.destination.flag} ${plan.destination.name} · ${plan.duration.label}</div>
          <h3>Itinerario Personalizado de Viaje</h3>
        </div>

        <div class="itinerary-actions">
          <button class="print-btn" id="printItineraryBtn" type="button">🖨️ Imprimir / Guardar PDF</button>
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
          🎓 Prepárate con un tutor nativo en Preply →
        </a>
        <a
          href="https://resource-hub-seven-mu.vercel.app/#recursos"
          target="_blank"
          rel="noopener"
        >
          📥 Guía gratis en PDF para viajeros →
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

function handleFormSubmit(event) {
  event.preventDefault();

  const destination = document.getElementById("destinationSelect").value;
  const duration = document.getElementById("durationSelect").value;
  const interest = document.getElementById("interestSelect").value;

  const itineraryPlan = buildItinerary(destination, duration, interest);

  renderItinerary(itineraryPlan);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("travelPlannerForm");
  if (!form) return;

  form.addEventListener("submit", handleFormSubmit);

  const initialPlan = buildItinerary("japan", "5", "culture");
  renderItinerary(initialPlan);
});
