import { Cake } from '@/types/cake';

export const getCakes = async (): Promise<Cake[]> => {
  // In a real app, this would fetch data from an API or database.
  // For now, we return mock data.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          name: 'Classic Vanilla Cake',
          description: 'A timeless classic with rich vanilla flavor and creamy frosting.',
          price: 35.00,
          imageUrl: 'https://images.unsplash.com/photo-1578985545062-6992982d5a01?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          available: true,
        },
        {
          id: '2',
          name: 'Decadent Chocolate Fudge Cake',
          description: 'Layers of moist chocolate cake with a rich chocolate fudge ganache.',
          price: 40.00,
          imageUrl: 'https://images.unsplash.com/photo-1562447990-2f9136e098a5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          available: true,
        },
        {
          id: '3',
          name: 'Strawberry Dream Cake',
          description: 'Light sponge cake with fresh strawberries and whipped cream.',
          price: 38.50,
          imageUrl: 'https://images.unsplash.com/photo-1587314138092-299f0e6e7307?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          available: true,
        },
        {
          id: '4',
          name: 'Red Velvet Royale',
          description: 'Classic red velvet cake with tangy cream cheese frosting.',
          price: 42.00,
          imageUrl: 'https://images.unsplash.com/photo-1559624508-b0a82746c1ce?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          available: false,
        },
        {
          id: '5',
          name: 'Lemon Zest Delight',
          description: 'Refreshing lemon cake with a light lemon glaze.',
          price: 36.00,
          imageUrl: 'https://images.unsplash.com/photo-1563729789225-c603b55502c3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          available: true,
        },
      ]);
    }, 500);
  });
};
