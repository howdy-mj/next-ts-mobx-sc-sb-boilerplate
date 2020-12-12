import { observer } from 'mobx-react';

import countStore from '@store/count';
import { Button } from '@components/Button';
import styled from 'styled-components';

const CountContainer: React.FC = observer(() => {
  return (
    <div style={{ padding: '50px' }}>
      <div>
        <Title>Count</Title>
        <div>number: {countStore.number}</div>
        <Button label="plus" primary onClick={() => countStore.increase()} />
        <Button label="minus" onClick={() => countStore.decrease()} />
      </div>
    </div>
  );
});

export default CountContainer;

const Title = styled.h1`
  color: ${(props) => props.theme.color.secondary};
`;
