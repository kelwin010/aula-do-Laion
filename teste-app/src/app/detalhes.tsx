import { useRoute } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
export default function Detalhes() {
  const router = useRoute();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Home</Text>
      <Text style={styles.subtitulo}> Bem vindo ao nosso APP!!!</Text>
      <TouchableOpacity style={styles.botao} onPress={() => router.push("/")}>
        <Text style={styles.botao}>Voltar</Text>
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
  titulo: {

  },
  subtitulo: {

  },
  botao: {

  },
  textoBotao: {

  }

});
