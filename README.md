# Großstadt-Baum

Dieses Projekt ist noch im entstehen...

<img src="https://raw.githubusercontent.com/tursics/trees-story/master/assets/screenshot--1.png" width="300">

Die Grundlage ist ein Datensatz über Straßenbäume aus dem Open Data Portal Berlins... (und weitere Bäume)

<img src="https://raw.githubusercontent.com/tursics/trees-story/master/assets/screenshot--2.png" width="300">

Es gibt einige Statistiken und interaktive Elemente in dem Artikel.

<img src="https://raw.githubusercontent.com/tursics/trees-story/master/assets/screenshot--3.png" width="300">

# Build

```
$ npm install tsv
$ node script/build-statistics.js 
```

- data #1 from 2016-03-01
- data #2 from 2018
- data #3 from 2018
- data #4 from ????

title              |street trees, 2016    |street trees, 2018    |park trees, 2018      |riverside trees, ???? |
-------------------|----------------------|----------------------|----------------------|----------------------|
Data count         |331.366 trees         |434.156 trees         |459.903 trees         |46.366 trees
Trees count        |331.352 trees         |434.156 trees         |459.903 trees         |46.366 trees
**Districts**      ||||
Charlottenburg-W.  |43.052 trees (12.9%)  |42.889 trees (9.8%)   |50.400 trees (10.9%)  |80 trees
Friedrichshain-K.  |10.264 trees          |16.260 trees          |24.877 trees (5.4%)   |-
Lichtenberg        |23.632 trees (7.1%)   |31.462 trees (7.2%)   |38.982 trees (8.4%)   |1.425 trees
Marzahn-H.         |11.601 trees          |45.073 trees (10.3%)  |49.742 trees (10.8%)  |6.860 trees (14.7%)
Mitte              |21.307 trees (6.4%)   |25.438 trees (5.8%)   |34.403 trees (7.4%)   |999 trees
Neukölln           |19.244 trees (5.8%)   |20.672 trees          |35.081 trees (7.6%)   |912 trees
Pankow             |43.597 trees (13.1%)  |42.881 trees (9.8%)   |56.970 trees (12.3%)  |17.213 trees (37.1%)
Reinickendorf      |43.563 trees (13.1%)  |44.088 trees (10.1%)  |32.984 trees (7.1%)   |8.110 trees (17.4%)
Spandau            |24.670 trees (7.4%)   |26.040 trees (5.9%)   |19.103 trees          |6.626 trees (14.2%)
Steglitz-Z.        |56.989 trees (17.1%)  |60.697 trees (13.9%)  |48.396 trees (10.5%)  |864 trees
Tempelhof-Sch.     |32.997 trees (9.9%)   |34.984 trees (8%)     |27.563 trees (5.9%)   |513 trees
Treptow-K.         |436 trees             |43.537 trees (10%)    |41.390 trees (8.9%)   |2.764 trees (5.9%)
**Type**           ||||
TILIA              |126.238 trees (38%)   |153.470 trees (35.3%) |39.546 trees (8.5%)   |1.213 trees
ACER               |59.902 trees (18%)    |87.044 trees (20%)    |103.220 trees (22.4%) |13.004 trees (28%)
QUERCUS            |31.028 trees (9.3%)   |38.518 trees (8.8%)   |59.665 trees (12.9%)  |2.710 trees (5.8%)
PLATANUS           |22.012 trees (6.6%)   |24.964 trees (5.7%)   |                      |
AESCULUS           |17.449 trees (5.2%)   |20.928 trees          |                      |
BETULA             |10.787 trees          |14.392 trees          |28.602 trees (6.2%)   |2.246 trees
ROBINIA            |8.188 trees           |11.338 trees          |24.019 trees (5.2%)   |2.760 trees (5.9%)
FRAXINUS           |7.682 trees           |11.772 trees          |                      |1.931 trees
SORBUS             |6.047 trees           |                      |                      |
CORYLUS            |5.859 trees           |8.183 trees           |                      |
POPULUS            |                      |8.143 trees           |21.851 trees          |2.925 trees (6.3%)
PINUS              |                      |                      |24.177 trees (5.2%)   |
Alnus              |                      |                      |                      |7.474 trees (16.1%)
Salix              |                      |                      |                      |5.862 trees (12.6%)
Prunus             |                      |                      |                      |2.469 trees (5.3%)
**Subtype**        ||||
TILIA CORDATA      |49.744 trees (15%)    |58.994 trees (13.5%)  |18.186 trees          |
ACER PLATANOIDES   |38.279 trees (11.5%)  |51.082 trees (11.7%)  |45.730 trees (9.9%)   |5.394 trees (11.6%)
PLATANUS ACERIFOLIA|21.928 trees (6.6%)   |24.797 trees (5.7%)   |                      |
QUERCUS ROBUR      |19.935 trees (6%)     |24.885 trees (5.7%)   |37.483 trees (8.1%)   |2.527 trees (5.4%)
TILIA PLATYPHYLLOS |15.070 trees          |18.803 trees          |                      |
TILIA SPEC.        |14.703 trees          |15.711 trees          |                      |
AESCULUS HIPPOCASTANUM|13.612 trees       |16.291 trees          |                      |
TILIA INTERMEDIA   |12.045 trees          |14.663 trees          |                      |
BETULA PENDULA     |10.139 trees          |13.281 trees          |23.951 trees (5.2%)   |2.210 trees
TILIA EUCHLORA     |9.686 trees           |                      |                      |
Acer pseudoplatanus|                      |12.684 trees          |16.876 trees          |2.292 trees
Robinia pseudoacacia|                     |                      |21.335 trees          |2.738 trees (5.9%)
Carpinus betulus   |                      |                      |18.013 trees          |
Alnus glutinosa    |                      |                      |                      |7.208 trees (15.5%)
Acer negundo       |                      |                      |                      |4.117 trees (8.8%)
Salix alba         |                      |                      |                      |3.083 trees (6.6%)
**Age in years**   |51: 14.816 trees      |33: 16.269 trees      |38: 12.092 trees      |-
.                  |36: 13.976 trees      |28: 16.130 trees      |33: 10.467 trees      |-
.                  |31: 13.494 trees      |53: 16.111 trees      |48: 9.678 trees       |-
.                  |46: 13.029 trees      |38: 15.448 trees      |28: 9.226 trees       |-
.                  |66: 11.216 trees      |48: 13.538 trees      |23: 8.719 trees       |-
.                  |average: 41.8 years   |average: 41.3 years   |average: 29 years     |-
.                  |                      |median: 37 years      |median: 39 years      |median: 1980 (seeded)
**Oldest**         ||||
2018               |                      |422 trees             |31 trees              |19965: 1 trees
2017               |                      |1.983 trees           |305 trees             |17975: 1 trees
2016               |27 trees              |2.296 trees           |550 trees             |2008: 3 trees
2015               |1.275 trees           |2.432 trees           |526 trees             |2000: 203 trees
2014               |1.762 trees           |2.927 trees           |1.353 trees           |1999: 13 trees
2013               |1.768 trees           |2.940 trees           |513 trees             |1998: 170 trees
2012               |2.014 trees           |3.085 trees           |522 trees             |1996: 9 trees
2011               |2.267 trees           |3.418 trees           |568 trees             |1995: 1986 trees
2010               |1.752 trees           |3.746 trees           |981 trees             |1993: 27 trees
2009               |2.079 trees           |2.933 trees           |857 trees             |1992: 3 trees   
2008               |2.349 trees           |                      |                      |
2007               |1.933 trees           |                      |                      |
.                  |1745: 1 trees         |1745: 1 trees         |1.062: 3 trees        |1800: 1 trees
.                  |1740: 1 trees         |1739: 1 trees         |201: 1 trees          |1645: 1 trees
.                  |1739: 1 trees         |1720: 1 trees         |199: 1 trees          |1068: 1 trees
.                  |1720: 1 trees         |1700: 3 trees         |198: 2 trees          |980: 1 trees
.                  |1704: 1 trees         |1655: 1 trees         |55: 1 trees           |199: 1 trees
.                  |1700: 3 trees         |1498: 1 trees         |16: 1 trees           |175: 1 trees
.                  |1655: 1 trees         |1295: 1 trees         |8: 1 trees            |150: 1 trees
.                  |1575: 1 trees         |1193: 1 trees         |3: 1 trees            |36: 1 trees
.                  |1533: 1 trees         |1085: 1 trees         |1: 4 trees            |5: 1 trees
.                  |1316: 1 trees         |1: 3 trees            |0: 1 trees            |0: 2 trees
**Height (in cm)** |12.600.00: 1 trees    |6.700.00: 1 trees     |1.700.00: 1 trees     |121.00: 1 trees
.                  |5.800.00: 1 trees     |5.800.00: 1 trees     |1.500.00: 1 trees     |118.00: 2 trees
.                  |2.275.00: 1 trees     |2.500.00: 1 trees     |1.414.00: 1 trees     |114.00: 1 trees
.                  |1.900.00: 1 trees     |2.200.00: 1 trees     |1.400.00: 1 trees     |94.00: 1 trees
.                  |1.800.00: 2 trees     |2.013.00: 3 trees     |1.340.00: 1 trees     |89.00: 1 trees
.                  |1.700.00: 3 trees     |1.998.00: 2 trees     |1.200.00: 2 trees     |80.00: 1 trees
.                  |1.600.00: 11 trees    |1.994.00: 2 trees     |1.000.00: 1 trees     |74.00: 1 trees
.                  |1.500.00: 4 trees     |1.992.00: 1 trees     |900.00: 1 trees       |72.00: 1 trees
.                  |1.400.00: 1 trees     |1.991.00: 1 trees     |820.00: 1 trees       |46.00: 1 trees
.                  |1.300.00: 1 trees     |1.988.00: 1 trees     |800.00: 1 trees       |35.00: 1 trees
.                  |1.214.00: 1 trees     |1.987.00: 13 trees    |500.00: 1 trees       |34.00: 1 trees
.                  |1.200.00: 4 trees     |1.986.00: 3 trees     |342.00: 1 trees       |32.00: 19 trees
.                  |1.100.00: 3 trees     |1.985.00: 6 trees     |229.00: 1 trees       |31.00: 18 trees
.                  |1.000.00: 4 trees     |1.984.00: 5 trees     |226.00: 1 trees       |30.00: 37 trees
.                  |900.00: 1 trees       |1.980.00: 5 trees     |225.00: 1 trees       |29.00: 5 trees
.                  |800.00: 4 trees       |1.979.00: 6 trees     |218.00: 1 trees       |28.00: 140 trees
.                  |700.00: 4 trees       |1.978.00: 7 trees     |201.00: 1 trees       |27.00: 92 trees
.                  |600.00: 4 trees       |1.975.00: 7 trees     |176.00: 2 trees       |26.00: 297 trees
.                  |500.00: 4 trees       |1.970.00: 8 trees     |170.00: 1 trees       |25.00: 641 trees
.                  |400.00: 2 trees       |1.965.00: 7 trees     |166.00: 1 trees       |24.00: 728 trees
.                  |300.00: 1 trees       |1.960.00: 9 trees     |161.00: 1 trees       |23.00: 780 trees
.                  |:                     |:                     |:                     |:
.                  |20: 1 trees           |16: 1 trees           |1.31: 1 trees         |9.00: 2.277 trees
.                  |16: 2 trees           |15: 3 trees           |1.00: 244 trees       |8.00: 4.171 trees
.                  |15: 2 trees           |14: 1 trees           |95: 1 trees           |7.00: 2.284 trees
.                  |14: 1 trees           |12: 1 trees           |40: 1 trees           |6.00: 2.847 trees
.                  |12: 1 trees           |9: 1 trees            |20: 1 trees           |5.00: 1.594 trees
.                  |10: 5 trees           |8: 1 trees            |17: 1 trees           |4.00: 1.166 trees
.                  |9: 1 trees            |4: 1 trees            |15: 2 trees           |3.00: 423 trees
.                  |8: 1 trees            |0: 147.410 trees      |10: 3 trees           |2.00: 281 trees
.                  |4: 1 trees            |-10.00: 7 trees       |1: 1 trees            |1.00: 55 trees
.                  |0: 1 trees            |-15.00: 3 trees       |0: 128.373 trees      |0: 39 trees
.                  |average: 6.71 cm      |average: 8.08 cm      |average: 10.26 cm     |average: 12.97 cm
.                  |                      |median: 11.00 cm      |median: 13.00 cm      |median: 12.00 cm 
**Height (in cm)** |7.00: 44.561 trees (13.4%)|7.00: 62.658 trees (14.4%)|12.00: 53.236 trees (11.5%)|8.00: 4171 trees (8.9%)
.                  |                          |0: 147.410 trees (33.9%)  |0: 128.373 trees (27.9%)   |
**Trunk circumference (in cm)** ||||
.                  |325.00: 1 trees       |212.01: 1 trees       |971.06: 1 trees       |72.60: 1 trees
.                  |305.00: 1 trees       |138.00: 1 trees       |931.03: 1 trees       |45.52: 1 trees
.                  |205.00: 2 trees       |110.00: 1 trees       |901.21: 1 trees       |8.88: 1 trees
.                  |203.00: 1 trees       |101.00: 1 trees       |178.00: 1 trees       |6.56: 1 trees
.                  |138.00: 1 trees       |94.00: 1 trees        |170.00: 1 trees       |6.00: 1 trees
.                  |115.00: 1 trees       |92.79: 1 trees        |168.00: 1 trees       |5.82: 1 trees
.                  |110.00: 1 trees       |92.08: 1 trees        |166.00: 1 trees       |5.34: 1 trees
.                  |105.00: 3 trees       |91.08: 1 trees        |164.00: 1 trees       |5.27: 1 trees
.                  |101.00: 1 trees       |88.92: 1 trees        |160.00: 1 trees       |5.20: 1 trees
.                  |95.00: 1 trees        |63.27: 1 trees        |158.00: 1 trees       |5.15: 1 trees
.                  |94.00: 1 trees        |61.89: 1 trees        |153.68: 1 trees       |5.00: 1 trees
.                  |92.05: 1 trees        |58.00: 1 trees        |150.00: 1 trees       |4.96: 1 trees
.                  |87.00: 1 trees        |57.40: 1 trees        |136.06: 1 trees       |4.90: 1 trees
.                  |85.00: 1 trees        |49.73: 1 trees        |132.00: 1 trees       |4.80: 1 trees
.                  |76.84: 1 trees        |47.42: 1 trees        |130.00: 1 trees       |4.74: 1 trees
.                  |59.91: 1 trees        |44.67: 1 trees        |129.50: 1 trees       |4.70: 2 trees
.                  |58.00: 1 trees        |34.97: 1 trees        |128.38: 1 trees       |4.60: 1 trees
.                  |57.58: 1 trees        |31.40: 1 trees        |110.00: 1 trees       |4.50: 4 trees
.                  |50.83: 1 trees        |31.00: 1 trees        |107.91: 1 trees       |4.46: 1 trees
.                  |47.57: 1 trees        |25.50: 1 trees        |101.00: 1 trees       |4.45: 2 trees
.                  |:                     |:                     |:                     |:
.                  |9: 19 trees           |10: 34 trees          |9: 71 trees           |12: 2 trees
.                  |8: 6 trees            |9: 29 trees           |8: 78 trees           |11: 1 trees
.                  |7: 5 trees            |8: 19 trees           |7: 54 trees           |10: 2 trees
.                  |6: 7 trees            |7: 5 trees            |6: 51 trees           |9: 3 trees
.                  |5: 4 trees            |6: 16 trees           |5: 48 trees           |8: 1 trees
.                  |4: 3 trees            |5: 5 trees            |4: 23 trees           |7: 1 trees
.                  |3: 5 trees            |4: 4 trees            |3: 35 trees           |5: 1 trees
.                  |2: 2 trees            |3: 9 trees            |2: 9 trees            |4: 2 trees
.                  |1: 4 trees            |1: 4 trees            |1: 18 trees           |2: 1 trees
.                  |0: 99 trees           |0: 89 trees           |0: 706 trees          |1: 1 trees
.                  |average: 106 cm       |average: 101 cm       |average: 111 cm       |average: 84 cm
.                  |                      |median: 90 cm         |median: 100 cm        |median: 70 cm
**Trunk circumference (in cm)**||||
.                  |60: 6.292 trees       |110: 9.831 trees      |50: 9.597 trees       |40: 1.194 trees
**Tree crown (in cm)**||||
.                  |50.000: 1 trees       |50.000: 2 trees       |80.000: 1 trees       |109.00: 1 trees 
.                  |40.500: 1 trees       |40.500: 1 trees       |72.500: 1 trees       |85.00: 1 trees
.                  |40.000: 3 trees       |40.000: 4 trees       |70.000: 1 trees       |81.00: 1 trees
.                  |30.000: 2 trees       |30.000: 1 trees       |60.000: 1 trees       |79.00: 1 trees
.                  |20.000: 1 trees       |15.000: 1 trees       |50.000: 1 trees       |68.00: 1 trees
.                  |14.500: 1 trees       |14.500: 1 trees       |30.500: 1 trees       |58.00: 1 trees
.                  |10.000: 4 trees       |11.100: 1 trees       |30.000: 1 trees       |54.00: 1 trees
.                  |9.000: 1 trees        |11.000: 2 trees       |23.200: 1 trees       |42.00: 1 trees
.                  |8.880: 1 trees        |10.500: 1 trees       |22.000: 1 trees       |35.00: 1 trees
.                  |8.800: 2 trees        |10.000: 4 trees       |21.900: 1 trees       |32.00: 1 trees
.                  |8.000: 2 trees        |9.000: 1 trees        |15.500: 1 trees       |30.00: 1 trees
.                  |7.800: 1 trees        |8.880: 1 trees        |15.000: 3 trees       |24.00: 1 trees
.                  |7.300: 1 trees        |8.800: 2 trees        |12.600: 1 trees       |22.00: 3 trees
.                  |6.800: 1 trees        |8.400: 1 trees        |12.000: 3 trees       |21.00: 1 trees
.                  |6.600: 1 trees        |8.300: 1 trees        |11.700: 1 trees       |20.00: 23 trees
.                  |6.500: 1 trees        |8.000: 4 trees        |11.200: 2 trees       |19.00: 4 trees
.                  |6.400: 1 trees        |7.800: 1 trees        |11.100: 1 trees       |18.00: 41 trees
.                  |5.900: 1 trees        |7.700: 1 trees        |10.300: 1 trees       |17.00: 36 trees
.                  |5.550: 1 trees        |7.600: 1 trees        |10.000: 1 trees       |16.00: 120 trees
.                  |5.500: 1 trees        |7.300: 1 trees        |9.900: 2 trees        |15.00: 207 trees
.                  |:                     |:                     |:                     |:
.                  |27: 1 trees           |30: 2 trees           |39: 1 trees           |9.00: 1.426 trees
.                  |25: 2 trees           |27: 1 trees           |38: 1 trees           |8.00: 4.385 trees
.                  |20: 1 trees           |25: 2 trees           |32: 1 trees           |7.00: 2.867 trees
.                  |15: 1 trees           |15: 1 trees           |30: 6 trees           |6.00: 6.950 trees
.                  |12: 1 trees           |12: 1 trees           |27: 1 trees           |5.00: 6.461 trees
.                  |10: 4 trees           |10: 4 trees           |20: 8 trees           |4.00: 8.309 trees
.                  |8: 1 trees            |8: 1 trees            |14: 1 trees           |3.00: 4.583 trees
.                  |5: 2 trees            |5: 2 trees            |10: 1 trees           |2.00: 2.986 trees
.                  |1: 1 trees            |1: 1 trees            |1: 2 trees            |1.00: 528 trees
.                  |0: 1 trees            |0: 219.433 trees      |0: 219.600 trees      |0: 3.008 trees
.                  |average: 299 cm       |average: 306 cm       |average: 378 cm       |average: 5.42 cm
.                  |                      |median: 550 cm        |median: 600 cm        |median: 5.00 cm
**Tree crown (in cm)**||||
.                  |600: 15.667 trees     |600: 22.589 trees (5.2%)|600: 28.408 trees (6.1%)|400: 8309 trees (17.9%)
.                  |                      |0: 219.433 trees (50.5%)|0: 219.600 trees (47.7%)|

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

