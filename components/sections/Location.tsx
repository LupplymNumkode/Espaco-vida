import { MapPin, CalendarCheck, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { locationData } from "@/lib/data";
import { whatsappMessages } from "@/lib/whatsapp";
import WhatsappLink from "@/components/ui/WhatsappLink";
import Reveal from "@/components/utils/Reveal";

const infoIconStyle = {
  background: "var(--teal-soft)",
  color: "var(--purple)",
};

export default function Location() {
  return (
    <section className="py-[112px]" id="localizacao">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Info column */}
          <Reveal>
            <span className="eyebrow">Localização</span>
            <h2 className="m-0" style={{ color: "var(--plum)" }}>
              Estamos no centro de Palhoça.
            </h2>
            <p className="mt-4 text-base leading-[1.65]" style={{ color: "var(--muted)" }}>
              Um espaço de fácil acesso para receber pacientes e famílias com conforto,
              organização e acolhimento.
            </p>

            {/* Info list */}
            <div className="mt-8 flex flex-col gap-5">
              {[
                {
                  Icon: MapPin,
                  label: "Endereço",
                  content: (
                    <span className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      {locationData.building}
                      <br />
                      {locationData.address}
                      {locationData.postalCode && <>, {locationData.postalCode}</>}
                      <br />
                      {locationData.city}/{locationData.state}
                    </span>
                  ),
                },
                {
                  Icon: CalendarCheck,
                  label: "Horário",
                  content: (
                    <span className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      {locationData.hours ?? "Atendimento em horário comercial. Consulte disponibilidade pelo WhatsApp."}
                    </span>
                  ),
                },
                {
                  Icon: Phone,
                  label: "Contato",
                  content: (
                    <span className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      Fale com a equipe pelo WhatsApp para tirar dúvidas, consultar horários
                      ou iniciar uma avaliação.
                    </span>
                  ),
                },
              ].map(({ Icon, label, content }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl grid place-items-center shrink-0"
                    style={infoIconStyle}
                  >
                    <Icon size={19} />
                  </div>
                  <div>
                    <strong className="text-sm font-[900] block mb-0.5" style={{ color: "var(--plum)" }}>
                      {label}
                    </strong>
                    {content}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs — mesma altura */}
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsappLink
                message={whatsappMessages.location}
                aria-label="Chamar no WhatsApp para informações sobre localização"
                className="inline-flex items-center justify-center gap-2 h-[50px] px-6 rounded-full text-sm font-[900] text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "var(--purple)",
                  boxShadow: "0 14px 36px rgba(75, 11, 107, 0.24)",
                }}
              >
                <FaWhatsapp size={16} /> Chamar no WhatsApp
              </WhatsappLink>

              <a
                href={locationData.mapsDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir localização no Google Maps"
                className="inline-flex items-center justify-center gap-2 h-[50px] px-6 rounded-full text-sm font-[900] border transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  color: "var(--purple)",
                  background: "#FFFFFF",
                  borderColor: "rgba(75,11,107,0.18)",
                  boxShadow: "0 8px 24px rgba(75,11,107,0.06)",
                }}
              >
                <MapPin size={15} /> Abrir no Google Maps
              </a>
            </div>
          </Reveal>

          {/* Map — premium placeholder */}
          <div
            className="w-full rounded-[24px] overflow-hidden"
            style={{
              minHeight: 380,
              boxShadow: "var(--shadow)",
              border: "1px solid #E7DDEC",
            }}
          >
            {locationData.mapsEmbedSrc ? (
              <iframe
                src={locationData.mapsEmbedSrc}
                title="Localização Espaço Vida Reabilitação no Google Maps"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 380 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div
                className="relative w-full h-full flex flex-col items-center justify-center gap-5 p-10 text-center"
                style={{
                  minHeight: 380,
                  background: "linear-gradient(160deg, #F4EFF8 0%, #EEFDFB 100%)",
                }}
              >
                {/* Grid decorativo */}
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(#E7DDEC 1px, transparent 1px), linear-gradient(90deg, #E7DDEC 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                {/* Pin */}
                <div
                  className="relative w-16 h-16 rounded-full grid place-items-center"
                  style={{
                    background: "var(--purple)",
                    boxShadow: "0 12px 36px rgba(75, 11, 107, 0.28)",
                    color: "#fff",
                  }}
                >
                  <MapPin size={28} />
                </div>
                <div className="relative">
                  <strong className="block text-base font-[900]" style={{ color: "var(--plum)" }}>
                    Palhoça/SC
                  </strong>
                  <span className="text-sm mt-1 block" style={{ color: "var(--muted)" }}>
                    {locationData.building}
                  </span>
                  <span className="text-sm block" style={{ color: "var(--muted)" }}>
                    {locationData.address}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
