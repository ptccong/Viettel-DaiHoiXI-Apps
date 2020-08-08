import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { PressReleaseDetail } from './pressReleaseDetail.component';
import { PressRelease as PressReleaseModel } from '@src/core/models/pressRelease/pressRelease.model';
import { isTablet } from 'react-native-device-info';
import { PressReleaseDetailTablet } from './pressReleaseDetail.component.tablet';

export const PressReleaseDetailContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'PressReleaseDetailContainer';

  if (isTablet()) {
    return (
      <PressReleaseDetailTablet
        pressRelease={props.navigation.getParam('pressRelease') || new PressReleaseModel()}
      />
    );
  }

  return (
    <PressReleaseDetail
      pressRelease={props.navigation.getParam('pressRelease') || new PressReleaseModel()}
    />
  );
};
