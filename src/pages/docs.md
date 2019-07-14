## CORRECTIV.Mapple

This is a prototype for reusable bivariate maps for different regions all over
europe. Bivariate means, two dimensions of data are displayed on one map at the
same time.

You can either create a stand alone view of your map or embed it via an iframe
into your existing article or website. See instructions below.

[See a german example combining far right and right extremists votes](https://interaktiv.morgenpost.de/wo-deutschland-rechts-waehlt/) (Berliner Morgenpost / FUNKE Interaktiv)

[Read this blogpost to learn more about bivariate maps and the method behind](http://www.joshuastevens.net/cartography/make-a-bivariate-choropleth-map/)

### How to use it

#### 1. Find your data

Find two european datasets with the same regional level. Currently *Mapple*
supports [NUTS-levels](https://en.wikipedia.org/wiki/Nomenclature_of_Territorial_Units_for_Statistics)
1, 2 or 3 and introduces a faked level 0 which are just the european countries.

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

<mapple-examples></mapple-examples>

Copy the spreadsheet you need into your account and edit it
("Edit" > "Make a copy").

You find three Sheets: *Data*, *Config* and *Names*

**Data:** Copy in your data or upload your own table into this sheet. You have
to make sure to have a column for:
- Region official NUTS id (or ISO2-Code for countries, if you are doing a map
  on NUTS-level 0)
- Region name
- Country name
- Your numeric value from one Dataset
- Your numeric value from the other Dataset

you can name these columns however you want as long as you update the *Config*
sheet accordingly.

**Config:** Adjust all the labels and texts to display in your map. Set the
column names you used in the *Data*-Spreadsheet. Make sure you keep the first
column "key" untouched.

Refer to the further explanations for each setting in the Config-Sheet.

*optional, you don't need this for a working map*:

**Names:** The names of european countries to use for a `VLOOKUP` for the
Data-Sheet if you only have the ISO-codes available

Don't change the names of the Sheets (**Data** & **Config**), as *Mapple* is
relying on these exact names to work properly.

#### 3. Make spreadsheet public

Share your spreadsheet with the setting "Anyone with the link can view"

You can keep editing the spreadsheet, it will update the map (see below)
automatically.

#### 4. See the map

Copy the url of your Google spreadsheet into this field:

<mapple-generate-links></mapple-generate-links>

*If this doesn't work:*

Find the `ID` of your spreadsheet. Simply look in the url for this part:

![how to find the google id](/media/img/gid.png)

Copy this id and append it with a `?` to `{{ BASE_URL }}`, like this:

    {{ BASE_URL }}?{{ EXAMPLE_GID }}

Open this link in your browser and if you used the spreadsheet correctly as
described above, you should see a nice map.
