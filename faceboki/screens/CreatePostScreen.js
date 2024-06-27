// screens/CreatePostScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './CreatePostScreenStyles';

const CreatePostScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const selectImage = async () => {

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handlePost = () => {
    // Logic to handle post creation
    console.log('Image:', image);
    console.log('Message:', message);
    navigation.navigate('Feed', {
      newPost: { id: Date.now().toString(), title: message, content: message, liked: false, comments: [], image: image },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Post</Text>
      <TouchableOpacity style={styles.imageButton} onPress={selectImage}>
        <Text style={styles.imageButtonText}>Select Image</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <TextInput
        style={styles.input}
        placeholder="What's on your mind?"
        value={message}
        onChangeText={setMessage}
      />
      <TouchableOpacity style={styles.postButton} onPress={handlePost}>
        <Text style={styles.postButtonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreatePostScreen;
