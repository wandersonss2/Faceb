import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './ProfileScreenStyles';

const ProfileScreen = ({ route, navigation, setIsLoggedIn }) => {
  const user = route.params?.user || {};

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigation.replace('App');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      {user.profileImage ? (
        <Image source={{ uri: `http://10.0.2.2:5000/${user.profileImage}` }} style={styles.profileImage} />
      ) : (
        <Text style={styles.noImageText}>No profile image selected</Text>
      )}
      <View style={styles.profileItem}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{user.name || 'N/A'}</Text>
      </View>
      <View style={styles.profileItem}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user.email || 'N/A'}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Feed')}
      >
        <Text style={styles.buttonText}>Go to Feed</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.backButton]}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
