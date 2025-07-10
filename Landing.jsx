import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Landing() {
  const [language, setLanguage] = useState("fr");

  const t = (key) => {
    const dict = {
      fr: {
        tagline: "Importation de véhicules récents en Algérie, sans stress",
        heroTitle: "Votre passerelle vers des voitures japonaises & du Golfe",
        heroCTA: "Demander un devis",
        processTitle: "Comment ça marche",
        step1: "Sélection du véhicule",
        step2: "Devis CIF transparent",
        step3: "Paiement sécurisé",
        step4: "Expédition & dédouanement",
        inventoryTitle: "Exemples de véhicules disponibles",
        contactTitle: "Contactez‑nous",
        aboutTitle: "Qui sommes‑nous"
      },
      en: {
        tagline: "Stress‑free vehicle import to Algeria",
        heroTitle: "Your gateway to Japanese & Gulf cars",
        heroCTA: "Request a Quote",
        processTitle: "How It Works",
        step1: "Select vehicle",
        step2: "Transparent CIF quote",
        step3: "Secure payment",
        step4: "Shipping & customs",
        inventoryTitle: "Sample Inventory",
        contactTitle: "Contact us",
        aboutTitle: "About us"
      }
    };
    return dict[language][key];
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* LANG TOGGLE */}
      <div className="flex justify-end p-4 gap-2">
        <Button variant={language === "fr" ? "default" : "secondary"} onClick={() => setLanguage("fr")}>FR</Button>
        <Button variant={language === "en" ? "default" : "secondary"} onClick={() => setLanguage("en")}>EN</Button>
      </div>

      {/* HERO */}
      <section className="text-center py-16 px-4 bg-white shadow-md">
        <h2 className="text-xl mb-2 uppercase tracking-wider text-primary font-semibold">{t("tagline")}</h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("heroTitle")}</h1>
        <Button size="lg" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>{t("heroCTA")}</Button>
      </section>

      {/* PROCESS */}
      <section className="py-12 px-4 md:px-20 bg-gray-100" id="process">
        <h2 className="text-3xl font-semibold text-center mb-10">{t("processTitle")}</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[1,2,3,4].map((n,i)=> (
            <Card key={n} className="rounded-2xl shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="text-5xl font-black text-primary mb-3">{n}</div>
                <p className="text-lg font-medium">{t(`step${n}`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* INVENTORY */}
      <section className="py-12 px-4 md:px-20" id="inventory">
        <h2 className="text-3xl font-semibold text-center mb-10">{t("inventoryTitle")}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Placeholder cards */}
          {[1,2,3].map((idx) => (
            <Card key={idx} className="rounded-2xl overflow-hidden shadow-sm">
              <img src="/placeholder-car.jpg" alt="Car" className="w-full h-48 object-cover"/>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">Toyota Corolla Axio 2025</h3>
                <p className="text-sm text-muted-foreground">1.5L • 0 km • BVM5</p>
                <p className="mt-2 font-bold text-primary">11 228 USD FOB</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-12 px-4 md:px-20 bg-gray-100" id="contact">
        <h2 className="text-3xl font-semibold text-center mb-6">{t("contactTitle")}</h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="mb-4">WhatsApp : +213 XXX XXX XXX</p>
          <p>Email : contact@votresite.dz</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-muted-foreground bg-white border-t">
        © {new Date().getFullYear()} [Votre Marque] – Tous droits réservés.
      </footer>
    </div>
  );
}

