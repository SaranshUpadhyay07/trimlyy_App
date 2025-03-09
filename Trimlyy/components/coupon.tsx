import { View, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const coupons = [
  { id: "1", code: "SAVE20", discount: "20% OFF", expiry: "Expires: 15 Mar 2025" },
  { id: "2", code: "FIRST50", discount: "₹50 OFF", expiry: "Expires: 20 Mar 2025" },
];

export default function CouponScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Available Coupons</Text>

      {coupons.length === 0 ? (
        <Text style={styles.noCoupons}>No coupons available</Text>
      ) : (
        <FlatList
          data={coupons}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.couponCard}>
              <Text style={styles.couponCode}>{item.code}</Text>
              <Text style={styles.discount}>{item.discount}</Text>
              <Text style={styles.expiry}>{item.expiry}</Text>
            </View>
          )}
        />
      )}

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4eb",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  noCoupons: {
    textAlign: "center",
    fontSize: 16,
    color: "gray",
  },
  couponCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  couponCode: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#d35400",
  },
  discount: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2c3e50",
  },
  expiry: {
    fontSize: 12,
    color: "#7f8c8d",
  },
  backButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: "#d35400",
    borderRadius: 10,
    alignItems: "center",
  },
  backText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
