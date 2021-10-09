import React, { FC, ReactNode, useState } from 'react';
import cn from 'classnames';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Collapse from '@material-ui/core/Collapse';
import ArrowDropUpRounded from '@material-ui/icons/ArrowDropUpRounded';
import ArrowDropDownRounded from '@material-ui/icons/ArrowDropDownRounded';

import useStyles from './useStyles';

type SidebarSectionProps = {
  header: ReactNode;
  withDivider?: boolean;
  collapsedHeight?: string | number;
  timeout?: number | 'auto';
  disableSpacing?: boolean;
};

const SidebarSection: FC<SidebarSectionProps> = ({
  children,
  header,
  withDivider,
  collapsedHeight,
  timeout,
  disableSpacing,
}) => {
  const classes = useStyles();

  const [isExpanded, setIsExpanded] = useState(false);

  const ExpandableContent = (
    <>
      <Collapse in={isExpanded} collapsedHeight={collapsedHeight} timeout={timeout}>
        {children}
      </Collapse>
      <Grid container justify="center">
        {isExpanded ? (
          <Button
            className={classes.expandButton}
            endIcon={<ArrowDropUpRounded />}
            disableRipple
            onClick={() => setIsExpanded(false)}
          >
            Свернуть
          </Button>
        ) : (
          <Button
            className={classes.expandButton}
            endIcon={<ArrowDropDownRounded />}
            disableRipple
            onClick={() => setIsExpanded(true)}
          >
            Развернуть
          </Button>
        )}
      </Grid>
    </>
  );

  const Content = collapsedHeight ? ExpandableContent : children;

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
        className={cn(
          classes.cardContent,
          { [classes.cardContentDivided]: withDivider },
          { [classes.disableSpacing]: disableSpacing },
        )}
      >
        {Content}
      </CardContent>
    </Card>
  );
};

export default SidebarSection;
