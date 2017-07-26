<template>
  <div class="main-content">
    <h1 class="title">{{ msg }}</h1>
    <div class="url-box form-group">
      <label class="form-label url-title" for="origin_url">原始链接</label>
      <input class="form-input column col-6" type="text" id="origin_url" placeholder="Name" />
      <label class="form-label url-title" for="origin_url">版本号</label>
      <input class="form-input column col-3" type="text" id="origin_url" placeholder="0.0.1" />
      <button class="btn transform-btn">转换</button>
    </div>
    <div class="url-box form-group">
      <label class="form-label url-title" for="origin_url">下载链接</label>
      <input class="form-input column col-6" type="text" id="origin_url" placeholder="Name" />
      <button class="btn transform-btn"><i class="icon icon-download"></i></button>
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
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'VS Code Extension 下载地址转换工具'
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
  margin-bottom: 20px;
}
.url-title{
  font-size: 18px;
  line-height: 25px;
  margin-left: 10px;
  margin-right: 10px;
}
.transform-btn{
  margin-left: 5px;
}
</style>
