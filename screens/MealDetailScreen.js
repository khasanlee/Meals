import { View, Text } from "react-native";

function MealDetailScreen({ route, navigation }) {
    const mealId = route.params.mealId;
  return (
    <View>
      <Text>hello this is {mealId}</Text>
    </View>
  );
}

export default MealDetailScreen;
