import React from 'react';
import { TextField, Checkbox, DatePicker } from 'material-ui';
import styles from '../styles';
import labels from '../labels';

export const Server1 = props => (
  <div>
    {labels.computer1.text.map((field, i) => (
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
  </div>
);

export const Server2 = props => (
  <div>
    {labels.computer2.text.map((field, i) => (
      <TextField
        key={'text-' + field + '-' + String(i)}
        onChange={e => props.handleChange(e, null, field)}
        value={props.formData ? props.formData[field] : ''}
        floatingLabelStyle={styles.floatingLabel}
        floatingLabelText={field}
        underlineFocusStyle={styles.inputFocused}
        style={styles.input}
      />
    ))}
    {labels.computer2.check.map((field, i) => (
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

export const Server3 = props => (
  <div>
    {labels.computer3.check.map((field, i) => (
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

export const Server4 = props => (
  <div>
    {labels.computer4.text.map((field, i) => (
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
    {labels.computer4.date.map((field, i) => (
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

export const Server5 = props => (
  <div>
    {labels.computer5.text.map((field, i) => (
      <TextField
        key={'text-' + field + '-' + String(i)}
        onChange={e => props.handleChange(e, null, field)}
        value={props.formData ? props.formData[field] : ''}
        floatingLabelText={field}
        underlineFocusStyle={styles.inputFocused}
        floatingLabelStyle={styles.floatingLabel}
        style={styles.input}
      />
    ))}
  </div>
);

export const Server6 = props => (
  <div>
    {labels.computer6.text.map((field, i) => (
      <TextField
        key={'text-' + field + '-' + String(i)}
        onChange={e => props.handleChange(e, null, field)}
        value={props.formData ? props.formData[field] : ''}
        floatingLabelText={field}
        underlineFocusStyle={styles.inputFocused}
        floatingLabelStyle={styles.floatingLabel}
        style={styles.input}
      />
    ))}
  </div>
);
