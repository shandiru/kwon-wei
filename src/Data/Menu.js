 
 import { ChefHat, Filter, Wheat, Nut, TreeDeciduous, Milk, Bean, Flower2, Leaf, Egg, Fish, Shell, Circle, Citrus, FlaskConical, Star, Flame, Phone, MapPin, Clock, TriangleAlert } from 'lucide-react';
 
 export const allergens = [
    { name: 'Gluten', icon: Wheat },
    { name: 'Peanuts', icon: Nut },
    { name: 'Tree Nuts', icon: TreeDeciduous },
    { name: 'Milk', icon: Milk },
    { name: 'Soy', icon: Bean },
    { name: 'Mustard', icon: Flower2 },
    { name: 'Lupin', icon: Leaf },
    { name: 'Eggs', icon: Egg },
    { name: 'Fish', icon: Fish },
    { name: 'Crustaceans', icon: Shell },
    { name: 'Molluscs', icon: Shell },
    { name: 'Sesame', icon: Circle },
    { name: 'Celery', icon: Citrus },
    { name: 'Sulphites', icon: FlaskConical }
  ];


 export const categories = [
    { name: 'Appetisers', chinese: '前菜' },
    { name: 'Soups', chinese: '汤类' },
    { name: 'Chef Recommendations', chinese: '厨师推荐' },
    { name: 'Seafood Dishes', chinese: '海鲜' },
    { name: 'Beef Dishes', chinese: '牛肉' },
    { name: 'Chicken Dishes', chinese: '鸡肉' },
    { name: 'Duck Dishes', chinese: '鸭肉' },
    { name: 'Pork Dishes', chinese: '猪肉' },
    { name: 'Curry Dishes', chinese: '咖喱' },
    { name: 'Vegetarian Dishes', chinese: '素菜' },
    { name: 'Rice Dishes', chinese: '饭类' },
    { name: 'Noodles (Chow Mein)', chinese: '面类' },
    { name: 'Omelettes & Foo Yung', chinese: '蛋类' },
    { name: 'Extras & Sides', chinese: '配菜' },
    
  ];



  export const menuItems = [
      {
        name: 'Prawn Cocktail',
        price: '£7.20',
        description: 'Cold dish served with battered wholemeal breads',
        allergens: ['Gluten', 'Milk', 'Mustard', 'Eggs', 'Crustaceans'],
        category: 'Appetisers',
        popular: false,
        vegetarian: false,
        spiceLevel: 0
      },
      {
        name: 'Crispy Aromatic Duck',
        price: '£25.80',
        priceNote: 'for two',
        description: 'Half a Duck with Spring Salad, Mandarin Pancakes and Hoisin Sauce',
        allergens: ['Gluten', 'Soy', 'Sesame'],
        category: 'Appetisers',
        popular: true,
        vegetarian: false,
        spiceLevel: 0
      },
      {
        name: 'Crispy Aromatic Lamb',
        price: '£14.50',
        priceNote: 'for two',
        description: 'Served with Iceberg Lettuce and Hoisin sauce',
        allergens: ['Gluten', 'Soy'],
        category: 'Appetisers',
        popular: false,
        vegetarian: false,
        spiceLevel: 0
      },
      {
        name: 'Yuk Sung',
        price: '£14.00',
        priceNote: 'for two (small £8.50)',
        description: 'Stir Fried minced pork served with Iceberg lettuce',
        allergens: ['Gluten', 'Soy', 'Sesame'],
        category: 'Appetisers',
        popular: false,
        vegetarian: false,
        spiceLevel: 0
      },
      {
        name: 'Mixed Appetisers',
        price: '£17.80',
        priceNote: 'for two (one £9.50)',
        description: 'A selection of Crispy Won Tons, Seaweed, Spare Ribs, Pancake Rolls, Prawn Toast with Sweet and sour sauce',
        allergens: ['Gluten', 'Soy', 'Eggs', 'Crustaceans', 'Sesame', 'Sulphites'],
        category: 'Appetisers',
        popular: true,
        vegetarian: false,
        spiceLevel: 0
      },
      {
        name: 'Deep Fried Squid',
        price: '£9.20',
        description: 'Salt and Chilli or Sweet and Sour',
        allergens: ['Gluten', 'Eggs', 'Molluscs', 'Sesame', 'Sulphites'],
        category: 'Appetisers',
        popular: false,
        vegetarian: false,
        spiceLevel: 1
      },
      {
        name: 'Sesame Prawn Toast',
        price: '£9.20',
        priceNote: 'small 4pc £6.00',
        description: '8 Pieces of Square Cut Toast',
        allergens: ['Gluten', 'Eggs', 'Crustaceans', 'Sesame'],
        category: 'Appetisers',
        popular: true,
        vegetarian: false,
        spiceLevel: 0
      },
      {
        name: 'Honey Spare Ribs',
        price: '£9.50',
        description: 'Peking Sauce, BBQ Sauce and Salt and Chilli also available',
        allergens: ['Gluten', 'Soy', 'Fish', 'Sesame'],
        category: 'Appetisers',
        popular: false,
        vegetarian: false,
        spiceLevel: 0
      },
      {
        name: 'Dim Sum',
        price: '£7.60',
        description: '6 Pieces – A Variation of Steamed Chinese Dumplings, Contains Pork and Prawns',
        allergens: ['Gluten', 'Soy', 'Eggs', 'Crustaceans', 'Sesame'],
        category: 'Appetisers',
        popular: false,
        vegetarian: false,
        spiceLevel: 0
      },
      {
        name: 'Smoked Chicken',
        price: '£9.20',
        description: 'Pieces of coated Chicken Marinated in Hoisin Sauce',
        allergens: ['Gluten', 'Soy', 'Sesame'],
        category: 'Appetisers',
        popular: false,
        vegetarian: false,
        spiceLevel: 0
      },
      {
        name: 'Grilled Pot Sticker Dumplings',
        price: '£7.90',
        description: '6 Pieces of Minced Pork Dumplings – Served with Ginger and Vinegar',
        allergens: ['Gluten', 'Soy', 'Sesame'],
        category: 'Appetisers',
        popular: false,
        vegetarian: false,
        spiceLevel: 0
      },
      {
        name: 'Grilled King Prawns with Garlic Butter',
        price: '£9.50',
        description: 'Off shell Tiger Prawns with Buttered Wholemeal Bread',
        allergens: ['Gluten', 'Milk', 'Crustaceans', 'Sesame'],
        category: 'Appetisers',
        popular: false,
        vegetarian: false,
        spiceLevel: 0
      },
      {
        name: 'Fried King Prawns Wrapped in Rice Paper',
        price: '£9.50',
        description: '5 Pieces, Served with Chilli Sauce',
        allergens: ['Gluten', 'Soy', 'Eggs', 'Crustaceans', 'Sesame'],
        category: 'Appetisers',
        popular: false,
        vegetarian: false,
        spiceLevel: 0
      },
      {
        name: 'Deep Fried Won Tons',
        price: '£7.50',
        description: '5 Pieces – Served with Sweet and Sour Sauce',
        allergens: ['Gluten', 'Soy', 'Eggs', 'Crustaceans', 'Sesame', 'Sulphites'],
        category: 'Appetisers',
        popular: false,
        vegetarian: false,
        spiceLevel: 0
      },
      {
        name: 'Crispy Seaweed',
        price: '£6.50',
        description: 'Crispy fried seaweed with seasoning',
        allergens: ['Gluten', 'Soy'],
        category: 'Appetisers',
        popular: false,
        vegetarian: true,
        spiceLevel: 0
      },
      {
        name: 'Vegetable Pancake Rolls',
        price: '£6.80',
        description: '4 Pieces, Bamboo Shoots, Carrots and Cabbage',
        allergens: ['Gluten', 'Milk', 'Sesame'],
        category: 'Appetisers',
        popular: false,
        vegetarian: true,
        spiceLevel: 0
      },
      {
        name: 'Chicken Satay on Skewers',
        price: '£7.50',
        description: '3 Pieces with peanut sauce',
        allergens: ['Gluten', 'Peanuts', 'Soy', 'Eggs', 'Fish', 'Crustaceans', 'Sesame'],
        category: 'Appetisers',
        popular: false,
        vegetarian: false,
        spiceLevel: 0
      },
      {
    name: 'Chicken Noodle Soup',
    price: '£5.80',
    description: 'Clear soup with chicken and noodles',
    allergens: ['Gluten', 'Soy', 'Sesame'],
    category: 'Soups',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Chicken Mushroom Soup',
    price: '£5.80',
    description: 'Soup with chicken and mushrooms',
    allergens: ['Gluten', 'Soy', 'Sesame'],
    category: 'Soups',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Crab Meat Sweetcorn Soup',
    price: '£7.00',
    description: 'Creamy soup with crab meat and sweetcorn',
    allergens: ['Gluten', 'Soy', 'Eggs', 'Crustaceans', 'Sesame'],
    category: 'Soups',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Chicken Sweetcorn Soup',
    price: '£5.80',
    description: 'Creamy soup with chicken and sweetcorn',
    allergens: ['Gluten', 'Soy', 'Eggs', 'Sesame'],
    category: 'Soups',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Won Ton Soup',
    price: '£6.60',
    description: 'Clear broth with pork and prawn wontons',
    allergens: ['Gluten', 'Soy', 'Eggs', 'Crustaceans', 'Sesame'],
    category: 'Soups',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Hot and Sour Soup',
    price: '£6.50',
    description: 'Spicy and tangy soup with tofu and vegetables',
    allergens: ['Gluten', 'Soy', 'Eggs', 'Crustaceans', 'Sesame', 'Sulphites'],
    category: 'Soups',
    popular: true,
    vegetarian: false,
    spiceLevel: 2
  },
  {
    name: 'Sweet Corn Soup',
    price: '£5.00',
    description: 'Creamy sweetcorn soup',
    allergens: ['Gluten', 'Soy', 'Sesame'],
    category: 'Soups',
    popular: false,
    vegetarian: true,
    spiceLevel: 0
  },
  
 {
    name: 'Salt & Chilli Chicken Wings',
    price: '£11.80',
    description: 'Crispy chicken wings with salt and chilli seasoning',
    allergens: ['Gluten', 'Soy', 'Eggs', 'Crustaceans', 'Sesame'],
    category: 'Chef Recommendations',
    popular: true,
    vegetarian: false,
    spiceLevel: 2
  },
  {
    name: 'BBQ Chicken Wings',
    price: '£11.80',
    description: 'Chicken wings glazed with BBQ sauce',
    allergens: ['Gluten', 'Soy', 'Eggs', 'Crustaceans', 'Sesame'],
    category: 'Chef Recommendations',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Wondering Dragon',
    price: '£13.80',
    description: 'King Prawn and Chicken in Oyster Sauce',
    allergens: ['Gluten', 'Soy', 'Crustaceans', 'Molluscs', 'Sesame'],
    category: 'Chef Recommendations',
    popular: true,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Crispy Chicken in Garlic Butter',
    price: '£12.50',
    description: 'Crispy fried chicken with garlic butter sauce',
    allergens: ['Milk', 'Soy', 'Eggs', 'Sesame'],
    category: 'Chef Recommendations',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Chicken with Pickled Ginger and Pineapple',
    price: '£12.30',
    description: 'Sweet and tangy chicken with pickled ginger',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame', 'Sulphites'],
    category: 'Chef Recommendations',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Fillet Steaks with Teriyaki Sauce',
    price: '£18.00',
    description: 'Premium fillet steak with Japanese teriyaki glaze',
    allergens: ['Gluten', 'Soy', 'Sesame'],
    category: 'Chef Recommendations',
    popular: true,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Fried Chicken with Teriyaki Sauce',
    price: '£13.30',
    description: 'Crispy chicken with teriyaki glaze',
    allergens: ['Gluten', 'Soy', 'Eggs', 'Crustaceans', 'Sesame'],
    category: 'Chef Recommendations',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  
 
  {
    name: 'Monk Fish Fried with Ginger and Spring Onions',
    price: '£17.80',
    description: 'Tender monk fish with ginger and spring onions',
    allergens: ['Gluten', 'Soy', 'Fish', 'Molluscs', 'Sesame'],
    category: 'Seafood Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Monk Fish in Oyster Sauce',
    price: '£17.80',
    description: 'Monk fish with oyster sauce and seasonal vegetables',
    allergens: ['Gluten', 'Soy', 'Fish', 'Molluscs', 'Sesame'],
    category: 'Seafood Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Steamed Seabass Fillet',
    price: '£18.00',
    description: 'Two pieces of delicate steamed seabass',
    allergens: ['Gluten', 'Soy', 'Fish', 'Sesame'],
    category: 'Seafood Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Sliced Fillet Steak in Peking Sauce',
    price: '£17.80',
    description: 'Tender fillet steak in sweet and tangy Peking sauce',
    allergens: ['Gluten', 'Soy', 'Fish', 'Sesame'],
    category: 'Beef Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Sliced Fillet Steak in Garlic and Chilli',
    price: '£17.80',
    description: 'Fillet steak wok-fried with garlic and fresh chillies',
    allergens: ['Crustaceans', 'Sesame'],
    category: 'Beef Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 2
  },
  {
    name: 'Sliced Fillet Steak in Bird\'s Nest',
    price: '£18.50',
    description: 'Fillet steak with Green Pepper and Black Bean Sauce in a crispy nest',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'],
    category: 'Beef Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Sliced Fillet Steak with Ginger and Spring Onions',
    price: '£17.80',
    description: 'Fillet steak fried with fresh ginger and spring onions',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'],
    category: 'Beef Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Sliced Fillet Steak Cantonese Style',
    price: '£17.80',
    description: 'Fillet steak in a rich black pepper sauce',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'],
    category: 'Beef Dishes',
    popular: true,
    vegetarian: false,
    spiceLevel: 1
  },
  {
    name: 'Shredded Beef in Chilli',
    price: '£13.80',
    description: 'Crispy shredded beef tossed in a spicy chilli sauce',
    allergens: ['Gluten', 'Soy', 'Eggs', 'Sesame'],
    category: 'Beef Dishes',
    popular: true,
    vegetarian: false,
    spiceLevel: 2
  },
  {
    name: 'Beef with Green Pepper and Black Bean Sauce',
    price: '£13.30',
    description: 'Sliced beef with green peppers and savoury black bean sauce',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'],
    category: 'Beef Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Beef with Mushrooms',
    price: '£13.30',
    description: 'Sliced beef stir-fried with fresh mushrooms',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'],
    category: 'Beef Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Beef with Double Mushroom',
    price: '£13.30',
    description: 'Beef with White Mushroom and Chinese Mushroom',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'],
    category: 'Beef Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Beef Satay',
    price: '£13.30',
    description: 'Beef skewers or stir-fry in a rich peanut satay sauce',
    allergens: ['Gluten', 'Peanuts', 'Soy', 'Crustaceans', 'Molluscs', 'Sesame'],
    category: 'Beef Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 1
  },
  {
    name: 'Beef with Onion',
    price: '£13.30',
    description: 'Sliced beef stir-fried with onions',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'],
    category: 'Beef Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Beef with Broccoli',
    price: '£13.30',
    description: 'Sliced beef stir-fried with fresh broccoli',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'],
    category: 'Beef Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Beef with Fresh Tomato',
    price: '£13.30',
    description: 'Sliced beef stir-fried with fresh tomatoes',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame', 'Sulphites'],
    category: 'Beef Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  
  {
    name: 'Chicken Fried in Chilli Bean Sauce',
    price: '£12.50',
    description: 'Chicken in spicy fermented chilli bean sauce',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'],
    category: 'Chicken Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 2
  },
  {
    name: 'Chicken Green Pepper in Black Bean Sauce',
    price: '£12.50',
    description: 'Chicken with green peppers in black bean sauce',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'],
    category: 'Chicken Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: "Chicken Black Bean in Bird's Nest",
    price: '£12.50',
    description: 'Chicken with Green Pepper and Black Bean Sauce in crispy nest',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'],
    category: 'Chicken Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Chicken with Ginger and Spring Onions',
    price: '£12.50',
    description: 'Chicken wok-fried with fresh ginger and spring onions',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'],
    category: 'Chicken Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Chicken Oyster Sauce and Seasonal Vegetables',
    price: '£12.50',
    description: 'Chicken in oyster sauce with fresh vegetables',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'],
    category: 'Chicken Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Lemon Chicken',
    price: '£12.50',
    description: 'Crispy chicken with tangy lemon sauce',
    allergens: ['Eggs', 'Sesame'],
    category: 'Chicken Dishes',
    popular: true,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Chicken with Green Pepper and Chilli',
    price: '£12.50',
    description: 'Fried with Fresh Chilli in a Spicy Sauce with a hint of sweetness',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'],
    category: 'Chicken Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 2
  },
  {
    name: 'Chicken Cashew Nuts',
    price: '£13.80',
    description: 'Chicken stir-fried with cashew nuts',
    allergens: ['Gluten', 'Tree Nuts', 'Soy', 'Molluscs', 'Sesame'],
    category: 'Chicken Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Chicken with White Mushroom',
    price: '£12.50',
    description: 'Chicken with white mushrooms',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'],
    category: 'Chicken Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Chicken with Double Mushroom',
    price: '£12.50',
    description: 'Chicken with white mushroom and Chinese mushroom',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'],
    category: 'Chicken Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Sweet and Sour Chicken Cantonese Style',
    price: '£12.50',
    description: 'Chicken in Cantonese sweet and sour sauce',
    allergens: ['Eggs', 'Sesame', 'Sulphites'],
    category: 'Chicken Dishes',
    popular: true,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Chicken Satay',
    price: '£12.50',
    description: 'Chicken in rich peanut satay sauce',
    allergens: ['Gluten', 'Peanuts', 'Soy', 'Fish', 'Crustaceans', 'Molluscs', 'Sesame'],
    category: 'Chicken Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 1
  },
  {
    name: 'Kung Po Chicken',
    price: '£13.80',
    description: 'Spicy chicken with tree nuts and dried chillies',
    allergens: ['Tree Nuts', 'Crustaceans'],
    category: 'Chicken Dishes',
    popular: true,
    vegetarian: false,
    spiceLevel: 3
  },
  {
    name: 'Shredded Chicken in Chilli',
    price: '£13.50',
    description: 'Crispy shredded chicken with chilli',
    allergens: ['Gluten', 'Soy', 'Eggs', 'Sesame'],
    category: 'Chicken Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 2
  },
  {
    name: 'Sweet and Sour Chicken Balls',
    price: '£13.00',
    description: 'Battered chicken with sweet and sour sauce',
    allergens: ['Gluten', 'Sulphites'],
    category: 'Chicken Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Chicken Foo Yung',
    price: '£12.50',
    description: 'Chicken omelette Chinese style',
    allergens: ['Eggs', 'Sesame'],
    category: 'Chicken Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Salt and Chilli Chicken',
    price: '£12.50',
    description: 'Crispy chicken with salt and chilli seasoning',
    allergens: ['Eggs', 'Sesame'],
    category: 'Chicken Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 2
  },
  {
    name: 'Roast Duck Cantonese Style',
    price: '£13.80',
    description: 'Served with Chinese leaf',
    allergens: ['Gluten', 'Soy'],
    category: 'Duck Dishes',
    popular: true,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Ying Yong Duck',
    price: '£13.80',
    description: 'Roast Duck and Chicken Breast with Beansprouts, topped with Barbecue Sauce',
    allergens: ['Gluten', 'Soy', 'Sesame'],
    category: 'Duck Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Roast Duck with Lemon Sauce',
    price: '£13.80',
    description: 'Roast duck with tangy lemon sauce',
    allergens: ['Sulphites'],
    category: 'Duck Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Duck in Plum Sauce',
    price: '£13.80',
    description: 'Roast duck with sweet plum sauce',
    allergens: ['Sulphites'],
    category: 'Duck Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Roast Duck in Garlic and Chilli',
    price: '£13.80',
    description: 'Roast duck wok-fried with garlic and fresh chillies',
    allergens: [],
    category: 'Duck Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 2
  },
  {
    name: 'Roast Duck with Green Pepper and Black Bean Sauce',
    price: '£13.80',
    description: 'Roast duck with green peppers and savoury black bean sauce',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'],
    category: 'Duck Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
{
    name: 'Deep Fried Pork in Peking Sauce',
    price: '£12.30',
    description: 'Crispy pork in rich Peking sauce',
    allergens: ['Eggs', 'Sesame'],
    category: 'Pork Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Deep Fried Pork in Garlic and Chilli',
    price: '£12.30',
    description: 'Crispy pork with garlic and chilli',
    allergens: ['Eggs', 'Sesame'],
    category: 'Pork Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 2
  },
  {
    name: 'Deep Fried Pork Salt and Chilli',
    price: '£12.30',
    description: 'Crispy pork with salt and chilli seasoning',
    allergens: ['Eggs', 'Sesame'],
    category: 'Pork Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 2
  },
  {
    name: 'Sweet and Sour Pork Cantonese Style',
    price: '£12.30',
    description: 'Pork in Cantonese sweet and sour sauce',
    allergens: ['Eggs', 'Sesame'],
    category: 'Pork Dishes',
    popular: true,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'House Special Curry',
    price: '£11.50',
    description: 'Mix of Chicken, King Prawns and Beef',
    allergens: ['Gluten', 'Soy', 'Crustaceans', 'Molluscs', 'Sesame', 'Celery'],
    category: 'Curry Dishes',
    popular: true,
    vegetarian: false,
    spiceLevel: 2
  },
  {
    name: 'Seafood Curry',
    price: '£12.50',
    description: 'Mussels, Squid and King Prawns in curry sauce',
    allergens: ['Gluten', 'Soy', 'Crustaceans', 'Molluscs', 'Sesame', 'Celery'],
    category: 'Curry Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 2
  },
  {
    name: 'King Prawn Curry',
    price: '£11.80',
    description: 'King prawns in Chinese curry sauce',
    allergens: ['Gluten', 'Soy', 'Crustaceans', 'Molluscs', 'Sesame', 'Celery'],
    category: 'Curry Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 2
  },
  {
    name: 'Chicken Curry',
    price: '£10.00',
    description: 'Chicken in Chinese curry sauce',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame', 'Celery'],
    category: 'Curry Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 2
  },
  {
    name: 'Beef Curry',
    price: '£10.50',
    description: 'Beef in Chinese curry sauce',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame', 'Celery'],
    category: 'Curry Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 2
  },
  {
    name: 'Mixed Vegetable Curry',
    price: '£9.60',
    description: 'Mixed vegetables in curry sauce',
    allergens: ['Gluten', 'Soy', 'Celery'],
    category: 'Curry Dishes',
    popular: false,
    vegetarian: true,
    spiceLevel: 2
  },
   {
    name: 'Mixed Vegetables Yuk Sung',
    price: '£14.00',
    description: 'Stir fried vegetables served with iceberg lettuce',
    allergens: ['Gluten', 'Soy', 'Sesame'],
    category: 'Vegetarian Dishes',
    popular: false,
    vegetarian: true,
    spiceLevel: 0,
    serving: 'for two'
  },
  {
    name: 'Mixed Vegetables and Cashew Nuts',
    price: '£12.00',
    description: 'Stir fried vegetables with cashew nuts',
    allergens: ['Gluten', 'Tree Nuts', 'Soy', 'Celery'],
    category: 'Vegetarian Dishes',
    popular: false,
    vegetarian: true,
    spiceLevel: 0
  },
  {
    name: 'Monk\'s Vegetables',
    price: '£10.80',
    description: 'Selection of Chinese Vegetables with Deep Fried Tofu',
    allergens: ['Gluten', 'Milk', 'Soy', 'Sesame'],
    category: 'Vegetarian Dishes',
    popular: true,
    vegetarian: true,
    spiceLevel: 0
  },
  {
    name: 'Salt and Chilli Tofu',
    price: '£10.80',
    description: 'Crispy tofu with salt and chilli seasoning',
    allergens: ['Gluten', 'Soy', 'Sesame'],
    category: 'Vegetarian Dishes',
    popular: false,
    vegetarian: true,
    spiceLevel: 2
  },
  {
    name: 'Tofu in Garlic and Chilli',
    price: '£10.80',
    description: 'Tofu in spicy garlic sauce',
    allergens: ['Gluten', 'Soy', 'Crustaceans'],
    category: 'Vegetarian Dishes',
    popular: false,
    vegetarian: false, // 10 (Crustaceans) இருப்பதால் இது மாமிசம் கலந்தது
    spiceLevel: 2
  },
  {
    name: 'Pak Choi in Oyster Sauce',
    price: '£11.30',
    description: 'Fresh pak choi in oyster sauce',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'],
    category: 'Vegetarian Dishes',
    popular: false,
    vegetarian: false, // 11 (Molluscs/Oyster) இருப்பதால் இது மாமிசம் கலந்தது
    spiceLevel: 0
  },
  {
    name: 'Triple Mushroom with Baby Sweet Corn',
    price: '£11.00',
    description: 'Chinese Mushroom, Straw Mushroom and White Mushroom',
    allergens: ['Gluten', 'Soy', 'Sesame'],
    category: 'Vegetarian Dishes',
    popular: false,
    vegetarian: true,
    spiceLevel: 0
  },
 {
    name: 'House Special Fried Rice',
    price: '£14.20',
    description: 'Egg Fried Rice topped with Chicken, Beef and King Prawns with Mix Vegetables in Oyster Sauce',
    allergens: ['Gluten', 'Soy', 'Eggs', 'Crustaceans', 'Molluscs', 'Sesame'],
    category: 'Rice Dishes',
    popular: true,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Mix Seafood Fried Rice',
    price: '£15.20',
    description: 'Egg Fried Rice topped with Mussels, King Prawns and Squid with Mix Vegetables in Oyster Sauce',
    allergens: ['Gluten', 'Soy', 'Eggs', 'Crustaceans', 'Molluscs', 'Sesame'],
    category: 'Rice Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Cantonese Roast Duck Rice',
    price: '£13.80',
    description: 'Served with Chinese Leaf and Boiled Rice, drizzled with Soy Sauce',
    allergens: ['Gluten', 'Soy', 'Sesame'],
    category: 'Rice Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Yung Chow Fried Rice',
    price: '£8.80',
    description: 'Ham, Chicken, Prawns and Peas Fried Rice',
    allergens: ['Gluten', 'Soy', 'Eggs', 'Crustaceans', 'Sesame'],
    category: 'Rice Dishes',
    popular: true,
    vegetarian: false,
    spiceLevel: 0,
    serving: 'or £13.00 for 2'
  },
  {
    name: 'Chicken Fried Rice',
    price: '£8.80',
    description: 'Fried rice with chicken',
    allergens: ['Gluten', 'Soy', 'Eggs', 'Sesame'],
    category: 'Rice Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Beef Fried Rice',
    price: '£9.80',
    description: 'Fried rice with beef',
    allergens: ['Gluten', 'Soy', 'Eggs', 'Sesame'],
    category: 'Rice Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Mushroom Egg Fried Rice',
    price: '£7.80',
    description: 'Egg fried rice with mushrooms',
    allergens: ['Gluten', 'Soy', 'Eggs', 'Sesame'],
    category: 'Rice Dishes',
    popular: false,
    vegetarian: true,
    spiceLevel: 0
  },
  {
    name: 'Singapore Fried Rice',
    price: '£12.50',
    description: 'Spicy curry flavoured fried rice',
    allergens: ['Gluten', 'Peanuts', 'Soy', 'Eggs', 'Crustaceans', 'Sesame'],
    category: 'Rice Dishes',
    popular: false,
    vegetarian: false,
    spiceLevel: 2,
    serving: 'for 2'
  },
  {
    name: 'Mixed Vegetables Egg Fried Rice',
    price: '£11.50',
    description: 'Egg fried rice with mixed vegetables',
    allergens: ['Gluten', 'Soy', 'Eggs', 'Sesame'],
    category: 'Rice Dishes',
    popular: false,
    vegetarian: true,
    spiceLevel: 0,
    serving: 'for 2'
  },
  {
    name: 'Egg Fried Rice',
    price: '£4.30',
    description: 'Classic egg fried rice',
    allergens: ['Gluten', 'Soy', 'Eggs'],
    category: 'Rice Dishes',
    popular: false,
    vegetarian: true,
    spiceLevel: 0
  },
  {
    name: 'Boiled Rice',
    price: '£3.80',
    description: 'Steamed jasmine rice',
    allergens: [],
    category: 'Rice Dishes',
    popular: false,
    vegetarian: true,
    spiceLevel: 0
  },
{
    name: 'House Special Chow Mein',
    price: '£14.50',
    description: 'Stir Fried soft Noodles topped with Chicken, Beef and King Prawns with Mix Vegetables in Oyster Sauce',
    allergens: ['Gluten', 'Soy', 'Crustaceans', 'Molluscs', 'Sesame'],
    category: 'Noodles (Chow Mein)',
    popular: true,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Mix Seafood Chow Mein',
    price: '£15.70',
    description: 'Stir Fried soft Noodles topped with Mussels, King Prawns and Squid with Mix Vegetables in Oyster Sauce',
    allergens: ['Gluten', 'Soy', 'Crustaceans', 'Molluscs', 'Sesame'],
    category: 'Noodles (Chow Mein)',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Chicken Chow Mein (Dry)',
    price: '£10.80',
    description: 'Stir fried noodles with chicken',
    allergens: ['Gluten', 'Soy', 'Sesame'],
    category: 'Noodles (Chow Mein)',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Chicken Chow Mein (Oyster Sauce)',
    price: '£12.80',
    description: 'Noodles with chicken in oyster sauce',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'],
    category: 'Noodles (Chow Mein)',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Beef Chow Mein (Dry)',
    price: '£11.50',
    description: 'Stir fried noodles with beef',
    allergens: ['Gluten', 'Soy', 'Sesame'],
    category: 'Noodles (Chow Mein)',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Beef Chow Mein (Oyster Sauce)',
    price: '£13.50',
    description: 'Noodles with beef in oyster sauce',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'],
    category: 'Noodles (Chow Mein)',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Singapore Noodles',
    price: '£13.00',
    description: 'Vermicelli noodles with curry spice',
    allergens: ['Gluten', 'Peanuts', 'Soy', 'Eggs', 'Crustaceans', 'Sesame'],
    category: 'Noodles (Chow Mein)',
    popular: true,
    vegetarian: false,
    spiceLevel: 2
  },
  {
    name: 'Mixed Vegetables Chow Mein (Dry)',
    price: '£10.30',
    description: 'Stir fried noodles with vegetables',
    allergens: ['Gluten', 'Soy', 'Sesame'],
    category: 'Noodles (Chow Mein)',
    popular: false,
    vegetarian: true,
    spiceLevel: 0
  },
  {
    name: 'Mixed Vegetables Chow Mein (Soy Sauce)',
    price: '£12.00',
    description: 'Noodles with vegetables in soy sauce',
    allergens: ['Gluten', 'Soy', 'Sesame'],
    category: 'Noodles (Chow Mein)',
    popular: false,
    vegetarian: true,
    spiceLevel: 0
  },
  {
    name: 'Beef Satay Udon',
    price: '£13.80',
    description: 'Udon noodles with beef in satay sauce',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'],
    category: 'Noodles (Chow Mein)',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'King Prawn Udon in Oyster Sauce',
    price: '£14.50',
    description: 'Udon noodles with prawns in oyster sauce',
    allergens: ['Gluten', 'Soy', 'Crustaceans', 'Molluscs', 'Sesame'],
    category: 'Noodles (Chow Mein)',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Seafood Udon',
    price: '£15.80',
    description: 'Stir Fried Udon with Mussels, King Prawns and Squid with Mix Vegetables in Oyster Sauce',
    allergens: ['Gluten', 'Soy', 'Crustaceans', 'Molluscs', 'Sesame'],
    category: 'Noodles (Chow Mein)',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Stir Fried Soft Noodles',
    price: '£6.60',
    description: 'Plain stir fried noodles',
    allergens: ['Gluten', 'Soy', 'Sesame'],
    category: 'Noodles (Chow Mein)',
    popular: false,
    vegetarian: true,
    spiceLevel: 0
  },
  {
    name: 'Stir Fried Vermicelli',
    price: '£6.60',
    description: 'Plain stir fried rice noodles',
    allergens: ['Gluten', 'Soy', 'Sesame'],
    category: 'Noodles (Chow Mein)',
    popular: false,
    vegetarian: true,
    spiceLevel: 0
  },
  {
    name: 'Stir Fried Udon',
    price: '£7.10',
    description: 'Plain stir fried udon noodles',
    allergens: ['Gluten', 'Soy', 'Sesame'],
    category: 'Noodles (Chow Mein)',
    popular: false,
    vegetarian: true,
    spiceLevel: 0
  },

  // Omelettes & Foo Yung
  {
    name: 'King Prawn Omelette',
    price: '£14.00',
    description: 'Omelette with king prawns, served with chips and peas',
    allergens: ['Eggs', 'Crustaceans', 'Sesame'],
    category: 'Omelettes & Foo Yung',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Chicken Omelette',
    price: '£13.00',
    description: 'Omelette with chicken, served with chips and peas',
    allergens: ['Eggs', 'Sesame'],
    category: 'Omelettes & Foo Yung',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Mushroom Omelette',
    price: '£12.50',
    description: 'Omelette with mushrooms, served with chips and peas',
    allergens: ['Eggs', 'Sesame'],
    category: 'Omelettes & Foo Yung',
    popular: false,
    vegetarian: true,
    spiceLevel: 0
  },
  {
    name: 'Plain Omelette',
    price: '£12.00',
    description: 'Plain omelette, served with chips and peas',
    allergens: ['Eggs', 'Sesame'],
    category: 'Omelettes & Foo Yung',
    popular: false,
    vegetarian: true,
    spiceLevel: 0
  },
  {
    name: 'King Prawn Foo Yung',
    price: '£13.50',
    description: 'Chinese style omelette with prawns',
    allergens: ['Eggs', 'Crustaceans', 'Sesame'],
    category: 'Omelettes & Foo Yung',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Chicken Foo Yung',
    price: '£12.50',
    description: 'Chinese style omelette with chicken',
    allergens: ['Eggs', 'Sesame'],
    category: 'Omelettes & Foo Yung',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Mushroom Foo Yung',
    price: '£12.00',
    description: 'Chinese style omelette with mushrooms',
    allergens: ['Eggs', 'Sesame'],
    category: 'Omelettes & Foo Yung',
    popular: false,
    vegetarian: true,
    spiceLevel: 0
  },
  {
    name: 'Plain Foo Yung',
    price: '£11.50',
    description: 'Plain Chinese style omelette',
    allergens: ['Eggs', 'Sesame'],
    category: 'Omelettes & Foo Yung',
    popular: false,
    vegetarian: true,
    spiceLevel: 0
  },
 
  // Extras & Sides
  {
    name: 'Mushrooms with Oyster Sauce',
    price: '£7.50',
    description: 'Stir fried mushrooms in oyster sauce',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'], // 1, 5, 11, 12
    category: 'Extras & Sides',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Fried Beansprouts',
    price: '£7.50',
    description: 'Stir fried fresh beansprouts',
    allergens: ['Molluscs', 'Sesame'], // 11, 12 (Note: 15 was in text but not in key, assuming 11/12)
    category: 'Extras & Sides',
    popular: false,
    vegetarian: false, // Oyster sauce 11 makes it non-veg
    spiceLevel: 0
  },
  {
    name: 'Bamboo Shoots and Water Chestnuts',
    price: '£7.50',
    description: 'Stir fried bamboo shoots and water chestnuts',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'], // 1, 5, 11, 12
    category: 'Extras & Sides',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Fried Onions',
    price: '£7.50',
    description: 'Stir fried onions',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'], // 1, 5, 11, 12
    category: 'Extras & Sides',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Mixed Seasonal Vegetables',
    price: '£9.00',
    description: 'Selection of fresh seasonal vegetables',
    allergens: ['Gluten', 'Soy', 'Sesame'], // 1, 5, 12
    category: 'Extras & Sides',
    popular: false,
    vegetarian: true,
    spiceLevel: 0
  },
  {
    name: 'Dipping Sauce',
    price: '£3.00',
    description: 'Choice of dipping sauce - please consult staff for allergens',
    allergens: [],
    category: 'Extras & Sides',
    popular: false,
    vegetarian: true,
    spiceLevel: 0
  },
  {
    name: 'Curry Sauce',
    price: '£3.20',
    description: 'Classic Chinese curry sauce',
    allergens: ['Gluten', 'Soy', 'Celery'], // 1, 5, 13
    category: 'Extras & Sides',
    popular: false,
    vegetarian: true,
    spiceLevel: 1
  },
  {
    name: 'Sweet and Sour Sauce',
    price: '£3.20',
    description: 'Tangy sweet and sour sauce',
    allergens: ['Sulphites'], // 14
    category: 'Extras & Sides',
    popular: false,
    vegetarian: true,
    spiceLevel: 0
  },
  {
    name: 'Peking Sauce',
    price: '£3.20',
    description: 'Rich Peking style sauce',
    allergens: ['Gluten', 'Celery'], // 1, 13
    category: 'Extras & Sides',
    popular: false,
    vegetarian: true,
    spiceLevel: 0
  },
  {
    name: 'Black Bean Sauce',
    price: '£3.20',
    description: 'Savory black bean sauce',
    allergens: ['Gluten', 'Soy', 'Molluscs', 'Sesame'], // 1, 5, 11, 12
    category: 'Extras & Sides',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Chips',
    price: '£4.30',
    description: 'Golden fried chips',
    allergens: [],
    category: 'Extras & Sides',
    popular: false,
    vegetarian: true,
    spiceLevel: 0
  },
  {
    name: 'Salt & Chilli Chips',
    price: '£6.00',
    description: 'Chips with salt and chilli seasoning',
    allergens: [],
    category: 'Extras & Sides',
    popular: false,
    vegetarian: true,
    spiceLevel: 2
  },
  {
    name: 'Bird\'s Nest',
    price: '£3.50',
    description: 'Crispy noodle nest',
    allergens: ['Gluten'],
    category: 'Extras & Sides',
    popular: false,
    vegetarian: true,
    spiceLevel: 0
  },
  {
    name: 'Prawn Crackers (Small)',
    price: '£2.80',
    description: 'Crispy prawn crackers',
    allergens: ['Crustaceans'], // 10
    category: 'Extras & Sides',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  },
  {
    name: 'Prawn Crackers (Large)',
    price: '£4.60',
    description: 'Crispy prawn crackers - large portion',
    allergens: ['Crustaceans'], // 10
    category: 'Extras & Sides',
    popular: false,
    vegetarian: false,
    spiceLevel: 0
  }

    ];
  


  export  const setMenus = [
  {
    name: "Set Meal A for Two",
    category: "Special Set Menu",
    price: "£49.80",
    people: 2,
    starters: "Prawn Cocktail, Barbecued Spare Ribs, Chicken Sweetcorn Soup, Vegetable Pancake Rolls or Prawn Toast.",
    mainCourses: ["Fried Chicken with Lemon Sauce", "Beef Fried with Onions", "King Prawns Fried with Mixed Vegetables", "Yung Chow Fried Rice"]
  },
  {
    name: "Set Meal B for Three",
    category: "Special Set Menu",
    price: "£72.00",
    people: 3,
    starters: "Prawn Cocktail, Barbecued Spare Ribs, Chicken Sweetcorn Soup, Vegetable Pancake Rolls or Prawn Toast.",
    mainCourses: ["Sweet and Sour Pork with Cantonese Sauce", "Roast Duck Cantonese Style", "Kung Po Chicken", "Beef Fried with Onions on a Hot Platter", "Yung Chow Fried Rice"]
  },
  {
    name: "Set Meal C for Four",
    category: "Special Set Menu",
    price: "£92.80",
    people: 4,
    starters: "Prawn Cocktail, Barbecued Spare Ribs, Chicken Sweetcorn Soup, Vegetable Pancake Rolls or Prawn Toast.",
    mainCourses: ["Roasted Duck Cantonese Style", "Sweet and Sour Pork with Cantonese Sauce", "Fried Chicken in Lemon Sauce", "King Prawn Fried with Seasonal Vegetables", "Beef Fried with Green Pepper in Black Bean Sauce", "Yung Chow Fried Rice"]
  },
  {
    name: "Set Meal D for Six",
    category: "Special Set Menu",
    price: "£133.80",
    people: 6,
    starters: "Prawn Cocktail, Barbecued Spare Ribs, Chicken Sweetcorn Soup, Vegetable Pancake Rolls or Prawn Toast.",
    mainCourses: ["Roasted Duck Cantonese Style", "Fried Chicken with Lemon Sauce", "Sweet and Sour Pork with Cantonese Sauce", "Beef Fried with Green Peppers in Black Bean Sauce", "King Prawns with Cashew Nuts", "Chicken Fried with Chilli Bean Sauce", "Yung Chow Fried Rice"]
  }
];