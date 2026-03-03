export default function TravelPartners() {
    const airlines = [
        {
            name: "BIMAN BANGLADESH AIRLINES",
            src: "https://www.amybd.com/images/Airlogo/front_logo_biman.jpg"
        },
        {
            name: "US-BANGLA AIRLINES",
            src: "https://www.amybd.com/images/Airlogo/front_logo_usbangla.jpg"
        },
        {
            name: "NOVOAIR",
            src: "https://www.amybd.com/images/Airlogo/front_logo_novoair.jpg"
        },
        {
            name: "AIR ARABIA",
            src: "https://www.amybd.com/images/Airlogo/front_logo_airarabia.jpg"
        },
        {
            name: "AIR ASIA",
            src: "https://www.amybd.com/images/Airlogo/front_logo_airasia.jpg"
        },
        {
            name: "AIR INDIA",
            src: "https://www.amybd.com/images/Airlogo/front_logo_airindia.jpg"
        },
        {
            name: "BANGKOK AIRWAYS",
            src: "https://www.amybd.com/images/Airlogo/front_logo_bangkok.jpg"
        },
        {
            name: "CATHAY DRAGON",
            src: "https://www.amybd.com/images/Airlogo/front_logo_cathaydragon.jpg"
        },
        {
            name: "CHINA EASTERN",
            src: "https://www.amybd.com/images/Airlogo/front_logo_chinaeastern.jpg"
        },
        {
            name: "CHINA SOUTHERN",
            src: "https://www.amybd.com/images/Airlogo/front_logo_chinasouthern.jpg"
        },
        {
            name: "EMIRATES",
            src: "https://www.amybd.com/images/Airlogo/front_logo_emirates.jpg"
        },
        {
            name: "GULF AIR",
            src: "https://www.amybd.com/images/Airlogo/front_logo_gulfair.jpg"
        },
        {
            name: "INDIGO",
            src: "https://www.amybd.com/images/Airlogo/front_logo_indigo.jpg"
        },
        {
            name: "KUWAIT AIRWAYS",
            src: "https://www.amybd.com/images/Airlogo/front_logo_kuwaitairways.jpg"
        },
        {
            name: "MALAYSIAN AIRLINES",
            src: "https://www.amybd.com/images/Airlogo/front_logo_malaysia.jpg"
        },
        {
            name: "MALDIVIAN AIR",
            src: "https://www.amybd.com/images/Airlogo/front_logo_maldivian.jpg"
        },
        {
            name: "MALINDO AIR",
            src: "https://www.amybd.com/images/Airlogo/front_logo_malindo.jpg"
        },
        {
            name: "PAKISTAN INTERNATIONAL AIRLINES - PIA",
            src: "https://www.amybd.com/images/Airlogo/front_logo_pia.jpg"
        },
        {
            name: "QATAR AIRWAYS",
            src: "https://www.amybd.com/images/Airlogo/front_logo_qatar.jpg"
        },
        {
            name: "SALAM AIR",
            src: "https://www.amybd.com/images/Airlogo/front_logo_salam.jpg"
        },
        {
            name: "SINGAPORE AIRLINES",
            src: "https://www.amybd.com/images/Airlogo/front_logo_singapore.jpg"
        },
        {
            name: "SPICE JET",
            src: "https://www.amybd.com/images/Airlogo/front_logo_spicejet.jpg"
        },
        {
            name: "SRILANKAN AIRLINES",
            src: "https://www.amybd.com/images/Airlogo/front_logo_srilankan.jpg"
        },
        {
            name: "THAI AIRWAYS",
            src: "https://www.amybd.com/images/Airlogo/front_logo_thai.jpg"
        },
        {
            name: "THAI LION",
            src: "https://www.amybd.com/images/Airlogo/front_logo_thailion.jpg"
        },
        {
            name: "THAI SMILE",
            src: "https://www.amybd.com/images/Airlogo/front_logo_thaismile.jpg"
        },
        {
            name: "TURKISH AIRLINES",
            src: "https://www.amybd.com/images/Airlogo/front_logo_turkish.jpg"
        },
        {
            name: "ETIHAD AIRWAY",
            src: "https://www.amybd.com/images/Airlogo/front_logo_etihad.jpg"
        },
        {
            name: "SAUDI ARABIAN AIRLINES",
            src: "https://www.amybd.com/images/Airlogo/front_logo_saudia.jpg"
        }
    ];

    return (
        <section className="py-5 border-y border-slate-100 bg-slate-50/50 overflow-hidden">
            <div className="container mx-auto px-4 mb-8">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-800">Our Partner Airlines</h2>
                    <p className="text-slate-500 mt-2">Connecting you with the world's best airlines</p>
                </div>
            </div>

            <div className="relative flex overflow-x-hidden group max-w-7xl mx-auto">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-1 py-2">
                    {airlines.map((airline, index) => (
                        <img
                            key={index}
                            src={airline.src}
                            width={100}
                            height={100}
                            alt={airline.name}
                            title={airline.name}
                            loading="lazy"
                            className="w-[100px] object-contain mx-4 transition"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
