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
    

async function trouverSigneEtCelebrites() {
    let jour = parseInt(document.getElementById("jour").value);
    let mois = parseInt(document.getElementById("mois").value);

    // Tableau des jours par mois et gestion des années bissextiles
    const joursParMois = {
        1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30,
        7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
    };

    // Vérification si l'année est bissextile pour le mois de février
    let isLeapYear = new Date().getFullYear() % 4 === 0 && (new Date().getFullYear() % 100 !== 0 || new Date().getFullYear() % 400 === 0);
    if (isLeapYear) joursParMois[2] = 29;

    // Vérification si le jour est valide pour le mois sélectionné
    if (jour < 1 || jour > joursParMois[mois]) {
        document.getElementById("resultat").innerText = "Date invalide";
        return;
    }

    let signes = [
        { nom: "Capricorne", debut: "12-22", fin: "01-19", caracteristique: 
`
(Traits positifs)

Ambitieux et déterminé : Il travaille dur pour atteindre ses objectifs et n'abandonne pas facilement.

Pratique et réaliste : Il est axé sur les résultats et préfère les solutions concrètes.

Responsable et fiable : Il prend ses engagements au sérieux et peut toujours être compté sur lui.

Discret et réservé : Il aime garder une certaine réserve et ne se livre pas facilement.


(Traits négatifs)

Pessimiste : Il peut parfois voir les choses sous un angle négatif et se focaliser sur les problèmes plutôt que sur les solutions.

Têtu et rigide : Une fois qu'il a une idée en tête, il est difficile de le faire changer d’avis.

Trop centré sur le travail : Il peut négliger sa vie personnelle et ses relations à force de se concentrer sur ses ambitions professionnelles.

Sensible à l’échec : Son besoin de réussir peut parfois le rendre trop dur avec lui-même et les autres.


(En amour et en affaires)

En amour, il recherche une relation stable et sérieuse, mais il peut avoir du mal à exprimer ses émotions.

En affaires, il excelle dans les positions de leadership et de gestion, et il est souvent attiré par les rôles de planification ou d'organisation. `

 },
        { nom: "Verseau", debut: "01-20", fin: "02-18", caracteristique:
`
(Traits positifs)

Innovant et visionnaire : Il a souvent des idées originales et avant-gardistes, en avance sur son temps.

Indépendant et libre-penseur : Il déteste les conventions et suit sa propre voie, souvent avec peu de soucis pour ce que les autres pensent.

Altruiste et humanitaire : Il se soucie profondément des autres et cherche à améliorer la société, parfois à travers des causes sociales ou des projets collectifs.

Intellectuel et analytique : Il aime les débats et aime comprendre le monde de manière objective et rationnelle.


(Traits négatifs)

Détaché émotionnellement : Il peut sembler distant, voire froid, et avoir du mal à exprimer ou à comprendre les émotions des autres.

Têtu et imprévisible : Une fois qu'il a une idée, il est difficile de le faire changer d’avis, et ses décisions peuvent parfois être surprenantes.

Révolté et rebelle : Son besoin de se démarquer peut le rendre un peu contre les règles et les traditions, parfois de manière excessive.

Trop idéaliste : Ses idéaux peuvent le rendre déconnecté de la réalité, ce qui peut l’empêcher d'agir concrètement.


(En amour et en affaires)

En amour, il cherche une relation fondée sur l’amitié et l’intellectualisme, mais peut être réticent à l'engagement émotionnel profond.

En affaires, il excelle dans les domaines où il peut utiliser sa créativité et ses idées innovantes, comme la technologie, la science ou les projets humanitaires. `

},
        { nom: "Poissons", debut: "02-19", fin: "03-20", caracteristique:
` 
(Traits positifs)

Empathique et sensible : Les Poissons ressentent profondément les émotions des autres et sont souvent très compatissants.

Créatif et imaginatif : Ils ont un sens artistique prononcé et une grande capacité à rêver et à inventer.

Généreux et bienveillant : Ils sont prêts à aider et à soutenir ceux qu'ils aiment, parfois même au détriment de leurs propres besoins.

Intuitif et spirituel : Ils ont une forte intuition et sont souvent connectés à une dimension spirituelle ou artistique.


(Traits négatifs)

Fuir la réalité : Leur propension à rêver et à s'évader peut parfois les empêcher de faire face aux difficultés de la vie réelle.

Indécis et vulnérable : Ils ont souvent du mal à prendre des décisions et peuvent être facilement influencés par les autres.

Dépendant émotionnellement : Ils ont besoin d'une forte connexion émotionnelle et peuvent se perdre dans des relations toxiques ou déséquilibrées.

Fuite de la confrontation : Ils préfèrent souvent éviter les conflits et peuvent se laisser submerger par leurs émotions.


(En amour et en affaires)

En amour, les Poissons sont romantiques, attentionnés et cherchent une connexion profonde et spirituelle avec leur partenaire.

En affaires, ils brillent dans des domaines créatifs, artistiques ou humanitaires, mais peuvent parfois manquer de structure ou de pragmatisme. `

},
        { nom: "Bélier", debut: "03-21", fin: "04-19", caracteristique:
        `
(Traits positifs)

Leader naturel : Il aime prendre des initiatives et foncer vers ses objectifs.

Énergique et courageux : Il ne recule pas devant les défis et adore l'action.

Franc et direct : Il dit ce qu'il pense sans détour, parfois avec un peu trop d'intensité.

Passionné et ambitieux : Il s'investit à fond dans ce qu'il aime et veut réussir.


(Traits négatifs)

Impulsif : Il agit parfois sans réfléchir, ce qui peut lui attirer des ennuis.

Têtu et impatient : Il n'aime pas attendre et peut s’énerver facilement.

Tendance à dominer : Il aime être aux commandes et peut être autoritaire.


(En amour et en affaires)

En amour, il est intense, passionné et protecteur, mais il peut vite se lasser s’il manque de stimulation.

Dans le travail, il excelle dans les projets où il peut être indépendant et prendre des décisions rapides.`

},
        { nom: "Taureau", debut: "04-20", fin: "05-20", caracteristique:
`
(Traits positifs)

Patient et fiable : Il avance lentement mais sûrement, sans se précipiter.

Travailleur et persévérant : Il ne lâche rien une fois qu’il s’est fixé un objectif.

Sensible et fidèle : Il est loyal en amour comme en amitié, et il aime la stabilité.

Amoureux du confort : Il apprécie les plaisirs de la vie (bonne nourriture, beau cadre de vie, luxe).


(Traits négatifs)

Têtu : Une fois qu’il a une idée en tête, difficile de le faire changer d’avis.

Possessif et jaloux : Il a du mal à partager ce qu’il considère comme à lui, surtout en amour.

Parfois trop matérialiste : Il aime le confort au point d’être parfois un peu trop attaché aux biens matériels.

Routinier : Il déteste le changement et préfère rester dans sa zone de confort.


(En amour et en affaires)

En amour, il est fidèle et cherche une relation stable, mais peut être possessif.

En affaires, il est fiable et persévérant, mais il n’aime pas prendre de risques inutiles. `

},
        { nom: "Gémeaux", debut: "05-21", fin: "06-20", caracteristique:
`
(Traits positifs)

Patient et fiable : Il avance lentement mais sûrement, sans se précipiter.

Travailleur et persévérant : Il ne lâche rien une fois qu’il s’est fixé un objectif.

Sensible et fidèle : Il est loyal en amour comme en amitié, et il aime la stabilité.

Amoureux du confort : Il apprécie les plaisirs de la vie (bonne nourriture, beau cadre de vie, luxe).


(Traits négatifs)

Têtu : Une fois qu’il a une idée en tête, difficile de le faire changer d’avis.

Possessif et jaloux : Il a du mal à partager ce qu’il considère comme à lui, surtout en amour.

Parfois trop matérialiste : Il aime le confort au point d’être parfois un peu trop attaché aux biens matériels.

Routinier : Il déteste le changement et préfère rester dans sa zone de confort.


(En amour et en affaires)

En amour, il est fidèle et cherche une relation stable, mais peut être possessif.

En affaires, il est fiable et persévérant, mais il n’aime pas prendre de risques inutiles. `

},
        { nom: "Cancer", debut: "06-21", fin: "07-22", caracteristique:
        `
(Traits positifs)

Émotif et empathique : Il ressent profondément les émotions des autres et sait écouter.

Protecteur et loyal : Il prend soin de ses proches et reste fidèle en amour comme en amitié.

Intuitif : Il se fie souvent à son instinct et perçoit facilement les non-dits.

Imaginatif et créatif : Il a un grand sens artistique et une riche vie intérieure.


(Traits négatifs)

Lunatique : Son humeur peut changer rapidement, influencée par son environnement.

Susceptible : Il prend les critiques très à cœur et peut se refermer sur lui-même.

Possessif et nostalgique : Il s’accroche au passé et a du mal à lâcher prise.

Introverti : Il peut être difficile à comprendre car il ne se livre pas facilement.


(En amour et en affaires)

En amour, il est très attaché à son partenaire et cherche une relation stable et rassurante.

En affaires, il est travailleur, mais a besoin d’un environnement où il se sent en sécurité pour être performant. `

 },
        { nom: "Lion", debut: "07-23", fin: "08-22", caracteristique:`
(Traits positifs)

Charismatique et confiant : Il attire naturellement l’attention et inspire les autres.

Ambitieux et déterminé : Il aime réussir et ne recule devant aucun défi.

Généreux et protecteur : Il prend soin de ses proches et aime partager.

Loyal et passionné : En amour comme en amitié, il est fidèle et entier.


(Traits négatifs)

Orgueilleux et autoritaire : Il aime être au centre de l’attention et peut avoir du mal à accepter les critiques.

Têtu : Une fois qu’il a une idée en tête, il est difficile de lui faire changer d’avis.

Dramatique : Il peut exagérer les situations et en faire toute une histoire.

Besoins d’attention : Il aime être admiré et peut se vexer s’il se sent ignoré.


(En amour et en affaires)

En amour, il est passionné et protecteur, mais il a besoin d’un partenaire qui l’admire et le valorise.

En affaires, il est un excellent leader et aime être sous les projecteurs, mais il doit apprendre à écouter les autres. `

},
        { nom: "Vierge", debut: "08-23", fin: "09-22", caracteristique:`
(Traits positifs)

Intelligent et analytique : Il aime comprendre, organiser et résoudre des problèmes.

Travailleur et discipliné : Il est rigoureux et cherche toujours à bien faire.

Modeste et discret : Il ne cherche pas à attirer l’attention et préfère l’efficacité aux grands discours.

Fiable et serviable : Il aime aider et donner des conseils pratiques.


(Traits négatifs)

Perfectionniste : Il peut être trop exigeant envers lui-même et les autres.

Anxieux et inquiet : Il a tendance à trop réfléchir et à se faire du souci pour tout.

Critique et pointilleux : Il remarque les moindres détails et peut être dur dans ses jugements.

Réservé et parfois froid : Il a du mal à exprimer ses émotions et peut sembler distant.


(En amour et en affaires)

En amour, il est discret mais fidèle, préférant les relations stables et profondes.

En affaires, il excelle dans les métiers demandant de la précision, de l’organisation et de la logique. `

 },
        { nom: "Balance", debut: "09-23", fin: "10-22", caracteristique:
`
(Traits positifs)

Diplomate et conciliant : Elle aime maintenir l’harmonie et est douée pour résoudre les conflits.

Sociable et charmante : Elle aime être entourée et a une grande capacité à tisser des liens.

Juste et équitable : Elle recherche l’équilibre et a un sens aigu de la justice.

Esthétique et raffinée : Elle aime la beauté sous toutes ses formes et apprécie un environnement agréable.


(Traits négatifs)

Indécise : Elle a souvent du mal à prendre des décisions, cherchant toujours à peser les pour et les contre.

Dépendante des autres : Elle peut être influencée par les opinions des autres et cherche souvent l’approbation.

Évitement des conflits : Parfois, elle préfère éviter les confrontations plutôt que de les affronter.

Peut sembler superficielle : Son désir de plaire peut parfois la rendre trop préoccupée par l'apparence extérieure.


En amour et en affaires

En amour, elle recherche une relation équilibrée et harmonieuse, où la communication et l’entente sont essentielles.

En affaires, elle est excellente dans les domaines où elle peut utiliser ses talents de médiation et de collaboration, comme dans les relations publiques, le conseil ou la gestion de groupe. `

 },
        { nom: "Scorpion", debut: "10-23", fin: "11-21", caracteristique:
`
(Traits positifs)

Passionné et déterminé : Il se donne à fond dans tout ce qu’il entreprend et n’abandonne jamais facilement.

Intuitif et perspicace : Il a un excellent instinct et sait percer les secrets des autres.

Loyal et protecteur : Une fois qu'il s'attache à quelqu'un, il est très fidèle et prêt à tout pour protéger ses proches.

Fort et résilient : Il sait rebondir après des épreuves et peut traverser des périodes difficiles sans se laisser abattre.


(Traits négatifs)

Jaloux et possessif : Son intense besoin de contrôle peut le rendre parfois trop possessif en amour.

Secret et mystérieux : Il garde souvent ses émotions pour lui et n'aime pas se dévoiler facilement.

Vengeur : Si on lui fait du tort, il peut être rancunier et chercher à se venger, même longtemps après l’offense.

Têtu : Lorsqu'il est convaincu de quelque chose, il peut être difficile de le faire changer d’avis.


(En amour et en affaires)

En amour, il est intense, passionné et cherche des relations profondes, parfois fusionnelles.

En affaires, il excelle dans les domaines où il peut prendre des risques calculés, dans les situations stratégiques et les négociations. `

 },
        { nom: "Sagittaire", debut: "11-22", fin: "12-21", caracteristique: `
            Libre et aventureux : Il aime explorer, voyager et découvrir de nouvelles choses. L'ennui est son pire ennemi.
            Optimiste et enthousiaste : Toujours prêt à voir le bon côté des choses, parfois même trop idéaliste.
            Franc et direct : Il dit ce qu'il pense, parfois sans filtre, ce qui peut blesser involontairement.
            Curieux et intellectuel : Il adore apprendre et s'intéresse à la philosophie, aux cultures étrangères et aux grandes questions de la vie.
            Indépendant : Il déteste la routine et les restrictions, préférant vivre selon ses propres règles.
            
            En amour, il est souvent passionné mais a du mal avec l'engagement si cela lui semble trop contraignant. En affaires, il aime prendre des risques et tester de nouvelles idées.
        ` }
    ];

    let signeTrouve = signes.find(signe => 
        (mois === parseInt(signe.debut.split("-")[0]) && jour >= parseInt(signe.debut.split("-")[1])) ||
        (mois === parseInt(signe.fin.split("-")[0]) && jour <= parseInt(signe.fin.split("-")[1]))
    );

    // Affichage du signe et de ses caractéristiques
    if (signeTrouve) {
        document.getElementById("resultat").innerText = `Votre signe est : ${signeTrouve.nom}`;
        document.getElementById("signeNom").innerText = `Signe : ${signeTrouve.nom}`;
        document.getElementById("caracteristiques").innerText = `Caractéristiques : ${signeTrouve.caracteristique}`;
        
        // Afficher le container
        document.getElementById("signeDetails").style.display = "block";
    } else {
        document.getElementById("resultat").innerText = "Date invalide";
        document.getElementById("signeDetails").style.display = "none";
    }
}
   