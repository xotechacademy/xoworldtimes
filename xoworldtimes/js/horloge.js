  function toggleMenu(event) {
        document.getElementById('menu').classList.toggle('open');
        event.stopPropagation(); // Empêche la propagation de l'événement vers le document
    }

    // Ferme le menu si on clique en dehors
    document.addEventListener('click', function(event) {
        var menu = document.getElementById('menu');
        var burgerMenu = document.querySelector('.burger-menu');
        if (!menu.contains(event.target) && !burgerMenu.contains(event.target)) {
            menu.classList.remove('open');
        }
    });

            for (let i = 0; i < 60; i++) {
                const mark = document.createElement('div');
                mark.classList.add('mark');
                if (i % 5 === 0) {
                    mark.classList.add('major');
                }
                mark.style.transform = `rotate(${i * 6}deg)`;
                document.querySelector('.clock').appendChild(mark);
            }
        
    const countrySelect = document.getElementById('countrySelect');
    const countryTimeDisplay = document.getElementById('countryTimeDisplay');

const timezones =
    {
    TR: "Europe/Istanbul",
    CL: "America/Santiago",
    BR: "America/Sao_Paulo",
    DO: "America/Santo_Domingo",
    CU: "America/Havana",
    IT: "Europe/Rome",
    ES: "Europe/Madrid",
    JM: "America/Jamaica",
    HT: "America/Port-au-Prince",
    CA: "America/Toronto",
    US: "America/New_York",
    DE: "Europe/Berlin",
    GB: "Europe/London",
    CN: "Asia/Shanghai",
    JP: "Asia/Tokyo",
    IN: "Asia/Kolkata",
    MX: "America/Mexico_City",    
    RU: "Europe/Moscow",
    ZA: "Africa/Johannesburg",
    AU: "Australia/Sydney",
    AR: "America/Argentina/Buenos_Aires",
    KR: "Asia/Seoul",
    EG: "Africa/Cairo",
    NL: "Europe/Amsterdam",
    SE: "Europe/Stockholm",
    CH: "Europe/Zurich",
    BE: "Europe/Brussels",
    AT: "Europe/Vienna",
    NO: "Europe/Oslo",
    FI: "Europe/Helsinki",
    DK: "Europe/Copenhagen",
    PL: "Europe/Warsaw",
    PT: "Europe/Lisbon",
    GR: "Europe/Athens",
    CZ: "Europe/Prague",
    HU: "Europe/Budapest",
    RO: "Europe/Bucharest",
    BG: "Europe/Sofia",
    IE: "Europe/Dublin",
    NZ: "Pacific/Auckland",
    TH: "Asia/Bangkok",
    ID: "Asia/Jakarta",
    PH: "Asia/Manila",
    VN: "Asia/Ho_Chi_Minh",
    MY: "Asia/Kuala_Lumpur",
    SG: "Asia/Singapore",
    SA: "Asia/Riyadh",
    AE: "Asia/Dubai",
    IL: "Asia/Jerusalem",
    PK: "Asia/Karachi",
    BD: "Asia/Dhaka",
    NG: "Africa/Lagos",
    KE: "Africa/Nairobi",
    GH: "Africa/Accra",
    TZ: "Africa/Dar_es_Salaam",
    CO: "America/Bogota",
    VE: "America/Caracas",
    PE: "America/Lima",
    EC: "America/Guayaquil",
    BO: "America/La_Paz",
    UY: "America/Montevideo",
    PY: "America/Asuncion",
    CR: "America/Costa_Rica",
    PA: "America/Panama",
    SV: "America/El_Salvador",
    GT: "America/Guatemala",
    HN: "America/Tegucigalpa",
    NI: "America/Managua",
    LK: "Asia/Colombo",
    NP: "Asia/Kathmandu",
    KZ: "Asia/Almaty", 
    UZ: "Asia/Tashkent",
    IQ: "Asia/Baghdad",
    IR: "Asia/Tehran",
    SY: "Asia/Damascus",
    LB: "Asia/Beirut",
    QA: "Asia/Qatar",
    OM: "Asia/Muscat",
    YE: "Asia/Aden",
    DZ: "Africa/Algiers",
    MA: "Africa/Casablanca",
    TN: "Africa/Tunis",
    SD: "Africa/Khartoum",
    ET: "Africa/Addis_Ababa",
    UG: "Africa/Kampala",
    CM: "Africa/Douala",
    SN: "Africa/Dakar",
    CI: "Africa/Abidjan",
    ZM: "Africa/Lusaka",
    ZW: "Africa/Harare",
    MG: "Indian/Antananarivo",    
    FR: "Europe/Paris",
    CU: "America/Havana",
    IT: "Europe/Rome",
    ES: "Europe/Madrid",
    JM: "America/Jamaica",
    HT: "America/Port-au-Prince",
    CA: "America/Toronto",
    US: "America/New_York",
    DE: "Europe/Berlin",
    GB: "Europe/London",
    CN: "Asia/Shanghai",
    JP: "Asia/Tokyo",
    IN: "Asia/Kolkata",
    MX: "America/Mexico_City",
    RU: "Europe/Moscow",
    ZA: "Africa/Johannesburg",
    AU: "Australia/Sydney",
    AR: "America/Argentina/Buenos_Aires",
    KR: "Asia/Seoul",
    EG: "Africa/Cairo",
    NL: "Europe/Amsterdam",
    SE: "Europe/Stockholm",
    CH: "Europe/Zurich",
    BE: "Europe/Brussels",
    AT: "Europe/Vienna",
    NO: "Europe/Oslo",
    FI: "Europe/Helsinki",
    DK: "Europe/Copenhagen",
    PL: "Europe/Warsaw",
    PT: "Europe/Lisbon",
    GR: "Europe/Athens",
    CZ: "Europe/Prague",
    HU: "Europe/Budapest",
    RO: "Europe/Bucharest",
    BG: "Europe/Sofia",
    IE: "Europe/Dublin",
    NZ: "Pacific/Auckland",
    TH: "Asia/Bangkok",
    ID: "Asia/Jakarta",
    PH: "Asia/Manila",
    VN: "Asia/Ho_Chi_Minh",
    MY: "Asia/Kuala_Lumpur",
    SG: "Asia/Singapore",
    SA: "Asia/Riyadh",
    AE: "Asia/Dubai",
    IL: "Asia/Jerusalem",
    PK: "Asia/Karachi",
    BD: "Asia/Dhaka",
    NG: "Africa/Lagos",
    KE: "Africa/Nairobi",
    GH: "Africa/Accra",
    TZ: "Africa/Dar_es_Salaam",
    CO: "America/Bogota",
    VE: "America/Caracas",
    PE: "America/Lima",
    EC: "America/Guayaquil",
    BO: "America/La_Paz",
    UY: "America/Montevideo",
    PY: "America/Asuncion",
    CR: "America/Costa_Rica",
    PA: "America/Panama",
    SV: "America/El_Salvador",
    GT: "America/Guatemala",
    HN: "America/Tegucigalpa",
    NI: "America/Managua",
    LK: "Asia/Colombo",
    NP: "Asia/Kathmandu",
    KZ: "Asia/Almaty", 
    UZ: "Asia/Tashkent",
    IQ: "Asia/Baghdad",
    IR: "Asia/Tehran",
    SY: "Asia/Damascus",
    LB: "Asia/Beirut",
    QA: "Asia/Qatar",
    OM: "Asia/Muscat",
    YE: "Asia/Aden",
    DZ: "Africa/Algiers",
    MA: "Africa/Casablanca",
    TN: "Africa/Tunis",
    SD: "Africa/Khartoum",
    ET: "Africa/Addis_Ababa",
    UG: "Africa/Kampala",
    CM: "Africa/Douala",
    SN: "Africa/Dakar",
    CI: "Africa/Abidjan",
    ZM: "Africa/Lusaka",
    ZW: "Africa/Harare",
    MG: "Indian/Antananarivo",
    
};

