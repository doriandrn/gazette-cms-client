<template lang="pug">
main#install
  h1 Install
  p {{ $t('install.ty') }}
  frm(
      v-if= "forms"
      name= "Language Select"
      :fieldsets = "forms.selectInstallLang.fieldsets"
      @submit = "($i18n.locale = $event.value)"
    )

</template>

<script>
import frm from 'c/form'

export default {
  template: 'install',
  components: {
    frm
  },
  data () {
    const installLangFieldsets = [{
      legend: this.$t('install.langSelect'),
      fields: {
        installLang: {
          type: 'select',
          options: [this.locales]
        }
      }
    }]

    return {
      forms: {
        selectInstallLang: { fieldsets: installLangFieldsets }
      },
      config: {
        admin: {
          name: '',
          avatar: '',
          email: ''
        },
        siteInfo: {
          name: '',
          description: '',
          logo: '',
          lang: ''
        },
        audience: {
          languages: []
        },
        auth: {
          socialClientIDs: {
            facebook: '',
            google: '',
            auth0: '',
            github: {
              id: '',
              secret: ''
            }
          }
        }
      }
    }
  }
}
</script>
