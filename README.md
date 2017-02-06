# Der Berlin-Baum

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

loading...
Data count:  331366
Trees count: 331352

Districts:
  Steglitz-Zehlendorf: 56989 trees (17.1%)
  Pankow: 43597 trees (13.1%)
  Reinickendorf: 43563 trees (13.1%)
  Charlottenburg-Wilmersdorf: 43052 trees (12.9%)
  Tempelhof-Schöneberg: 32997 trees (9.9%)
  Spandau: 24670 trees (7.4%)
  Lichtenberg: 23632 trees (7.1%)
  Mitte: 21307 trees (6.4%)
  Neukölln: 19244 trees (5.8%)
  Marzahn-Hellersdorf: 11601 trees
  Friedrichshain-Kreuzberg: 10264 trees
  Treptow-Köpenick: 436 trees

Type:
  TILIA: 126238 trees (38%)
  ACER: 59902 trees (18%)
  QUERCUS: 31028 trees (9.3%)
  PLATANUS: 22012 trees (6.6%)
  AESCULUS: 17449 trees (5.2%)
  BETULA: 10787 trees
  ROBINIA: 8188 trees
  FRAXINUS: 7682 trees
  SORBUS: 6047 trees
  CORYLUS: 5859 trees
  :
  SEQUOIADENDRON: 2 trees
  TAMARIX: 1 trees
  CORNUS: 1 trees
  EUONYMUS: 1 trees
  CARAGANA: 1 trees

Subtype:
  TILIA CORDATA: 49744 trees (15%)
  ACER PLATANOIDES: 38279 trees (11.5%)
  PLATANUS ACERIFOLIA: 21928 trees (6.6%)
  QUERCUS ROBUR: 19935 trees (6%)
  TILIA PLATYPHYLLOS: 15070 trees
  TILIA SPEC.: 14703 trees
  AESCULUS HIPPOCASTANUM: 13612 trees
  TILIA INTERMEDIA: 12045 trees
  BETULA PENDULA: 10139 trees
  TILIA EUCHLORA: 9686 trees

Age in years:
  51: 14816 trees
  36: 13976 trees
  31: 13494 trees
  46: 13029 trees
  66: 11216 trees
  best: 41.8 years

Oldest:
  2016: 27 trees
  2015: 1275 trees
  2014: 1762 trees
  2013: 1768 trees
  2012: 2014 trees
  2011: 2267 trees
  2010: 1752 trees
  2009: 2079 trees
  2008: 2349 trees
  2007: 1933 trees
  :
  1745: 1 trees
  1740: 1 trees
  1739: 1 trees
  1720: 1 trees
  1704: 1 trees
  1700: 3 trees
  1655: 1 trees
  1575: 1 trees
  1533: 1 trees
  1316: 1 trees

Height (in cm):
  1260000: 1 trees
  580000: 1 trees
  227500: 1 trees
  190000: 1 trees
  180000: 2 trees
  170000: 3 trees
  160000: 11 trees
  150000: 4 trees
  140000: 1 trees
  130000: 1 trees
  121400: 1 trees
  120000: 4 trees
  110000: 3 trees
  100000: 4 trees
  90000: 1 trees
  80000: 4 trees
  70000: 4 trees
  60000: 4 trees
  50000: 4 trees
  40000: 2 trees
  30000: 1 trees
  :
  20: 1 trees
  16: 2 trees
  15: 2 trees
  14: 1 trees
  12: 1 trees
  10: 5 trees
  9: 1 trees
  8: 1 trees
  4: 1 trees
  0: 1 trees
  best: 671 cm
Height (in cm):
  700: 44561 trees (13.4%)

Trunk circumference (in cm):
  32500: 1 trees
  30500: 1 trees
  20500: 2 trees
  20300: 1 trees
  13800: 1 trees
  11500: 1 trees
  11000: 1 trees
  10500: 3 trees
  10100: 1 trees
  9500: 1 trees
  9400: 1 trees
  9205: 1 trees
  8700: 1 trees
  8500: 1 trees
  7684: 1 trees
  5991: 1 trees
  5800: 1 trees
  5758: 1 trees
  5083: 1 trees
  4757: 1 trees
  :
  9: 19 trees
  8: 6 trees
  7: 5 trees
  6: 7 trees
  5: 4 trees
  4: 3 trees
  3: 5 trees
  2: 2 trees
  1: 4 trees
  0: 99 trees
  best: 106 cm
Trunk circumference (in cm):
  60: 6292 trees

Tree crown (in cm):
  50000: 1 trees
  40500: 1 trees
  40000: 3 trees
  30000: 2 trees
  20000: 1 trees
  14500: 1 trees
  10000: 4 trees
  9000: 1 trees
  8880: 1 trees
  8800: 2 trees
  8000: 2 trees
  7800: 1 trees
  7300: 1 trees
  6800: 1 trees
  6600: 1 trees
  6500: 1 trees
  6400: 1 trees
  5900: 1 trees
  5550: 1 trees
  5500: 1 trees
  :
  27: 1 trees
  25: 2 trees
  20: 1 trees
  15: 1 trees
  12: 1 trees
  10: 4 trees
  8: 1 trees
  5: 2 trees
  1: 1 trees
  0: 1 trees
  best: 299 cm
Tree crown (in cm):
  600: 15667 trees

Ideal trees:
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
1 tree
```

# Lizenzen

Der Quelltext steht unter der MIT-Lizense, das eine Bild unter CC-0-Lizense.
