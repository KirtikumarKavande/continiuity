[6:20 PM] Ravi Guhe, Shatakshi (Cognizant)
/* eslint-disable  jsx-a11y/no-autofocus */
import React, { useState } from 'react'
 
import { yupResolver } from '@hookform/resolvers/yup'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import {
  Box,
  FormControl,
  Button,
  Grid,
  FormLabel,
  MenuItem,
  Typography,
  FormControlLabel,
  Checkbox,
  ToggleButtonGroup,
  ToggleButton,
  FormHelperText,
} from '@mui/material'
import getConfig from 'next/config'
import { useTranslation } from 'next-i18next'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
 
import { ImagePath } from '@/components/common'
import { KiboTextBox, PasswordValidation, KiboSelect } from '@/components/common'
import { EmailVerifyDialog } from '@/components/dialogs'
import { CountryCode } from '@/lib/constants'
import { buildCreateCustomerB2bAccountParams } from '@/lib/helpers'
import { isPasswordValid } from '@/lib/helpers/validations/validations'
import type { CreateCustomerB2bAccountParams } from '@/lib/types'
 
import { useModalContext } from '@/context/ModalContext'
import { useCreateCustomerB2bAccountMutation, useAddB2bAccountAttributeMutation } from '@/hooks'
 
export interface RegisterAccountInputData {
  email: string
  firstName: string
  lastNameOrSurname: string
  password: string
}
 
export interface RegisterB2CAccountInputData {
  emailAddress: string
  firstName: string
  lastName: string
  password: string
  phoneNumber: string
  termsCheck: boolean
  accountType: string
 
  //address: {
  countryCode: string
  address1: string
  cityOrTown: string
  stateOrProvince: string
  postalOrZipCode: string
  //}
}
 
interface ContentProps {
  setAutoFocus?: boolean
  onRegisterNow: (formData: RegisterB2CAccountInputData, isBilling: boolean) => void
}
 
const styles = {
  formInput: {
    width: '100%',
    backgroundColor: '#fff',
    height: '44px',
    borderRadius: 0,
    border: '1px solid var(--Neutral-Area1, #E6E6E6)',
    background: 'var(--Shades-White, #FFF)',
  },
  checkBox: {
    padding: '0 0 0 16px',
  },
  termsNdcon: {
    color: '#000',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '20px',
  },
  accountTypeText: {
    fontSize: '11px',
    color: 'var(--Neutral-Subtext, #666)',
    fontWeight: 400,
    lineHeight: '16px',
    marginTop: '4px',
  },
  formLabel: {
    fontSize: '12px',
    marginBottom: '7px',
  },
  toggleButton: {
    textTransform: 'capitalize',
    fontSize: '14px',
    borderRadius: 0,
    color: 'var(--Shades-White, #FFF)',
    boxShadow: 'none',
    border: '1px solid var(--Neutral-Subtext, #666)',
    background: 'var(--Shades-Black, #333)',
  },
  button: {
    padding: '17.5px 16px',
    width: '100%',
    borderRadius: 0,
    height: '50px',
    boxShadow: 'none',
  },
  CheckBoxLabel: {
    '& .MuiFormControlLabel-label': {
      // marginTop: '16px',
      color: 'var(--Shades-Black, #333)',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '21px',
    },
  },
  CheckBoxCustomLabel: {
    '& .MuiFormControlLabel-label': {
      marginTop: '16px',
      color: 'var(--Shades-Black, #333)',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '21px',
    },
  },
  requireField: {
    color: 'var(--Extra-Red, #E62828)',
    fontSize: '11px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '16px',
  },
}
 
const AccountType = {
  BA: 'ba',
  PA: 'pa',
}
 
