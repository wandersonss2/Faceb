import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { getProfile } from '../services/accountService';
import styles from './ProfileScreenStyles';

const ProfileScreen = ({ route, navigation, setIsLoggedIn }) => {
  const [profile, setProfile] = useState({});
  const { token } = route.params;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile(token);
        setProfile(data);
      } catch (error) {
        Alert.alert('Error', 'Failed to load profile.');
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      {profile.profileImage ? (
        <Image source={{ uri: profile.profileImage }} style={styles.profileImage} />
      ) : (
        <Text style={styles.noImageText}>No profile image selected</Text>
      )}
      <View style={styles.profileItem}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{profile.name || 'N/A'}</Text>
      </View>
      <View style={styles.profileItem}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{profile.email || 'N/A'}</Text>
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
