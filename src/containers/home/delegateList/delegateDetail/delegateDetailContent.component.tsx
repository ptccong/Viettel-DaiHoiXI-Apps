import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { UserDetail } from '@src/core/models/user/userDetail.model';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';

interface ComponentProps {
  user: UserDetail;
}

interface InfoTypeOneParams {
  firstTitle: string;
  firstValue: string | number;
  secondTitle: string;
  secondValue: string | number;
}

interface InfoTypeTwoParams {
  title: string;
  value: string | number;
}

export type DelegateDetailContentProps = ThemedComponentProps & ComponentProps;

const DelegateDetailContentComponent: React.FunctionComponent<DelegateDetailContentProps> = (props) => {
  const { themedStyle, user } = props;

  const renderInfoTypeOne = (params: InfoTypeOneParams): React.ReactElement => {
    return (
      <View style={themedStyle.viewSectionRow}>
        <View style={themedStyle.viewBlock}>
          <Text style={themedStyle.txtTitle}>
            {params.firstTitle}
          </Text>
          <Text style={themedStyle.txtValue}>
            {params.firstValue}
          </Text>
        </View>
        <View style={themedStyle.viewBlock}>
          <Text style={themedStyle.txtTitle}>
            {params.secondTitle}
          </Text>
          <Text style={themedStyle.txtValue}>
            {params.secondValue}
          </Text>
        </View>
      </View>
    );
  };

  const renderInfoTypeTwo = (params: InfoTypeTwoParams): React.ReactElement => {
    return (
      <View style={themedStyle.viewSectionRow}>
        <View style={themedStyle.viewBlock}>
          <Text style={themedStyle.txtTitle}>
            {params.title}
          </Text>
          <Text style={themedStyle.txtValue}>
            {params.value}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={themedStyle.container}>
      {renderInfoTypeOne({
        firstTitle: 'Ngày sinh',
        firstValue: user.birthDay,
        secondTitle: 'Số đại biểu',
        secondValue: user.delegate_number,
      })}
      <View style={themedStyle.breakLine} />
      {renderInfoTypeOne({
        firstTitle: 'Dân tộc',
        firstValue: user.nation,
        secondTitle: 'Giới tính',
        secondValue: user.sex,
      })}
      <View style={themedStyle.breakLine} />
      {renderInfoTypeOne({
        firstTitle: 'Quê quán',
        firstValue: user.hometown,
        secondTitle: 'Tôn giáo',
        secondValue: user.religion,
      })}
      <View style={themedStyle.breakLine} />
      {renderInfoTypeOne({
        firstTitle: 'Ngày vào đảng dự bị',
        firstValue: user.preparatoryDay,
        secondTitle: 'Ngày vào đảng chính thức',
        secondValue: user.officialDay,
      })}
      <View style={themedStyle.breakLine} />
      {renderInfoTypeOne({
        firstTitle: 'Học vấn phổ thông',
        firstValue: user.education,
        secondTitle: 'Học hàm, học vị',
        secondValue: user.degree,
      })}
      <View style={themedStyle.breakLine} />
      {renderInfoTypeTwo({
        title: 'Cơ quan',
        value: user.position,
      })}
      <View style={themedStyle.breakLine} />
      {renderInfoTypeTwo({
        title: 'Chuyên môn, nghiệp vụ, ngoại ngữ',
        value: user.specialize,
      })}
      <View style={themedStyle.breakLine} />
      {renderInfoTypeTwo({
        title: 'Lý luận chính trị',
        value: user.politicalTheory,
      })}
      <View style={themedStyle.breakLine} />
      {renderInfoTypeTwo({
        title: 'Kỷ luật',
        value: user.discipline,
      })}
      <View style={themedStyle.breakLine} />
      {renderInfoTypeTwo({
        title: 'Khen thưởng',
        value: user.bonus,
      })}
      <View style={themedStyle.breakLine} />
      {renderInfoTypeTwo({
        title: 'Đoàn',
        value: user.group,
      })}
      <View style={themedStyle.breakLine} />
      {renderInfoTypeTwo({
        title: 'Ghi chú',
        value: user.note,
      })}
    </View>
  );
};

export const DelegateDetailContent = withStyles(DelegateDetailContentComponent, (theme: ThemeType) => ({
  container: {
    borderRadius: pxToPercentage(12.5),
    backgroundColor: theme['color-custom-100'],
    marginTop: pxToPercentage(8),
    ...viewStyle.shadow2,
  },
  txtTitle: {
    fontSize: pxToPercentage(14),
    ...textStyle.proTextRegular,
    color: theme['color-primary-13'],
  },
  txtValue: {
    marginTop: pxToPercentage(2),
    fontSize: pxToPercentage(14),
    ...textStyle.proTextRegular,
    color: theme['text-basic-color'],
  },
  viewBlock: {
    flex: 1,
  },
  viewSectionRow: {
    flexDirection: 'row',
    paddingVertical: pxToPercentage(10),
    paddingHorizontal: pxToPercentage(8),
  },
  breakLine: {
    height: pxToPercentage(1),
    backgroundColor: theme['color-primary-11'],
  },
}));
