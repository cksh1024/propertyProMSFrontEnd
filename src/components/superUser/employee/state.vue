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
            <h1 style="font-size:150%;color:#909399">{{car.vistNum}}</h1>
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
      v-for="(item, index) in staff_state"
      :key="index"
      style="margin-top: 10px">
        <el-card shadow="hover">
          <div slot="header" align="center">
            {{item.userName}}
          </div>
          <div align="center">
            <el-switch
            style="display: block"
            v-model="item.value"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="工作中"
            inactive-text="休息中">
            </el-switch>
          </div>
        </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  data () {
    return {
      staff_state: [{
        userId: 2020001,
        userName: '史蒂夫',
        value: 2
      }],
      web_card_data: [{
        card_title_icon: 'el-icon-user-solid',
        card_title: '工作中人数',
        card_cycle: '位',
        card_cycle_back_color: 'green',
        bottom_title: '总人数',
        vistNum: 20,
        vist_all_icon: 'el-icon-user-solid'
        }, {
        card_title_icon: 'el-icon-user',
        card_title: '休息中人数',
        card_cycle: '位',
        card_cycle_back_color: 'red',
        bottom_title: '总人数',
        vistNum: 1,
        vist_all_icon: 'el-icon-user'
        }]
    }
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
