# Laif - Artificial Evolution

Game project built using ReactJS in the client app. The backend is an 'express' server.

## Background

The player will take control over one species which is put in an artificial dome. Each player (species) must feed on other species, while defending
agains other species. If the player misevolves his species, it may go extinct and he must start all over again.

A round lasts from one to several weeks.

## Install

Install lerna globally

```
npm i -g lerna
```

or do `npm i` and use

```
./node_modules/.bin/lerna bootstrap
```

to set up all of the needed dependencies.

## Structure

The project structure is not finally defined. It is a monorepo, handled by the lerna project.

There are different packages:

package name | purpose | tech
--- | --- | ---
laif-client | The web client of the project. Build with ReactJS and served as a static files. | ReactJS
ms-species-stats | Microservice for managing the stats of one species. | ExpressJS, NeDB

## Adding a new microservice

`express-generator` can be used to generate the template for a microservice. It is a nodejs
template generating a sample express webserver.
When using this, the view engine probably should be removed.