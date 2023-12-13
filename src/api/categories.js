import { db } from "../db/db";
import { collection, getDocs, query, where } from "firebase/firestore";

/*export const getCategories = async () => {
  try {
    const categoriesRef = collection(db, "getCategories");
    const response = await getDocs(categoriesRef);
    const categories = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return categories;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryBySlug = async (slug) => {
  try {
    const categoriesRef = collection(db, "getCategories");
    const q = query(categoriesRef, where("slug", "==", slug));
    const response = await getDocs(q);
    const categories = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return categories?.[0];
  } catch (error) {
    console.log(error);
  }
};

export default { getCategories, getCategoryBySlug };*/

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