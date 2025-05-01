// src/lib/api.ts
import { supabase } from './supabase'
import type { Product, Category } from '../types/intex'

/**
 * Obtiene todos los productos desde Supabase
 */
export async function getAllProducts(): Promise<Product[]> {
	try {
		const { data, error } = await supabase
			.from('products')
			.select('*')
			.order('created_at', { ascending: false })

		if (error) throw error

		let products = data
		return products
	} catch (error) {
		console.error('Error fetching products:', error)
		return []
	}
}
