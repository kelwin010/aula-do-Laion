import { router } from "expo-router";
import { Text, View, StyleSheet, Touchable, TouchableOpacity } from "react-native";

export default function Index() {
  return (
  <View style={styles.container}>
    <Text style={styles.titulo}> HOME</Text>
    <Text style={styles.subtitulo}>Bem vindo ao nosso APP!</Text>
    <TouchableOpacity
    style={styles.Botao}
    onPress={router.push('/destalhes')}
  >
    <Text style={styles.textoBotao}><Detalhes>></Text>
    </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
