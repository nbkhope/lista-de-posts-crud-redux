import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import PostForm from './PostForm';
import { changePostTitle, changePostBody, resetPostForm } from '../actions';

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
  };

  render() {
    return (
      <View>
        <PostForm
          onTitleChange={this.onTitleChange}
          onBodyChange={this.onBodyChange}
          title={this.props.title}
          body={this.props.body}
          onCancelPress={() => null}
          onOkPress={() => undefined}
        />
      </View>
    );
  }
}

const mapDispatchToProps = {
  changePostTitle,
  changePostBody,
  resetPostForm
};

const mapStateToProps = (state) => {
  return {
    selectedPost: state.posts.selected,
    title: state.postForm.title,
    body: state.postForm.body
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);
