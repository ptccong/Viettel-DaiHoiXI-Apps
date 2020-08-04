import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import { useState } from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  CloseIconOutline,
} from '@src/assets/icons';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import React from 'react';
import { ProgramTabEnum, DocumentRequestEnum } from '@src/core/utils/constants';

interface ComponentProps {
  isVisible: boolean;
  onClosePress: () => void;
}

export type ModalDocumentRequestProps = ThemedComponentProps & ComponentProps;

const ModalDocumentRequestComponent: React.FunctionComponent<ModalDocumentRequestProps> = (props) => {
  const onClosePress = (): void => {
    props.onClosePress();
  };

  const { themedStyle } = props;

  const [selectedBtn, setSelectedBtn] = useState<number>(DocumentRequestEnum.OnlyMe);

  const [isSelectedBtn2, setIsSelectedBtn2] = useState<boolean>();

  const [selectedChoice, setSelectedChoice] = useState<number>(ProgramTabEnum.ChuongTrinh);

  const renderSelected = (type: number): React.ReactElement => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        style={[
          themedStyle.btnChoice,
          selectedChoice === type && themedStyle.btnChoiceSelected,
        ]}
        onPress={() => setSelectedChoice(type)}>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      isVisible={props.isVisible}
      animationIn='slideInUp'
      animationOut='slideOutDown'
      onBackdropPress={onClosePress}
      backdropColor={'rgb(156, 156, 156)'}
      swipeDirection={['down']}
      onSwipeComplete={onClosePress}
      onBackButtonPress={onClosePress}
      backdropTransitionInTiming={1}
      backdropTransitionOutTiming={1}
      style={themedStyle.viewModal}>
      <View style={themedStyle.viewBox}>
        <View style={themedStyle.viewIcon}>
          <TouchableOpacity
            activeOpacity={0.75}
            style={themedStyle.bntClose}
            onPress={onClosePress}>
            {CloseIconOutline(themedStyle.iconClose)}
          </TouchableOpacity>
        </View>
        <View style={themedStyle.viewDoc}>
          <View style={themedStyle.viewDocTop}>
            <Text style={themedStyle.txtDocTop}>
              {'YÊU CẦU TÀI LIỆU'}
            </Text>
            <TextInput
              multiline={true}
              style={themedStyle.txtInputTop}
              placeholder={'Nhập nội dung yêu cầu'}
            />
          </View>
          <View style={themedStyle.viewDocCenter}>
            <Text style={themedStyle.txtDocCenter}>
              {'Ai có thể xem tài liệu?'}
            </Text>
            <View style={themedStyle.viewChoice}>
              {renderSelected(DocumentRequestEnum.OnlyMe)}
              <Text style={themedStyle.txtDocCenter}>
                {'Chỉ mình tôi'}
              </Text>
            </View>
            <View style={themedStyle.viewChoice}>
              {renderSelected(DocumentRequestEnum.EveryOne)}
              <Text style={themedStyle.txtDocCenter}>
                {'Mọi người'}
              </Text>
            </View>
          </View>
          <View style={themedStyle.viewDocBottom}>
          <TouchableOpacity style={themedStyle.btnBottomLeft}>
              <Text>
                {'Đồng ý'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onClosePress}
              style={themedStyle.btnBottomRight}>
              <Text>
                {'Đóng'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const ModalDocumentTabletRequest = withStyles(ModalDocumentRequestComponent, (theme: ThemeType) => ({
  viewModal: {
    alignItems: 'center',
  },
  viewBox: {
    width: pxToPercentage(1396),
    height: pxToPercentage(850),
    backgroundColor: theme['color-primary-20'],
  },
  viewIcon: {
    alignItems: 'flex-end',
  },
  iconClose: {
    tintColor: theme['color-primary-24'],
    width: pxToPercentage(80),
    height: pxToPercentage(80),
    marginTop: pxToPercentage(10),
    marginLeft: pxToPercentage(10),
  },
  viewDoc: {
    flexDirection: 'column',
  },
  viewDocTop: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtDocTop: {
    fontSize: pxToPercentage(58),
    ...textStyle.proDisplayRegular,
  },
  txtInputTop: {
    width: pxToPercentage(1042),
    height: pxToPercentage(240),
    borderWidth: pxToPercentage(1),
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
    borderRadius: pxToPercentage(32),
    paddingLeft: pxToPercentage(10),
    marginTop: pxToPercentage(40),
  },
  viewDocCenter: {
    marginLeft: pxToPercentage(177),
    marginTop: pxToPercentage(42),
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  btnChoice: {
    width: pxToPercentage(40),
    height: pxToPercentage(40),
    borderRadius: pxToPercentage(25),
    borderColor: theme['color-primary-2'],

    borderWidth: pxToPercentage(1),
    marginBottom: pxToPercentage(20),
  },
  btnChoiceSelected: {
    width: pxToPercentage(45),
    height: pxToPercentage(45),
    borderRadius: pxToPercentage(20),
    borderColor: theme['color-primary-2'],
    borderWidth: pxToPercentage(5),
    marginBottom: pxToPercentage(20),
  },
  txtDocCenter: {
    marginLeft: pxToPercentage(20),
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  viewDocBottom: {
    marginLeft: pxToPercentage(177),
    marginRight: pxToPercentage(177),
    marginTop: pxToPercentage(52),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnBottomLeft: {
    width: pxToPercentage(420),
    height: pxToPercentage(90),
    backgroundColor: theme['color-primary-7'],
    borderRadius: pxToPercentage(32),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTextBottom: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  viewChoice: {
    flexDirection: 'row',
  },
  btnBottomRight: {
    width: pxToPercentage(420),
    height: pxToPercentage(90),
    backgroundColor: theme['color-primary-18'],
    borderRadius: pxToPercentage(32),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBtnSelected: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
    color: theme['color-primary-2'],
  },
  txtSelected: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
    color: theme['color-primary-0'],
  },
}));
