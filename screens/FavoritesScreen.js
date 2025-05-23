import { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList/MealList';

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
  
  return <MealList items={favoriteMeals} />;
}

export default FavoritesScreen;
const styles = StyleSheet.create({  
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#ccc',
  },
});