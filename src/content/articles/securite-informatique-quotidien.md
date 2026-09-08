---
title: "La sécurité informatique au quotidien : mots de passe, VPN, sauvegardes"
date: "2026-09-08"
category: "technology"
excerpt: "La cybersécurité n'est pas réservée aux experts. Quelques habitudes simples protègent de 95% des risques du quotidien numérique."
image: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?auto=format&fit=crop&w=1800&q=82"
imageAlt: "Cadenas numérique sur écran d'ordinateur"
keywords: "cybersécurité, mot de passe, VPN, double authentification, sauvegardes, sécurité numérique"
---

Chaque année, la même ritournelle : on lit les chiffres des cyberattaques en France — plusieurs centaines de milliers d'entreprises touchées, plusieurs millions de comptes compromis, des milliards d'euros de dommages — et on se dit qu'il faudrait vraiment faire quelque chose. Et puis on repousse, parce que la sécurité informatique semble compliquée, technique, ou réservée à ceux qui « s'y connaissent ». C'est faux. La majorité des risques quotidiens se neutralisent avec cinq ou six habitudes, qui demandent au total moins d'une heure de mise en place. Voici comment s'y prendre.

## Le mot de passe : l'erreur la plus commune

Le point de départ, c'est le mot de passe. Et la mauvaise nouvelle, c'est que la plupart des Français utilisent encore des mots de passe faibles, réutilisés, ou les deux. Selon les enquêtes de la CNIL, le mot de passe le plus courant en France reste « 123456 », suivi de « azerty » et « motdepasse ». Les chiffres varient peu d'année en année.

**La règle de base** est pourtant simple : un mot de passe différent pour chaque service important. Pas pour les sites mineurs (un forum de cuisine, un site d'achat occasionnel), mais pour les services critiques : banque, messagerie, réseaux sociaux, achats en ligne, cloud.

**La longueur prime sur la complexité**. Un mot de passe long (16 caractères ou plus) est mathématiquement plus difficile à craquer qu'un mot de passe court avec des symboles. « MonPremierChienSappelaitRex » est plus sûr que « P@ssw0rd! ». C'est contre-intuitif, mais c'est mathématique.

**Les gestionnaires de mots de passe** sont la vraie solution. Ils génèrent, mémorisent, et remplissent automatiquement des mots de passe forts et uniques pour chaque service. Les trois références du marché en 2026 sont **1Password** (le plus complet, 36€/an), **Bitwarden** (open source, gratuit pour la version de base, 10€/an pour la version premium), et **Dashlane** (interface très intuitive, 40€/an). **Apple Keychain** (gratuit, intégré à iOS et macOS) et **Google Password Manager** (gratuit, intégré à Chrome et Android) sont également de bonnes options pour qui n'a pas besoin de fonctionnalités avancées.

**Le bon workflow** : on choisit un mot de passe maître long (une phrase facile à retenir, par exemple « LeCaféDuMatinEstMeilleurLeDimanche »), on l'apprend par cœur, et on ne l'utilise nulle part ailleurs. Tous les autres mots de passe sont stockés dans le gestionnaire. Le mot de passe maître, lui, ne quitte jamais le cerveau de son propriétaire — il n'est jamais noté, jamais écrit, jamais partagé.

**L'authentification à deux facteurs (2FA)** est le complément indispensable. Même avec un mot de passe volé, un attaquant ne pourra pas se connecter sans le second facteur. Les trois options, par ordre de sécurité : une clé physique (YubiKey, Feitian, ou les clés Titan de Google), une application d'authentification (Authy, Google Authenticator, Microsoft Authenticator), et les codes par SMS (moins sûr, mais mieux que rien). En France, beaucoup de banques imposent désormais la 2FA pour les opérations sensibles, et c'est une bonne habitude à généraliser à tous les comptes qui le supportent.

![Écran d'ordinateur avec cadenas numérique et code de sécurité](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1800&q=82)

## Les VPN : utiles ou marketing ?

Le VPN (Virtual Private Network) est l'un des produits les plus marketés du secteur, et l'un des plus mal compris. Son principe : faire transiter la connexion internet par un serveur tiers, qui masque l'adresse IP de l'utilisateur et chiffre le trafic. Utile dans certains cas, surestimé dans d'autres.

**Les cas où un VPN est réellement utile** : la connexion à un wifi public (hôtel, café, aéroport), où le risque d'interception est réel ; le travail à distance sur des réseaux d'entreprise, où le VPN est souvent imposé par la DSI ; l'accès à des contenus géo-restreints (par exemple, un service de streaming uniquement disponible aux États-Unis) ; la protection de la vie privée vis-à-vis du fournisseur d'accès, qui voit tout le trafic.

**Les cas où un VPN n'apporte rien ou presque** : la navigation quotidienne à domicile en France (le FAI est de confiance, et le chiffrement HTTPS protège déjà l'essentiel) ; la protection contre les virus et le phishing (le VPN ne remplace pas un antivirus, ni la vigilance) ; l'anonymat total (un VPN cache l'IP au site de destination, mais le fournisseur de VPN voit tout le trafic — c'est juste un changement d'interlocuteur, pas une suppression).

