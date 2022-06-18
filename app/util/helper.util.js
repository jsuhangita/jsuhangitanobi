import {isEmpty} from 'lodash';
import {Alert} from './RNHelpers.util';

export function errorHandler(
  e,
  defaultMessage = 'Something went wrong. Please try again.',
  button = [{text: 'OK'}],
) {
  switch (true) {
    case e.message === 'Network Error': {
      Alert.alert('Connection Problem', 'Please Check Your Connection', [
        {
          text: 'Ok',
        },
      ]);
      break;
    }
    case isEmpty(e.message): {
      Alert.alert('Oops!', defaultMessage, button);
      break;
    }
    default: {
      Alert.alert('Oops!', e.message, button);
    }
  }
}
