# Architecture thoughts

## 16.11.2017

At first I thought a classical data-orented approach would be doable (which probably is).

Now I think a microservice architecture would be a better fit.

Notes to the application

* it should be easily maintainable/scalable (docker)
* it must be easily enhancable (microservices)
* there is no fast pacing action ingame

I want to build the client using ReactJS. 
An API gateway would be very nice, and I think GraphQL would be a very good fit. 
The combination of GraphQL and React could be done using facebooks Fiber project.
Since there is no need (ingame) to have immediate actions taken by the player (it's not a fast game),
we should be fine with not using websockets.
Each microservice or self-contained part of the project will be installed on the server using Docker.
The microservices will be connected using an event stream (*solution must be found*). The microservices
themself will probably offer some REST API. *Maybe GraphQL APIs could also be used?* 

This interesting project offers a lot to learn! Naise.

