import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "name car",
      brand: "brand",
      category_id: "category",
      daily_rate: 213,
      description: "description car",
      fine_amount: 50,
      license_plate: "1234sase",
    });
    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with exists license plate", () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "name car",
        brand: "brand",
        category_id: "category",
        daily_rate: 213,
        description: "description car",
        fine_amount: 50,
        license_plate: "1234sase",
      });
      await createCarUseCase.execute({
        name: "name car",
        brand: "brand",
        category_id: "category",
        daily_rate: 213,
        description: "description car",
        fine_amount: 50,
        license_plate: "1234sase",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a car with avaible true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "name car",
      brand: "brand",
      category_id: "category",
      daily_rate: 213,
      description: "description car",
      fine_amount: 50,
      license_plate: "1234sase",
    });

    expect(car.available).toBe(true);
  });
});
