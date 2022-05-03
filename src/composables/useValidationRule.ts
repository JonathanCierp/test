import { useI18n } from 'vue-i18n'

export default () => {
  const { t } = useI18n()

  /**
   * If the value is not empty, then it must be a valid email address, otherwise, return an error
   * message
   * @param {string} v - string - the value of the field
   */
  const emailRule = (v: string) => !v || /.+@.+\..+/.test(v.toLowerCase()) || t('message.composables.useValidationRules.emailRule')

  /**
   * It returns a validation message if the value is not truthy
   * @param {any} v - any - the value of the field
   */
  const requiredRule = (v: any) => !!v || t('message.composables.useValidationRules.requiredRule')

  return {
    emailRule,
    requiredRule,
  }
}
