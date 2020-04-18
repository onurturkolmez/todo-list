import { RouteComponentProps } from 'react-router-dom';
import { IInitialState } from '../../Interfaces/States';
import { setInitUrl } from '../../actions/auth';
import { connect, ConnectedProps } from 'react-redux';

const mapStateToProps = ({ auth }: IInitialState) => ({ auth });

const mapDispatchToProps = (dispatch: any) => {
  return {
    setInitUrl: (url: string) => {
      dispatch(setInitUrl(url))
    }
  }
}

export const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

export type Props = RouteComponentProps & PropsFromRedux