Ideal street tree (2018, ignore BEZIRK):
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

Ideal park tree (2018, ignore BEZIRK):
```
{
    "STANDORT_NR": 197,
    "KENNZEICHEN": 305300,
    "NAME_NUMBER": "Afrikanische Str. 123-125, \"\"Möwensee\"\"",
    "ART_DEUTSCH": "Spitz-Ahorn",
    "ART_BOTANISCH": "Acer platanoides",
    "GATTUNG_BOTANISCH": "ACER",
    "PFLANZJAHR": 1979,
    "STANDALTER": 39,
    "KRONENDURCHMESSER_AKT": 8,
    "STAMMUMFANG_AKT": 93,
    "BAUMHOEHE_AKT": 13,
    "BEZIRK": "Mitte"
}
```

Ideal riverside tree ():
```
{
    "GISID": "A#5819692#2154",
    "GEBIET": "A",
    "GEWNUMMER": 5819692,
    "GEWNAME": "Nordgraben",
    "BAUMNUMMER": 2154,
    "GATTUNG": "Alnus",
    "ART": "glutinosa",
    "UNTERART": "",
    "STANDORT": "Böschung",
    "STAMMUMFAN": 64,
    "KRONENDURC": 4,
    "BAUMHOEHE": 12,
    "BAUMZUSTAN": 2,
    "LOS": 3,
    "PFLANZJAHR": 1980,
    "BEZIRK": "Pankow",
    "UTM33_X": 392038,
    "UTM33_Y": 5829236
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
