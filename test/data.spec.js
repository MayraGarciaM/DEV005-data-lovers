import { filterData, filterProtagonists, sortList, searchFilter } from '../src/data.js';

describe("filterData", () => {
  const data = [
    {
      name: "Harry Potter",
      house: "Gryffindor",
    },
    {
      name: "Draco Malfoy",
      house: "Slytherin",
    },
    {
      name: "Hermione Granger",
      house: "Gryffindor",
    },
    {
      name: "Severus Snape",
      house: "Slytherin",
    },
  ];
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
  const data = [
    {
      name: "Harry Potter"
    },
    {
      name: "Draco Malfoy"
    },
    {
      name: "Hermione Granger"
    },
    {
      name: "Severus Snape"
    }
  ];
  const result = [
    {
      name: "Harry Potter"
    },
    {
      name: "Hermione Granger"
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
  const data = [
    {
      name: "Harry Potter"
    },
    {
      name: "Draco Malfoy"
    },
    {
      name: "Severus Snape"
    },
    {
      name: "Hermione Granger"
    }
  ];
  const result = [
    {
      name: "Draco Malfoy"
    },
    {
      name: "Harry Potter"
    },
    {
      name: "Hermione Granger"
    },
    {
      name: "Severus Snape"
    }
  ];
  it("is a function", () => {
    expect(typeof sortList).toBe("function");
  });

  it("returns `Ordena la lista de personajes de forma ascendente`", () => {
    expect(sortList(data)).toEqual(result);
  });
});

describe("searchFilter", () => {
  const input = "Harry";
  const data = [
    {
      name: "Harry Potter"
    },
    {
      name: "Draco Malfoy"
    },
    {
      name: "Severus Snape"
    },
    {
      name: "Hermione Granger"
    }
  ];
  const result = [
    {
      name: "Harry Potter"
    }
  ];
  it("is a function", () => {
    expect(typeof searchFilter).toBe("function");
  });

  it("returns `Retorna el personaje que coincide con la busqueda`", () => {
    expect(searchFilter(data, input.toLowerCase())).toEqual(result);
  });
});