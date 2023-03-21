import { filterData, filterProtagonists, sortList, searchFilter } from '../src/data.js';
const data = [
  {
    name: "Harry Potter",
    house: "Gryffindor"
  },
  {
    name: "Draco Malfoy",
    house: "Slytherin"
  },
  {
    name: "Hermione Granger",
    house: "Gryffindor"
  },
  {
    name: "Severus Snape",
    house: "Slytherin"
  }
];

describe("filterData", () => {
  const result = [
    {
      name: "Harry Potter",
      house: "Gryffindor",
    },
    {
      name: "Hermione Granger",
      house: "Gryffindor",
    }
  ];
  it("is a function", () => {
    expect(typeof filterData).toBe("function");
  });

  it("returns `Filtra la lista de personajes por casa de estudio`", () => {
    expect(filterData(data, "Gryffindor")).toEqual(result);
  });
});

describe("filterProtagonists", () => {
  const protagonists = ['Harry Potter', 'Ronald Weasley', 'Hermione Granger'];
  const result = [
    {
      name: "Harry Potter",
      house: "Gryffindor"
    },
    {
      name: "Hermione Granger",
      house: "Gryffindor"
    }
  ];
  it("is a function", () => {
    expect(typeof filterProtagonists).toBe("function");
  });

  it("returns `Regresa una lista renderizada de los protagonistas`", () => {
    expect(filterProtagonists(data, protagonists)).toEqual(result);
  });
});

describe("sortList", () => {
  const data2 = [
    {
      name: "Harry Potter",
      house: "Gryffindor"
    },
    {
      name: "Harry Potter",
      house: "Gryffindor"
    },
    {
      name: "Draco Malfoy",
      house: "Slytherin"
    },
    {
      name: "Hermione Granger",
      house: "Gryffindor"
    },
    {
      name: "Severus Snape",
      house: "Slytherin"
    }
  ]

  const result = [
    {
      name: "Draco Malfoy",
      house: "Slytherin"
    },
    {
      name: "Harry Potter",
      house: "Gryffindor"
    },
    {
      name: "Harry Potter",
      house: "Gryffindor"
    },
    {
      name: "Hermione Granger",
      house: "Gryffindor"
    },
    {
      name: "Severus Snape",
      house: "Slytherin"
    }
  ];
  it("is a function", () => {
    expect(typeof sortList).toBe("function");
  });

  it("returns `Ordena la lista de personajes de forma ascendente`", () => {
    expect(sortList(data2)).toEqual(result);
  });

});

describe("searchFilter", () => {
  const input = "Harry";
  const result = [
    {
      name: "Harry Potter",
      house: "Gryffindor"
    }
  ];
  it("is a function", () => {
    expect(typeof searchFilter).toBe("function");
  });

  it("returns `Retorna el personaje que coincide con la busqueda`", () => {
    expect(searchFilter(data, input.toLowerCase())).toEqual(result);
  });
});