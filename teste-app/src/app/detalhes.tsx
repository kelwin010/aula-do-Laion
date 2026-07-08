import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Detalhes() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
        }}
        style={styles.image}
      />

      <Text style={styles.title}>O encanto da pesca</Text>

      <Text style={styles.subtitle}>Tipos de pesca</Text>
      <View style={styles.categoriesContainer}>
        <TouchableOpacity style={styles.categoryCard} onPress={() => router.push("/pesca-esportiva")}>
          <Text style={styles.categoryTitle}>Pesca esportiva</Text>
          <Text style={styles.categoryText}>Mais dinâmica e voltada para desafio.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard} onPress={() => router.push("/pesca-rio")}>
          <Text style={styles.categoryTitle}>Pesca de rio</Text>
          <Text style={styles.categoryText}>Ideal para quem gosta de água doce.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard} onPress={() => router.push("/pesca-maritima")}>
          <Text style={styles.categoryTitle}>Pesca marítima</Text>
          <Text style={styles.categoryText}>Perfeita para quem busca grandes peixes.</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/")}>
        <Text style={styles.buttonText}>Voltar para a tela inicial</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f8fafc",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: "#475569",
    lineHeight: 24,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0f172a",
    marginTop: 8,
    marginBottom: 12,
  },
  categoriesContainer: {
    gap: 10,
    marginBottom: 16,
  },
  categoryCard: {
    backgroundColor: "#e0f2fe",
    padding: 12,
    borderRadius: 14,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#075985",
    marginBottom: 4,
  },
  categoryText: {
    fontSize: 14,
    color: "#0f172a",
  },
  button: {
    backgroundColor: "#0f766e",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 999,
    marginTop: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
