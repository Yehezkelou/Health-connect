import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Header from "@/components/ui/Header";
import { NotificationStyles } from '@/styles/screens/notification';

// Composants SVG pour les icônes
const ArrowBackIcon = () => (
  <View style={{ width: 24, height: 24, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 20 }}>←</Text>
  </View>
);

const PulseIcon = () => (
  <View style={{ width: 28, height: 28, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 24 }}>📊</Text>
  </View>
);

const WaterIcon = () => (
  <View style={{ width: 28, height: 28, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 24 }}>💨</Text>
  </View>
);

const Notification = () => {
  const notifications = [
    {
      id: 1,
      title: "Qualité de l'air",
      description: "La qualité de l'air près de vous est acceptable",
      time: "il y a 10 min",
      bgColor: "#fed7aa",
      iconColor: "#fb923c"
    },
    {
      id: 2,
      title: "Qualité de l'air",
      description: "La qualité de l'air près de vous est mauvaise",
      time: "il y a 1 jour",
      bgColor: "#fecaca",
      iconColor: "#f87171"
    },
    {
      id: 3,
      title: "Qualité de l'air",
      description: "La qualité de l'air près de vous est acceptable",
      time: "il y a 5 heures",
      bgColor: "#fed7aa",
      iconColor: "#fb923c"
    },
    {
      id: 4,
      title: "Qualité de l'air",
      description: "La qualité de l'air près de vous est optimale",
      time: "il y a 5 min",
      bgColor: "#bbf7d0",
      iconColor: "#4ade80"
    },
    {
      id: 5,
      title: "Qualité de l'air",
      description: "La qualité de l'air près de vous est optimale",
      time: "il y a 30 min",
      bgColor: "#bbf7d0",
      iconColor: "#4ade80"
    }
  ];

  return (
    <SafeAreaView style={NotificationStyles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView 
        style={NotificationStyles.scrollView}
        contentContainerStyle={NotificationStyles.notificationsList}
        showsVerticalScrollIndicator={false}
      >
        <Header title="Notifications" />
        {notifications.map((notification) => (
          <TouchableOpacity 
            key={notification.id} 
            style={NotificationStyles.notificationCard}
            activeOpacity={0.7}
          >
            <View style={[NotificationStyles.iconContainer, { backgroundColor: notification.bgColor }]}>
              <WaterIcon />
            </View>
            
            <View style={NotificationStyles.notificationContent}>
              <View style={NotificationStyles.notificationHeader}>
                <Text style={NotificationStyles.notificationTitle}>{notification.title}</Text>
                <Text style={NotificationStyles.notificationTime}>{notification.time}</Text>
              </View>
              <Text style={NotificationStyles.notificationDescription}>
                {notification.description}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};



export default Notification;