import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import useStyles from './useStyles';

type SidebarSectionProps = {
  header: ReactNode;
  divideContent?: boolean;
};

const SidebarSection: FC<SidebarSectionProps> = ({ children, header, divideContent }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        title={
          <Typography className={classes.headerText} variant="body1" component="h3">
            {header}
          </Typography>
        }
        disableTypography
      />
      <CardContent
        className={cn(classes.cardContent, { [classes.cardContentDivided]: divideContent })}
      >
        {children}
      </CardContent>
    </Card>
  );
};

export default SidebarSection;
