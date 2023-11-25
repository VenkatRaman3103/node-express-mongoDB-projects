# Node Form 
### Templating Project
<img width="948" alt="Screenshot 2023-11-25 091813" src="https://github.com/VenkatRaman3103/node-express-mongoDB-projects/assets/145652521/f496b5bf-c566-47fa-884c-6e7d5b5ff4d8">
<img width="948" alt="Screenshot 2023-11-25 091846" src="https://github.com/VenkatRaman3103/node-express-mongoDB-projects/assets/145652521/f6cd2ead-5a50-46e7-b745-601e4f2ae7a1">

This is a Node.js project that focuses on templating, showcasing the use of templates to generate dynamic HTML content. The project includes a simple server that serves overview and product pages using templates and data from a JSON file.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Templates](#templates)
- [Dependencies](#dependencies)

## Overview

The project includes a Node.js server that responds to different routes, serving dynamic HTML pages generated using templates. The templates are filled with data from a JSON file containing product information.

## Project Structure

- `data/`: Contains the data in JSON format.
- `templates/`: Includes HTML templates for different pages.
- `index.js`: The Node.js server file.
- `README.md`: Project documentation.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nodejs-templating-project.git

2. Install dependencies:

    ```bash
   npm install

3. Run server:


    ```bash
   node index.js
   ``````
   The server will be running at http://127.0.0.1:8000.

## Templates
- template-cards.html: Template for product cards displayed on the overview page.
- template-overview.html: Template for the overview page that includes product cards.
- template-product.html: Template for individual product pages.

## Dependencies
- Node.js
- http
- url
- fs
