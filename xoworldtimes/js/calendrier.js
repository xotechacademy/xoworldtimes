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

        let currentMonth = new Date().getMonth();
        const currentYear = 2025;

        function generateCalendar(month) {
            const today = new Date();
            const firstDay = new Date(currentYear, month, 1).getDay();
            const daysInMonth = new Date(currentYear, month + 1, 0).getDate();

            const monthNames = [
                "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
                "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
            ];

            document.getElementById("month-title").textContent = `${monthNames[month]} ${currentYear}`;

            let html = "";
            let day = 1;
            let startDay = firstDay === 0 ? 6 : firstDay - 1;

            for (let i = 0; i < 6; i++) {
                let row = "<tr>";
                for (let j = 0; j < 7; j++) {
                    if (i === 0 && j < startDay) {
                        row += "<td></td>";
                    } else if (day > daysInMonth) {
                        row += "<td></td>";
                    } else {
                        let isToday = (day === today.getDate() && month === today.getMonth());
                        row += `<td class="${isToday ? 'today' : ''}">${day}</td>`;
                        day++;
                    }
                }
                row += "</tr>";
                html += row;
                if (day > daysInMonth) break;
            }

            document.getElementById("calendar-body").innerHTML = html;
            updateZodiacSign(month);
        }

        function updateZodiacSign(month) {
            const zodiacSigns = [
                ["♑CAPRICORNE (22 Déc - 19 Jan)", "♒ VERSEAU  (20 Jan 18 Fév)"],
                ["♒ VERSEAU (20 Jan - 18 Fév)", "♓ POISSONS (19 Fév - 20 Mar)"],
                ["♓ POISSONS (19 Fév - 20 Mar)", "♈ BÉLIER (21 Mar - 19 Avr)"],
                ["♈ BÉLIER (21 Mar - 19 Avr)", "♉ TAUREAU (20 Avr - 20 Mai)"],
                ["♉ TAUREAU (20 Avr - 20 Mai)", "♊ GÉMEAUX (21 Mai - 20 Juin)"],
                ["♊ GÉMEAUX (21 Mai - 20 Juin)", "♋ CANCER (21 Juin - 22 Juil)"],
                ["♋ CANCER (21 Juin - 22 Juil)", "♌ LION (23 Juil - 22 Août)"],
                ["♌ LION (23 Juil - 22 Août)", "♍ VIERGE (23 Août - 22 Sep)"],
                ["♍ VIERGE (23 Août - 22 Sep)", "♎ BALANCE (23 Sep - 22 Oct)"],
                ["♎ BALANCE (23 Sep - 22 Oct)", "♏ SCORPION (23 Oct - 21 Nov)"],
                ["♏ SCORPION (23 Oct - 21 Nov)", "♐ SAGITTAIRE (22 Nov - 21 Déc)"],
                ["♐ SAGITTAIRE (22 Nov - 21 Déc)", "♑ CAPRICORNE (22 Déc - 19 Jan)"]
            ];
            
            document.getElementById("zodiac-sign").innerHTML = `
                <p>${zodiacSigns[month][0]}</p>
                <p>${zodiacSigns[month][1]}</p>
            `;
        }

        function changeMonth(direction) {
            currentMonth += direction;
            if (currentMonth < 0) currentMonth = 11;
            if (currentMonth > 11) currentMonth = 0;
            generateCalendar(currentMonth);
        }

        generateCalendar(currentMonth);
    