import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';

export type ScrollableAvoidKeyboardProps = ThemedComponentProps & KeyboardAwareScrollViewProps;

const ScrollableAvoidKeyboardComponent: React.FunctionComponent<ScrollableAvoidKeyboardProps> = (props) => {
  const { style, contentContainerStyle, themedStyle, ...restProps } = props;

  return (
    <KeyboardAwareScrollView
      bounces={false}
      bouncesZoom={false}
      alwaysBounceVertical={false}
      alwaysBounceHorizontal={false}
      style={[themedStyle.container, style]}
      contentContainerStyle={[themedStyle.contentContainer, contentContainerStyle]}
      enableOnAndroid={true}
      {...restProps}
    />
  );
};

export const ScrollableAvoidKeyboard = withStyles(ScrollableAvoidKeyboardComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
}));
