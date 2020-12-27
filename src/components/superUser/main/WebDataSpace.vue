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
export default {
  data () {
    return {}
  },
  methods: {
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
              Math.ceil(Math.random() * 1000),
              Math.ceil(Math.random() * 1000),
              Math.ceil(Math.random() * 1000),
              Math.ceil(Math.random() * 1000),
              Math.ceil(Math.random() * 1000),
              Math.ceil(Math.random() * 1000),
              Math.ceil(Math.random() * 1000),
              Math.ceil(Math.random() * 1000),
              Math.ceil(Math.random() * 1000),
              Math.ceil(Math.random() * 1000),
              Math.ceil(Math.random() * 1000),
              Math.ceil(Math.random() * 1000)
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
              Math.ceil(Math.random() * -600),
              Math.ceil(Math.random() * -600),
              Math.ceil(Math.random() * -600),
              Math.ceil(Math.random() * -600),
              Math.ceil(Math.random() * -600),
              Math.ceil(Math.random() * -600),
              Math.ceil(Math.random() * -600),
              Math.ceil(Math.random() * -600),
              Math.ceil(Math.random() * -600),
              Math.ceil(Math.random() * -600),
              Math.ceil(Math.random() * -600),
              Math.ceil(Math.random() * -600)
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
              { value: 1, name: '老板' },
              { value: 1, name: '前台' },
              { value: 3, name: '主管' },
              { value: 5, name: '熟手' },
              { value: 8, name: '学员' }
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
    this.drawLine()
    this.label_vist()
  }
}
</script>

<style scoped>
.card {
  min-height: 50vh;
}
</style>
