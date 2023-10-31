const { nameService, nameServiceByName } = require("./nameService");

jest.mock("./nameService")

describe("Name service tests", () => {
    test("As an user I should return 3 empty search parameters", async () => {
        const result = await nameService();
        console.log(result.data)
        expect(result.data).toEqual({"count": 0, "country": [], "name": ""});
        expect(result.data.count).toEqual(0);
        expect(result.data.country).toEqual([]);
        expect(result.data.name).toEqual("");
    })

    test("", async () => {
        const result = await nameServiceByName("Chan");
        console.log(result.data.name)
        expect(result.data.count).toEqual(231099);
        expect(result.data.country).toEqual(
            [{"country_id": "HK","probability": 0.582},
            {"country_id": "SQ","probability": 0.111},
            {"country_id": "MY","probability": 0.058},
            {"country_id": "CN","probability": 0.041},
            {"country_id": "TW","probability": 0.032}
            ]);
        expect(result.data.name).toEqual("Chan");
    });
});