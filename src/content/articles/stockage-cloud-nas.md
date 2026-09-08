---
title: "Stocker ses données : cloud, NAS, sauvegarde 3-2-1"
date: "2026-07-15"
category: "technology"
excerpt: "Entre cloud, disque externe et NAS Synology, comment protéger ses données en 2026. La règle du 3-2-1 n'a pas pris une ride."
image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=1800&q=82"
imageAlt: "Serveur de stockage de données avec câbles réseau"
keywords: "cloud, NAS, Synology, QNAP, sauvegarde, données, 3-2-1, OVHcloud 2026"
---

Stocker ses données en 2026 n'a jamais été aussi simple sur le papier : des téraoctets à 50€, des vitesses de transfert qui se chiffrent en gigabits, des sauvegardes automatiques qui s'exécutent sans qu'on y pense. Mais derrière cette apparente facilité, les pièges sont nombreux. Disque dur qui lâche sans prévenir, compte cloud qu'on résilie et qu'on vide par accident, ransomware qui chiffre les fichiers en quelques heures, vol d'ordinateur portable. La réalité est que la majorité des particuliers — et un pourcentage non négligeable de professionnels — continuent de protéger leurs données de manière insuffisante. Ce guide présente, sans catastrophisme mais sans naïveté, l'état de l'art du stockage personnel et de la sauvegarde en 2026.

## La règle du 3-2-1 : le minimum vital

Avant toute considération d'outil, une règle architecturale traverse les décennies : la règle du 3-2-1. Elle dit qu'on doit avoir **trois copies** de ses données importantes, sur **deux supports différents**, dont **une copie hors site**.

Cette règle, formalisée par Peter Krogh dans les années 2000, n'a pas pris une ride. Elle survit à l'évolution des technologies parce qu'elle répond à une logique probabiliste simple : aucun support n'est fiable à 100%, aucun lieu n'est à l'abri d'un sinistre, et le seul moyen de se protéger vraiment est la redondance géographique.

**Concrètement en 2026** : pour une famille française moyenne (photos de vacances, documents administratifs, vidéos, sauvegardes de smartphones), une configuration 3-2-1 raisonnable est la suivante.

- **Copie 1 : sur les appareils actifs** (smartphone, ordinateur portable, disque dur interne).
- **Copie 2 : sur un disque externe ou un NAS local**, situé dans la maison.
- **Copie 3 : sur un service cloud**, situé hors de la maison (OVHcloud, iCloud, Google Drive, Backblaze).

Le coût typique d'une telle configuration, pour 2 à 4 To de données, est de 200 à 400€ en matériel (disque ou NAS) plus 50 à 100€/an en abonnement cloud. C'est le budget d'une assurance raisonnable contre les sinistres numériques.

## Le cloud grand public : iCloud, Google Drive, Dropbox

Les services cloud grand public dominent le marché français en 2026. Trois acteurs principaux.

**iCloud d'Apple** est intégré à l'écosystème Apple, ce qui en fait la solution naturelle pour les utilisateurs d'iPhone et de Mac. La sauvegarde automatique des photos, la synchronisation des documents, la disponibilité sur tous les appareils, sont imbattables. Les prix vont de 0,99€/mois pour 50 Go à 12,99€/mois pour 2 To (en 2026). Pour une famille, le forfait Family Sharing à 14,99€/mois pour 200 Go est intéressant. L'inconvénient : l'écosystème fermé, et l'impossibilité d'accéder facilement à ses données depuis un appareil non Apple.

**Google Drive** est la solution dominante pour les utilisateurs Android et les travailleurs sous Google Workspace. 15 Go gratuits, puis 100 Go à 2,99€/mois, 2 To à 9,99€/mois, 10 To à 49,99€/mois. L'intégration à Gmail, Google Photos, Google Docs, est un avantage pour qui travaille dans cet écosystème. L'inconvénient : la qualité de la synchronisation est moins bonne que celle d'iCloud ou Dropbox sur les fichiers lourds (vidéos).

