import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { format } from 'date-fns';

const THEME = {
  primary: '#DEB887', // Burlywood
  secondary: '#E6C9A8', // Lighter burlywood
  text: '#5D4037', // Dark brown
  background: '#FDF5E6', // Old lace
};

const appointments = [
  {
    id: 1,
    service: 'Haircut & Styling',
    salon: 'Glamour Studio',
    date: new Date(2025, 1, 15, 14, 30),
    status: 'upcoming',
  },
  {
    id: 2,
    service: 'Full Body Massage',
    salon: 'Beauty Haven',
    date: new Date(2025, 1, 18, 10, 0),
    status: 'upcoming',
  },
  {
    id: 3,
    service: 'Manicure & Pedicure',
    salon: 'Nail Paradise',
    date: new Date(2025, 1, 10, 15, 0),
    status: 'completed',
  },
];

export default function AppointmentsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Appointments</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.filters}>
          <TouchableOpacity style={[styles.filterButton, styles.filterButtonActive]}>
            <Text style={[styles.filterText, styles.filterTextActive]}>Upcoming</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Completed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Cancelled</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.appointments}>
          {appointments.map((appointment, index) => (
            <Animated.View
              key={appointment.id}
              entering={FadeInDown.delay(index * 100)}
              style={[
                styles.appointmentCard,
                appointment.status === 'completed' && styles.completedCard,
              ]}
            >
              <View style={styles.appointmentHeader}>
                <Text style={styles.serviceName}>{appointment.service}</Text>
                <View style={[
                  styles.statusBadge,
                  appointment.status === 'completed' ? styles.completedBadge : styles.upcomingBadge,
                ]}>
                  <Text style={[
                    styles.statusText,
                    appointment.status === 'completed' ? styles.completedText : styles.upcomingText,
                  ]}>
                    {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                  </Text>
                </View>
              </View>

              <Text style={styles.salonName}>{appointment.salon}</Text>
              
              <View style={styles.appointmentDetails}>
                <Text style={styles.dateText}>
                  {format(appointment.date, 'MMM d, yyyy')} at {format(appointment.date, 'h:mm a')}
                </Text>
              </View>

              {appointment.status === 'upcoming' && (
                <View style={styles.actions}>
                  <TouchableOpacity style={styles.rescheduleButton}>
                    <Text style={styles.rescheduleText}>Reschedule</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.cancelButton}>
                    <Text style={styles.cancelText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Animated.View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
    color: THEME.text,
  },
  content: {
    flex: 1,
  },
  filters: {
    flexDirection: 'row',
    padding: 20,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: THEME.background,
    marginRight: 12,
    borderWidth: 1,
    borderColor: THEME.secondary,
  },
  filterButtonActive: {
    backgroundColor: THEME.primary,
  },
  filterText: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: THEME.text,
  },
  filterTextActive: {
    color: '#fff',
  },
  appointments: {
    padding: 20,
  },
  appointmentCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: THEME.secondary,
  },
  completedCard: {
    opacity: 0.8,
  },
  appointmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  serviceName: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: THEME.text,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  upcomingBadge: {
    backgroundColor: THEME.background,
  },
  completedBadge: {
    backgroundColor: THEME.secondary,
  },
  statusText: {
    fontSize: 12,
    fontFamily: 'Poppins_500Medium',
  },
  upcomingText: {
    color: THEME.text,
  },
  completedText: {
    color: THEME.text,
  },
  salonName: {
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    color: THEME.text,
    marginBottom: 8,
  },
  appointmentDetails: {
    marginBottom: 16,
  },
  dateText: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: THEME.text,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  rescheduleButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: THEME.background,
    marginRight: 12,
    borderWidth: 1,
    borderColor: THEME.secondary,
  },
  rescheduleText: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: THEME.text,
  },
  cancelButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#FEE2E2',
  },
  cancelText: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: '#DC2626',
  },
});