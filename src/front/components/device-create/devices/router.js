import React from 'react';
import { TextField, DatePicker, Checkbox } from 'material-ui';
import styles from '../styles';
import labels from '../labels';

export const Router1 = props => (
  <div>
    {labels.router1.text.map((field, i) => (
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
    {labels.router1.date.map((field, i) => (
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
    {labels.router1.check.map((field, i) => (
      <Checkbox
        key={'check-' + field + '-' + String(i)}
        onClick={e => props.handleChange(e, null, field)}
        checked={props.formData ? props.formData[field] : false}
        label={field}
        iconStyle={styles.checkbox}
        labelStyle={styles.checkboxLabel}
      />
    ))}
  </div>
);
