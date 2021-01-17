<template>
  <div>
    <el-row :gutter="20">
      <el-col v-for="(car,index) in web_card_data" :key="index" :span="6">
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
</template>

<script>
import axios from 'axios'
export default{
  data () {
    return {
      web_card_data: [
        {
          card_title_icon: 'el-icon-user',
          card_title: '公司人员',
          card_cycle: '位',
          card_cycle_back_color: '#409EFF',
          bottom_title: '总人数',
          vist_num: 0,
          vist_all_icon: 'el-icon-user'
        }, {
          card_title: '公司流动资产',
          card_cycle: '万',
          card_cycle_back_color: 'red',
          bottom_title: '总金额',
          vist_num: Math.ceil(Math.random() * 1000),
          vist_all_icon: 'el-icon-coin'
        }, {
          card_title: '正在进行项目数',
          card_cycle: '件',
          card_cycle_back_color: 'green',
          bottom_title: '项目数',
          vist_num: Math.ceil(Math.random() * 10),
          vist_all_icon: 'el-icon-s-cooperation'
        }, {
          card_title: '总完成项目数',
          card_cycle: '件',
          card_cycle_back_color: 'yellow',
          bottom_title: '项目数',
          vist_num: Math.ceil(Math.random() * 10),
          vist_all_icon: 'el-icon-s-check'
        }]
    }
  },
  methods: {
    getcardsInfos () {
      axios.post('/lclgl/getCardsinfos')
      .then(res => {
          this.web_card_data[0].vist_num = res.data.staffNum
          this.web_card_data[2].vist_num = res.data.CurrentPros
          this.web_card_data[3].vist_num = res.data.FinishedPros
      })
    }
  },
  mounted () {
    this.getcardsInfos()
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
