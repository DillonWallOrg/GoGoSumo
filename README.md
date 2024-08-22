# GoGoSumo
.NET Core + React + Vite - Fullstack application for a Japan travel guide services site

Check out the live site: https://polite-mushroom-0e52d7700.5.azurestaticapps.net

## Status
- [x] <strike> Initial system and database design </strike>
- [x] <strike> Initial project and dev environment setup </strike>
- [x] <strike> Setup docker </strike>
- [x] <strike> Add some basic REST API routes and structure according to Clean Architecture </strike>
- [x] <strike> Setup basic frontend with clerk integration </strike>
- [x] <strike> Cover some classes with unit tests to prepare for GitHub actions integration </strike>
- [x] <strike> Host frontend with Azure Static Web App Service </strike>
- [x] <strike> Host backend with Azure Linux VM </strike>
- [x] <strike> Integrate deployment of client and server into GitHub actions </strike>
- [ ] Add HTTPS route to the backend
- [ ] Design and build the frontend to match up to the backend
- [ ] Cover all classes up until now with Unit Tests to prepare for TDD
- [ ] Iteratively improve and add new features using TDD
- [ ] Introduce more CI/CD tooling, specifically Terrform for IaC with an aim at cloud provider independent infrastructure

## Contents
* [Why This Project?](#why-this-project)
* [Quick Start](#quick-start)
* [Development Setup](#development-setup)
* [Screenshots](#screenshots)
* [Contributing](#contributing)

---

## Why this project?
This project is a first look at the business idea generated by my friends and I after my studies abroad in Japan. 

We found that many foreigners in Japan are lacking support for doing the activities they want to do, and that we could help fulfil this need. 

In an effort to bring this idea to fruition, this website will serve as the starting point for the business and allow us to start providing our travel services to our users.

<div align="right">[ <a href="#contents">↑ Back to top ↑</a> ]</div>

---

## Quick Start
This project is still in development and has no quick start guide yet. Please check back later!

<div align="right">[ <a href="#contents">↑ Back to top ↑</a> ]</div>

---

## Development Setup
1. Pull the code from this repo.
2. Navigate to the `GoGoSumo.Server` directory and run the `docker compose up -f compose.dev.yml` command in your terminal.
3. The following should now be available:
  - PgAdmin should now be running on `http://localhost:15432/browser/`
  - Postgres should be running on port `5432` and setup with Flyway migrations
  - Debug the REST API server (which is using Swagger) with Visual Studio, or run the frontend with `npm run dev` in the `gogosumo.client` directory 

<div align="right">[ <a href="#contents">↑ Back to top ↑</a> ]</div>

---

## Screenshots
This project is still in development and has no screenshots yet. Please check back later!

<div align="right">[ <a href="#contents">↑ Back to top ↑</a> ]</div>

---

## Contributing
Please help support development by:
* Checking out the list of [open issues](https://github.com/DillonWall/GoGoSumo/issues?q=is%3Aissue+is%3Aopen+).
* If you need new features, please open a [new issue](https://github.com/DillonWall/GoGoSumo/issues) or start a [discussion](https://github.com/DillonWall/GoGoSumo/discussions).
* When creating a pull request, kindly consider the time it takes for reviewing and testing, and maintain proper coding style.
* If you wish to use this project commercially, kindly [contact me](https://github.com/DillonWall). 

Please [![Star GoGoSumo](https://img.shields.io/github/stars/DillonWall/GoGoSumo.svg?style=social&label=Star%20GoGoSumo)](https://github.com/DillonWall/GoGoSumo/) to support growth!

<div align="right">[ <a href="#contents">↑ Back to top ↑</a> ]</div>
