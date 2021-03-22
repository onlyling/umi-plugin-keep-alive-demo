import React from 'react';
import { KeepAlive } from 'umi';

import PageLayout from '@/layouts/page-layout/page-layout';

const ExamManagement: React.FC = () => {
  return (
    <PageLayout>
      <p>exam-management</p>
    </PageLayout>
  );
};

export default function ExamManagementKeepAlive() {
  return (
    <KeepAlive name="/examination-center/exam-management" saveScrollPosition="screen">
      <ExamManagement />
    </KeepAlive>
  );
}
