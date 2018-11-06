# Großstadt-Baum

Dieses Projekt ist ein Copytest. Im Ergebnis ist eine interaktive Webseite entstanden.

<img src="https://raw.githubusercontent.com/tursics/trees-story/master/assets/screenshot-1.png" width="300">

Die Grundlage ist ein Datensatz über Straßenbäume aus dem Open Data Portal Berlins.

<img src="https://raw.githubusercontent.com/tursics/trees-story/master/assets/screenshot-2.png" width="300">

Es gibt einige Statistiken und interaktive Elemente in dem Artikel.

<img src="https://raw.githubusercontent.com/tursics/trees-story/master/assets/screenshot-3.png" width="300">

# Build

```
$ npm install tsv
$ node script/build-statistics.js 
```

- data #1 from 2016-03-01

title              |street trees, 2016    |street treets, 2018   |
-------------------|----------------------|----------------------|
Data count         |331.366 trees         |434.156 trees
Trees count        |331.352 trees         |434.156 trees
**Districts**      ||
Charlottenburg-W.  |43.052 trees (12.9%)  |42.889 trees (9.8%)
Friedrichshain-K.  |10.264 trees          |16.260 trees
Lichtenberg        |23.632 trees (7.1%)   |31.462 trees (7.2%)
Marzahn-H.         |11.601 trees          |45.073 trees (10.3%)
Mitte              |21.307 trees (6.4%)   |25.438 trees (5.8%)
Neukölln           |19.244 trees (5.8%)   |20.672 trees          |
Pankow             |43.597 trees (13.1%)  |42.881 trees (9.8%)   |
Reinickendorf      |43.563 trees (13.1%)  |44.088 trees (10.1%)  |
Spandau            |24.670 trees (7.4%)   |26.040 trees (5.9%)   |
Steglitz-Z.        |56.989 trees (17.1%)  |60.697 trees (13.9%)  |
Tempelhof-Sch.     |32.997 trees (9.9%)   |34.984 trees (8%)     |
Treptow-K.         |436 trees             |43.537 trees (10%)    |
**Type**           ||
TILIA              |126.238 trees (38%)   |153.470 trees (35.3%)
ACER               |59.902 trees (18%)    |87.044 trees (20%)
QUERCUS            |31.028 trees (9.3%)   |38.518 trees (8.8%)
PLATANUS           |22.012 trees (6.6%)   |24.964 trees (5.7%)
AESCULUS           |17.449 trees (5.2%)   |20.928 trees
BETULA             |10.787 trees          |14.392 trees
ROBINIA            |8.188 trees           |11.338 trees
FRAXINUS           |7.682 trees           |11.772 trees
SORBUS             |6.047 trees           |
CORYLUS            |5.859 trees           |8.183 trees
POPULUS            |                      |8.143 trees
**Subtype**        ||
TILIA CORDATA      |49.744 trees (15%)    |58.994 trees (13.5%)
ACER PLATANOIDES   |38.279 trees (11.5%)  |51.082 trees (11.7%)
PLATANUS ACERIFOLIA|21.928 trees (6.6%)   |24.797 trees (5.7%)
QUERCUS ROBUR      |19.935 trees (6%)     |24.885 trees (5.7%)
TILIA PLATYPHYLLOS |15.070 trees          |18.803 trees
TILIA SPEC.        |14.703 trees          |15.711 trees
AESCULUS HIPPOCASTANUM|13.612 trees       |16.291 trees
TILIA INTERMEDIA   |12.045 trees          |14.663 trees
BETULA PENDULA     |10.139 trees          |13.281 trees
TILIA EUCHLORA     |9.686 trees
Acer pseudoplatanus|                      |12.684 trees
**Age in years**   |51: 14.816 trees      |33: 16.269 trees
                   |36: 13.976 trees      |28: 16.130 trees
                   |31: 13.494 trees      |53: 16.111 trees
                   |46: 13.029 trees      |38: 15.448 trees
                   |66: 11.216 trees      |48: 13.538 trees
                   |average: 41.8 years   |average: 41.3 years
                   |                      |median: 37 years
