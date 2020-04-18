import { IInitialState } from '../../Interfaces/States';
import { connect, ConnectedProps } from 'react-redux';

const mapStateToProps = ({ auth }: IInitialState) => ({ auth });

export const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

export type Props = PropsFromRedux