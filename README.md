# Meals App

A React Native mobile application for browsing meal recipes organized by categories. Users can explore different cuisines, view detailed recipes, and save their favorite meals.

## Features

- **Category-based Navigation**: Browse meals organized in different categories (Italian, Asian, etc.)
- **Detailed Recipe View**: View ingredients, preparation steps, and cooking time
- **Favorites**: Save your favorite meals for quick access
- **Drawer Navigation**: Easy navigation between main sections of the app
- **Responsive Design**: Works on both Android and iOS devices

## Technologies Used

- React Native
- Expo
- React Navigation (Stack and Drawer navigation)
- Vector Icons

## 📁 Project Structure

```text
Meals/
├── assets/                 # Images and other static resources
├── components/             # Reusable UI components
│   ├── MealItem.js         # Individual meal card component
│   └── MealDetails.js      # Meal details component
├── data/                   # Static data
│   └── dummy-data.js       # Sample meal and category data
├── models/                 # Data models
│   ├── category.js         # Category model
│   └── meal.js             # Meal model
├── screens/                # App screens
│   ├── CategoriesScreen.js     # Shows all meal categories
│   ├── MealsOverviewScreen.js  # Shows meals in a specific category
│   ├── MealDetailScreen.js     # Shows details of a specific meal
│   └── FavoritesScreen.js      # Shows favorite meals
└── App.js                  # Main app component with navigation setup


## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install

   Start the development server:
   expo start


## 📱 Usage

1. Launch the app to view all meal categories  
2. Tap on a category to see all meals within that category  
3. Tap on a meal to view its details (ingredients, steps, cooking time)  
4. Use the drawer menu to navigate between **Categories** and **Favorites**

---

## 🛠️ Troubleshooting

### 🔧 Image Loading Issues

- Check your internet connection  
- The app uses external image URLs which may occasionally be unavailable  
- Consider downloading the images to the `assets/` folder for more reliable loading

### 🔄 Navigation Issues

- Ensure all screen components are properly registered in the navigation stack  
- Check that route parameters are correctly passed between screens

---

## 🌟 Future Enhancements

- 🔐 User authentication  
- 📝 Ability to add custom recipes  
- 🥗 Filter meals by dietary restrictions (vegetarian, vegan, etc.)  
- 🔍 Search functionality  
- 📶 Offline support