const Content = (props: ContentProps) => {
  const { publicRuntimeConfig } = getConfig()
  const { setAutoFocus = true, onRegisterNow } = props
  const countries = publicRuntimeConfig.countries
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { t } = useTranslation('common')
  const { showModal, closeModal } = useModalContext()
  const { createCustomerB2bAccount } = useCreateCustomerB2bAccountMutation()
  const { createCustomerB2bAccountAttribute } = useAddB2bAccountAttributeMutation()
  const [saveAsShippingBillingCheckbox, setSaveAsShippingBillingCheckbox] = useState<boolean>(true)
 
  const useDetailsSchema = () => {
    return yup.object().shape({
      emailAddress: yup.string().email().required(t('this-field-is-required')),
      firstName: yup.string().required(t('this-field-is-required')),
      lastName: yup.string().required(t('this-field-is-required')),
      accountType: yup.string().required(t('this-field-is-required')),
      phoneNumber: yup.string().when('accountType', {
        is: AccountType?.PA,
        then: yup.string().required(t('this-field-is-required')),
      }),
      password: yup.string().when('accountType', {
        is: AccountType?.PA,
        then: yup
          .string()
          .required(t('this-field-is-required'))
          .test((value = '') => {
            return isPasswordValid(value)
          }),
      }),
      companyOrOrganization: yup.string().when('accountType', {
        is: AccountType?.BA,
        then: yup.string().required(t('this-field-is-required')),
      }),
      termsCheck: yup
        .boolean()
        .oneOf([true], 'Required terms of use')
        .required('Required terms of use'),
      countryCode: yup.string().when('accountType', {
        is: AccountType?.PA,
        then: yup.string().required(t('this-field-is-required')),
      }),
      address1: yup.string().when('accountType', {
        is: AccountType?.PA,
        then: yup.string().required(t('this-field-is-required')),
      }),
      cityOrTown: yup.string().when('accountType', {
        is: AccountType?.PA,
        then: yup.string().required(t('this-field-is-required')),
      }),
      stateOrProvince: yup.string().when(['accountType'], {
        is: AccountType?.PA,
        then: yup.string().when(['countryCode'], {
          is: CountryCode.US || CountryCode.CA,
          then: yup.string().required(t('this-field-is-required')),
        }),
      }),
      postalOrZipCode: yup.string().when(['accountType'], {
        is: AccountType?.PA,
        then: yup.string().when(['countryCode'], {
          is: CountryCode.US || CountryCode.CA,
          then: yup.string().required(t('this-field-is-required')),
        }),
      }),
    })
  }
 
  const registerAccountFormData = {
    emailAddress: '',
    firstName: '',
    lastName: '',
    password: '',
    accountType: 'ba',
    companyOrOrganization: '',
    phoneNumber: '',
    termsCheck: false,
    countryCode: '',
    address1: '',
    cityOrTown: '',
    stateOrProvince: '',
    postalOrZipCode: '',
  }
 
  const {
    formState: { errors, isValid },
    handleSubmit,
    getValues,
    setValue,
    control,
    watch,
  } = useForm({
    mode: 'all',
    reValidateMode: 'onBlur',
    defaultValues: registerAccountFormData,
    resolver: yupResolver(useDetailsSchema()),
    shouldFocusError: true,
  })
  const userEnteredPassword = watch(['password']).join('')
  const selectedAccountType = watch(['accountType']).join('')
 
  const handleCreateAccount = async (registerAccountData: RegisterB2CAccountInputData) => {
    onRegisterNow(registerAccountData, saveAsShippingBillingCheckbox)
  }
 
  const handleB2BCreateAccount = async (formValues: CreateCustomerB2bAccountParams) => {
    const variables = buildCreateCustomerB2bAccountParams(formValues)
    await createCustomerB2bAccount.mutateAsync(variables, {
      onSuccess: (account: any) => {
        closeModal()
        showModal({
          Component: EmailVerifyDialog,
          props: {
            title: 'Verify your email address',
            contentText:
              'Please open the link in the verificatiom email to complete your registration',
          },
        })
        console.log(account)
        createCustomerB2bAccountAttribute.mutateAsync({
          accountId: account?.id,
          customerAttributeInput: {
            fullyQualifiedName: 'Tenant~password-change-datetime',
            values: [`${new Date().getTime()}`],
          },
        })
      },
    })
  }
 
  const generateRegionOptions = () =>
    countries?.map((country: string) => {
      return (
        <MenuItem key={country} value={country}>
          {country}
        </MenuItem>
      )
    })
 
  const at1 = ['pa', 'ba']
  const generateSelectOptions = () =>
    at1?.map((item: string) => {
      return (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      )
    })
  const formB2CAddress = () => {
    return (
      <Box>
        <Grid container spacing={1}>
          <Grid item md={12} xs={12} mb={4}>
            <Controller
              name="phoneNumber"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <KiboTextBox
                  label={t('phone-number-home')}
                  placeholder={t('12345678')}
                  value={field.value}
                  required
                  sx={{ ...styles.formInput }}
                  onBlur={field.onBlur}
                  onChange={(_name, value) => field.onChange(value)}
                  error={!!errors?.phoneNumber}
                  helperText={errors?.phoneNumber?.message}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item md={12} xs={12} mb={4}>
            <Controller
              name="countryCode"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <KiboSelect
                    name="country-Code"
                    label={t('region')}
                    value={field.value}
                    sx={{ ...styles.formInput }}
                    placeholder="Select Region"
                    error={!!errors?.countryCode}
                    helperText={errors?.countryCode?.message}
                    onChange={(_name, value) => field.onChange(value)}
                    onBlur={field.onBlur}
                    required={true}
                  >
                    {generateRegionOptions()}
                  </KiboSelect>
                </div>
              )}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} mb={4}>
          <Controller
            name="address1"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <KiboTextBox
                {...field}
                value={field.value || ''}
                label={t('address')}
                placeholder={t('street')}
                ref={null}
                sx={{ ...styles.formInput }}
                error={!!errors?.address1}
                helperText={errors?.address1?.message}
                onChange={(_name: string, value: string) => field.onChange(value)}
                onBlur={field.onBlur}
                required={true}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} mb={4}>
          <Controller
            name="cityOrTown"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <KiboTextBox
                {...field}
                value={field.value || ''}
                label={t('city-or-town')}
                placeholder={t('city-or-town')}
                ref={null}
                sx={{ ...styles.formInput }}
                error={!!errors?.cityOrTown}
                helperText={errors?.cityOrTown?.message}
                onChange={(_name: string, value: string) => field.onChange(value)}
                onBlur={field.onBlur}
                required={true}
              />
            )}
          />
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Controller
              name="postalOrZipCode"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <KiboTextBox
                  {...field}
                  value={field.value || ''}
                  label={t('zip-code')}
                  placeholder={t('zip-code')}
                  ref={null}
                  sx={{ ...styles.formInput }}
                  error={!!errors?.postalOrZipCode}
                  helperText={errors?.postalOrZipCode?.message}
                  onChange={(_name: string, value: string) => field.onChange(value)}
                  onBlur={field.onBlur}
                  required={true}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              name="stateOrProvince"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <KiboTextBox
                  {...field}
                  value={field.value || ''}
                  label={t('state-or-province')}
                  ref={null}
                  sx={{ ...styles.formInput }}
                  error={!!errors?.stateOrProvince}
                  helperText={errors?.stateOrProvince?.message}
                  onChange={(_name: string, value: string) => field.onChange(value)}
                  onBlur={field.onBlur}
                  required={true}
                />
              )}
            />
          </Grid>
        </Grid>
        <FormControlLabel
          sx={{ ...styles.CheckBoxLabel }}
          label={t('shipping-billing-addresses-are-same')}
          control={
            <Checkbox
              // sx={{ marginLeft: '0.5rem' }}
              inputProps={{
                'aria-label': t('shipping-billing-addresses-are-same'),
              }}
              checked={saveAsShippingBillingCheckbox}
              onChange={() => setSaveAsShippingBillingCheckbox(!saveAsShippingBillingCheckbox)}
            />
          }
        />
        <Grid container>
          <Grid item md={12} xs={12} mt={4} mb={4}>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <KiboTextBox
                  value={field.value}
                  label={t('password')}
                  placeholder={t('password')}
                  required
                  sx={{ ...styles.formInput }}
                  onBlur={field.onBlur}
                  onChange={(_name, value) => {
                    field.onChange(value)
                  }}
                  error={!!errors?.password}
                  helperText={errors?.password?.message}
                  type={showPassword ? 'text' : 'password'}
                  icon={
                    showPassword ? (
                      <Box component="img" src={ImagePath.EyeIconClose} alt="omron logo"></Box>
                    ) : (
                      <Box component="img" src={ImagePath.EyeIconOpen} alt="omron logo"></Box>
                    )
                  }
                  onIconClick={() => setShowPassword(!showPassword)}
                />
              )}
            />
            {userEnteredPassword && (
              <Box sx={{ marginBottom: '2rem' }}>
                <PasswordValidation password={userEnteredPassword} />
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    )
  }
 
  const handleChange = (event: React.MouseEvent<HTMLElement>, newAccountType: string) => {
    event.preventDefault()
    if (newAccountType != null) {
      setValue('accountType', newAccountType)
    }
  }
 
  return (
    <Box>
      <FormControl sx={{ width: '100%' }}>
[6:21 PM] Ravi Guhe, Shatakshi (Cognizant)
 <Grid container spacing={2}>
          <Grid item md={6} xs={12} mb={4}>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <KiboTextBox
                  value={field.value}
                  label={t('first-name')}
                  placeholder={t('first-name')}
                  required
                  sx={{ ...styles.formInput }}
                  onBlur={field.onBlur}
                  onChange={(_name, value) => field.onChange(value)}
                  error={!!errors?.firstName}
                  helperText={errors?.firstName?.message}
                />
              )}
            />
          </Grid>
          <Grid item md={6} xs={12} mb={4}>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <KiboTextBox
                  value={field.value}
                  label={t('last-name-or-sur-name')}
                  placeholder={t('last-name-or-sur-name')}
                  required
                  sx={{ ...styles.formInput }}
                  onBlur={field.onBlur}
                  onChange={(_name, value) => field.onChange(value)}
                  error={!!errors?.lastName}
                  helperText={errors?.lastName?.message}
                />
              )}
            />
          </Grid>
        </Grid>
        <FormLabel sx={{ ...styles.formLabel }}>
          Select Account Type <span style={{ color: '#E62828' }}>*</span>
        </FormLabel>
        <Grid container spacing={1}>
          <Grid item md={12} xs={12}>
            <Controller
              name="accountType"
              control={control}
              render={(field) => (
                <ToggleButtonGroup
                  // sx={{ ...styles.button }}
                  exclusive
                  onChange={handleChange}
                  value={selectedAccountType}
                  fullWidth
                  aria-label="account-type"
                >
                  <ToggleButton
                    disabled={selectedAccountType == 'ba'}
                    sx={{ ...styles.toggleButton }}
                    value="ba"
                  >
                    {' '}
                    {t('business-account')}
                  </ToggleButton>
                  <ToggleButton
                    disabled={selectedAccountType == 'pa'}
                    sx={{ ...styles.toggleButton }}
                    value="pa"
                  >
                    {t('personal-account')}
                  </ToggleButton>
                </ToggleButtonGroup>
              )}
            />
            {/* <Controller
              name="accountType"
              control={control}
              defaultValue="ba"
              render={({ field }) => (
                <div>
                  <KiboSelect
                    name="account-type1"
                    label=""
                    value={field.value}
                    error={!!errors?.accountType}
                    helperText={errors?.accountType?.message}
                    onChange={(_name, value) => field.onChange(value)}
                    onBlur={field.onBlur}
                    required={true}
                  >
                    {generateSelectOptions()}
                  </KiboSelect>
                </div>
              )}
            /> */}
            {/* <ToggleButtonGroup
              sx={{ ...styles.button }}
              value={accountType}
              exclusive
              fullWidth
              onChange={handleChange}
              aria-label="account-type"
            >
              <ToggleButton disabled={accountType == 'ba'} sx={{ ...styles.toggleButton }} value="ba">
                {' '}
                {t('business-account')}
              </ToggleButton>
              <ToggleButton disabled={accountType == 'pa'}  sx={{ ...styles.toggleButton }} value="pa">
                {t('personal-account')}
              </ToggleButton>
            </ToggleButtonGroup> */}
          </Grid>
        </Grid>
        <FormLabel sx={{ ...styles.accountTypeText, marginBottom: '32px' }}>
          Provide your account number to receive personalized pricing and service
        </FormLabel>
        <Grid container spacing={1}>
          <Grid item md={12} xs={12} mb={4}>
            <Controller
              name="emailAddress"
              control={control}
              render={({ field }) => (
                <KiboTextBox
                  name="emailAddress"
                  value={field.value}
                  label={selectedAccountType == 'pa' ? t('email') : t('business-email')}
                  placeholder={
                    selectedAccountType == 'pa' ? t('name@personal.com') : t('name@omron.com')
                  }
                  required
                  // autoFocus={setAutoFocus}
                  sx={{ ...styles.formInput }}
                  onBlur={field.onBlur}
                  onChange={(_name, value) => field.onChange(value)}
                  error={!!errors?.emailAddress}
                  helperText={errors?.emailAddress?.message}
                />
              )}
            />
          </Grid>
        </Grid>
        {selectedAccountType == 'ba' && (
          <Box>
            <Grid item xs={12} mb={4}>
              <Controller
                name="companyOrOrganization"
                control={control}
                render={({ field }) => (
                  <KiboTextBox
                    {...field}
                    value={field.value || ''}
                    label={t('company-name')}
                    ref={null}
                    error={!!errors?.companyOrOrganization}
                    helperText={errors?.companyOrOrganization?.message}
                    onChange={(_name: string, value: string) => field.onChange(value)}
                    onBlur={field.onBlur}
                    required={true}
                    sx={{ ...styles.formInput }}
                  />
                )}
              />
            </Grid>
          </Box>
        )}
        {selectedAccountType == 'pa' && formB2CAddress()}
        <Typography sx={{ ...styles.requireField }}>* required fields</Typography>
        <Controller
          control={control}
          name={`termsCheck`}
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <FormControlLabel
              control={
                <Checkbox
                  id="termsCheck"
                  name="termsCheck"
                  // required
                  checked={value}
                  onChange={onChange}
                />
              }
              sx={{ ...styles.CheckBoxCustomLabel }}
              label="I agree to all the sentences included in the terms of use and privacy policy."
            />
          )}
        />
        <FormHelperText error>{errors.termsCheck ? errors.termsCheck.message : ' '}</FormHelperText>
 
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                border: '1px solid var(--Neutral-Area1, #E6E6E6)',
                background: 'var(--Shades-White, #FFF)',
              }}
            >
              <Button sx={{ ...styles.button, color: 'var(--Shades-Black, #333)' }} onClick={closeModal}>
                {t('cancel')}
              </Button>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                border: '1px solid var(--Primary-500, #005EB8)',
                background: 'var(--Primary-500, #005EB8)',
              }}
            >
              <Button
                sx={{ ...styles.button, color: 'var(--Shades-White, #FFF) !important' }}
                disabled={!isValid}
                onClick={() =>
                  selectedAccountType == 'pa'
                    ? handleSubmit(handleCreateAccount)()
                    : handleSubmit(handleB2BCreateAccount)()
                }
              >
                {t('create-account')}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  )
}
 
export default Content
 