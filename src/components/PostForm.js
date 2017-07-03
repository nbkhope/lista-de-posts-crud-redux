import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

class PostForm extends Component {
  render() {
    const inputStyle = { height: 40, borderWidth: 4 };
    if (this.props.titleError) {
      inputStyle.backgroundColor = 'red';
    }

    return (
      <View>
        <Text style={{ fontWeight: 'bold' }}>Título</Text>
        <TextInput
          style={inputStyle}
          onChangeText={this.props.onTitleChange}
          value={this.props.title}
        />

        <Text style={{ fontWeight: 'bold' }}>Conteúdo</Text>
        <TextInput
          style={{ height: 80, borderWidth: 4 }}
          onChangeText={this.props.onBodyChange}
          value={this.props.body}
          multiline={true}
        />

        <TouchableOpacity
          style={{ borderWidth: 9, padding: 6, backgroundColor: 'gray' }}
          onPress={this.props.onCancelPress}
        >
          <Text>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ borderWidth: 9, padding: 6, backgroundColor: 'antiquewhite' }}
          onPress={this.props.onOkPress}
        >
          <Text>OK</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PostForm;
