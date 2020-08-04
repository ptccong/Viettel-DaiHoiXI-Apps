import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import { DocumentSection as DocumentSectionModel } from '@src/core/models/document/document.model';
import { Table } from '@src/components/table/table.component';
import { Thead } from '@src/components/table/thead.component';
import { Th } from '@src/components/table/th.component';
import { Tbody } from '@src/components/table/tbody.component';
import { Tr } from '@src/components/table/tr.component';
import { Td } from '@src/components/table/td.component';
import { SearchIcon, ArrowForwardIcon } from '@src/assets/icons';
import { ModalTabletDocument } from './modalDocument.component.tablet';
import { ArrowIosBackFill } from '@src/assets/icons';
import { DocumentItemTablet } from './documentItem.tablet.component';
interface ComponentProps {
  documentSections: DocumentSectionModel[];
}

export type DocumentTabletProps = ComponentProps & ThemedComponentProps;

const DocumentTabletComponent: React.FunctionComponent<DocumentTabletProps> = (props) => {
  const { themedStyle } = props;
  const [isVisibleDocument, setIsVisibleDocument] = React.useState<boolean>(false);
  const [isShowDocument, setIsShowDocument] = React.useState<boolean>(true);

  const onDocumentPress = () => {
    setIsVisibleDocument(true);
  };
  const onClosePress = () => {
    setIsVisibleDocument(false);
  };

  const renderDocumentTablet = (): React.ReactElement[] => {

    return props.documentSections.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <DocumentItemTablet
            documentSection={item}>
          </DocumentItemTablet>
        </React.Fragment>
      );
    });
  };

  return (
    <Table style={themedStyle.container}>
      <Thead>
        <Th alignItems='center' width={110}>
          {'STT'}
        </Th>
        <Th alignItems='center' width={295}>
          {'Số văn bản'}
        </Th>
        <Th alignItems='center' width={250}>
          {'Ngày ban hành'}
        </Th>
        <Th alignItems='center' width={250}>
          {'Cơ quan ban hành'}
        </Th>
        <Th alignItems='center'>
          {'Trích yếu'}
        </Th>
        <Th alignItems='center' width={130}>
          {'Xem'}
        </Th>
      </Thead>
      <Tbody>
        {renderDocumentTablet()}
      </Tbody>
    </Table>
  );
};

export const DocumentTablet = withStyles(DocumentTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    marginTop: pxToPercentage(28),
  },
  txtInfo: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
    paddingLeft: pxToPercentage(20),
  },
  td: {
    borderRightWidth: pxToPercentage(0),
    backgroundColor: theme['color-primary-2'],
  },
  viewModal: {
    width: pxToPercentage(1556),
    height: pxToPercentage(1148),
    backgroundColor: theme['color-primary-0'],
  },
  modal: {
    alignItems: 'center',
  },
  txtTitle: {
    color: theme['color-primary-3'],
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  iconArrowUp: {
    position: 'absolute',
    right: pxToPercentage(6),
    width: pxToPercentage(20),
    height: pxToPercentage(20),
    tintColor: theme['color-custom-100'],
    transform: [{ rotate: '90deg' }],
  },
  iconArrowDown: {
    position: 'absolute',
    right: pxToPercentage(6),
    width: pxToPercentage(20),
    height: pxToPercentage(20),
    tintColor: theme['color-custom-100'],
    transform: [{ rotate: '270deg' }],
  },
  iconSearch: {
    width: pxToPercentage(54),
    height: pxToPercentage(54),
  },
  viewTitle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
}));
