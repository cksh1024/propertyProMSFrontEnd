<template>
  <el-card shadow="never" class="card">
    <div slot="header" class="clearfix">
      <span>网站数据</span>
    </div>
    <div>
      <el-row :gutter="20">
        <el-col :span="16">
          <div id="myChart" style="width:100%;height:400px"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple" id="label_vist" style="width:100%;height:400px"></div>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      Jan: 0,
      Feb: 0,
      Mar: 0,
      Apri: 0,
      May: 0,
      Jane: 0,
      July: 0,
      Aug: 0,
      Sep: 0,
      Oct: 0,
      Nov: 0,
      Dec: 0,
      SuperuserNum: 0,
      managerNum: 0,
      frontDestNum: 0,
      OldHandNum: 0,
      NewHandNum: 0
    }
  },
  methods: {
    getchartsInfos () {
      axios.post('/lclgl/getChartsInfos')
      .then(res => {
        this.SuperuserNum = res.data.RoundChart.SuperuserNum
        this.managerNum = res.data.RoundChart.Manager
        this.frontDestNum = res.data.RoundChart.FrontNum
        this.OldHandNum = res.data.RoundChart.OldHand
        this.NewHandNum = res.data.RoundChart.NewHand
        this.Jan = res.data.CostChart.Jan
        this.Feb = res.data.CostChart.Feb
        this.Mar = res.data.CostChart.Mar
        this.Apri = res.data.CostChart.Apri
        this.May = res.data.CostChart.May
        this.Jane = res.data.CostChart.Jane
        this.July = res.data.CostChart.July
        this.Aug = res.data.CostChart.Aug
        this.Sep = res.data.CostChart.Sep
        this.Oct = res.data.CostChart.Oct
        this.Nov = res.data.CostChart.Nov
        this.Dec = res.data.CostChart.Dec
        console.log(res.data.CostChart)
        this.drawLine()
        this.label_vist()
      })
    },
    drawLine () {
      let myChart = this.$echarts.init(
        document.getElementById('myChart'),
        'macarons'
      )
      myChart.setOption({
        title: {
          text: '公司收益状况',
          subtext: 'bear real agency'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['访问量', '登录人数']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: [
              '一月',
              '二月',
              '三月',
              '四月',
              '五月',
              '六月',
              '七月',
              '八月',
              '九月',
              '十月',
              '十一月',
              '十二月'
            ]
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '收益',
            type: 'bar',
            data: [
              0,
              200000,
              90000,
              120000,
              150000,
              130000,
              0,
              120000,
              120000,
              90000,
              150000,
              140000
            ],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: '平均值' }]
            }
          },
          {
            name: '支出',
            type: 'bar',
            data: [
              this.Jan * -1,
              this.Feb * -1,
              this.Mar * -1,
              this.Apri * -1,
              this.May * -1,
              this.Jane * -1,
              this.July * -1,
              this.Aug * -1,
              this.Sep * -1,
              this.Oct * -1,
              this.Nov * -1,
              this.Dec * -1
            ],
            markPoint: {
              data: [
                { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },
                { name: '年最低', value: 800, xAxis: 11, yAxis: 3 }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: '平均值' }]
            }
          }
        ]
      })
    },
    label_vist () {
      let myChart = this.$echarts.init(
        document.getElementById('label_vist'),
        'macarons'
      )
      myChart.setOption({
        title: {
          text: '公司员工构成',
          subtext: 'bear real agency',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['老板', '前台', '主管', '熟手', '学员']
        },
        series: [
          {
            name: '用户类别',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: this.SuperuserNum, name: '老板' },
              { value: this.frontDestNum, name: '前台' },
              { value: this.managerNum, name: '主管' },
              { value: this.OldHandNum, name: '熟手' },
              { value: this.NewHandNum, name: '学员' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    }
  },
  mounted () {
    this.getchartsInfos()
  }
}
</script>

<style scoped>
.card {
  min-height: 50vh;
}
</style>
