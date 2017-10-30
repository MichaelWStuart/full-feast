import React from 'react';
import { TextField, DatePicker } from 'material-ui';
import styles from '../styles';
import labels from '../labels';

export const Printer1 = props => (
  <div>
    {labels.printer1.text.map((field, i) => (
      <TextField
        key={'text-' + field + '-' + String(i)}
        onChange={e => props.handleChange(e, null, field)}
        value={props.formData ? props.formData[field] : ''}
        floatingLabelText={field}
        floatingLabelStyle={styles.floatingLabel}
        underlineFocusStyle={styles.inputFocused}
        style={styles.input}
      />
    ))}
    {labels.printer1.date.map((field, i) => (
      <DatePicker
        key={'date-' + field + '-' + String(i)}
        onChange={(e, date) => props.handleChange(e, date, field)}
        value={props.formData ? props.formData[field] : {}}
        floatingLabelText={field}
        underlineFocusStyle={styles.inputFocused}
        floatingLabelStyle={styles.floatingLabel}
        style={styles.input}
      />
    ))}
  </div>
);
