import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function CheckoutScreen() {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
       
        {/* Payment Method Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Payment Method</Text>
          </View>
          
          <View style={styles.paymentOptions}>
            <TouchableOpacity style={[styles.paymentOption, styles.selectedPayment]}>
              <Text style={styles.paymentText}>Credit Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymentOption}>
              <Text style={styles.paymentText}>Cash</Text>
            </TouchableOpacity>
          </View>
          
          {/* Card Input Fields */}
          <View style={styles.cardInputContainer}>
            <View style={styles.inputRow}>
              <View style={styles.inputHalf}>
                <Text style={styles.inputLabel}>Name</Text>
                <TextInput 
                  style={styles.input}
                  placeholder="John Doe"
                />
              </View>
              <View style={styles.inputHalf}>
                <Text style={styles.inputLabel}>Exp Date</Text>
                <TextInput 
                  style={styles.input}
                  placeholder="MM/YY"
                />
              </View>
            </View>
            
            <View style={styles.inputRow}>
              <View style={styles.inputHalf}>
                <Text style={styles.inputLabel}>Card Number</Text>
                <TextInput 
                  style={styles.input}
                  placeholder="**** **** **** 1234"
                />
              </View>
              <View style={styles.inputHalf}>
                <Text style={styles.inputLabel}>CVV</Text>
                <TextInput 
                  style={styles.input}
                  placeholder="***"
                  secureTextEntry
                />
              </View>
            </View>
          </View>
        </View>
        
        {/* Promo Code Section */}
        <View style={styles.promoSection}>
          <TextInput
            style={styles.promoInput}
            placeholder="Promo Code"
          />
          <TouchableOpacity style={styles.promoButton}>
            <Text style={styles.promoButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
        
        {/* Order Summary */}
        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>₹1197.00</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Delivery</Text>
            <Text style={styles.summaryValue}>₹50.00</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>₹1247.00</Text>
          </View>
        </View>
      </ScrollView>
      
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Place Order</Text>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  addressCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 12,
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  addressText: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 8,
  },
  addressDetails: {
    fontSize: 14,
    color: "#666",
    marginLeft: 28,
  },
  paymentOptions: {
    flexDirection: "row",
    marginBottom: 15,
  },
  paymentOption: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: "#f0f0f0",
  },
  selectedPayment: {
    backgroundColor: "#c7914c",
  },
  paymentText: {
    fontWeight: "500",
  },
  cardInputContainer: {
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  inputHalf: {
    width: "48%",
  },
  inputLabel: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
  },
  promoSection: {
    flexDirection: "row",
    marginBottom: 15,
  },
  promoInput: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginRight: 10,
  },
  promoButton: {
    backgroundColor: "#c7914c",
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  promoButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  summaryContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginTop: 5,
    marginBottom: 20,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: "#666",
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 10,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  totalValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF8C00",
  },
  checkoutButton: {
    padding: 18,
    backgroundColor: "#59380c",
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
  },
  checkoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
