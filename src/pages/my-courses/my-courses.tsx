import React from 'react';
import { KeepAlive } from 'umi';

import PageLayout from '@/layouts/page-layout/page-layout';

/**
 * 我的课程 临时
 */
const MyCourses: React.FC = () => {
  return (
    <PageLayout>
      <p>my-courses</p>
    </PageLayout>
  );
};

export default function MyCoursesKeepAlive() {
  return (
    <KeepAlive name="/my-courses/list" saveScrollPosition="screen">
      <MyCourses />
    </KeepAlive>
  );
}
