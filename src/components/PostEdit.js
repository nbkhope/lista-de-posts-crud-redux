import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import PostForm from './PostForm';
import {
  changePostTitle,
  changePostBody,
  resetPostForm,
  updatePost,
  deletePost
} from '../actions';

class PostEdit extends Component {
  componentDidMount() {
    const { title, body } = this.props.selectedPost;
    this.props.changePostTitle(title);
    this.props.changePostBody(body);
  }

  componentWillUnmount() {
    this.props.resetPostForm();
  }

  onTitleChange = (title) => {
    this.props.changePostTitle(title);
  }

  onBodyChange = (body) => {
    this.props.changePostBody(body);
  }

  onCancelPress = () => {
    Actions.pop();
  }

  onOkPress = () => {
    const { title, body, selectedPost } = this.props;
    this.props.updatePost({ title, body }, selectedPost.id);
    Actions.pop();
  }

  onDeletePress = () => {
    setTimeout(() => this.props.deletePost(this.props.selectedPost.id), 3000);
    Actions.list({ type: 'reset' });
  }

  render() {
    return (
      <View>
        <PostForm
          onTitleChange={this.onTitleChange}
          onBodyChange={this.onBodyChange}
          title={this.props.title}
          body={this.props.body}
          onCancelPress={this.onCancelPress}
          onOkPress={this.onOkPress}
        />

        <TouchableOpacity
          style={{ borderWidth: 9, padding: 6, backgroundColor: 'red' }}
          onPress={this.onDeletePress}
        >
          <Text>Deletar Post</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = {
  changePostTitle,
  changePostBody,
  resetPostForm,
  updatePost,
  deletePost
};

const mapStateToProps = (state) => {
  return {
    selectedPost: state.posts.selected,
    title: state.postForm.title,
    body: state.postForm.body
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);
