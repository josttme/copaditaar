// Importa la conexión de Supabase
import { supabase } from './supabase'

export async function getProducts() {
	const { data, error } = await supabase.from('products').select('*')
	if (error) {
		console.error('Error al obtener datos:', error)
		throw error
	}
	return data
}
// Si usabas esta función en el index.astro original
export async function getAllProducts() {
	return getProducts()
}
