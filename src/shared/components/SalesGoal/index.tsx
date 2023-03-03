import styles from './SalesGoal.module.scss'
/* import {
  CircularGaugeComponent,
  AxesDirective,
  AxisDirective,
  PointersDirective,
  PointerDirective,
  RangesDirective,
  RangeDirective,
} from '@syncfusion/ej2-react-circulargauge'; */

import {
  CircularGaugeComponent,
  AxesDirective,
  AxisDirective,
  PointersDirective,
  PointerDirective
} from '@syncfusion/ej2-react-circulargauge'

import {} from 'react-dom'

const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`

export const SalesGoal = () => {
  /* const { today } = useSelector((state) => state.dashboard.sales);
  const { salesGoal } = useSelector((state) => state.ui);

  const todaySales = useFormatPrice(today);
  const formartSalesGoal = useFormatPrice(salesGoal);

  const percentage = (today / salesGoal) * 100; */

  /* <div className={styles['sales-goal']}>
    <h3>Meta de vendas diária</h3>
  </div> */
  return (
    <div className="control-pane">
      <style>{SAMPLE_CSS}</style>
      <div className="control-section">
        <CircularGaugeComponent
          load={ReactDOM.load.bind(this)}
          id="gauge"
          background="transparent"
        >
          <AxesDirective>
            <AxisDirective
              radius="80%"
              startAngle={230}
              endAngle={130}
              majorTicks={{ offset: 5 }}
              lineStyle={{ width: 8, color: '#E0E0E0' }}
              minorTicks={{ offset: 5 }}
              labelStyle={{
                font: {
                  fontFamily: 'inherit'
                },
                offset: -1
              }}
            >
              <PointersDirective>
                <PointerDirective
                  value={60}
                  radius="60%"
                  pointerWidth={7}
                  color="#c06c84"
                  animation={{ enable: true, duration: 500 }}
                  cap={{
                    radius: 8,
                    color: '#c06c84',
                    border: { width: 0 }
                  }}
                  needleTail={{
                    length: '0%'
                  }}
                />
              </PointersDirective>
            </AxisDirective>
          </AxesDirective>
        </CircularGaugeComponent>
      </div>
    </div>
  )
}
