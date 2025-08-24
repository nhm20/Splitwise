import faker from 'faker';

export const generateFakeProducts = () => {
  const products = [];
  for (let i = 1; i <= 15; i++) {
      const name = faker.commerce.productName();
      const image = faker.image.imageUrl(200, 300, 'technics', true);
      const price = faker.commerce.price();
      const description = faker.commerce.productDescription();
      const category = faker.commerce.department();
      const id = faker.string.uuid();
      const lat = faker.address.latitude();
      const long = faker.address.longitude();

    products.push({ id, name, image, price, description, category, lat, long });
  }
  return products;
};
