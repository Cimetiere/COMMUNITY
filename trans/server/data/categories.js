const categories = [
    {
        id: 1,
        nom: "Sports",
        image: 'https://www.plouhinec.bzh/sites/default/files/styles/page-medium/public/pages/carte_satelite_-_copie_2_1.png?itok=_hvw5ocr',
        assos: [
            {
                id: 1,
                nom: 'ASBF',
                description: `L’art moderne de la boxe pieds poings pour se défendre ou se détendre. 
                Au-delà de tous les préjugés, la Boxe Française est un sport de combat pour tous, 
                qui peut être pratiqué sans risque et sans violence en toute sécurité grâce à un 
                encadrement compétent et diplômé. La Savate boxe française est un sport complet 
                qui développe la souplesse, l'équilibre, la coordination et la musculation. 
                Convivialité, efficacité et respect sont les mots d'ordre du club.`,
                image: 'https://i.pinimg.com/originals/15/b3/38/15b3385e62be827e685e86775ca2ede8.jpg',
                membres: '1300',
                adresse: '19 rue Marsoulan',
                ville: 'Paris',
                activite:'Sports de combats',
                nom_gerant:'Jean-Baptiste Lemoine',
                email_gerant:'jeanbaptlem@gmail.com',
                tel_gerant:'0618223540',
                followstatus: false 
            },
            {
                id: 2,
                nom: 'Ligue IDF Basketball',
                description: `Le Basket pour tous, proche de tous et à la portée de chacun et 
                chacune en Ile de France.`,
                image: 'https://www.basketidf.com/wp-content/uploads/2020/10/cropped-Logo-Site-LIFBB.png',
                membres: '9263',
                adresse: '117 rue du Château des rentiers',
                ville: 'Paris',
                activite:'Basket-Ball',
                nom_gerant:'Jean-Luc Augier',
                email_gerant:'contact@basketidf.com',
                tel_gerant:'0147226935',
                followstatus: false 
            },
            {
                id: 3,
                nom: 'APA',
                description: `Amicale des Pongistes Aulnaysiens : nous sommes une association de 
                tennis de table et nous organisons des tournois et des événements sportifs tous 
                les derniers samedi du mois.`,
                image: 'https://ap-aulnaysiens.sportsregions.fr/media/uploaded/sites/10943/association/5770386ae1108_Untitled1.jpg',
                membres: '57',
                adresse: '9 rue Gaspard Monge',
                ville: 'Aulnay-sous-Bois',
                activite:'Tennis de table',
                nom_gerant:'Marcel Girard',
                email_gerant:'marcgir93@gmail.com',
                tel_gerant:'0148521079',
                followstatus: false 
            },
            {
                id: 4,
                nom: 'VSOP Volley-Ball',
                description: `Notre projet "Le Volley pour tous à la VSOP" prévoit à l'horizon 2023 l'augmentation du nombre d'adhérents 
                et de licenciés fédéraux sur toutes les catégories d'âge, le maintien de notre gestion du Tournoi Amical Loisirs pour adultes, 
                le soutien au développement du volley féminin dans la ville et la diversification de nouvelles pratiques de la discipline comme 
                le volley assis, favorisant ainsi l'accès de notre sport aux personnes à mobilité réduite.`,
                image: 'https://www.helloasso.com/assets/img/logos/vsop%20volley%20ball-ed932f37ff1d46eda9ffdd8fb3bad804.png?bb=0x0x200x200&sb=200x200',
                membres: '120',
                adresse: '4 avenue de la Doutre',
                ville: 'Ozoir-la-Ferrière',
                activite:'Volley-ball',
                nom_gerant:'Gautier Duval',
                email_gerant:'gautierduval@gmail.com',
                tel_gerant:'0149563202',
                followstatus: false 
            },
        ]
    },
    {
        id: 2,
        nom: "Loisirs",
        image: 'https://www.ville-serignan.fr/file/2018/03/Mains.jpg',
        assos: [
            {
                id: 1,
                nom: 'Maîtres Cuisiniers',
                description: `Les Maîtres-Queux sont avant tout des cuisiniers établis commerçants, qui se sont donnés pour buts :
                 le maintien et la diffusion de l’art culinaire de notre pays, universellement reconnu comme le premier,
                 l’encouragement à l’apprentissage de la cuisine par les jeunes, appelés un jour à assurer la pérennité du métier et
                 le perfectionnement de chacun dans cette activité si primordiale à la vie.
                Ce sont donc surtout des hommes de métier qui désirent chaque jour faire mieux que la veille et dont l’ambition est 
                satisfaite lorsque le client, au jugement formé, apprécie les résultats de leur compétence et de leur pratique.`,
                image: 'https://www.italesse.com/MTF//Content/progetti/01.bollinoconcept.jpg',
                membres:'115',
                adresse: '40 rue Blanche',
                ville: 'Paris',
                activite:'Cuisine',
                nom_gerant:'Michel Ducros',
                email_gerant:'miduc@hotmail.com',
                tel_gerant:'0189635842',
                followstatus: false
            },
            {
                id: 2,
                nom: 'FF Roller & Skateboard',
                description: `L’Association a pour objet et compétences 
                d’organiser, coordonner, développer, promouvoir l’enseignement et la pratique des sports de roller sous toutes ses formes et particulièrement : course, hockey 
                sur patins (rink hockey), hockey sur patins en ligne (roller in line hockey ou roller hockey), patinage artistique, roller freestyle, randonnée (en roller), 
                roller derby, et planche à roulettes (skateboard) et
                d’organiser les compétitions régionales 
                 `,
                image: 'https://ffroller.fr/wp-content/uploads/logo_ffrs_2018.png',
                membres:'229',
                adresse: '154 rue Lecourbe',
                ville: 'Paris',
                activite:'Sports de glisse',
                nom_gerant:'Fabien Rodriguez',
                email_gerant:'fabrodriguez55@gmail.com',
                tel_gerant:'0622338459',
                followstatus: false 
            },
            {
                id: 3,
                nom: 'Culture Parkour',
                description: `Culture Parkour propose à des personnes de tout âge l’apprentissage du  Parkour dans un cadre sécurisé et encadré par des coachs professionnels.
                La particularité de la pédagogie Culture Parkour réside dans le fait qu’elle est adaptée a tout type de public, de l’athlète confirmé au novice ou encore à 
                toute personne désireuse de se remettre en forme à travers une activité sportive dynamique et originale.
                Le Parkour est un sport qui requiert un engagement certain chez le pratiquant, néanmoins à Culture Parkour nous mettons l’accent sur la sécurité de nos élèves.
                La prise de risque n’est pas le but recherché mais plutôt la maitrise du corps et de l’esprit face à une situation périlleuse.`,
                image: 'https://www.cultureparkour.com/wp-content/uploads/2020/04/logo.png',
                membres:'77',
                adresse: '53 rue du Professeur Bergonié',
                ville: 'Le Kremlin Bicêtre',
                activite:'Freerun',
                nom_gerant:'Damien Lepres',
                email_gerant:'damienlep52@gmail.com',
                tel_gerant:'0165823003',
                followstatus: false 
            },
            {
                id: 4,
                nom: 'Chemins de la Céramique',
                description: `L’Atelier Chemins de la Céramique est un centre de formation professionnelle dédié à la céramique artisanale et artistique.
                Vous pourrez apprendre, développer, compléter vos connaissances et vos savoirs faire avec la terre, grâce à une palette d’apprentissages 
                variés et complémentaires, en cours de poterie.
                L’atelier accueille dans ses cours de poterie, tous types de public passionné : des débutants ou confirmés, 
                des artisans, professionnels ou non, animateurs socio-culturels, pour des stages et cours de poterie tout au long de l’année : initiation 
                et perfectionnement en tournage, sculpture, modelage, décoration, recherche et fabrications d’émaux.`,
                image: 'https://www.ateliercheminsdelaceramique.com/wp-content/uploads/2017/11/NouveauLogoBW_v2.jpg',
                membres:'26',
                adresse: '165 rue de Paris',
                ville: 'Montreuil',
                activite:'Poterie',
                nom_gerant:'Claire Audré',
                email_gerant:'caudre46@gmail.com',
                tel_gerant:'0725368741',
                followstatus: false 
            }
        ]
    },
    {
        id: 3,
        nom: "Culture",
        image:'https://cdn.radiofrance.fr/s3/cruiser-production/2020/08/b4ba013b-0848-411a-a0c6-c9f4026b6106/870x489_gettyimages-466103921.jpg',
        assos: [
            {
                id: 1,
                nom: 'FFS Amis de Musées',
                description: `Des  arboretums, aquariums, musées d'anthropologie, musées et centres d'art, jardins botaniques, musées pour enfants, musées ethniques, 
                musées généraux, halls de la renommée, centres du patrimoine, musées d'histoire, maisons et sites historiques, sociétés historiques, musées d'histoire 
                naturelle, centres de la nature, planétariums, centres scientifiques et technologiques, zoos - et tout ce qui se trouve entre les deux - vous trouverez 
                forcément un musée qui éveille votre imagination et suscite vos intérêts.`,
                image: 'https://amisdumuseepaulvaleryblog.files.wordpress.com/2020/10/federation-francaise-des-societes-d-amis-de-musees-ffsam-logo-vector-xs.png',
                membres:'36',
                adresse: '19 rue des Châtaigniers',
                ville: 'Clamart',
                activite:'Musées',
                nom_gerant:'Jean-Michel Lepetit',
                email_gerant:'jeanmil48@yahoo.fr',
                tel_gerant:'0785632541',
                followstatus: false 
            },
            {
                id: 2,
                nom: 'Association des Sommeliers',
                description: `Le sommelier est au service du vin en restauration ou dans les établissements vendant du vin. Il fait aussi 
                office de conseil spécialisé pour les acteurs du marché du vin.
                Pour pouvoir exercer sa profession, il doit, au préalable, suivre une formation en sommellerie diplômante ou certifiante.
                Le titulaire du diplôme peut vendre et servir des vins et des spiritueux sous le contrôle d’un chef sommelier. Il connaît 
                les vins, leurs conditionnements, la 
                localisation des vignobles et la législation sur la commercialisation des boissons.
                Sa formation est dédiée à l’étude du vignoble, à l’œnologie et la viticulture. Il développe son palais au cours de dégustations 
                de crus français et étrangers.`,
                image: 'https://www.sommelier-paris.org/wp-content/uploads/2016/07/ASP_Favicon.png',
                membres:'33',
                adresse: '97 boulevard Haussmann',
                ville: 'Paris',
                activite:'Dégustations',
                nom_gerant:'Sébastien Pradal',
                email_gerant:'sebpradal24@gmail.com',
                tel_gerant:'0195642368',
                followstatus: false 
            },
            {
                id: 3,
                nom: 'FNCTA',
                description: `Le théâtre est une nourriture aussi indispensable à la vie que le pain et le vin… 
                Le théâtre est donc, au premier chef, un service public. Tout comme le gaz, l’eau, l’électricité.`,
                image: 'https://www.fnctaidf.fr/wp-content/uploads/logo-fncta.jpg',
                membres:'55',
                adresse: `12 rue de la Chaussée d'Antin`,
                ville: 'Paris',
                activite:'Théâtre',
                nom_gerant:'Evelyne Baget',
                email_gerant:'evelyneb@hotmail.com',
                tel_gerant:'0163985214',
                followstatus: false 
            },
            {
                id: 4,
                nom: 'La Réserve des Arts',
                description: `Cette association a pour but d'accompagner les professionnels 
                du secteur de la culture, de la création et de l'artisanat à l'appropriation des pratiques de 
                l'économie circulaire et le réemploi de matériaux.`,
                image: 'https://aiove.fr/wp-content/uploads/2020/06/la-reservelogo_fs.jpg',
                membres:'7600',
                adresse: `13 rue Prévost Paradol`,
                ville: 'Paris',
                activite:'Arts',
                nom_gerant:'Ophélie Degarde',
                email_gerant:'ophedeg78@gmail.com',
                tel_gerant:'0695368722',
                followstatus: false 
            }
        ]
    }
]

module.exports = categories