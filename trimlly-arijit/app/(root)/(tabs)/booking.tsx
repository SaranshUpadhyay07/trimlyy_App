import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const BookingScreen = () => {
    // Dummy booking data (Replace with API call later)
    const [bookings, setBookings] = useState([
        { id: '1', salon: 'Elite Salon & Spa', date: '2025-03-12', time: '2:30 PM' },
        { id: '2', salon: 'Luxury Hair Studio', date: '2025-03-15', time: '5:00 PM' },
    ]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Your Bookings</Text>
            
            {bookings.length === 0 ? (
                <Text style={styles.noBookings}>No bookings yet.</Text>
            ) : (
                <FlatList
                    data={bookings}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.bookingItem}>
                            <Text style={styles.salonName}>{item.salon}</Text>
                            <Text style={styles.bookingInfo}>{item.date} at {item.time}</Text>
                        </View>
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f4eb', // Updated background color
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    noBookings: {
        textAlign: 'center',
        fontSize: 16,
        color: 'gray',
    },
    bookingItem: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
    },
    salonName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    bookingInfo: {
        fontSize: 14,
        color: '#555',
    },
});

export default BookingScreen;
