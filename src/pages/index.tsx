import React, { useState } from 'react';
import { Button } from 'antd';
import { Link, KeepAlive } from 'umi';

import PageLayout from '@/layouts/page-layout/page-layout';
import styles from './index.less';

const Home: React.FC = () => {
  const [ccc, setCCC] = useState(0);

  return (
    <PageLayout>
      <h1 className={styles.title}>Page index</h1>

      <p>
        <Button
          type="primary"
          onClick={() => {
            setCCC((c) => c + 1);
          }}
        >
          数据+1
        </Button>
      </p>

      <p>{ccc}</p>

      <div>
        <Link to="/classroom">Go Classroom</Link>
      </div>
    </PageLayout>
  );
};

// export default Home;

export default function HomeKeepAlive() {
  return (
    <KeepAlive name="/" saveScrollPosition="screen">
      <Home />
    </KeepAlive>
  );
}
