import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SolidCircle from 'material-ui/svg-icons/image/brightness-1';
import { Step, Stepper, StepLabel } from 'material-ui';

const muiTheme = getMuiTheme({ stepper: { iconColor: '#0099D4' } });

const StepperComponent = (props) => {
  const color = i => (i + 1 === props.step ? '#0099D4' : 'grey');
  return (
    <div
      style={{
        width: '20%',
        paddingLeft: '26%',
        position: 'relative',
      }}
    >
      {props.steps > 1 && (
        <MuiThemeProvider muiTheme={muiTheme}>
          <Stepper activeStep={2} connector={null}>
            {[...Array(props.steps)].map((v, i) => (
              <Step key={Math.random()}>
                <StepLabel icon={<SolidCircle color={color(i)} />} />
              </Step>
            ))}
          </Stepper>
        </MuiThemeProvider>
      )}
    </div>
  );
};

export default StepperComponent;
