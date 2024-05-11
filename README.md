# PlayStation Market Search API

A simple API to search for games on the PlayStation Store and retrieve relevant information such as names, prices, and URLs.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction
In today's digital age, APIs (Application Programming Interfaces) play a crucial role in connecting various systems and services, enabling seamless communication and data exchange. The PlayStation Market Search API is built using Express.js, a popular framework for building web applications in Node.js, and incorporates web scraping techniques to fetch data from the PlayStation Store website.

## Features
- Search for games on the PlayStation Store.
- Retrieve game information such as names, prices, and URLs.
- Simple and lightweight API.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed on your machine.
- Basic knowledge of JavaScript.
- Familiarity with Express.js and web scraping concepts.

## Installation
To install the dependencies, clone the repository and run npm install:

```bash
git clone https://github.com/yourusername/playstation-market-api.git
cd playstation-market-api
npm install
```

## Usage
To start the server, run:

```bash
npm start
```

By default, the server will run on port 3000. You can change the port by setting the `PORT` environment variable.

## Endpoints
The API provides the following endpoint:

- `/search?query=searchTerm`: Search for games on the PlayStation Store based on the provided search term.

Example usage:

```http
GET /search?query=spiderman
```

Response:

```json
{
  "searchUrl": "https://store.playstation.com/tr-tr/search/spiderman/1",
  "searchResults": [
    {
      "index": 0,
      "name": "Spider-Man: Miles Morales",
      "price": "₺349,00",
      "url": "https://store.playstation.com/tr-tr/product/EP9000-CUSA20762_00-MILESSTANDARD001",
      "imageUrl": "https://image.url.com/spiderman_miles_morales.jpg"
    },
    ...
  ]
}
```

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature`)
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature`)
6. Create a new Pull Request.

## License
This project is licensed under the [MIT License](LICENSE).
