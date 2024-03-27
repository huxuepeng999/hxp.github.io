import { useEffect, useLayoutEffect, useState } from 'react';

function Foo2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('res===1', count);
  }, []);

  useLayoutEffect(() => {
    console.log('res===2', count);
  }, []);
}

export default Foo2;
