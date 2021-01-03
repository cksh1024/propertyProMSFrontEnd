<template>
    <div>
      <el-table
      :data="tableData"
       stripe
      style="width: 100%">
        <el-table-column
          prop="client_id"
          label="客户编号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="client_name"
          label="客户姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="client_level"
          label="客户等级">
        </el-table-column>
        <el-table-column
          prop="company_address"
          label="单位名称">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="联系电话">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱地址">
        </el-table-column>
        <!-- <el-table-column
      fixed="right"
      label="项目状态">
      <template slot-scope="scope">
         <el-button size= "mini" type="primary" round @click="check(scope.row)">点击查看</el-button>
      </template>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="文件下载">
      <template slot-scope="scope">
         <el-button size= "mini"  type="primary" round @click="download(scope.row)">点击下载</el-button>
      </template> -->
     <!-- </el-table-column> -->
      </el-table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
   props: ['check', 'download', 'goBack'], 
   data () {
        return {
          tableData: []
      }
   },
   methods: {
         showClient () {
          axios.post('lclgl/getCusByCusId')
          .then(res => {
            console.log(res.data)
            this.tableData = res.data.cus
          })
          .catch(err => {
            console.log(err)
          })
        }
   },
   mounted () {
      this.showClient()
   }
}
</script>

<style>

</style>
