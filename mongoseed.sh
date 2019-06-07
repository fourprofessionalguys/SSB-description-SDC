#!/usr/bin/env bash

mongoimport --db descriptions --type csv --collection descriptiondata --headerline --file /Users/srujan/SSB-description-SDC/descriptionData.csv
mongoimport --db descriptions --type csv --collection shoeslist --headerline --file /Users/srujan/SSB-description-SDC/shoeData.csv