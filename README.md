# Budget-Tracker :money_with_wings: :bar_chart: :moneybag:

Since the pandemic began, months have seemed to bleed into one another. It's been difficult to track finances when you struggle to keep track of the day! The solution: my heroku-deployed budget tracker! Does your internet keep cutting out on you like mine does? Not to worry - this application has been designed to store the data you provide while you're offline locally, and updating your balance when internet is available.

[Heroku Link](https://desolate-bastion-02201.herokuapp.com/)

## TABLE OF CONTENTS

-[Features](#Features)

-[Packages](#Packages)

-[Screenshots](#Screenshot)

-[Contact](#Contact)

## FEATURES

- When you initially visit the website, it will only prompt you for a transaction, an amount, and will allow you to add or subtract the amount from your total. Upon submitting your transaction, the graph will populate showing your daily total amounts over time.

- Data is stored in a MongoDB database rather than being stored on your local machine.

- Offline transactions will be stored locally. Upon connection to a network, the data that was stored locally will be submitted to the MongoDB Atlas database.

## PACKAGES

- [Express](https://www.npmjs.com/package/express)

- [Morgan](https://www.npmjs.com/package/morgan)

- [Mongoose](https://www.npmjs.com/package/mongoose)

- [Compression](https://www.npmjs.com/package/compression)

## SCREENSHOT

![Application Screenshot]()

## CONTACT

:link: https://github.com/ethanrmcdowell
  
:e-mail: ethan.r.mcdowell@gmail.com