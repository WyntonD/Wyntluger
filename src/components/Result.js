import React from 'react';
import { Result } from 'antd';

function ResultForm() {
  return (
    <div>
      <Result
        status="success"
        title="Successfully Ordered!"
        subTitle="You will receive your payment request via CashApp or Zelle alongside your requested beats within 1 business day via wyntlugerbeats@gmail.com, please wait."
      />,
    </div>
  );
}

export default ResultForm;