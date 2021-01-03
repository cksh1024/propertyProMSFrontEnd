<template>
<div>
    <div>
    <el-row :gutter="20">
    <el-col v-for="(car,index) in web_card_data" :key="index" :span="12">
        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <span>
              <i :class="car.card_title_icon" />
              {{car.card_title}}
            </span>
            <div id="cycle" :style="{backgroundColor:car.card_cycle_back_color}">{{car.card_cycle}}</div>
          </div>
          <div>
            <h1 style="font-size:150%;color:#909399">{{car.vist_num}}</h1>
            <br />
            <p style="float:left;color:#909399">{{car.bottom_title}}</p>
            <p style="float:right;color:#909399">
              {{car.vist_all_num}}
              <i :class="car.vist_all_icon" />
            </p>
          </div>
          <br />
        </el-card>
      </el-col>
      </el-row>
      </div>
  <el-row :gutter="20">
    <el-col
      :span="4"
      style="margin-top: 10px">  
    </el-col>
  </el-row>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      web_card_data: [{
        card_title_icon: 'el-icon-folder',
        card_title: '已完成项目数',
        card_cycle: '个',
        card_cycle_back_color: 'green',
        vist_num: '',
        vist_all_icon: 'el-icon-folder'
        }, {
        card_title_icon: 'el-icon-folder',
        card_title: '当前项目数',
        card_cycle: '个',
        card_cycle_back_color: 'red',
        vist_num: '',
        vist_all_icon: 'el-icon-folder'
        }]
    }
  },
  methods: {
    showProNum () {
      axios.post('lclgl/showProNum')
      .then(res => {
        this.web_card_data[0].vist_num = res.data.finishedNum
        this.web_card_data[1].vist_num = res.data.currentNum
      })
    }
  },
  mounted () {
    this.showProNum()
  }
}
</script>

<style>
#cycle {
  width: 30px;
  height: 25px;
  float: right;
  border-radius: 3px;
  color: white;
  padding-left: 10px;
}
</style>
