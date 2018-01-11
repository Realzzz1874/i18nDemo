<template lang="html">
  <div>
    <el-card class="box-card" style="margin-top:40px;">
      <div slot="header" class="clearfix">
        <span style="margin-left:10px;">{{$t('i18nView.tittle')}}</span>
      </div>
      <div>
          <el-radio v-model="lang" label="zh" border>中文</el-radio>
          <el-radio v-model="lang" label="en" border>英文</el-radio>
      </div>
      <div>
        <el-tag style="margin-top:15px;dispaly:block;" type="info">{{$t('i18nView.content')}}</el-tag>
      </div>
    </el-card>
  </div>
</template>

<script>
import locale from './locale'
const viewName = 'i18nView'

export default {
  name: 'i18n',
  data () {
    return {

    }
  },
  created () {
    if (!this.$i18n.getLocaleMessage('en')[viewName]) {
      this.$i18n.mergeLocaleMessage('en', locale.en)
      this.$i18n.mergeLocaleMessage('zh', locale.zh)
    }
  },
  computed: {
    lang: {
      get () {
        return this.$store.state.app.language
      },
      set (lang) {
        this.$i18n.locale = lang
        this.$store.dispatch('setLanguage', lang)
      }
    }
  }
}
</script>

<style lang="css">
</style>
