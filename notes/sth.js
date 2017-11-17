export class MutationEffect {
    id;
    name;
    modifier;
}

export class Mutation {
    id;
    name;
    description;
    effects: [];
}

export class Species {
    id;
    name;
    mutations: [];
    // stats
    population;
}

export class Dome {
    species: [];
}