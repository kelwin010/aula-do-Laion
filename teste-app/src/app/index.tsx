import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
        }}
        style={styles.heroImage}
      />

      <Text style={styles.title}>Artigo de pesca</Text>
      <Text style={styles.description}>
        Descubra como aproveitar cada saída à beira d’água com dicas simples, equipamentos certos e muita calma.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/detalhes")}>
        <Text style={styles.buttonText}>Clique aqui agora</Text>
        <Text style={styles.arrow}>➜</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#f3f8ff",
  },
  heroImage: {
    width: "100%",
    height: 320,
    borderRadius: 28,
    marginBottom: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#475569",
    marginBottom: 24,
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#007e37",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 999,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  arrow: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
