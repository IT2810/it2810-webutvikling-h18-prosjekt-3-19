IT2810 - Prosjekt 3, gruppe 19

# Hydrinator

One Paragraph of project description goes here

- **Ahsan Azim** [@ahsannazim](https://github.com/ahsannazim)
- **Johannes Tomren Røsvik** [@rosvik](http://github.com/rosvik)
- **Pål Fossnes** [@Palfos23](http://github.com/Palfos23)

## App functionality

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

Vår første test var ganske enkel, å lage en "snapshot" av render-outputen for vår første komponent (Todo)

```
import "react-native";
import React from "react";
import Todo from "../Todo";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Todo />).toJSON();

  expect(tree).toMatchSnapshot();
});
```

Alle snapshots blir lagret i "**tests**/**snapshots**/".
Man kan da sjekke ut resultatet i Todo-test.js.snap.

Bakgrunnen for bruken av snapshot testing er at vi vil forsikre oss om at hver gang vi kjører testene våre vil outputen av vår test render matche hva det var tidligere (eller oppdatere disse snapshotene når de endrer seg som forventet). Snapshot testing er med andre ord et veldig nyttig verktøy når man vil forsikre seg om at UI'et sitt ikke endrer seg uventet.
Neste gang man kjører testene vil outputen som blir rendered bli sammenlignet med snapshotet som ble lagd tidligere. Om en snapshot test feiler, må man undersøke om forandringen er ønsket eller ei. Dersom forandringen er ønsket kan man kalle Jest ved å bruke

```
npm test -- --u
```

for å overskrive det eksisterende snapshotet.

### Unit testing

Unit testing med Jest gjøres som i det aller fleste rammeverk. Man har en tilnærmet engelskspråklig syntax, eksempler på dette er:

```
expect(answer)toBeTruthy();
expect(value)toBeGreaterThan(6);
expect(compileAndroidCode).toThrow(ConfigError);
```

Dette kan man se i testingen vår av komponenten Todo:

```
...
describe("Testing functionality", () => {
    test("Checkbox is checked", () => {
      tree2.checkBoxChecked();
      expect(tree2.state.dialogVisible).toBeFalsy();
    });

...
```

### Coverage

Se test-coverage med

```
npm test -- --coverage
```

En ting som er verdt å merke seg ved dette prosjektet er at vi er ute etter å vise at vi kan teste komponentene våre (basic unit testing) med bruk av jest. Test-coverage står dermed ikke i hovedfokus i dette prosjektet.

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

## Arbeidsmetodikk

### Git og koding

For å holde orden på progresjonen i utvklingen av produktet vårt har vi brukt github. I startfasen av prosjektet lagde vi issues som beskrivde hva som måtte gjøres. Ut i fra disse issuesene opprettet vi branches. Sammarbeidet/arbeidsfordelingen har vært grei, selv om noen tok litt mer ansvar enn andre. Vi kunne dog vært bedre på å pushe tidlig i utviklingen, noe vi ble mye bedre på i sluttfasen. Før vi startet opprettet vi en policy om å relatere commits til issues for å styrke strukturen i utviklingen. Dette føler vi at vi har gjort meget bra (med et par unntak selvsagt).

Koden er godt kommentert og oversiktlig. Dette gjør det enklere for folk utenfra å forstå hele prosjektet vårt. Den er også godt strukturert med komponenter, tester osv. Komponenter, variabler og lignende er navngitt etter best practise. Dette er noe vi alltid prøver å gjøre skikkelig og som hjelper på å gjøre koden enda mer oversiktlig og fin.

### Gruppearbeid

Som sagt over føler vi at sammarbeidet innad i gruppen har vært grei, dessverre ikke utmerket da vi fortsatt ikke har lært hverandre å kjenne. Dette merket vi for eksempel de gangene vi ville sette opp arbeidsmøter (forskjellig døgnrytme etc). Noen har også tatt mer ansvar enn andre, men samtidig har de som har tatt ansvar for ulike deler forklart godt hva de har gjort til de andre medlemmene av gruppen. Det er også enstemmig vedtatt at alle har lært masse om både react-native, jest, asyncStorage og det å arbeide i team (både positive og negative sider).

## Built With

- [React Native](https://facebook.github.io/react-native/) - JavaScript rammeverk for mobile applikasjoner
- [NPM](http://npmjs.com) - Avhenigheter og bibliotekinstallasjon
- [Expo](https://expo.io) - Bygging av applikasjonen
- [Jest](https://jestjs.io) - Testing
