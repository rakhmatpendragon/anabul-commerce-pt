export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  badge?: 'New' | 'Organic' | 'Sale' | 'Premium';
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const badgeColors: Record<string, string> = {
    New: 'bg-primary text-on-primary',
    Sale: 'bg-primary text-on-primary',
    Organic: 'bg-secondary text-on-secondary',
    Premium: 'bg-secondary text-on-secondary',
  };

  return (
    <div className="min-w-[280px] md:min-w-[320px] snap-start">
      <div className="premium-card rounded-2xl p-4 group">
        <div className="relative rounded-xl overflow-hidden aspect-square mb-4 bg-surface-container">
          <img
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            src={product.imageUrl}
            alt={product.name}
          />
          {product.badge && (
            <span
              className={`absolute top-3 left-3 text-[12px] font-bold px-3 py-1 rounded-full ${
                badgeColors[product.badge] || 'bg-primary text-on-primary'
              }`}
            >
              {product.badge}
            </span>
          )}
        </div>
        <h3 className="font-headline-md text-body-lg mb-1">{product.name}</h3>
        <p className="text-on-surface-variant text-label-md mb-3">{product.category}</p>
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold">${product.price.toFixed(2)}</span>
          <button className="bg-secondary-container text-on-secondary-container p-2 rounded-full hover:bg-secondary hover:text-white transition-colors">
            <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