**Dropbox** reste pertinent pour qui veut un service neutre, multi-plateforme, et bien synchronisé. 2 To à 11,99€/mois. La qualité de la synchronisation différentielle (ne renvoie que les octets modifiés d'un fichier) est la meilleure du marché. L'inconvénient : c'est plus cher que les concurrents pour des fonctionnalités comparables.

**Le choix pragmatique**. Pour un utilisateur Apple, iCloud est l'évidence. Pour un utilisateur Android ou un foyer mixte, Google Drive. Pour un professionnel ou un power user qui veut la meilleure qualité de synchronisation, Dropbox.

## Les acteurs français et européens : la question de la souveraineté

Pour les données sensibles — administratives, médicales, juridiques — la question de la souveraineté des données devient centrale. Plusieurs acteurs européens méritent l'attention.

**OVHcloud**, leader français du cloud, propose des solutions de stockage (Object Storage, HubiC a été remplacé par de nouvelles offres en 2024) à des prix compétitifs. Les données sont hébergées en France, à Roubaix, Strasbourg, ou Gravelines. Pour un particulier ou une petite entreprise française, c'est un choix raisonnable qui assure la conformité RGPD.

**Numergy** (filiale de SFR et de Sopra Steria) propose des services cloud d'entreprise axés sur la conformité réglementaire française et européenne. C'est une solution pour les ETI et grandes entreprises, moins pour les particuliers.

**Scaleway**, autre acteur français, propose des solutions cloud compétitives. Pour du stockage froid (archivage), c'est un excellent choix économique.

**Infomaniak**, suisse (donc non française mais européenne), propose des services cloud et mail axés sur la confidentialité et l'écologie. Le Drive d'Infomaniak est une alternative crédible à Google Drive pour qui veut sortir de l'écosystème américain.

**La règle pratique**. Pour un usage non sensible (photos de vacances, documents divers), un cloud américain est acceptable. Pour un usage sensible (documents d'identité, données médicales, fichiers professionnels confidentiels), un cloud européen est préférable. La CNIL propose un guide pratique sur le sujet.

![Datacenter avec baies de stockage en réseau, vue d'ensemble des équipements serveur](https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=1800&q=82)

## Le NAS local : Synology, QNAP, et l'écosystème

Le NAS (Network Attached Storage, ou stockage attaché au réseau) est un petit serveur domestique dédié au stockage et à la sauvegarde. C'est l'option privilégiée par les utilisateurs avancés, les familles nombreuses, et les professionnels à domicile.

**Synology** est la référence du marché en 2026. Le constructeur taïwanais domine grâce à son système d'exploitation DiskStation Manager (DSM), un logiciel d'une qualité remarquable qui transforme le NAS en véritable serveur domestique : sauvegarde, cloud privé, serveur multimédia, serveur VPN, serveur de mails, virtualisation, vidéosurveillance. Les modèles les plus populaires en 2026 :

- **Synology DS224+** : deux baies, pour les particuliers. 350€ HT avec deux disques de 4 To. Suffisant pour la majorité des familles.
- **Synology DS923+** : quatre baies, pour les utilisateurs intensifs et les petites entreprises. 600€ HT sans disque.
- **Synology DS1823xs+** : huit baies, pour les PME et les créatifs. 1500€ HT sans disque.

**QNAP** est l'alternative historique à Synology. Le constructeur taïwanais propose des produits comparables, avec un système d'exploitation (QTS) plus flexible mais moins poli. QNAP est généralement préféré par les utilisateurs avancés qui veulent plus de contrôle, et moins par les familles qui veulent une expérience simple.

**Asustor** est un troisième acteur, avec des produits un cran en dessous en termes de finition logicielle, mais à des prix légèrement inférieurs. Pour qui cherche un NAS économique et n'a pas peur de mettre les mains dans la configuration, c'est une option.

**Les fonctions utiles d'un NAS en 2026** :

- Sauvegarde automatique des ordinateurs (Time Machine pour Mac, rsync pour Linux, historique de fichiers pour Windows).
- Sauvegarde des smartphones (Synology Photos, QNAP QuMagie).
- Cloud privé (accès à ses fichiers depuis n'importe où via une app).
- Serveur multimédia (Plex, Jellyfin) pour les vidéos et la musique.
- Serveur VPN (accéder à son réseau domestique depuis l'extérieur).
- Synchronisation cloud (Synology C2, QNAP myQNAPcloud) pour ajouter une copie hors site.

**L'investissement initial** pour un NAS Synology avec deux disques de 4 To est d'environ 500 à 700€. C'est un investissement sur sept à dix ans, ce qui ramène le coût annuel à environ 70 à 100€ — comparable à un abonnement cloud, avec l'avantage de la propriété et de la performance.

## La sauvegarde locale : disque externe, le bon vieux réflexe

Le disque externe USB reste, en 2026, l'un des moyens les plus simples et les plus économiques de sauvegarder ses données. Pour qui ne veut pas se lancer dans un NAS, c'est une option très valable.

**Les modèles recommandés en 2026** :

- **Western Digital My Passport** : 5 To à 110€, 6 To à 140€. Compact, fiable, formaté pour Windows ou Mac.
- **Seagate Backup Plus** : 5 To à 100€, 8 To à 150€. Capacité supérieure pour un prix légèrement inférieur.
- **LaCie Rugged** : conçu pour la mobilité, antichoc, à partir de 180€ pour 4 To. Pour qui transporte ses données.
- **Samsung T7 / T9** : SSD externe, vitesses USB 3.2 Gen 2 (jusqu'à 1000 Mo/s). Plus cher (1 To à 100€, 2 To à 180€), mais silencieux, rapide, et résistant aux chutes.

**La règle d'usage** : un disque externe qui reste branché en permanence est aussi vulnérable qu'un disque interne. La bonne pratique est de le brancher pour la sauvegarde (Time Machine, rsync, ou un logiciel dédié), puis de le débrancher et de le ranger dans un autre endroit de la maison. C'est la copie 2 de la règle 3-2-1.

## La sauvegarde hors site : le maillon souvent oublié

La troisième copie, hors site, est le maillon que la majorité des particuliers négligent. C'est pourtant la protection contre les sinistres majeurs : incendie, inondation, vol, catastrophe naturelle. Si toutes les copies sont au même endroit physique, elles sont toutes vulnérables au même sinistre.

**Les options en 2026** :

- **Un deuxième disque externe, gardé chez un parent ou un ami**. La solution la plus simple, mais qui demande de la discipline (penser à faire la sauvegarde et à l'échanger).
- **Un service cloud de sauvegarde** : Backblaze Personal (7€/mois, illimité) ou IDrive (10€/mois pour 5 To). Ces services sont spécifiquement conçus pour la sauvegarde continue, contrairement à iCloud ou Google Drive qui sont des outils de synchronisation.
- **La fonction cloud d'un NAS** : Synology C2 (à partir de 5€/mois pour 100 Go), QNAP myQNAPcloud (gratuit pour les usages basiques, premium à partir de 5€/mois). Permet de synchroniser le contenu du NAS vers un datacenter distant.
- **Un service cloud européen** : OVHcloud Object Storage (à partir de quelques centimes par Go par mois), pour qui veut garder le contrôle total sur ses données.

**Le choix pragmatique**. Pour la majorité des particuliers, Backblaze Personal est la solution la plus simple et la plus économique : 7€/mois, sauvegardes automatiques, restauration facile. Pour qui veut la souveraineté, un service européen (Backblaze a des serveurs aux Pays-Bas et en Europe). Pour qui a déjà un NAS, la fonction cloud intégrée.

## Les erreurs classiques à éviter

Six erreurs qu'on continue à voir trop souvent.

**Sauvegarder sur le même disque que les originaux**. Copier ses photos d'un disque interne à un autre disque interne du même ordinateur ne protège rien : si l'ordinateur est volé ou tombe en panne, les deux disques sont perdus avec lui.

**Négliger la vérification de la sauvegarde**. Une sauvegarde qui n'a jamais été testée n'est pas une sauvegarde : elle peut être corrompue, incomplète, ou ne pas fonctionner quand on en a besoin. Tester la restauration une fois par an, c'est non négociable.

**Compter sur un seul service cloud**. Si vous stockez toutes vos données sur Google Drive et que votre compte est suspendu pour une raison quelconque (erreur, piratage, conflit avec un autre utilisateur ayant le même nom), vous perdez tout. Avoir une copie locale, ou un deuxième service cloud, est une sage précaution.

**Choisir des disques bon marché**. Les disques durs bon marché (sans marque, ou marques très bas de gamme) ont des taux de panne nettement supérieurs aux disques des marques reconnues (WD, Seagate, Toshiba, HGST). C'est l'un des postes où il ne faut pas économiser.

**Négliger le refroidissement**. Un NAS dans un placard fermé, sans ventilation, voit sa durée de vie chuter. Les disques durs détestent la chaleur. Prévoir une ventilation minimale (plinthe ventilée, ou emplacement dégagé).

**Confondre synchronisation et sauvegarde**. iCloud, Google Drive, Dropbox sont des outils de synchronisation. Une synchronisation protège contre la perte d'un appareil, mais pas contre la suppression d'un fichier (qui se répercute à tous les appareils). Une sauvegarde garde un historique des versions. Les deux sont complémentaires.

## Le chiffrement : la question qui se pose pour les données sensibles

Pour qui stocke des données sensibles (fiscales, médicales, juridiques), le chiffrement du disque ou du NAS est une couche supplémentaire essentielle.

**Sur un disque externe**, le chiffrement peut être matériel (le disque a un code PIN, comme les LaCie Rugged Secure) ou logiciel (BitLocker pour Windows, FileVault pour Mac, VeraCrypt open source). Le chiffrement matériel est plus rapide, le chiffrement logiciel plus flexible.

**Sur un NAS**, Synology propose le chiffrement AES-256 des volumes, activable depuis DSM. C'est recommandé pour les données professionnelles stockées sur un NAS qui pourrait être volé. L'inconvénient : le chiffrement réduit les performances de 10 à 20%.

**Sur le cloud**, vérifier que le service propose un chiffrement at rest (au repos, c'est-à-dire des fichiers stockés sur les serveurs) et in transit (en transit, c'est-à-dire pendant la transmission). Les grands services (iCloud avec Advanced Data Protection activé, Google Drive, Dropbox) le proposent par défaut.

![Serveur NAS dans un bureau domestique, voyants lumineux en fonctionnement](https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1800&q=82)

## Les outils de sauvegarde dédiés

Pour les utilisateurs qui veulent aller au-delà du simple clic « sauvegarder maintenant », des logiciels spécialisés automatisent et fiabilisent le processus.

**Time Machine** (intégré à macOS) est la solution de référence pour les utilisateurs Mac. Il fait des sauvegardes incrémentales automatiques sur un disque externe ou un NAS compatible. Restauration complète ou fichier par fichier, c'est simple et fiable.

**File History** (intégré à Windows 10/11) est l'équivalent Microsoft. Moins élégant que Time Machine, mais fonctionnel.

**Acronis True Image** (50€/an) est la solution complète pour qui veut un outil professionnel : sauvegarde système complète, image disque, protection anti-ransomware intégrée. Pour les PC, c'est une référence.

**Veeam Agent for Windows** (gratuit pour un usage personnel) est l'équivalent d'Acronis pour les utilisateurs avertis. Moins convivial, plus puissant.

**rsync / rsnapshot** (Linux, Mac via terminal) sont les outils open source pour qui aime la ligne de commande. Très puissants, très fiables, mais moins conviviaux.

## La gestion à long terme

Une fois la stack de stockage en place, la vraie question est la maintenance. Quatre habitudes à prendre.

**Tester la restauration une fois par an**. Choisissez un fichier, restaurez-le depuis votre sauvegarde, vérifiez qu'il s'ouvre correctement. C'est la seule manière de s'assurer que la sauvegarde fonctionne.

**Vérifier la santé des disques durs**. Les NAS Synology et QNAP intègrent S.M.A.R.T. monitoring, qui alerte quand un disque montre des signes de fatigue. Pour les disques externes, des outils comme CrystalDiskInfo (Windows) ou smartmontools (Mac/Linux) font le travail.

**Renouveler les disques tous les cinq à sept ans**. Un disque dur a une durée de vie moyenne de cinq à sept ans en usage normal. Au-delà, le risque de panne augmente exponentiellement.

**Mettre à jour le système du NAS**. Les constructeurs (Synology, QNAP) publient régulièrement des mises à jour de DSM et QTS qui corrigent des vulnérabilités de sécurité. Les installer dans les semaines suivant leur sortie est essentiel.

## Un investissement modeste pour une tranquillité réelle

La protection des données, en 2026, est à la portée du plus grand nombre. Pour 300 à 700€ d'investissement matériel et 50 à 100€/an d'abonnement cloud, on obtient une configuration qui protège ses données contre la majorité des sinistres.

Ce qui coûte cher n'est pas le matériel, c'est la perte des données. Photos de famille irremplaçables, vidéos de mariage, documents fiscaux, archives de travail. Une fois perdues, ces données ne se rachètent pas. La question n'est pas « est-ce que je peux me permettre d'investir 500€ dans une protection ? », mais « est-ce que je peux me permettre de perdre mes données ? ».

La réponse, pour la majorité des gens, est non. Et la règle du 3-2-1 reste, après vingt ans, le meilleur moyen de ne pas avoir à répondre à cette question dans la douleur.