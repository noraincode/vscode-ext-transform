<template>
  <div class="main-content">
    <h1 class="title">{{ msg }}</h1>
    <div class="url-box">
      <div class="form-group column col-xl-6 has-icon-right">
        <label class="form-label url-title col-xl-2" for="origin_url">原始链接</label>
        <input class="form-input"
               :class="{'is-error': originUrlError, 'is-success': checkSuccess}"
               type="url"
               id="origin_url"
               placeholder="https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome"
               v-model="originUrl"/>
        <i class="form-icon loading" v-show="checkOriginUrl"></i>
      </div>
      <div class="form-group column col-xl-3">
        <label class="form-label url-title col-xl-3" for="origin_url">版本号</label>
        <input class="form-input"
               :class="{'is-error': versionError, 'is-success': checkSuccess}"
               type="float"
               id="origin_url"
               placeholder="0.0.1"
               v-model="version"/>
      </div>
      <div class="form-group column col-xl-3">
        <button class="btn transform-btn" @click="startCheck()">转换</button>
      </div>
    </div>
    <div class="url-box">
      <div class="form-group column col-xl-6 has-icon-right">
        <label class="form-label url-title col-xl-2" for="origin_url">下载链接</label>
        <input class="form-input"
               :class="{'is-success': checkFinalSuccess}"
               type="url"
               id="origin_url"
               placeholder="转换后的下载链接"
               v-model="finalUrl"/>
      </div>
      <div class="form-group column col-xl-3">
        <button :disabled='!checkFinalSuccess' class="btn transform-btn tooltip tooltip-right" data-tooltip="复制到剪切板" @click="copy()"><i class="icon icon-download"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'VS Code 插件下载链接转换工具',
      originUrl: '',
      version: '',
      finalUrl: '',
      versionError: false,
      originUrlError: false,
      checkOriginUrl: false,
      checkSuccess: false,
      checkFinalSuccess: false
    }
  },
  methods: {
    startCheck () {
      if (!this.version || !_.isNumber(parseInt(this.version))) {
        this.versionError = true
        return
      }
      if (!this.originUrl) {
        this.originUrlError = true
        return
      }
      this.checkOriginUrl = true
      this.checkSuccess = false
      this.checkFinalSuccess = false
      this.finalUrl = ''
      // 检测原始地址是否有效
      this.$http.get(this.originUrl)
      .then((ret) => {
        if (ret.status === 200) {
          this.checkOriginUrl = false
          this.checkSuccess = true
        }
      })
      .then(() => {
        this.transformUrl()
      })
    },
    transformUrl () {
      this.versionError = this.originUrlError = false
      let publisher = this.originUrl.match(/itemName=(\S*)/)[1].split('.')[0]
      let extension_name = this.originUrl.match(/itemName=(\S*)/)[1].split('.')[1]
      let version   = this.version
      let regString = `https://${publisher}.gallery.vsassets.io/_apis/public/gallery/publisher/${publisher}/extension/${extension_name}/${version}/assetbyname/Microsoft.VisualStudio.Services.VSIXPackage`
      this.finalUrl = regString
      this.checkFinalSuccess = true
    },
    copy (url) {
      this.$clipboard(this.finalUrl)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-content{
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.main-content .title{
  text-align: center;
}
.url-box{
  display: flex;
  justify-content: flex-start;
}
.url-title{
  font-size: 18px;
  line-height: 25px;
  margin-left: 10px;
  margin-right: 10px;
}
.form-group{
  display: flex;
}
.transform-btn{
  margin-left: 5px;
}
.has-icon-right .form-icon {
    right: 10px;
}
</style>
