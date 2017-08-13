import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import PostForm from './PostForm';
import {
  changePostTitle,
  changePostBody,
  changePostError,
  resetPostForm,
  updatePost,
  deletePost,
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

  onCancelPress = () => {
    Actions.pop();
  }

  onOkPress = () => {
    const { title, body, selectedPost } = this.props;
    this.props.updatePost({ title, body }, selectedPost.id);
    Actions.pop();
  }

  onDeletePress = () => {
    this.props.deletePost(this.props.selectedPost.id);
    Actions.list({ type: 'reset' });
  }

  render() {
    return (
      <View>
        <PostForm
          title={this.props.title}
          body={this.props.body}
          titleError={this.props.titleError}
          bodyError={this.props.bodyError}
          onCancelPress={this.onCancelPress}
          onOkPress={this.onOkPress}
          changePostTitle={this.props.changePostTitle}
          changePostBody={this.props.changePostBody}
          changePostError={this.props.changePostError}
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
  changePostError,
  resetPostForm,
  updatePost,
  deletePost
};

const mapStateToProps = (state) => {
  return {
    selectedPost: state.posts.selected,
    title: state.postForm.title,
    body: state.postForm.body,
    titleError: state.postForm.titleError,
    bodyError: state.postForm.bodyError,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);
