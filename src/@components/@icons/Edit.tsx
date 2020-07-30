import React from 'react';

import SvgIcon from '@material-ui/core/SvgIcon';

export default function Edit(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 16 16">
      <title>Edit</title>
      <path d="M15.49,9.55a.52.52,0,0,0-.52.52v3.68a1.14,1.14,0,0,1-1.14,1.15H2.17A1.14,1.14,0,0,1,1,13.75V2.93A1.14,1.14,0,0,1,2.17,1.79H5.86a.52.52,0,0,0,.52-.52A.52.52,0,0,0,5.86.76H2.17A2.18,2.18,0,0,0,0,2.93V13.75a2.18,2.18,0,0,0,2.17,2.18H13.83A2.18,2.18,0,0,0,16,13.75V10.07A.51.51,0,0,0,15.49,9.55Z" />
      <path d="M6.59,7.47,12.65,1.4l2,2L8.55,9.42Z" />
      <path d="M5.6,10.41l2.16-.6L6.2,8.25Z" />
      <path d="M15.15.38a1,1,0,0,0-1.47,0l-.44.44,2,2,.44-.44a1.05,1.05,0,0,0,0-1.47Z" />
    </SvgIcon>
  );
}