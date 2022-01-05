## Movie app

# Pourquoi ce projet ?

Je fais ce projet pour pouvoir me rappeler des films et des acteurs que j'ai
vus. Le but est de pouvoir avoir cet outil à portée de main sur mobile par
exemple. Et de pouvoir consulter des informations sur les films, les acteurs et
les actrices.

# Quoi

Le site est disposé de manière très simple. On a une page d'accueil avec dessus
une carte qui est le film du jour. En dessous on a deux autres cartes. On a une
carte qui amène à une liste des films et une autre carte qui amène à la liste
des acteurs et des actrices. Ensuite, c'est la même chose pour les deux listes.
A chaque fois, on aura une liste de cartes où on va pouvoir voir le détail d'un
film et on aura la liste des acteurs et des actrices où on pourra voir les films
dans lesquels ils ont joués. La liste des films dans le détail d'un acteur, ce
sera juste une liste avec le nom du film et on pourra cliquer sur le nom du film
pour aller directement dans la page du détail du film. Dans le détail d'un film,
on aura une liste des acteurs qui ont joué dans ce film et on pourra cliquer sur
un acteur pour aller voir sa fiche. Le film du jour est un film sélectionné
aléatoirement. Pour récupérer la liste des films et des acteurs, tu vas te baser
sur les fichiers movies.json et actors.json qui sont à la racine du projet. Si
tu veux optimiser ces deux fichiers, tu peux, aucun souci.

# Comment ?

Ce projet est en reactJS et est responsive FIRST. Tu peux enlever toute la
partie Firebase du projet.

# Etat du projet

J'ai commencé ce projet il y a longtemps, je l'ai fini il y a aussi longtemps,
maintenant j'aimerais le reprendre et modifier certaines choses. Ce qu'il faut
savoir c'est que les informations que le front-end affiche sont très simples.
J'aimerais mettre un jour tout le front-end, c'est à dire nettoyer les
composants, voir si on peut faire plus simple, faire de l'optimisation de
composants sans casser l'existant et les fonctionnalités qui existent déjà. Il
faudrait aussi rajouter plus de tests unitaires, des tests d'intégration et des
tests end-to-end.

# Amélioration

Pour améliorer le projet, il faudrait pouvoir ajouter des acteurs et des
actrices et des films de manière très rapide et pouvoir récupérer leurs
informations très rapidement. Nous discuterons de cette partie dans un deuxième
temps.
