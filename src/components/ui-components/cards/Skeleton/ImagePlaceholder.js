import React from 'react';

// material-ui
import Skeleton from '@mui/material/Skeleton';

//-----------------------|| SKELETON IMAGE CARD ||-----------------------//

const ImagePlaceholder = ({ ...others }) => {
    return <Skeleton variant="rect" {...others} animation="wave" />;
};

export default ImagePlaceholder;
