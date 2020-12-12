import { observer } from 'mobx-react';

import countStore from '@store/count';
import { Button } from '@components/Button';

const CountContainer: React.FC = observer(() => {
  return (
    <div style={{ padding: '50px' }}>
      <div>
        <h1>Count</h1>
        <div>number: {countStore.number}</div>
        <Button label="plus" primary onClick={() => countStore.increase()} />
        <Button label="minus" onClick={() => countStore.decrease()} />
      </div>
    </div>
  );
});

export default CountContainer;
