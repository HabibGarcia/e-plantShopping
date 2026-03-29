import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // Tarea: Añadir un producto al carrito
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        // Si es nuevo, lo añadimos con cantidad inicial de 1
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    // Tarea: Eliminar un producto basado en su nombre
    removeItem: (state, action) => {
      // Filtramos el array para quitar el item que coincida con el nombre recibido
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    // Tarea: Actualizar la cantidad de un producto específico
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        // Actualizamos la propiedad quantity con el nuevo valor
        itemToUpdate.quantity = quantity;
      }
    },
  },
});
// Exportamos las acciones para usarlas en los componentes (ProductList y CartItem)
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Exportamos el reducer por defecto para configurarlo en store.js
export default CartSlice.reducer;
