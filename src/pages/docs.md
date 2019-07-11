## CORRECTIV.Mapple

This is a prototype for reusable bivariate maps for different regions all over
europe. Bivariate means, two dimensions of data are displayed on one map at the
same time.

[See a german example combining far right and right extremists votes](https://interaktiv.morgenpost.de/wo-deutschland-rechts-waehlt/) (Berliner Morgenpost / FUNKE Interaktiv)

[Read this blogpost to learn more about bivariate maps and the method behind](http://www.joshuastevens.net/cartography/make-a-bivariate-choropleth-map/)

### How to use it

#### 1. Find your data

Find two european datasets with the same regional level. Currently *Mapple*
supports [NUTS-levels](https://en.wikipedia.org/wiki/Nomenclature_of_Territorial_Units_for_Statistics) 1 or 3.
Level 1 are states within countries, level 3 are smaller districts.

The datasets should be EU-wide and, when combined, they should provide the
reader with new insights.

Always keep in mind that **correlation does not mean causation**. Also,
comparing two datasets can lead to more questions than it addresses, which does
not have to be necessarily negative, since it can (and should) spur
journalistic research.

Make sure your datasets have proper ids for each region following the NUTS
schema.

Good sources for european datasets are
[Eurostat](https://ec.europa.eu/eurostat/) and
[European Data Portal](https://www.europeandataportal.eu/en)

#### 2. Put your data into a spreadsheet

Please use our template spreadsheets with example data:
- [European NUTS1 Level Spreadsheet](https://docs.google.com/spreadsheets/d/1ITX6h4hDZY9xPs2S2rdPtd9BZrjjQgF3BXLb3dhsA8A) [[example map](/?1ITX6h4hDZY9xPs2S2rdPtd9BZrjjQgF3BXLb3dhsA8A)]
- [European NUTS3 Level Spreadsheet](https://docs.google.com/spreadsheets/d/1wsqhDXq0eEI8HVqgWf3miZTze-RD_hpDwgU0SgSYavE/) [[example map](/?1wsqhDXq0eEI8HVqgWf3miZTze-RD_hpDwgU0SgSYavE)]

Copy the spreadsheet you need into your account and edit it.

You find three Sheets: *Data*, *Config* and *Names*

**Data:** Copy in your data or upload your own table into this sheet. You have
to make sure to have a column for:
- Region NUTS id
- Region name
- Country name
- Your numeric value from one Dataset
- Your numeric value from the other Dataset

you can name these columns however you want as long as you update the *Config* sheet accordingly

**Config:** Adjust all the labels and texts to display in your map. Set the
column names you used in the *Data*-Spreadsheet. Make sure you keep the column
"key" untouched.

*optional, you don't need this for a working map*:
**Names** The names of european countries to use for a `VLOOKUP` if you only
have the ISO-codes available

Don't change the names of the Sheets, as *Mapple* is relying on these exact
names to work properly.

#### 3. Make spreadsheet public

Share your spreadsheet with the setting "Anyone with the link can view"

You can keep editing the spreadsheet, it will update the map (see below)
automatically.

#### 4. See the map

Find the `ID` of your spreadsheet. Simply look in the url for this part:

![how to find the google id](/public/img/gid.png)

Copy this id and append it with a `?` to `https://mapple.correctiv.org`, like this:

    https://mapple.correctiv.org/?1wsqhDXq0eEI8HVqgWf3miZTze-RD_hpDwgU0SgSYavE

Open this link in your browser and if you used the spreadsheet correctly as
described above, you should see a nice map, like this one:

[https://mapple.correctiv.org/?1wsqhDXq0eEI8HVqgWf3miZTze-RD_hpDwgU0SgSYavE](/?1wsqhDXq0eEI8HVqgWf3miZTze-RD_hpDwgU0SgSYavE)
