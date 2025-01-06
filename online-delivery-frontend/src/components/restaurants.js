const restaurants = [
  {
    resturant_name: "Delicious Bites",
    products: [
      {
        category: "Main Course",
        subcategories: [
          {
            name: "Veg",
            items: [
              {
                title: "Paneer Butter Masala",
                price: 250,
                image: "images/paneer_butter_masala.jpg",
                description: "A rich and creamy dish made with paneer in a flavorful butter gravy.",
                availability: "Available"
              },
              {
                title: "Mix Veg Curry",
                price: 200,
                image: "images/mix_veg_curry.jpg",
                description: "A mix of fresh vegetables cooked in a spicy and tangy curry.",
                availability: "Out of Stock"
              }
            ]
          },
          {
            name: "Non-Veg",
            items: [
              {
                title: "Chicken Curry",
                price: 300,
                image: "images/chicken_curry.jpg",
                description: "Tender chicken pieces cooked in a rich and flavorful curry.",
                availability: "Available"
              },
              {
                title: "Mutton Rogan Josh",
                price: 400,
                image: "images/mutton_rogan_josh.jpg",
                description: "A traditional Kashmiri dish made with tender mutton in a spicy red gravy.",
                availability: "Available"
              }
            ]
          }
        ]
      },
      {
        category: "Desserts",
        subcategories: [
          {
            name: "Cakes",
            items: [
              {
                title: "Chocolate Cake",
                price: 150,
                image: "images/chocolate_cake.jpg",
                description: "A moist and rich chocolate cake, perfect for dessert lovers.",
                availability: "Available"
              },
              {
                title: "Vanilla Cake",
                price: 130,
                image: "images/vanilla_cake.jpg",
                description: "A light and fluffy vanilla sponge cake topped with cream.",
                availability: "Out of Stock"
              }
            ]
          },
          {
            name: "Ice Creams",
            items: [
              {
                title: "Butterscotch Ice Cream",
                price: 100,
                image: "images/butterscotch_ice_cream.jpg",
                description: "A rich and creamy ice cream with a delicious butterscotch flavor.",
                availability: "Available"
              },
              {
                title: "Strawberry Ice Cream",
                price: 90,
                image: "images/strawberry_ice_cream.jpg",
                description: "A refreshing ice cream made with fresh strawberries.",
                availability: "Available"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    resturant_name: "Spicy Delights",
    products: [
      {
        category: "Starters",
        subcategories: [
          {
            name: "Veg",
            items: [
              {
                title: "Spring Rolls",
                price: 120,
                image: "images/spring_rolls.jpg",
                description: "Crispy rolls filled with fresh vegetables and served with a tangy dip.",
                availability: "Available"
              },
              {
                title: "Paneer Tikka",
                price: 200,
                image: "images/paneer_tikka.jpg",
                description: "Chunks of paneer marinated in spices and grilled to perfection.",
                availability: "Available"
              }
            ]
          },
          {
            name: "Non-Veg",
            items: [
              {
                title: "Chicken Tikka",
                price: 250,
                image: "images/chicken_tikka.jpg",
                description: "Marinated chicken pieces grilled with aromatic spices.",
                availability: "Available"
              },
              {
                title: "Fish Fingers",
                price: 300,
                image: "images/fish_fingers.jpg",
                description: "Crispy fried fish fingers served with a tangy sauce.",
                availability: "Out of Stock"
              }
            ]
          }
        ]
      },
      {
        category: "Beverages",
        subcategories: [
          {
            name: "Hot",
            items: [
              {
                title: "Coffee",
                price: 50,
                image: "images/coffee.jpg",
                description: "A freshly brewed coffee, perfect for a relaxing break.",
                availability: "Available"
              },
              {
                title: "Green Tea",
                price: 60,
                image: "images/green_tea.jpg",
                description: "A refreshing cup of green tea, great for digestion.",
                availability: "Available"
              }
            ]
          },
          {
            name: "Cold",
            items: [
              {
                title: "Cold Coffee",
                price: 100,
                image: "images/cold_coffee.jpg",
                description: "A chilled coffee beverage, perfect for hot summer days.",
                availability: "Available"
              },
              {
                title: "Iced Tea",
                price: 90,
                image: "images/iced_tea.jpg",
                description: "A refreshing iced tea with a hint of lemon.",
                availability: "Available"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    resturant_name: "Tandoori Palace",
    products: [
      {
        category: "Tandoori",
        subcategories: [
          {
            name: "Veg",
            items: [
              {
                title: "Tandoori Paneer",
                price: 300,
                image: "images/tandoori_paneer.jpg",
                description: "Paneer cubes marinated in spices and grilled in a tandoor.",
                availability: "Available"
              },
              {
                title: "Tandoori Broccoli",
                price: 250,
                image: "images/tandoori_broccoli.jpg",
                description: "Broccoli florets marinated in yogurt and spices, grilled in a tandoor.",
                availability: "Available"
              }
            ]
          },
          {
            name: "Non-Veg",
            items: [
              {
                title: "Tandoori Chicken",
                price: 350,
                image: "images/tandoori_chicken.jpg",
                description: "Juicy chicken pieces marinated in spices and cooked in a tandoor.",
                availability: "Available"
              },
              {
                title: "Tandoori Fish",
                price: 400,
                image: "images/tandoori_fish.jpg",
                description: "Fish fillets marinated in spices and grilled in a tandoor.",
                availability: "Available"
              }
            ]
          }
        ]
      },
      {
        category: "Biryani",
        subcategories: [
          {
            name: "Veg",
            items: [
              {
                title: "Veg Biryani",
                price: 250,
                image: "images/veg_biryani.jpg",
                description: "A flavorful biryani made with mixed vegetables and aromatic spices.",
                availability: "Available"
              },
              {
                title: "Mushroom Biryani",
                price: 270,
                image: "images/mushroom_biryani.jpg",
                description: "Aromatic biryani with mushrooms and spices.",
                availability: "Available"
              }
            ]
          },
          {
            name: "Non-Veg",
            items: [
              {
                title: "Chicken Biryani",
                price: 300,
                image: "images/chicken_biryani.jpg",
                description: "Aromatic biryani made with tender chicken pieces.",
                availability: "Out of Stock"
              },
              {
                title: "Mutton Biryani",
                price: 350,
                image: "images/mutton_biryani.jpg",
                description: "Aromatic mutton biryani cooked with spices and herbs.",
                availability: "Available"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    resturant_name: "Fresh Bites",
    products: [
      {
        category: "Salads",
        subcategories: [
          {
            name: "Veg",
            items: [
              {
                title: "Greek Salad",
                price: 180,
                image: "images/greek_salad.jpg",
                description: "A refreshing salad with cucumbers, olives, and feta cheese.",
                availability: "Available"
              },
              {
                title: "Caesar Salad",
                price: 200,
                image: "images/caesar_salad.jpg",
                description: "A classic Caesar salad with crispy lettuce, croutons, and parmesan.",
                availability: "Available"
              }
            ]
          },
          {
            name: "Non-Veg",
            items: [
              {
                title: "Chicken Salad",
                price: 220,
                image: "images/chicken_salad.jpg",
                description: "A hearty salad with grilled chicken and mixed greens.",
                availability: "Available"
              },
              {
                title: "Tuna Salad",
                price: 250,
                image: "images/tuna_salad.jpg",
                description: "A light salad with fresh tuna, lettuce, and a lemon dressing.",
                availability: "Out of Stock"
              }
            ]
          }
        ]
      },
      {
        category: "Smoothies",
        subcategories: [
          {
            name: "Fruit",
            items: [
              {
                title: "Mango Smoothie",
                price: 150,
                image: "images/mango_smoothie.jpg",
                description: "A tropical smoothie made with fresh mangoes.",
                availability: "Available"
              },
              {
                title: "Strawberry Smoothie",
                price: 130,
                image: "images/strawberry_smoothie.jpg",
                description: "A refreshing smoothie made with strawberries and yogurt.",
                availability: "Available"
              }
            ]
          },
          {
            name: "Vegetable",
            items: [
              {
                title: "Carrot Smoothie",
                price: 100,
                image: "images/carrot_smoothie.jpg",
                description: "A nutritious smoothie made with fresh carrots.",
                availability: "Available"
              },
              {
                title: "Spinach Smoothie",
                price: 120,
                image: "images/spinach_smoothie.jpg",
                description: "A healthy smoothie made with fresh spinach.",
                availability: "Available"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    resturant_name: "Sushi Heaven",
    products: [
      {
        category: "Sushi",
        subcategories: [
          {
            name: "Veg",
            items: [
              {
                title: "Vegetarian Roll",
                price: 300,
                image: "images/vegetarian_roll.jpg",
                description: "A vegetarian sushi roll with fresh vegetables and rice.",
                availability: "Available"
              },
              {
                title: "Avocado Roll",
                price: 350,
                image: "images/avocado_roll.jpg",
                description: "A sushi roll made with creamy avocado and sushi rice.",
                availability: "Available"
              }
            ]
          },
          {
            name: "Non-Veg",
            items: [
              {
                title: "Salmon Roll",
                price: 400,
                image: "images/salmon_roll.jpg",
                description: "A sushi roll made with fresh salmon and rice.",
                availability: "Available"
              },
              {
                title: "Tuna Roll",
                price: 450,
                image: "images/tuna_roll.jpg",
                description: "A sushi roll with fresh tuna and a soy-based sauce.",
                availability: "Available"
              }
            ]
          }
        ]
      },
      {
        category: "Drinks",
        subcategories: [
          {
            name: "Hot",
            items: [
              {
                title: "Green Tea",
                price: 70,
                image: "images/green_tea1.jpg",
                description: "A fresh, hot cup of green tea, perfect for pairing with sushi.",
                availability: "Available"
              },
              {
                title: "Jasmine Tea",
                price: 80,
                image: "images/jasmine_tea.jpg",
                description: "A fragrant tea with the delicate aroma of jasmine flowers.",
                availability: "Available"
              }
            ]
          },
          {
            name: "Cold",
            items: [
              {
                title: "Iced Tea",
                price: 90,
                image: "images/iced_tea.jpg",
                description: "A refreshing iced tea, great for a hot day.",
                availability: "Available"
              },
              {
                title: "Cold Coffee",
                price: 120,
                image: "images/cold_coffee.jpg",
                description: "A chilled and creamy cold coffee, perfect for coffee lovers.",
                availability: "Out of Stock"
              }
            ]
          }
        ]
      }
    ]
  }
];

export default restaurants;
