import React from 'react';
import {
  View,
  ViewProps,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { textStyle } from '@src/components';
import { RemoteImage } from '@src/assets/images';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '../viewStyle';
import {
  PersonIcon2,
  SearchIcon,
  QRCodeIconOther,
} from '@src/assets/icons';
import { SERVER_ADDRESS } from '../../../config';
import { Deputy as DeputyModel } from '@src/core/models/deputy/deputy.model';

interface ComponentProps {
  deputy: DeputyModel;
  onMyProfilePress: () => void;
  onSearchPress: () => void;
  onQRCodePress: () => void;
}

export type ProfileInfoProps = ThemedComponentProps & ViewProps & ComponentProps;

const ProfileInfoComponent: React.FunctionComponent<ProfileInfoProps> = (props) => {
  const { style, themedStyle, deputy } = props;

  const onMyProfileButtonPress = (): void => {
    props.onMyProfilePress();
  };

  const onSearchButtonPress = (): void => {
    props.onSearchPress();
  };

  const onQRCodeButtonPress = (): void => {
    props.onQRCodePress();
  };

  return (
    <React.Fragment>
      <View style={themedStyle.viewCard} />
      <View
        style={[
          themedStyle.container,
          style,
        ]}>
        <View style={themedStyle.sectionBody}>
          <Image
            resizeMode='cover'
            source={(new RemoteImage(`${SERVER_ADDRESS}${deputy.avatar}`)).imageSource}
            style={themedStyle.imgAvatar}
          />
          <View style={themedStyle.viewInfo}>
            <Text
              numberOfLines={1}
              style={[
                themedStyle.txtInfo,
                themedStyle.txtBold,
              ]}>
              {`Đồng chí ${deputy.fullName.toUpperCase()}`}
            </Text>
            <Text
              numberOfLines={2}
              style={[
                themedStyle.txtInfo,
                themedStyle.txtItalic,
              ]}>
              {deputy.position}
            </Text>
            <Text
              numberOfLines={1}
              style={themedStyle.txtInfo}>
              {'Cơ quan: '}
              <Text
                numberOfLines={1}
                style={[
                  themedStyle.txtInfo,
                  themedStyle.txtBold,
                ]}>
                {deputy.organization}
              </Text>
            </Text>
            <Text
              numberOfLines={1}
              style={themedStyle.txtInfo}>
              {'Số điện thoại: '}
              <Text
                numberOfLines={1}
                style={[
                  themedStyle.txtInfo,
                  themedStyle.txtBold,
                ]}>
                {deputy.phoneNumber}
              </Text>
            </Text>
          </View>
        </View>
        <View style={themedStyle.sectionFooter}>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={onMyProfileButtonPress}
            style={themedStyle.btn}>
            {PersonIcon2(themedStyle.iconBtnEdit)}
            <Text style={themedStyle.txtBtn}>
              {'Cá nhân'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={onSearchButtonPress}
            style={themedStyle.btn}>
            {SearchIcon(themedStyle.iconBtnEdit)}
            <Text style={themedStyle.txtBtn}>
              {'Tìm kiếm'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={onQRCodeButtonPress}
            style={themedStyle.btn}>
            {QRCodeIconOther(themedStyle.iconBtnLogout)}
            <Text style={themedStyle.txtBtn}>
              {'Mã QR'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
};

export const ProfileInfo = withStyles(ProfileInfoComponent, (theme: ThemeType) => ({
  container: {
    borderRadius: pxToPercentage(12.5),
    backgroundColor: theme['color-basic-100'],
    ...viewStyle.shadow2,
  },
  sectionBody: {
    flexDirection: 'row',
    padding: pxToPercentage(12.5),
  },
  sectionFooter: {
    flexDirection: 'row',
    height: pxToPercentage(35),
    borderBottomLeftRadius: pxToPercentage(12.5),
    borderBottomRightRadius: pxToPercentage(12.5),
    backgroundColor: theme['background-basic-color-4'],
  },
  viewCard: {
    position: 'absolute',
    height: pxToPercentage(40),
    width: pxToPercentage(375),
    backgroundColor: theme['color-primary-2'],
  },
  btn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtn: {
    textAlign: 'center',
    fontSize: pxToPercentage(12),
    marginLeft: pxToPercentage(5),
    color: theme['color-primary-2'],
    ...textStyle.proTextSemibold,
  },
  iconBtnEdit: {
    tintColor: theme['color-primary-2'],
    width: pxToPercentage(22.5),
    height: pxToPercentage(22.5),
  },
  iconBtnLogout: {
    tintColor: theme['color-primary-2'],
    width: pxToPercentage(20),
    height: pxToPercentage(20),
  },
  imgAvatar: {
    height: pxToPercentage(105),
    width: pxToPercentage(75),
    borderRadius: pxToPercentage(5),
    marginRight: pxToPercentage(12.5),
  },
  viewInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  txtInfo: {
    fontSize: pxToPercentage(13),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
  txtBold: {
    ...textStyle.proTextBold,
  },
  txtItalic: {
    ...textStyle.proTextRegularItalic,
  },
}));
