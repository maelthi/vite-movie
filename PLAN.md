## NE PAS TOUCHER AU DESIGN POUR LE MOMENT

Pour chaque étape du plan, tu dois créer une PR sur Github, attendre que je la
merge pour passer à la prochaine étape.

# Fix les erreurs critiques et mettre à jour les dépendances

Il faut mettre à jour les dépendances fronts vers React 19 + Vite 5/6.  
Il faut supprimer Firebase du projet ainsi que tout le mécanisme de cache
localStorage (les données viendront directement des fichiers JSON).  
Il faut corriger toutes les erreurs soulevées dans le fichier docs/REVIEW.md
(les points concernant Firebase et localStorage deviennent caducs une fois ces
éléments retirés).

# Remplacer Jest par Vitest + ajouter Playwright

- Supprimer Jest, ts-jest, @types/jest et la config jest.config.ts
- Installer Vitest + @testing-library/react compatible
- Migrer les tests existants (SearchBar.test.tsx, helpers.test.ts)
- Ajouter Playwright pour les tests end-to-end

# Refacto le code

Il faut voir si on peut réfacturiser le code pour faire plus simple. Si pas
possible, on laisse comme ça, il faut pas casser de fonctionnalité. Ajouter des
TU, des tests d'intégration et des tests E2E.

# Brancher les actors.json et movies.json

Il faut brancher les fichiers Actors.json et Movies.json avec le front. Si tu as
besoin de simplifier ou d'optimiser les fichiers Json tu peux. Ajouter des TU,
des tests d'intégration et des tests E2E.

# Déployer quelque part

Tu vas me faire des suggestions pour déployer ce site quelque part, par exemple
sur Versel ou sur Surge pour pouvoir le voir en ligne.

# Amélioration pour ajouter des acteurs / actrices / films

A décider plus tard

# Amélioration de l'UX / UI

A décider plus tard
