const url = "https://64de8919825d19d9bfb2b059.mockapi.io/getCategories";

export const getCategories = async () => {
  try {
    const response = await fetch(url);
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryBySlug = async (slug) => {
  try {
    const response = await fetch(url);
    const categories = await response.json();
    return categories.find((category) => category.slug === slug);
  } catch (error) {
    console.log(error);
  }
};

export default { getCategories, getCategoryBySlug };
