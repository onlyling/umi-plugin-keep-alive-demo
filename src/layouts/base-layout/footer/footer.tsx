import React from 'react';

import './footer.less';

const buildClassName = (s: string) => `scf-base-layout-footer${s}`;

/**
 * 基础布局页尾
 */
const BaseLayoutFooter: React.FC = () => {
  return (
    <div className={buildClassName('')}>
      <div className={buildClassName('_inner')}>4434</div>
    </div>
  );
};

export default BaseLayoutFooter;
