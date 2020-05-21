# Joy Meter

De Joy Meter is een webapplicatie waar je een meting kan afleggen die adhv een formule berekend hoe goed je je voelt en van waar die (negatieve) energie komt.

Wanneer je inlogt kom je op het startscherm waar al je metingen staan. De eerste keer zal dit leeg zijn omdat je nog geen metingen hebt gedaan.
Links in de navigatiebalk kan je dan klikken op 'Start Meting', dan kom je op het scherm waar je een meting kan afleggen.

De bedoeling is dat je bij elke categorie (werk, relaties, gezondheid en vrije tijd) aangeeft hoeveel aandacht je daarin steekt, en dan hoeveel aandacht je per ondercategorie erin steekt.
Per ondercategorie kan je ook invullen hoeveel energie je daarin steekt en hoeveel energie je eruit krijgt. De categorieën en ondercategorieën moeten samen op 100 uitkomen.

Als je metingen hebt gedaan kan je een overzicht zien om de 'Mijn Metingen' pagina, en kan je doorklikken op een meting om je score met uitleg te zien.

Als je je vooruitgang over de maanden heen wilt bekijken kan je bij 'Vooruitgang' een grafiek zien van je gemiddelde scores van doorheen de maanden.

## Installation

Via [npm](https://www.npmjs.com/) worden de volgende packages geïnstalleerd:

chart.js voor de bar en line graph.
angular gauge-chart.
material voor angular

```bash
npm install chart.js --save
npm install angular-gauge-chart
npm install angular-material --save
```

## Usage

```typescript
import { GaugeChartModule } from 'angular-gauge-chart';
import { MatSliderModule } from '@angular/material/slider';

imports: [
    GaugeChartModule,
    MatSliderModule
  ],
```

## Backend

De repository voor de backend staat op: (https://github.com/Web-IV/1920-a2-be-victorstandaert)

## Users

Er zijn 2 gebruikers accounts al in de database:
student@hogent.be 
    met wachtwoord: P@ssword1111
recipemaster@hogent.be
    met wachtwoord: P@ssword1111


## Testing

De tests kunnen enkel gedaan worden op een nieuwe versie van de applicatie... wanneer er al metingen of accounts zijn toegevoegd werken ze niet meer.
Dit is omdat de tests zijn afgesteld op een versie van de app wanneer hij net is gecreeërd vanuit de backend.