**Oldest**         ||
2018               |                      |422 trees
2017               |                      |1983 trees
2016               |27 trees              |2296 trees
2015               |1275 trees            |2432 trees
2014               |1762 trees            |2927 trees
2013               |1768 trees            |2940 trees
2012               |2014 trees            |3085 trees
2011               |2267 trees            |3418 trees
2010               |1752 trees            |3746 trees
2009               |2079 trees            |2933 trees
2008               |2349 trees            |
2007               |1933 trees            |
                   |1745: 1 trees         |1745: 1 trees
                   |1740: 1 trees         |1739: 1 trees
                   |1739: 1 trees         |1720: 1 trees
                   |1720: 1 trees         |1700: 3 trees
                   |1704: 1 trees         |1655: 1 trees
                   |1700: 3 trees         |1498: 1 trees
                   |1655: 1 trees         |1295: 1 trees
                   |1575: 1 trees         |1193: 1 trees
                   |1533: 1 trees         |1085: 1 trees
                   |1316: 1 trees         |1: 3 trees
**Height (in cm)** |12.600.00: 1 trees    |6.700.00: 1 trees
                   |5.800.00: 1 trees     |5.800.00: 1 trees
                   |2.275.00: 1 trees     |2.500.00: 1 trees
                   |1.900.00: 1 trees     |2.200.00: 1 trees
                   |1.800.00: 2 trees     |2.013.00: 3 trees
                   |1.700.00: 3 trees     |1.998.00: 2 trees
                   |1.600.00: 11 trees    |1.994.00: 2 trees
                   |1.500.00: 4 trees     |1.992.00: 1 trees
                   |1.400.00: 1 trees     |1.991.00: 1 trees
                   |1.300.00: 1 trees     |1.988.00: 1 trees
                   |1.214.00: 1 trees     |1.987.00: 13 trees
                   |1.200.00: 4 trees     |1.986.00: 3 trees
                   |1.100.00: 3 trees     |1.985.00: 6 trees
                   |1.000.00: 4 trees     |1.984.00: 5 trees
                   |900.00: 1 trees       |1.980.00: 5 trees
                   |800.00: 4 trees       |1.979.00: 6 trees
                   |700.00: 4 trees       |1.978.00: 7 trees
                   |600.00: 4 trees       |1.975.00: 7 trees
                   |500.00: 4 trees       |1.970.00: 8 trees
                   |400.00: 2 trees       |1.965.00: 7 trees
                   |300.00: 1 trees       |1.960.00: 9 trees
                   |:                     |:
                   |20: 1 trees           |16: 1 trees
                   |16: 2 trees           |15: 3 trees
                   |15: 2 trees           |14: 1 trees
                   |14: 1 trees           |12: 1 trees
                   |12: 1 trees           |9: 1 trees
                   |10: 5 trees           |8: 1 trees
                   |9: 1 trees            |4: 1 trees
                   |8: 1 trees            |0: 147.410 trees
                   |4: 1 trees            |-10.00: 7 trees
                   |0: 1 trees            |-15.00: 3 trees
                   |average: 671 cm       |average: 808 cm
                   |                      |median: 1100 cm
**Height (in cm)** |7.00: 44.561 trees (13.4%)|7.00: 62.658 trees (14.4%)
                   |                      |0: 147.410 trees (33.9%)
