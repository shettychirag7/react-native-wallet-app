import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  title: {
    lineHeight: 24,
    fontSize: 16,
    marginVertical: 8,
  },
  transactions: {
    color: '#2b6cd8',
  },
});

export default styles;
