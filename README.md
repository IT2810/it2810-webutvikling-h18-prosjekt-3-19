IT2810 - Prosjekt 3, gruppe 19

# Hydrinator

One Paragraph of project description goes here

* **Ahsan Azim** [@ahsannazim](https://github.com/ahsannazim)
* **Johannes Tomren Røsvik** [@rosvik](http://github.com/rosvik)
* **Pål Fossnes** [@Palfos23](http://github.com/Palfos23)

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

Explain how to run the automated tests for this system


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

* [React Native](https://facebook.github.io/react-native/) - JavaScript rammeverk for mobile applikasjoner
* [NPM](http://npmjs.com) - Avhenigheter og bibliotekinstallasjon
* [Expo](https://expo.io) - Bygging av applikasjonen
* [Jest](https://jestjs.io) - Testing

