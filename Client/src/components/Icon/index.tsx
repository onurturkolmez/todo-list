import { Icon as IconKit } from 'react-icons-kit';
import React from 'react';

const IconComponent = ({ type }: any) => React.lazy(() => import(`react-icons-kit/ikons/${type}`));

interface Props {
  type: string
  size?: any
}

const Icon = ({
  type,
  size
}: Props) => {
  return (
    <IconKit icon={IconComponent} />
  )
}

export default Icon;
