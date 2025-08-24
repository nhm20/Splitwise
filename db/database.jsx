import * as Sqlite from "expo-sqlite";

const db = Sqlite.openDatabase("products.db");

export const init = () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, image TEXT, price REAL, description TEXT, category TEXT, lat REAL, lng REAL);"
        );
      },
      [],
      (_, result) => {
        resolve(result);
      },
      (_, err) => {
        reject(err);
      }
    );
  });
};

// export const insertProduct = (product) => {
//   db.transaction((tx) => {
//     tx.executeSql(
//       "INSERT INTO products (name, image, price, description, category) VALUES (?, ?, ?, ?, ?);",
//       [
//         product.name,
//         product.image,
//         product.price,
//         product.description,
//         product.category,
//       ]
//     );
//   });
// };

// export const fetchProducts = (callback) => {
//   db.transaction((tx) => {
//     tx.executeSql("SELECT * FROM products;", [], (_, { rows }) => {
//       const products = [];
//       for (let i = 0; i < rows.length; i++) {
//         products.push(rows.item(i));
//       }
//       callback(products);
//     });
//   });
// };
