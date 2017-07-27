<template>
  <div class="main-content">
    <h1 class="title">{{ msg }}</h1>
    <div class="url-box">
      <div class="form-group column col-6 has-icon-right">
        <label class="form-label url-title col-2" for="origin_url">原始链接</label>
        <input class="form-input" 
               :class="{'is-error': originUrlError, 'is-success': checkSuccess}" 
               type="url" 
               id="origin_url" 
               placeholder="https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome" 
               v-model="originUrl"/>
        <i class="form-icon loading" v-show="checkOriginUrl"></i>
      </div>
      <div class="form-group column col-3">
        <label class="form-label url-title col-3" for="origin_url">版本号</label>
        <input class="form-input" 
               :class="{'is-error': versionError, 'is-success': checkSuccess}" 
               type="float" 
               id="origin_url" 
               placeholder="0.0.1" 
               v-model="version"/>
      </div>
      <div class="form-group column col-3">
        <button class="btn transform-btn" @click="startCheck()">转换</button>
      </div>
    </div>
    <div class="url-box">
      <div class="form-group column col-6 has-icon-right">
        <label class="form-label url-title col-2" for="origin_url">下载链接</label>
        <input class="form-input" 
               :class="{'is-success': checkSuccess}" 
               type="url" 
               id="origin_url" 
               placeholder="https://msjsdiag.gallery.vsassets.io/_apis/public/gallery/publisher/msjsdiag/extension/debugger-for-chrome/3.1.6/assetbyname/Microsoft.VisualStudio.Services.VSIXPackage" 
               v-model="finalUrl"/>
        <i class="form-icon loading" v-show="checkFinalUrl"></i>
      </div>
      <div class="form-group column col-3">
        <button class="btn transform-btn tooltip tooltip-right" data-tooltip="复制到剪切板" @click="copy()"><i class="icon icon-download"></i></button>
      </div>
    </div>
    <div class="modal">
      <div class="modal-overlay"></div>
        <div class="modal-container">
          <div class="modal-header">
            <button class="btn btn-clear float-right"></button>
            <div class="modal-title">Modal title</div>
          </div>
          <div class="modal-body">
            <div class="content">
              <p>This is the content inside the modal.</p>
              <h4>Lorem ipsum</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet, feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.</p>
              <p>Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up on goofballs.</p>
              <h4>Cupcake ipsum</h4>
              <p>Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple pie carrot cake chocolate cake caramels.</p>
              <p>De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. Hi brains mindless mortuis limbic cortex soulless creaturas optic nerve.</p>
              <h4>Candy ipsum</h4>
              <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.</p>
              <p>Caerphilly swiss fromage frais. Brie cheese and wine fromage frais chalk and cheese danish fontina smelly cheese who moved my cheese cow.</p>
            </div>
          </div>
          <div class="modal-footer">
            <a href="#modals" class="btn btn-link">Close</a>
            <button class="btn btn-primary">Share</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'VS Code Extension 下载地址转换工具',
      originUrl: '',
      version: '',
      finalUrl: '',
      versionError: false,
      originUrlError: false,
      checkOriginUrl: false,
      checkSuccess: false,
      checkFinalUrl: false
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
      let publisher = this.originUrl.match(/itemName=(\S*)\./)[1]
      let extension_name = this.originUrl.match(/itemName=(\S*)/)[1].split('.')[1]
      let version   = this.version
      let regString = `https://${publisher}.gallery.vsassets.io/_apis/public/gallery/publisher/${publisher}/extension/${extension_name}/${version}/assetbyname/Microsoft.VisualStudio.Services.VSIXPackage`
      this.checkFinalUrl = true
      this.$http.get(regString)
      .then((ret) => {
        if (ret.status === 200) {
          this.checkFinalUrl = false
          this.checkSuccess = true
          this.finalUrl = regString
        }
      })
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
