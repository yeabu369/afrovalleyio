import { Box, Grid, SimpleGrid, Skeleton, Text, clsx, Group} from '@mantine/core'
import useStyles from './Market.styles';
import { useState } from 'react';
import PricePicker from '../PricePicker/PricePicker';
import CropGradingPicker from '../CropGradingPicker/CropGradingPicker';
import CropTypePicker from '../CropTypePicker/CropTypePicker';

import OrderCards from '../OrderCards/OrderCards';

const Market = () => {
  const [loading, setLoading] = useState(false);
  const { classes, cx } = useStyles();

  return (
    <SimpleGrid cols={2} spacing={0} className={clsx(classes.border, classes.hScreen)}>
      <Box p={20} className={classes.flex}>
        <Skeleton className={cx(classes.hFull)} visible={loading}>
          <Grid>
            <Grid.Col span={12}>
              <Group grow className={classes.filter}>
                <PricePicker />
                <CropGradingPicker />
                <CropTypePicker />
              </Group>
            </Grid.Col>
            <Grid.Col span={12}>
              <Text style={{ fontFamily: "Greycliff CF, sans-serif"}} size="sm">
                <Text component="span" weight="bold">16</Text>{" "}
                proposals in area of map
              </Text>
            </Grid.Col>
            <Grid.Col span={12}>
              {/* Coffee Order list */}
              <OrderCards />
            </Grid.Col>
          </Grid>
        </Skeleton>
      </Box>
      <Box className={classes.map}>
        <Skeleton className={cx(classes.hFull)} />
      </Box>
    </SimpleGrid>
  )
}

export default Market