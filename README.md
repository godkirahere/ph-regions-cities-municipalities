# 📍 PH Regions Cities Municipalities

A simple TypeScript library that provides a mapping of Philippine regions to their cities/municipalities.
It is useful for dropdowns, forms, search filters, and other applications that require a location hierarchy.
This library is essentially a subset of a larger countries-and-cities dataset that I scraped and currently use in production, though I can’t recall the original source of this Philippine data.

---

## 📦 Installation

```bash
npm install ph-regions-cities-municipalities
```

or with yarn:

```bash
yarn add ph-regions-cities-municipalities
```

---

## 🚀 Usage

### Import

```ts
import locations from "ph-regions-cities-municipalities";
```

### Get all states

```ts
console.log(locations.states);
/*
[
  {
    iso2: 'PH104200000',
    name: 'Misamis Occidental',
    id: 0
  }
]
*/
```

### Get cities by province code

```ts
const provinceCode = "PH104200000";
console.log(locations.statesMap[provinceCode]);
/*
[
  {
    id: 0,
    name: 'Ozamis City'
  }
]
*/
```

### Find a state by ISO2 code

```ts
function getStateByCode(code: string) {
  return locations.states.find((state) => state.iso2 === code);
}

console.log(getStateByCode("PH104200000"));
// { iso2: 'PH104200000', name: 'Misamis Occidental', id: 0 }
```

### Populate dropdowns

```ts
// States dropdown
const stateOptions = locations.states.map((state) => ({
  value: state.iso2,
  label: state.name,
}));

// Cities dropdown (based on state selection)
function getCitiesForState(stateCode: string) {
  return (locations.statesMap[stateCode] || []).map((city) => ({
    value: city.id,
    label: city.name,
  }));
}
```

---

## 📝 Type Definitions

```ts
export interface City {
  id: number;
  name: string;
}

export interface State {
  iso2: string;
  name: string;
  id: number;
}

export interface Locations {
  statesMap: Record<string, City[]>;
  states: State[];
}
```

---

## 📌 Notes

- `iso2` is a unique identifier for each province/state/region.
- Cities are grouped under their corresponding `iso2`.
- The structure is designed to scale — add more provinces and cities as needed.

---