**Trunk circumference (in cm)** ||
                   |325.00: 1 trees       |212.01: 1 trees
                   |305.00: 1 trees       |138.00: 1 trees
                   |205.00: 2 trees       |110.00: 1 trees
                   |203.00: 1 trees       |101.00: 1 trees
                   |138.00: 1 trees       |94.00: 1 trees
                   |115.00: 1 trees       |92.79: 1 trees
                   |110.00: 1 trees       |92.08: 1 trees
                   |105.00: 3 trees       |91.08: 1 trees
                   |101.00: 1 trees       |88.92: 1 trees
                   |95.00: 1 trees        |63.27: 1 trees
                   |94.00: 1 trees        |61.89: 1 trees
                   |92.05: 1 trees        |58.00: 1 trees
                   |87.00: 1 trees        |57.40: 1 trees
                   |85.00: 1 trees        |49.73: 1 trees
                   |76.84: 1 trees        |47.42: 1 trees
                   |59.91: 1 trees        |44.67: 1 trees
                   |58.00: 1 trees        |34.97: 1 trees
                   |57.58: 1 trees        |31.40: 1 trees
                   |50.83: 1 trees        |31.00: 1 trees
                   |47.57: 1 trees        |25.50: 1 trees
                   |:                     |:
                   |9: 19 trees           |10: 34 trees
                   |8: 6 trees            |9: 29 trees
                   |7: 5 trees            |8: 19 trees
                   |6: 7 trees            |7: 5 trees
                   |5: 4 trees            |6: 16 trees
                   |4: 3 trees            |5: 5 trees
                   |3: 5 trees            |4: 4 trees
                   |2: 2 trees            |3: 9 trees
                   |1: 4 trees            |1: 4 trees
                   |0: 99 trees           |0: 89 trees
                   |average: 106 cm       |average: 101 cm
                   |                      |median: 90 cm
**Trunk circumference (in cm)**||
                   |60: 6.292 trees       |110: 9.831 trees
**Tree crown (in cm)**||
                   |50.000: 1 trees       |50.000: 2 trees
                   |40.500: 1 trees       |40.500: 1 trees
                   |40.000: 3 trees       |40.000: 4 trees
                   |30.000: 2 trees       |30.000: 1 trees
                   |20.000: 1 trees       |15.000: 1 trees
                   |14.500: 1 trees       |14.500: 1 trees
                   |10.000: 4 trees       |11.100: 1 trees
                   |9.000: 1 trees        |11.000: 2 trees
                   |8.880: 1 trees        |10.500: 1 trees
                   |8.800: 2 trees        |10.000: 4 trees
                   |8.000: 2 trees        |9.000: 1 trees
                   |7.800: 1 trees        |8.880: 1 trees
                   |7.300: 1 trees        |8.800: 2 trees
                   |6.800: 1 trees        |8.400: 1 trees
                   |6.600: 1 trees        |8.300: 1 trees
                   |6.500: 1 trees        |8.000: 4 trees
                   |6.400: 1 trees        |7.800: 1 trees
                   |5.900: 1 trees        |7.700: 1 trees
                   |5.550: 1 trees        |7.600: 1 trees
                   |5.500: 1 trees        |7.300: 1 trees
                   |:                     |:
                   |27: 1 trees           |30: 2 trees
                   |25: 2 trees           |27: 1 trees
                   |20: 1 trees           |25: 2 trees
                   |15: 1 trees           |15: 1 trees
                   |12: 1 trees           |12: 1 trees
                   |10: 4 trees           |10: 4 trees
                   |8: 1 trees            |8: 1 trees
                   |5: 2 trees            |5: 2 trees
                   |1: 1 trees            |1: 1 trees
                   |0: 1 trees            |0: 219.433 trees
                   |average: 299 cm       |average: 306 cm
                   |                      |median: 550 cm
**Tree crown (in cm)**||
                   |600: 15.667 trees     |600: 22.589 trees (5.2%)
                   |                      |0: 219.433 trees (50.5%)

Ideal street tree (2016, ignore BEZIRK):

```
{
    "gml_id": "featuretype.F3__938163",
    "spatial_name": "F3__938163",
    "spatial_alias": "F3__938163",
    "spatial_type": "Point",
    "StandortNr": "3/9",
    "Kennzeich": 544,
    "NameNr": "Mollstraße I",
    "Art_Dtsch": "WINTER-LINDE",
    "Art_Bot": "TILIA CORDATA",
    "Gattung": "TILIA",
    "ALK_Nr4st": 26,
    "StrName": "Mollstraße",
    "HausNr": 3,
    "Pflanzjahr": 1975,
    "Standalter": 41,
    "Stammumfg": 60,
    "BaumHoehe": 7,
    "BEZIRK": "Mitte",
    "Eigentuemer": "Land Berlin",
    "Zusatz": "null",
    "KroneDurch": 6,
    "lon": "13.418758521290073",
    "lat": "52.52529966357725"
}
```

