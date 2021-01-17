<template>
  <div>
    <div>
    <el-row :gutter="20">
    <el-col v-for="(car,index) in web_card_data" :key="index" :span="10">
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
      <br><br>
      <div>
        <el-col :span="10">
          <div id="chart" style="width:100%;height:400px;"></div>
        </el-col>
        <el-col :span="10"><div id="chart1" style="width:100%;height:400px;"></div></el-col>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            value: [],
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
      getrateData () {
        axios.post('lclgl/getRateData')
        .then(res => {
          this.init(res.data.RateData)
        })
      },
      getSalaryData () {
        axios.post('lclgl/getSalaryData')
        .then(res => {
          console.log(res.data.SalaryData)
          this.init2(res.data.SalaryData)
        })
      },
      showProNum () {
      axios.post('lclgl/showProNum')
      .then(res => {
        this.web_card_data[0].vist_num = res.data.finishedNum
        this.web_card_data[1].vist_num = res.data.currentNum
      })
      },
      init (RateData) {
        var myChart = this.$echarts.init(document.getElementById('chart'))
        let Months = []
        let ratedata = []
        for (let index in RateData) {
          Months.push(RateData[index].gradeMonth)
          ratedata.push(RateData[index].gradeLevel)
        }
        myChart.setOption({
            title: {
                text: '满意度评级表',
                x: 'center',
                y: 'top',
                textAlign: 'left'
            },
            tooltip: {},
            xAxis: {
                data: Months
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: '满意度',
                type: 'line',
                data: ratedata
              }]
          })
      },
      init2 (SalaryData) {
        var myChart1 = this.$echarts.init(document.getElementById('chart1'))
        let months = []
        let salary = []
        for (let index in SalaryData) {
          months.push(SalaryData[index].salaryMonth)
          salary.push(SalaryData[index].salary)
        }
        myChart1.setOption({
            title: {
                text: '工资表',
                x: 'center',
                y: 'top',
                textAlign: 'left'
            },
            tooltip: {},
            xAxis: {
                data: months
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: '工资',
                type: 'line',
                data: salary
              }]
          })
      }
    },
    mounted () {
      this.showProNum()
      this.getrateData()
      this.getSalaryData()
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
