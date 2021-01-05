<template>
  <div>
    <el-table
    :data="customer"
    stripe
    style="width: 100%">
    <el-table-column
      prop="cusId"
      label="客户编号"
      width="200">
    </el-table-column>
    <el-table-column
      prop="cusName"
      label="客户姓名"
      width="200">
    </el-table-column>
    <el-table-column
      prop="cusSex"
      label="客户性别"
      width="200">
    </el-table-column>
    <el-table-column
      prop="cusCompany"
      label="客户公司"
      width="200">
    </el-table-column>    
    <el-table-column
      prop="cusPhone"
      label="公司电话"
      width="200">
    </el-table-column>
    <el-table-column
      prop="cusEmail"
      label="公司邮箱"
      width="200">
    </el-table-column>
     <el-table-column
      label="客户等级"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.cus_level === '一等' ? 'primary' : 'success'"
          disable-transitions v-text="scope.row.cusLevel"></el-tag>
      </template>
    </el-table-column>

  </el-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      customer: []
    }
  },
  mounted () {
    axios.post('lclgl/getCustomers')
    .then(res => {
        this.customer = res.data.customers
        console.log(this.customer)
    })
    .catch(err => {
        console.log(err)
    })
  }
}
</script>

<style>

</style>
