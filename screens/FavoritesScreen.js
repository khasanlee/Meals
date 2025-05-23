import { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealList/MealItem';

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  
  const favoriteMeals = MEALS.filter(meal => 
    favoriteMealsCtx.ids.includes(meal.id)
  );
  
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>즐겨찾기한 음식이 없습니다.</Text>
      </View>
    );
  }
  
  function renderMealItem(itemData) {
    const item = itemData.item;
    
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    
    return <MealItem {...mealItemProps} />;
  }
  
  return (
    <View style={styles.container}>
      <FlatList 
        data={favoriteMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    flex: 1,
    padding: 16,
  },
});