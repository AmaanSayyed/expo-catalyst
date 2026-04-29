import { useQuery } from '@tanstack/react-query';

import { api } from './client';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export function useProducts(limit = 10) {
  return useQuery({
    queryKey: ['products', limit],
    queryFn: async () => {
      const response = await api
        .get(`products?limit=${limit}`)
        .json<ProductsResponse>();
      return response;
    },
  });
}

export function useProductCategories() {
  return useQuery({
    queryKey: ['product-categories'],
    queryFn: async () => {
      const response = await api.get('products/category-list').json<string[]>();
      return response;
    },
  });
}

export function useProductsByCategory(category: string) {
  return useQuery({
    queryKey: ['products', 'category', category],
    queryFn: async () => {
      const response = await api
        .get(`products/category/${category}`)
        .json<ProductsResponse>();
      return response;
    },
    enabled: !!category,
  });
}

export interface Quote {
  id: number;
  quote: string;
  author: string;
}

interface QuotesResponse {
  quotes: Quote[];
  total: number;
  skip: number;
  limit: number;
}

export function useQuotes(limit = 5) {
  return useQuery({
    queryKey: ['quotes', limit],
    queryFn: async () => {
      const response = await api
        .get(`quotes?limit=${limit}`)
        .json<QuotesResponse>();
      return response;
    },
  });
}

export function useRandomQuote() {
  return useQuery({
    queryKey: ['quote', 'random'],
    queryFn: async () => {
      const response = await api.get('quotes/random').json<Quote>();
      return response;
    },
  });
}
