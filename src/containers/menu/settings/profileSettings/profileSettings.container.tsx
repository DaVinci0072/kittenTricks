import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { User } from '../../../../core/model';
import { ProfileSettings } from './profileSettings.component';
import { GlobalState } from '../../../../store';
import { connect } from 'react-redux';
import { UserService } from '../../../../service';

interface StateProps {
  user: User;
}

const mapStateToProps = (state: GlobalState) => ({
  user: state.user.user,
});

type ComponentProps = StateProps & NavigationScreenProps;

@connect(mapStateToProps)
export class ProfileSettingsContainer extends React.Component<ComponentProps> {

  private onUploadPhotoButtonPress = () => {
  };

  private onButtonPress = () => {
    this.props.navigation.goBack();
  };

  public render(): React.ReactNode {
    return (
      <ProfileSettings
        profile={this.props.user}
        onUploadPhotoButtonPress={this.onUploadPhotoButtonPress}
        onButtonPress={this.onButtonPress}
      />
    );
  }
}