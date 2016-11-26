import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { fetchPost } from '../actions';

class PostDetail extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.postId); // precisamos passar o id
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <Text>Carregando . . .</Text>;
    }

    const { title, body } = this.props.post;

    return (
      <View>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.bodyStyle}>{body}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  bodyStyle: {
    fontSize: 16,
  }
});

const mapStateToProps = (state) => {
  return { post: state.posts.selected };
};

export default connect(mapStateToProps, { fetchPost })(PostDetail);
