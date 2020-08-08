import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ImageProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  StyleType,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { textStyle } from '@src/components';
import {
  MenuIcon,
  PressReleaseIcon,
  SoundIcon,
} from '@src/assets/icons';
import { Program as ProgramModel } from '@src/core/models/program/program.model';
import { Notification as NotificationModel } from '@src/core/models/notification/notification.model';
import { PressRelease as PressReleaseModel } from '@src/core/models/pressRelease/pressRelease.model';
import { BackHeader } from '@src/components/header/backHeader.component';
import { ProgramTabEnum } from '@src/core/utils/constants';
import { ProgramTablet } from './tabs/tablet/program.component.tablet';
import { PressReleaseTablet } from './tabs/tablet/pressRelease.component.tablet';
import { NotificationTablet } from './tabs/tablet/notification.component.tablet';
import { DateListTablet } from './tabs/tablet/dateList.component.tablet';
import { HelpModel } from '@src/core/navigation/components/helpModel.component';

interface ComponentProps {
  programs: ProgramModel[];
  notifications: NotificationModel[];
  onNotificationItemPress: (notification: NotificationModel) => void;
  pressReleases: PressReleaseModel[];
  onPressReleaseItemPress: (pressRelease: PressReleaseModel) => void;
  onBackPress: () => void;
  onMessagePress: () => void;
}

export type ConferenceInfoTabletProps = ComponentProps & ThemedComponentProps;

type IconProp = (style: StyleType) => React.ReactElement<ImageProps>;

const ConferenceInfoTabletComponent: React.FunctionComponent<ConferenceInfoTabletProps> = (props) => {
  const [selectedTab, setSelectedTab] = useState<number>(ProgramTabEnum.ChuongTrinh);
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const dateDataFake: string[] = [
    '08/10/2020',
    '09/10/2020',
    '10/10/2020',
  ];

  const onNotificationItemPress = (notification: NotificationModel): void => {
    props.onNotificationItemPress(notification);
  };

  const onPressReleaseItemPress = (pressReleae: PressReleaseModel): void => {
    props.onPressReleaseItemPress(pressReleae);
  };

  const onMessagePress = (): void => {
    props.onMessagePress();
  };

  const onDatePress = (): void => {

  };

  const onBackPress = (): void => {
    props.onBackPress();
  };

  const onHelpPress = (): void => {
    setIsVisible(prevState => !prevState);
  };

  const { themedStyle } = props;

  const renderTabBtn = (type: number, title: string, icon: IconProp): React.ReactElement => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        style={[
          themedStyle.btnTab,
          selectedTab === type && themedStyle.btnTabSelected,
        ]}
        onPress={() => setSelectedTab(type)}>
        {icon([
          themedStyle.iconMenu,
          selectedTab === type && themedStyle.iconSelected,
        ])}
        <Text
          style={[
            themedStyle.txtBtnTab,
            selectedTab === type && themedStyle.txtBtnTabSelected,
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  const getTitleByType = (): string => {
    switch (selectedTab) {
      case ProgramTabEnum.ChuongTrinh: {
        return 'CHƯƠNG TRÌNH';
      }
      case ProgramTabEnum.ThongCao: {
        return 'THÔNG CÁO';
      }
      case ProgramTabEnum.ThongBao: {
        return 'THÔNG BÁO';
      }
      default: {
        return undefined;
      }
    }
  };

  return (
    <View style={themedStyle.container}>
      <BackHeader
        title={getTitleByType()}
        onBackPress={onBackPress}
        onMessagePress={onMessagePress}
        onHelpPress={onHelpPress}
      />
      <View style={themedStyle.viewRow}>
        <View style={themedStyle.viewTab}>
          {renderTabBtn(ProgramTabEnum.ChuongTrinh, 'Chương trình', MenuIcon)}
          {renderTabBtn(ProgramTabEnum.ThongBao, 'Thông báo', SoundIcon)}
          {renderTabBtn(ProgramTabEnum.ThongCao, 'Thông cáo', PressReleaseIcon)}
        </View>
        <View style={themedStyle.viewCard}>
          <DateListTablet
            dateSelected={new Date()}
            numDates={2}
            onDatePress={onDatePress}
            dateList={dateDataFake}
          />
          {selectedTab === ProgramTabEnum.ChuongTrinh &&
            (<ProgramTablet
              programs={props.programs}
            />)}
          {selectedTab === ProgramTabEnum.ThongCao &&
            (<PressReleaseTablet
              pressReleases={props.pressReleases}
              onPressReleaseItemPress={onPressReleaseItemPress}
            />)}
          {selectedTab === ProgramTabEnum.ThongBao &&
            (<NotificationTablet
              notifications={props.notifications}
              onNotificationItemPress={onNotificationItemPress}
            />)}
        </View>
      </View>
      <HelpModel
        isVisible={isVisible}
        onClosePress={onHelpPress}
      />
    </View>
  );
};

export const ConferenceInfoTablet = withStyles(ConferenceInfoTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: pxToPercentage(31),
    paddingBottom: pxToPercentage(31),
    backgroundColor: theme['color-primary-2'],
  },
  viewRow: {
    flex: 1,
    flexDirection: 'row',
  },
  viewTab: {
    justifyContent: 'center',
    width: pxToPercentage(260),
    marginRight: pxToPercentage(31),
  },
  viewCard: {
    flex: 1,
    borderRadius: pxToPercentage(40),
    padding: pxToPercentage(20),
    paddingTop: pxToPercentage(34),
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
  viewTable: {
    flex: 1,
    marginTop: pxToPercentage(28),
  },
  btnTab: {
    justifyContent: 'center',
    alignItems: 'center',
    width: pxToPercentage(260),
    height: pxToPercentage(272),
    marginVertical: pxToPercentage(20),
    borderRadius: pxToPercentage(32),
    borderWidth: pxToPercentage(2),
    borderColor: theme['color-primary-19'],
  },
  btnTabSelected: {
    backgroundColor: theme['color-primary-19'],
  },
  txtBtnTab: {
    fontSize: pxToPercentage(34),
    marginTop: pxToPercentage(20),
    color: theme['color-custom-100'],
    ...textStyle.proDisplayBold,
  },
  txtBtnTabSelected: {
    color: theme['color-primary-2'],
  },
  txtTd: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  iconMenu: {
    height: pxToPercentage(82.63), // 56
    width: pxToPercentage(80),
    tintColor: theme['color-custom-100'],
  },
  iconSound: {
    width: pxToPercentage(82.63),
    height: pxToPercentage(94),
    tintColor: theme['color-custom-100'],
  },
  iconPressRelease: {
    width: pxToPercentage(82.63), // 76.21
    height: pxToPercentage(87.32),
    tintColor: theme['color-custom-100'],
  },
  iconSelected: {
    tintColor: theme['color-primary-2'],
  },
}));
