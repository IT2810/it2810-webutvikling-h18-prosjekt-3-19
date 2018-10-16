IT2810 - Prosjekt 3, gruppe 19

# Hydrinator

One Paragraph of project description goes here

- **Ahsan Azim** [@ahsannazim](https://github.com/ahsannazim)
- **Johannes Tomren Røsvik** [@rosvik](http://github.com/rosvik)
- **Pål Fossnes** [@Palfos23](http://github.com/Palfos23)

## Getting Started

### Prerequisites

Expo

```
npm install expo-cli --global
```

### Installing

Installer node pakker

```
npm install
```

Bygg prosjektet med expo

```
expo start
```

Scan QR-koden med mobilen for å åpne applikasjonen.

## Running the tests

Når man benytter seg av

```
react-native init
```

vil man automatisk få inkludert jest i prosjektet man starter

Kjør alle tester som ligger i en '**tests**' mappe, slutter på spec.js eller slutter på test.js med

```
npm test
```

### Snapshot testing

Vår første test var ganske enkel, å lage en "snapshot" av render-outputen for vår første komponent (TabBarIcon)

```
import "react-native";
import React from "react";
import TabBarIcon from "../TabBarIcon";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<TabBarIcon />).toJSON();

  expect(tree).toMatchSnapshot();
});
```

Man kan da sjekke ut resultatet i TabBarIcon-test.js.snap

```
// TabBarIcon-test.js.snap

exports[`renders correctly 1`] = `
<Text
  accessible={true}
  allowFontScaling={true}
  ellipsizeMode="tail"
/>
`;
```

Bakgrunnen for bruken av snapshot testing er at vi vil forsikre oss om at hver gang vi kjører testene våre vil outputen av vår test render matche hva det var tidligere (eller oppdatere disse snapshotene når de endrer seg som forventet). Snapshot testing er med andre ord et veldig nyttig verktøy når man vil forsikre seg om at UI'et sitt ikke endrer seg uventet.
Neste gang man kjører testene vil outputen som blir rendered bli sammenlignet med snapshotet som ble lagd tidligere. Om en snapshot test feiler, må man undersøke om forandringen er ønsket eller ei. Dersom forandringen er ønsket kan man kalle Jest ved å bruke

```
jest -u
```

for å overskrive det eksisterende snapshotet.

### Shallow rendering

Dersom komponenten din har flere lag vil man gjerne bruke shallow rendering for å teste komponentene sine. Øverst i testen må man da sette inn

```
import ShallowRenderer from 'react-test-renderer/shallow';
```

Et eksempel på bruk av shallow rendering i vårt prosjekt er

## Diskusjon av viktige valg

> Dokumentasjonen skal diskutere, forklare og vise til alle de viktigste valgene og løsningene som gruppa gjør (inklusive valg av komponenter og api).

## Tutorials for valg av teknologi

> Gruppas valg av teknologi som utforskes (jmfr krav til innhold) skal dokumenteres i tutorials form slik at andre lett kan lære av eksempelet dere lager (dvs. gi en liten introduksjon til hva og hvordan).

### AsyncStorage

AsyncStorage et React Native bibliotek for å lagre ukryptert data lokalt på enheten. Biblioteket fungerer ved å gi hver verdi som lagres en unik nøkkel, som oppgis når man ønsker å hente dataen ut igjen senere.

For å lagre data er dette et enkelt eksempel (hentet fra [React Native sin dokumentasjon](https://facebook.github.io/react-native/docs/asyncstorage)):

```
_storeData = async () => {
  try {
    await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
  } catch (error) {
    // Error saving data
  }
}
```

Her er `@MySuperStore:key` nøkkelen til dataen `I like to save it.`.

Å hente ut data senere fungerer slik:

```
_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('@MySuperStore:key');
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
   } catch (error) {
     // Error retrieving data
   }
}
```

I vårt prosjekt har vi valgt å legge dette inn i mer dynamiske funksjoner, som tar inn respektive verdier og nøkler fra applikasjonen:

### !! TODO !!

```
_storeEntry = async (key, text) => {
  try {
    await AsyncStorage.setItem(key, text);
  } catch (error) {
    Alert.alert('Error saving data');
  }
}
```

Vi lagrer hver todo som en egen entry, og holder oversikt over nøklene til disse i en liste som også lagres gjennom AsyncStorage, men på et fast sted. Når applikasjonen åpnes, hentes denne listen fra det faste stedet og så alle todoene.

## Built With

- [React Native](https://facebook.github.io/react-native/) - JavaScript rammeverk for mobile applikasjoner
- [NPM](http://npmjs.com) - Avhenigheter og bibliotekinstallasjon
- [Expo](https://expo.io) - Bygging av applikasjonen
- [Jest](https://jestjs.io) - Testing
