import React, { useState } from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  StyleType,
} from '@kitten/theme';
import {
  View,
  StyleProp,
  TextStyle,
  Text,
  ImageProps,
  ImageStyle,
  ViewProps,
  TouchableOpacity,
} from 'react-native';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '../textStyle';
import {
  ArrowNextIcon,
  ArrowPrevIcon,
} from '@src/assets/icons';
import { isTablet } from 'react-native-device-info';

interface ComponentProps {
  icon?: IconProp;
  iconStyle?: StyleProp<ImageStyle>;
  titleStyle?: StyleProp<TextStyle>;
  isPrivateIntenet: boolean;
  onSwichInternetPress: () => void;
}

export type SwitchSettingProps = ComponentProps & ThemedComponentProps & ViewProps;

type IconProp = (style: StyleType) => React.ReactElement<ImageProps>;

const SwitchSettingComponent: React.FunctionComponent<SwitchSettingProps> = (props) => {
  const { themedStyle, style, titleStyle, iconStyle, ...restProps } = props;

  const onSwichInternetPress = (): void => {
    return props.onSwichInternetPress();
  };

  return (
    <View style={themedStyle.container}>
      <Text style={themedStyle.txtTitle}>
        {'Chuyển mạng kết nối'}
      </Text>
      <TouchableOpacity
        activeOpacity={0.75}
        style={[
          themedStyle.btnSwitch,
          !props.isPrivateIntenet && themedStyle.btnChange,
        ]}
        onPress={onSwichInternetPress}>
        {props.isPrivateIntenet &&
          (<React.Fragment>
            <View style={themedStyle.viewIcon}>
              {ArrowNextIcon(themedStyle.icon)}
            </View>
            <Text style={themedStyle.txtBtn}>
              {'Nội bộ'}
            </Text>
          </React.Fragment>)}
        {!props.isPrivateIntenet &&
          (<React.Fragment>
            <Text style={[themedStyle.txtBtn, themedStyle.txtChange]}>
              {'Internet'}
            </Text>
            <View style={[themedStyle.viewIcon, themedStyle.iconChange]}>
              {ArrowPrevIcon(themedStyle.icon)}
            </View>
          </React.Fragment>)}
      </TouchableOpacity>
    </View>
  );
};

export const SwitchSetting = withStyles(SwitchSettingComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: isTablet() ? pxToPercentage(34) : pxToPercentage(18),
    color: isTablet() ? theme['color-custom-600'] : theme['color-custom-100'],
    ...textStyle.proDisplayRegular,
  },
  txtBtn: {
    fontSize: isTablet() ? pxToPercentage(30) : pxToPercentage(16),
    ...textStyle.proTextRegular,
    color: theme['color-primary-2'],
  },
  btnSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: pxToPercentage(20),
    width: isTablet() ? pxToPercentage(194) : pxToPercentage(112),
    height: isTablet() ? pxToPercentage(70) : pxToPercentage(40),
    backgroundColor: theme['color-custom-100'],
    borderWidth: isTablet() ? pxToPercentage(2) : pxToPercentage(1),
    borderColor: theme['color-custom-900'],
    borderRadius: pxToPercentage(40),
  },
  btnChange: {
    justifyContent: 'flex-end',
    backgroundColor: theme['color-custom-900'],
  },
  viewIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: pxToPercentage(5),
    width: isTablet() ? pxToPercentage(54) : pxToPercentage(30),
    height: isTablet() ? pxToPercentage(54) : pxToPercentage(30),
    borderRadius: pxToPercentage(40),
    borderColor: theme['color-custom-900'],
    borderWidth: pxToPercentage(1),
  },
  icon: {
    tintColor: theme['color-custom-900'],
    width: isTablet() ? pxToPercentage(26.09) : pxToPercentage(20),
    height: isTablet() ? pxToPercentage(24) : pxToPercentage(20),
  },
  txtChange: {
    color: theme['color-custom-100'],
    marginLeft: pxToPercentage(6),
  },
  iconChange: {
    backgroundColor: theme['color-custom-100'],
  },
}));
