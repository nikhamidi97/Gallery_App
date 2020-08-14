import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button
} from 'react-native';
import { withFormik } from 'formik';
import * as yup from 'yup';
import { addIma, updateFood, uploadFood } from '../api/FoodsApi';

import { uploadImage } from '../services/firebase';
import photoPicker from './imagePicker';



const UploadForm = (props) => {

  setImage = (image) => {
    props.setFieldValue('imageUri', image.uri);
  }

  return (
    <View style={styles.container}>
      <photoPicker image={props.image.image} onImagePicked={setImage} />
      <TextInput
        value={props.values.name}
        style={styles.longFormInput}
        placeholder='Name'
        onChangeText={text => { props.setFieldValue('name', text) }}
      />
      <Text style={styles.validationText}> {props.errors.name}</Text>
      <TextInput
        value={props.values.category}
        style={styles.longFormInput}
        placeholder='Category'
        onChangeText={text => { props.setFieldValue('category', text) }}
      />
      <Text style={styles.validationText}> {props.errors.category}</Text>

      <Button
        title='Submit'
        onPress={() => props.handleSubmit()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32
  },
  container: {
    width: 300,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  formInput: {
    borderColor: '#B5B4BC',
    borderWidth: 1,
    padding: 8,
    height: 50,
    color: 'black',
    width: '75%',
    marginBottom: 16,
    marginTop: 16
  },
  validationText: {
    color: 'red'
  },
  longFormInput: {
    width: '100%',
    height: 50,
    color: 'black',
    borderColor: '#B5B4BC',
    borderWidth: 1,
    padding: 8,
    margin: 16
  },
});

export default withFormik({
  mapPropsToValues: ({ image}) => ({
    name: image.name,
    category: image.category,
    imageUri: null
  }),
  enableReinitialize: true,
  validationSchema: (props) => yup.object().shape({
    name: yup.string().max(30).required(),
    category: yup.string().max(15).required()
  }),
  handleSubmit: (values, { props }) => {
    console.log(props);

    console.log(values);

    if (props.food.id) {
      values.id = props.image.id;
      values.createdAt = props.image.createdAt;
      values.image = props.image.image;
      uploadImage(values, props.onImageUpdated, { updating: true });
    } else {
      uploadImage(values, props.onImageAdded, { updating: false });
    }
  },
})(UploadForm);