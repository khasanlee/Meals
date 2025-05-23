import { Pressable, StyleSheet } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

function IconButton({ icon, color, onPress }) {
  return (
    <Pressable 
      onPress={onPress} 
      style={({ pressed }) => pressed ? styles.pressed : null}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  }
});