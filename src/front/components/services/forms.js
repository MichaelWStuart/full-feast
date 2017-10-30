import React from 'react';
import { TextField, Checkbox, DatePicker } from 'material-ui';
import styles from '../../styles';
import labels from './labels';

export const DataFile = props => (
  <div>
    {labels['data-file'].text.map((field, i) => (
      <TextField
        key={String(i) + field}
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

export const DatabaseProvider = props => (
  <div>
    {labels['database-provider'].text.map((field, i) => (
      <TextField
        key={String(i) + field}
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

export const EmailProvider = props => (
  <div>
    {labels['email-provider'].text.map((field, i) => (
      <TextField
        key={String(i) + field}
        onChange={e => props.handleChange(e, null, field)}
        value={props.formData ? props.formData[field] : ''}
        floatingLabelText={field}
        floatingLabelStyle={styles.floatingLabel}
        underlineFocusStyle={styles.inputFocused}
        style={styles.input}
      />
    ))}
    {labels['email-provider'].check.map((field, i) => (
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

export const ServiceHistory = props => (
  <div>
    {labels['service-history'].date.map((field, i) => (
      <DatePicker
        key={String(i) + field}
        onChange={(e, date) => props.handleChange(e, date, field)}
        value={props.formData ? props.formData[field] : {}}
        floatingLabelText={field}
        underlineFocusStyle={styles.inputFocused}
        floatingLabelStyle={styles.floatingLabel}
        style={styles.input}
      />
    ))}
    {labels['service-history'].text.map((field, i) => (
      <TextField
        key={String(i) + field}
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

export const Isp = props => (
  <div>
    {labels['isp'].text.map((field, i) => (
      <TextField
        key={String(i) + field}
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

export const SoftwareKey = props => (
  <div>
    {labels['software-key'].text.map((field, i) => (
      <TextField
        key={String(i) + field}
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

export const SupportHistory = props => (
  <div>
    {labels['support-history'].date.map((field, i) => (
      <DatePicker
        key={String(i) + field}
        onChange={(e, date) => props.handleChange(e, date, field)}
        value={props.formData ? props.formData[field] : {}}
        floatingLabelText={field}
        underlineFocusStyle={styles.inputFocused}
        floatingLabelStyle={styles.floatingLabel}
        style={styles.input}
      />
    ))}
    {labels['support-history'].text.map((field, i) => (
      <TextField
        key={String(i) + field}
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

export const SupportVendor = props => (
  <div>
    {labels['support-vendor'].text.map((field, i) => (
      <TextField
        key={String(i) + field}
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

export const Upgrade = props => (
  <div>
    {labels['upgrade'].date.map((field, i) => (
      <DatePicker
        key={String(i) + field}
        onChange={(e, date) => props.handleChange(e, date, field)}
        value={props.formData ? props.formData[field] : {}}
        floatingLabelText={field}
        underlineFocusStyle={styles.inputFocused}
        floatingLabelStyle={styles.floatingLabel}
        style={styles.input}
      />
    ))}

    {labels['upgrade'].text.map((field, i) => (
      <TextField
        key={String(i) + field}
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

export const Warranty = props => (
  <div>
    {labels['warranty'].text.map((field, i) => (
      <TextField
        key={String(i) + field}
        onChange={e => props.handleChange(e, null, field)}
        value={props.formData ? props.formData[field] : ''}
        floatingLabelText={field}
        floatingLabelStyle={styles.floatingLabel}
        underlineFocusStyle={styles.inputFocused}
        style={styles.input}
      />
    ))}
    {labels['warranty'].date.map((field, i) => (
      <DatePicker
        key={String(i) + field}
        onChange={(e, date) => props.handleChange(e, date, field)}
        value={props.formData ? props.formData[field] : {}}
        floatingLabelText={field}
        underlineFocusStyle={styles.inputFocused}
        floatingLabelStyle={styles.floatingLabel}
        style={styles.input}
      />
    ))}
    {labels['warranty'].check.map((field, i) => (
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

export const WebHostProvider = props => (
  <div>
    {labels['web-host-provider'].text.map((field, i) => (
      <TextField
        key={String(i) + field}
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
