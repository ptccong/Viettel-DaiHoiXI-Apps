import React from 'react';
import {
  View,
  ViewProps,
  Text,
  Image,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { textStyle } from '@src/components';
import { User } from '@src/core/models/user/user.model';
import { RemoteImage } from '@src/assets/images';
import { pxToPercentage } from '@src/core/utils/utils';

interface ComponentProps {
  user: User;
}

export type ProfileInfoProps = ThemedComponentProps & ViewProps & ComponentProps;

const ProfileInfoV2Component: React.FunctionComponent<ProfileInfoProps> = (props) => {
  const { style, themedStyle, user, ...restProps } = props;

  return (
    <View
      style={[
        themedStyle.container,
        style,
      ]}
      {...restProps}>
      <Image
        style={themedStyle.avatar}
        source={(new RemoteImage(user.avatar)).imageSource}
      />
      <View style={themedStyle.sectionDetails}>
        <Text
          numberOfLines={1}
          style={themedStyle.txtName}>
          {`Đồng chí ` + user.full_name}
        </Text>
        <Text
          numberOfLines={1}
          style={themedStyle.txtPosition}>
          {user.position}
        </Text>
        <Text
          numberOfLines={1}
          style={themedStyle.txtPosition}>
          {`Đoàn: ` + user.group}
        </Text>
        <View style={themedStyle.viewDelegateNumber}>
          <Text
            numberOfLines={1}
            style={themedStyle.txtPosition}>
            {`Tổ: ` + user.nest}
          </Text>
          <Text
            numberOfLines={1}
            style={themedStyle.txtPosition}>
            {`Số đại biểu: ` + user.delegateNumber}
          </Text>
        </View>
      </View>
    </View>
  );
};

export const ProfileInfoV2 = withStyles(ProfileInfoV2Component, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    marginTop: pxToPercentage(2),
  },
  sectionDetails: {
    flex: 1,
    marginLeft: pxToPercentage(8),
    paddingVertical: pxToPercentage(12),
  },
  txtName: {
    fontSize: pxToPercentage(17), // size 24
    ...textStyle.semibold,
    fontWeight: 'normal',
    color: theme['text-basic-color'],
  },
  txtPosition: {
    fontSize: pxToPercentage(13),
    ...textStyle.light,
    marginLeft: pxToPercentage(0),
    marginVertical: pxToPercentage(2),
    marginHorizontal: pxToPercentage(32),
  },
  txtPhone: {
    fontSize: pxToPercentage(12),
    ...textStyle.regular,
    marginLeft: pxToPercentage(9),
  },
  avatar: {
    width: pxToPercentage(70), // width 96
    height: pxToPercentage(85), // height 128
    marginHorizontal: pxToPercentage(12),
    marginVertical: pxToPercentage(12),
    borderRadius: pxToPercentage(4),
  },
  viewDelegateNumber: {
    flexDirection: 'row',
  },
}));