function updateTime() {
    const selectedCountry = countrySelect.value;
    const timezone = timezones[selectedCountry];
    const options = { timeZone: timezone, hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    
    const formatter = new Intl.DateTimeFormat('fr-FR', options);
    const currentTime = formatter.format(new Date());
    
    countryTimeDisplay.innerText = `HEURE ACTUELLE : ${currentTime}`;
}
    countrySelect.addEventListener('change', updateTime);

    // Mettre à jour l'heure toutes les secondes
    setInterval(updateTime, 1000);

    // Initialiser l'heure
    updateTime();

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
    let lastSecond = new Date().getSeconds();  // Variable pour suivre la seconde précédente

    function setDate() {
        const now = new Date();

        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;

// Empêche le "coup de tête" en désactivant la transition lorsque la seconde revient à 0
if (seconds !== lastSecond) {
    secondHand.style.transition = 'transform 0.2s cubic-bezier(0.4, 2.3, 0.6, 1)';
    lastSecond = seconds;
} else {
    // Vérifie si l'aiguille est déjà à la position 0 avant de désactiver la transition
    if (seconds !== 0 || lastSecond !== 59) {
        secondHand.style.transition = 'none';  // Pas de transition quand l'aiguille revient à 0
    }
}

        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const minutes = now.getMinutes();
        const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

        const hours = now.getHours();
        const hoursDegrees = ((hours % 12) * 30) + 90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }

    setInterval(setDate, 1000);
    setDate();

    function updateClock() {
        const now = new Date();
        document.getElementById("hours").textContent = now.getHours().toString().padStart(2, "0");
        document.getElementById("minutes").textContent = now.getMinutes().toString().padStart(2, "0");
        document.getElementById("seconds").textContent = now.getSeconds().toString().padStart(2, "0");
    }

    setInterval(updateClock, 1000);
    updateClock();

    if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then(() => console.log("Service Worker enregistré !"))
    .catch((error) => console.log("Erreur Service Worker :", error));
}