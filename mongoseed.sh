#!/usr/bin/env bash

mongoimport --uri "mongodb://srujan:Rosie123@ec2-13-57-215-108.us-west-1.compute.amazonaws.com/descriptions" --type csv --collection shoeslist --headerline --file /Users/srujan/SSB-description-SDC/shoeData.csv
