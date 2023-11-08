const url = "https://64de8919825d19d9bfb2b059.mockapi.io/getProducts";

export const getProductsByCategoryId = async (categoryId) => {
  try {
    const response = await fetch(url);
    const products = await response.json();
    return products.filter((product) => product.category.toString() === categoryId.toString());
  } catch (error) {
    console.log(error);
  }
};

export const getProductBySlug = async (slug) => {
  try {
    const response = await fetch(url);
    const product = await response.json();
    return product.find((product) => product.slug.toString() === slug);
  } catch (error) {
    console.log(error);
  }
};

export const getAllProducts = async () => {
  try {
    const response = await fetch(url);
    const products = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
};

export default { getProductsByCategoryId, getProductBySlug, getAllProducts };
