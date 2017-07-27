<<template>
  <div class="modal" :class="{'active': show}">
    <div class="modal-overlay"></div>
      <div class="modal-container">
        <div class="modal-header">
          <button class="btn btn-clear float-right" @click="show=!show"></button>
          <div class="modal-title">如何使用</div>
        </div>
        <div class="modal-body">
          <div class="content" v-html="compiledMarkdown">
          </div>
        </div>
        <div class="modal-footer">
          <a href="#modals" class="btn btn-link" @click="show=!show">Close</a>
        </div>
      </div>
    </div>
  </div>
</template>
<<script>
import marked from 'marked'
export default {
  name: 'Help',
  props: ['show'],
  data () {
    return {
      helpContent: ''
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.getDoc()
    })
  },
  methods: {
    getDoc () {
      this.$http.get('https://github.com/noraincode/vscode-ext-transform/blob/master/README.md')
      .then((doc) => {
        this.helpContent = doc
      })
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.helpContent, { sanitize: true })
    }
  }
}
</script>

