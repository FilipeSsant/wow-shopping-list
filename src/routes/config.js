import { CardStyleInterpolators } from '@react-navigation/stack';
import { colors } from '@styles';

export const navigatorOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerStyle: {
    backgroundColor: colors.default,
    shadowOpacity: 0,
    shadowOffset: {
      height: 0,
    },
    shadowRadius: 0,
    elevation: 0,
  },
  headerTintColor: colors.defaultText,
  headerTitleAlign: 'left',
  headerTitleStyle: {
    fontSize: 20,
  },
};
