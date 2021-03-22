import React from 'react';
import { KeepAlive } from 'umi';

import PageLayout from '@/layouts/page-layout/page-layout';

const TestPaperManagement: React.FC = () => {
  return (
    <PageLayout>
      <p>test-paper-management</p>
    </PageLayout>
  );
};

export default function TestPaperManagementKeepAlive() {
  return (
    <KeepAlive name="/examination-center/test-paper-management" saveScrollPosition="screen">
      <TestPaperManagement />
    </KeepAlive>
  );
}
