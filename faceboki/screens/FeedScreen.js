// screens/FeedScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './FeedScreenStyles';

const initialPosts = [
  {
    id: '1',
    title: 'Post 1',
    content: 'This is the content of post 1',
    liked: false,
    comments: [],
  },
  {
    id: '2',
    title: 'Post 2',
    content: 'This is the content of post 2',
    liked: false,
    comments: [],
  },
  {
    id: '3',
    title: 'Post 3',
    content: 'This is the content of post 3',
    liked: false,
    comments: [],
  },
  // Adicione mais posts aqui
];

const FeedScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    if (route.params?.newPost) {
      setPosts((prevPosts) => [route.params.newPost, ...prevPosts]);
    }
  }, [route.params?.newPost]);

  const toggleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, liked: !post.liked } : post
      )
    );
  };

  const addComment = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      )
    );
    setNewComment('');
  };

  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      {item.image && <Image source={{ uri: item.image }} style={styles.postImage} />}
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postContent}>{item.content}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => toggleLike(item.id)}>
          <Icon
            name={item.liked ? 'thumbs-up' : 'thumbs-down'}
            size={24}
            color={item.liked ? '#007BFF' : '#FF0000'}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.commentsSection}>
        <Text style={styles.commentsTitle}>Comments:</Text>
        {item.comments.map((comment, index) => (
          <Text key={index} style={styles.comment}>
            {comment}
          </Text>
        ))}
        <TextInput
          style={styles.commentInput}
          placeholder="Add a comment"
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity
          style={styles.commentButton}
          onPress={() => addComment(item.id)}
        >
          <Text style={styles.commentButtonText}>Post Comment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed</Text>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={styles.createPostButton}
        onPress={() => navigation.navigate('CreatePost')}
      >
        <Text style={styles.createPostButtonText}>Create Post</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>Back to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FeedScreen;
