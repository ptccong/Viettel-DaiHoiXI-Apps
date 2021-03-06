import React from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { ChatList } from '@src/core/models/chat/chat.model';
import { ChatItemTablet } from './chatItem.component.tablet';
import { textStyle } from '@src/components';
import { PersonIcon } from '@src/assets/icons';
import { ChatDetail } from '@src/core/models/chat/chatDetail';
import { ChatDetailDataFake } from '@src/core/data/chat';
import { ChatDetailTablet } from './chatDetail/chatDetail.component.tablet';

interface ComponentProps {
  example?: any;
  chatLists: ChatList[];
}

export type ChatTabletProps = ThemedComponentProps & ComponentProps;

const ChatTabletComponent: React.FunctionComponent<ChatTabletProps> = (props) => {
  const { themedStyle } = props;
  const [isRead, setIsRead] = React.useState<number>(0);
  const [chatDetail, setChatDetail] = React.useState<ChatDetail[]>(ChatDetailDataFake);

  const onSendMessagePress = (message: string): void => {
    const date = new Date();
    setChatDetail([...chatDetail, {
      content: message,
      id: 1,
      time: `${date.getHours()}:${date.getMinutes()}`,
    }]);
  };

  const onChatListItemPress = (index: number): void => {
    setIsRead(index);
  };

  const renderChatListItem = ({ item, index }) => (
    <ChatItemTablet
      chatList={item}
      onChatListItemPress={onChatListItemPress}
      isRead={index === isRead}
      index={index}
    />
  );

  const renderChatHeader = (): React.ReactElement[] => {
    return props.chatLists.map((item, index) => {
      if (index === isRead) {
        return (
          <View style={themedStyle.viewHeader}>
            <View style={themedStyle.viewIcon}>
              {PersonIcon(themedStyle.iconHeader)}
            </View>
            <Text style={themedStyle.txtHeader}>
              {item.name}
            </Text>
          </View>
        );
      }
    });
  };

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewCard}>
        <View style={themedStyle.viewChatList}>
          <FlatList
            data={props.chatLists}
            renderItem={renderChatListItem}
          />
        </View>
        <View style={themedStyle.viewChatDetail}>
          {renderChatHeader()}
          <ChatDetailTablet
            onSendMessagePress={onSendMessagePress}
            chatDetails={chatDetail}
          />
        </View>
      </View>
    </View>
  );
};

export const ChatTablet = withStyles(ChatTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: pxToPercentage(31),
    paddingBottom: pxToPercentage(31),
    backgroundColor: theme['color-primary-2'],
  },
  viewCard: {
    flex: 1,
    borderRadius: pxToPercentage(40),
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  viewChatList: {
    width: pxToPercentage(697),
    backgroundColor: theme['color-primary-20'],
  },
  viewChatDetail: {
    flex: 1,
  },
  viewHeader: {
    height: pxToPercentage(120),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme['color-primary-31'],
    flexDirection: 'row',
  },
  txtHeader: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  iconHeader: {
    height: pxToPercentage(51.08),
    width: pxToPercentage(51),
    tintColor: theme['color-custom-100'],
  },
  viewIcon: {
    height: pxToPercentage(80),
    width: pxToPercentage(80),
    borderRadius: pxToPercentage(28),
    backgroundColor: theme['color-primary-2'],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: pxToPercentage(24),
  },
}));
