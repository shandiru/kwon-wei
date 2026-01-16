 
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
    { name: 'Dipping Sauces', chinese: '酱料' }
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
      }
    ];
  