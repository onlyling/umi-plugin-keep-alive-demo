import React from 'react';
import { KeepAlive } from 'umi';

import PageLayout from '@/layouts/page-layout/page-layout';

const ContributeManage: React.FC = () => {
  return (
    <PageLayout>
      <p>contribute-manage</p>
    </PageLayout>
  );
};

export default function ContributeManageKeepAlive() {
  return (
    <KeepAlive name="/system/contribute-manage" saveScrollPosition="screen">
      <ContributeManage />
    </KeepAlive>
  );
}