**Les VPN de confiance** en 2026 sont **Mullvad** (suédois, 5€/mois, très orienté vie privée), **ProtonVPN** (suisse, par l'équipe de ProtonMail, 5 à 10€/mois), **NordVPN** (panaméen, 3 à 5€/mois, le plus connu), **ExpressVPN** (4 à 6€/mois, rapide et simple), et **IVPN** (plus confidentiel, 5 à 10€/mois). Les VPN gratuits sont à éviter, sauf s'ils sont financés de manière transparente (ProtonVPN a une version gratuite financée par les abonnements payants).

**Pour qui n'a pas besoin de VPN** : la majorité des utilisateurs domestiques en France, à condition de naviguer en HTTPS, d'utiliser un gestionnaire de mots de passe, et d'être vigilant. Pour qui voyage beaucoup ou travaille sur des wifi publics, c'est un investissement de 50 à 80€/an qui apporte une vraie tranquillité d'esprit.

## Les sauvegardes : la règle du 3-2-1

C'est le point le plus souvent oublié, et c'est celui qui sauve dans les pires moments. Les sauvegardes, c'est l'assurance-vie numérique : quand tout le reste a échoué (panne, vol, ransomware, erreur humaine), elles permettent de récupérer ses données.

**La règle du 3-2-1** est la référence en matière de stratégie de sauvegarde. Elle dit : trois copies des données, sur deux supports différents, dont une externalisée.

- **Trois copies** : la copie de travail (sur l'ordinateur ou le téléphone), une copie locale (sur un disque dur externe ou un NAS), et une copie distante (sur un cloud ou un serveur hors-site).
- **Deux supports** : ne pas mettre toutes les copies sur le même type de support (par exemple, deux disques durs externes connectés au même ordinateur, c'est le même risque).
- **Une externalisée** : au moins une copie doit être ailleurs — un cloud, un coffre-fort, un serveur distant. En cas de sinistre (incendie, dégât des eaux, cambriolage), c'est ce qui permet de récupérer.

**Les solutions en 2026** pour le grand public :

**Pour le cloud** : iCloud (Apple), Google One, OneDrive (Microsoft), Dropbox. Les forfaits à 2-3€/mois pour 200 Go suffisent pour les sauvegardes de photos et documents essentiels. Pour 5 à 10€/mois, on a 1 à 2 To, ce qui couvre l'essentiel.

**Pour la sauvegarde locale** : un disque dur externe (200 à 500€ pour 4 à 8 To, Western Digital, Seagate, LaCie), ou un NAS (Network Attached Storage) à 300-600€ (Synology, QNAP) pour les utilisateurs avancés.

**Pour la sauvegarde automatique** : Time Machine sur Mac, File History sur Windows, ou des solutions tierces comme Backblaze (7$/mois, sauvegarde illimitée) ou Acronis True Image (50 à 100€/an, plus complet).

**Pour les smartphones** : la sauvegarde iCloud (iPhone) ou Google One (Android) couvre l'essentiel — photos, contacts, applications. À activer systématiquement, ce qui n'est pas encore le cas de la moitié des utilisateurs.

**Le point critique** : tester ses sauvegardes. Une sauvegarde qu'on n'a jamais testée n'est pas une sauvegarde, c'est un pari. Une fois par an, restaurer un fichier au hasard pour vérifier que la procédure fonctionne.

![Serveur et datacenter en réseau](https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1800&q=82)

## Les gestes quotidiens qui protègent vraiment

Au-delà des outils, ce sont les gestes qui font la différence. Quelques habitudes, simples mais décisives.

**La mise à jour systématique des logiciels**. Les mises à jour d'iOS, macOS, Windows, Android, et des applications principales ne sont pas là pour vous ennuyer. Elles corrigent des failles de sécurité, parfois critiques. Activer les mises à jour automatiques, c'est se protéger sans y penser. Les attaques de type « zero-day » (exploitant une faille non corrigée) existent, mais la majorité des compromissions exploitent des failles connues depuis des mois, parfois des années, que les utilisateurs n'ont pas corrigées.

**La vigilance sur les emails et SMS**. Le phishing reste le premier vecteur de compromission en France, loin devant les vulnérabilités techniques. Un email qui demande de cliquer sur un lien pour « vérifier votre compte bancaire » ou « suivre un colis » doit déclencher la méfiance. Les indices : adresse de l'expéditeur légèrement différente de l'officielle (service-client@banquepopulaiire.fr), urgence artificielle (« votre compte sera suspendu dans 24h »), demande d'informations personnelles ou bancaires. En cas de doute, ne pas cliquer, et contacter directement l'entreprise par un autre canal.

**Le téléchargement prudent**. Les logiciels piratés, les applications hors des stores officiels, les extensions de navigateur douteuses sont des vecteurs classiques de compromission. En France, les téléchargements illégaux exposent aussi à des risques juridiques. La logique vaut pour le matériel : un routeur ou une caméra connectée acheté sur une marketplace à 30€ peut embarquer des vulnérabilités connues.

**Le verrouillage automatique des appareils**. Smartphone avec code PIN ou biométrie activée, ordinateur avec verrouillage automatique après 5 minutes d'inactivité, et nécessitant le mot de passe au réveil. C'est la protection de base contre le vol et l'accès physique.

**La séparation des usages**. Un navigateur pour le travail et les comptes sensibles (avec les extensions de protection anti-tracking type uBlock Origin), un autre navigateur pour la navigation occasionnelle. Une adresse email principale pour les comptes critiques, des alias pour les inscriptions (SimpleLogin, Addy.io, ou les alias intégrés à iCloud+ et Firefox Relay).

## Pour les plus engagés : le matériel de sécurité

Pour qui veut aller plus loin, trois objets méritent considération.

**La clé de sécurité physique** (YubiKey, Feitian, ou les clés Titan de Google). Elle remplace la 2FA par SMS ou par application. Impossible à dupliquer, impossible à pirater à distance. Pour protéger les comptes critiques (messagerie principale, comptes bancaires, gestionnaire de mots de passe), c'est la meilleure protection existante. Budget : 50 à 70€ pour deux clés (une principale, une de secours stockée ailleurs).

**Le pare-feu matériel** (Firewalla, Ubiquiti) pour les utilisateurs avancés qui veulent surveiller et contrôler le trafic réseau de leur domicile. C'est une démarche d'expert, mais elle devient accessible. Budget : 200 à 500€.

**L'ordinateur sécurisé** (Tails sur clé USB, ou un vieux PC reconditionné avec Qubes OS) pour les activités sensibles (journalisme, militantisme, recherche médicale). Ce n'est pas pour la majorité des utilisateurs, mais pour certains usages, c'est la bonne réponse.

## Le risque zero n'existe pas, et c'est normal

Il faut accepter une réalité : la sécurité absolue n'existe pas. Même les plus grandes entreprises, avec des budgets de plusieurs millions d'euros et des équipes dédiées, se font compromettre. L'objectif n'est pas d'être invulnérable — c'est d'être plus difficile à attaquer que la majorité, de sorte que les attaquants se reportent sur des cibles plus faciles.

**Pour 95% des risques quotidiens**, les quelques habitudes évoquées dans cet article suffisent. Un gestionnaire de mots de passe, la 2FA sur les comptes critiques, les mises à jour automatiques, les sauvegardes en 3-2-1, et la vigilance sur les emails. Cela prend quelques heures à mettre en place, et protège pour les années à venir.

**Le coût total** : 30 à 50€/an pour un bon gestionnaire de mots de passe, 60 à 100€/an pour un VPN, 50 à 100€/an pour du stockage cloud. Soit 150 à 250€/an pour une tranquillité d'esprit numérique réelle. C'est probablement l'un des meilleurs investissements tech qu'on puisse faire — et l'un des moins visibles.

La sécurité informatique, c'est comme l'assurance habitation : on n'y pense pas tant qu'on n'en a pas eu besoin. Mais le jour où l'on en a besoin, il est trop tard pour s'équiper. Mieux vaut prévenir.