Ideal street treet (2018, ignore BEZIRK):
```
{
    "STANDORT_NR": "A/48",
    "KENNZEICHEN": 100994,
    "NAME_NUMBER": "Fürstenwalder Damm /Salvador-Allende-Straße Köp ",
    "ART_DEUTSCH": "Winter-Linde",
    "ART_BOTANISCH": "Tilia cordata",
    "GATTUNG_BOTANISCH": "TILIA",
    "STRASSENNAME": "Fürstenwalder Damm",
    "HAUSNR": "",
    "ZUSATZ": "",
    "PFLANZJAHR": 1981,
    "STANDALTER": 37,
    "KRONENDURCHMESSER_AKT": 5,
    "STAMMUMFANG_AKT": 99,
    "BAUMHOEHE_AKT": 11,
    "BEZIRK": "Treptow-Köpenick"
}
```

# Lizenzen

Der Quelltext steht unter der MIT-Lizenz, das eine Bild unter CC-0-Lizenz.


---

2nd version of this site:

## collect the data

- install the [WFS Downloader](https://github.com/codeforberlin/wfs-downloader): ```pip install wfs-downloader```
- download the tree data: ```wfs-downloader script/download-config.yml```

**Nutzungsbedingungen:**

```Für die Verwendung der Daten gelten folgende Nutzungsbestimmungen: http://www.stadtentwicklung.berlin.de/geoinformation/download/nutzIII.pdf - Der Quellenvermerk gemäß §2 lautet "Geoportal Berlin / [Titel des Datensatzes]".```

**wfs:Title**

```Baumbestand Berlin - Straßenbäume - Sachdaten zur Karte```

---

3rd version of this site:

## collect the data

Go to the FIS-Broker, browse to the datasets and copy the WFS links
- Anlagenbäume: https://fbinter.stadt-berlin.de/fb/wfs/data/senstadt/s_baumbestand_an
- Straßenbäume: https://fbinter.stadt-berlin.de/fb/wfs/data/senstadt/s_baumbestand
- Uferbäume: https://fbinter.stadt-berlin.de/fb/wfs/data/senstadt/s_uferbaeume (https://fbinter.stadt-berlin.de/fb?loginkey=alphaDataStart&alphaDataId=s_uferbaeume@senstadt)

Import the WFS links in QGIS and export the datasets as TSV files (choose CSV with TAB separator)

## data

**Uferbäume**
- description: Bäume am Gewässer
- modified: 03.02.2017


**Baumbestand Berlin - Anlagenbäume**
- description: Sachdaten zum Baumbestand - Anlagenbäume - mit Angaben zur Baumart, Adresse, Pflanzjahr, Höhe etc.
- more: https://fbinter.stadt-berlin.de/fb_daten/beschreibung/sachdaten/sach_baumbestand_anlagen.html
- based on:  Meldung des Grünflächenbestandes durch die bezirklichen Straßen- und Grünflächenämter 
- modified: 30.05.2018


**Baumbestand Berlin - Straßenbäume**
- description: Sachdaten zum Baumbestand - Straßenbäume - mit Angaben zur Baumart, Adresse, Pflanzjahr, Höhe etc.
- more: https://fbinter.stadt-berlin.de/fb_daten/beschreibung/sachdaten/sach_baumbestand_strassen.html
- based on: Meldung des Grünflächenbestandes durch die bezirklichen Straßen- und Grünflächenämter 
- modified: 30.05.2018

**license**
- Nutzungsbedingungen: Für die Verwendung der Daten gelten folgende Nutzungsbestimmungen: http://www.stadtentwicklung.berlin.de/geoinformation/download/nutzIII.pdf - Der Quellenvermerk gemäß §2 lautet "Geoportal Berlin / [Titel des Datensatzes]".
