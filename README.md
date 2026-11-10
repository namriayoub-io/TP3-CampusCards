# CampusCards – Application React Native

## Description

CampusCards est une application mobile développée avec **React Native** et **TypeScript** dans le cadre du TP3.

L'application permet d'afficher une liste d'étudiants sous forme de cartes. Pour chaque étudiant, elle présente son nom, sa filière, sa note et son statut (Admis ou Ajourné).

Elle affiche également quelques statistiques générales sur les étudiants.

## Fonctionnalités

- Affichage de la liste des étudiants.
- Présentation des informations dans des cartes.
- Affichage du statut de chaque étudiant :
  - **Admis** : note supérieure ou égale à 10/20.
  - **Ajourné** : note inférieure à 10/20.
- Calcul du nombre d'étudiants admis.
- Calcul de la moyenne générale.
- Défilement de la liste avec `ScrollView`.

## Technologies utilisées

- React Native
- TypeScript
- JavaScript
- Expo

## Concepts utilisés

- Composants fonctionnels.
- Props et typage avec TypeScript.
- Rendu conditionnel avec l'opérateur ternaire.
- Méthodes `map()`, `filter()` et `reduce()`.
- Gestion des styles avec `StyleSheet`.
- Mise en page avec Flexbox.
- Utilisation de `ScrollView`.

## Installation et lancement

1. Cloner le dépôt :

```bash
git clone https://github.com/namriayoub-io/TP3-CampusCards.git
```

2. Accéder au dossier du projet :

```bash
cd TP3-CampusCards
```

3. Installer les dépendances :

```bash
npm install
```

4. Lancer l'application :

```bash
npx expo start
```

## Objectif pédagogique

Ce TP a pour objectif de mettre en pratique les notions fondamentales de React Native, notamment la création de composants réutilisables, le passage des props, le rendu des listes et l'organisation des interfaces mobiles.

---

**Projet réalisé dans le cadre du module de développement mobile – IAIL S5.**
