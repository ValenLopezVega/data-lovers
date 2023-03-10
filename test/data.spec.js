import {
  filterByDirector,
  // filterByProducer,
  orderAzByTitle,
  orderZaByTitle,
  // OrderByYear,
  searchByTitle,
} from "../src/data.js";

describe("filterByDirector", () => {
  it("is a function", () => {
    expect(typeof filterByDirector).toBe("function");
  });

  it("returns peliculas de Hiroyuki Morita", () => {
    const arrayToFilter = [
      { title: "My Neighbor Totoro", director: "Hayao Miyazaki" },
      { title: "The Cat Returns", director: "Hiroyuki Morita" },
      { title: "Tales from Earthsea", director: "Gorō Miyazaki" },
      {
        title: "The Secret World of Arrietty",
        director: "Hiromasa Yonebayashi",
      },
    ];
    expect(filterByDirector(arrayToFilter, "Hiroyuki Morita")).toEqual([
      { title: "The Cat Returns", director: "Hiroyuki Morita" },
    ]);
  });

  it("returns peliculas de Hiromasa Yonebayashi", () => {
    const arrayToFilter = [
      { title: "My Neighbor Totoro", director: "Hayao Miyazaki" },
      { title: "The Cat Returns", director: "Hiroyuki Morita" },
      { title: "Tales from Earthsea", director: "Gorō Miyazaki" },
      {
        title: "The Secret World of Arrietty",
        director: "Hiromasa Yonebayashi",
      },
    ];
    expect(filterByDirector(arrayToFilter, "Hiromasa Yonebayashi")).toEqual([
      {
        title: "The Secret World of Arrietty",
        director: "Hiromasa Yonebayashi",
      },
    ]);
  });
});
// describe("filterByProducer", () => {
//   it("is a function", () => {
//     expect(typeof filterByProducer).toBe("function");
//   });

//   it("returns peliculas de Toru Hara", () => {
//     const arrayToFilter = [
//       { title: "My Neighbor Totoro", producer: "Hayao Miyazaki" },
//       { title: "Grave of the fireflies", producer: "Toru Hara" },
//       { title: "Tales from Earthsea", producer: "Toshio Suzuki" },
//       {
//         title: "Castle in the sky",
//         producer: "Isao Takahata",
//       },
//     ];
//     expect(filterByProducer(arrayToFilter, "Toru Hara")).toEqual([
//       { title: "Grave of the fireflies", producer: "Toru Hara" },
//     ]);
//   });

//   it("returns peliculas de Toshio Suzuki", () => {
//     const arrayToFilter = [
//       { title: "My Neighbor Totoro", producer: "Hayao Miyazaki" },
//       { title: "Grave of the fireflies", producer: "Toru Hara" },
//       { title: "Tales from Earthsea", producer: "Toshio Suzuki" },
//       {
//         title: "Castle in the sky",
//         producer: "Isao Takahata",
//       },
//     ];
//     expect(filterByProducer(arrayToFilter, "Toshio Suzuki")).toEqual([
//       {
//         title: "Tales from Earthsea",
//         producer: "Toshio Suzuki",
//       },
//     ]);
//   });
// });

describe("Sort  A - Z", () => {
  it("is a function", () => {
    expect(typeof orderAzByTitle).toBe("function");
  });

  it("order  A - Z", () => {
    const arrayToSort = [
      { title: "Spirited Away" },
      { title: "Castle in the Sky" },
    ];
    expect(orderAzByTitle(arrayToSort)).toEqual([
      { title: "Castle in the Sky" },
      { title: "Spirited Away" },
    ]);
  });
});

describe("Sort  Z - A", () => {
  it("is a function", () => {
    expect(typeof orderZaByTitle).toBe("function");
  });

  it("order  Z - A", () => {
    const arrayToSort = [
      { title: "Castle in the Sky" },
      { title: "Spirited Away" },
    ];
    expect(orderZaByTitle(arrayToSort)).toEqual([
      { title: "Spirited Away" },
      { title: "Castle in the Sky" },
    ]);
  });
});

// describe("OrderByYear", () => {
//   it("is a function", () => {
//     expect(typeof OrderByYear).toBe("function");
//   });

//   it("returns '1996'", () => {
//     const arrayToSort = [
//       { title: "Spirited Away", release_date: "1998" },
//       { title: "Castle in the Sky", release_date: "1996" },
//     ];
//     expect(OrderByYear(arrayToSort, "1998")).toEqual([
//       { title: "Spirited Away", release_date: "1998" },
//     ]);
//   });
// });

describe("searchByTitle", () => {
  it("is a function", () => {
    expect(typeof searchByTitle).toBe("function");
  });

  it("returns 'My Neighbor Totoro'", () => {
    const arrayToSearch = [
      { title: "Castle in the Sky" },
      { title: "My Neighbor Totoro" },
    ];
    expect(searchByTitle(arrayToSearch, "totoro")).toEqual([
      { title: "My Neighbor Totoro" },
    ]);
  });
});
