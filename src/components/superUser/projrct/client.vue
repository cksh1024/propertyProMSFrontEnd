<template>
  <div>
    <el-table
    :data="customer"
    stripe
    style="width: 100%">
    <el-table-column
      prop="cus_id"
      label="客户编号"
      width="200">
    </el-table-column>
    <el-table-column
      prop="cus_name"
      label="客户姓名"
      width="200">
    </el-table-column>
    <el-table-column
      prop="cus_company"
      label="客户公司"
      width="200">
    </el-table-column>
    <el-table-column
      prop="cus_company"
      label="客户公司"
      width="200">
    </el-table-column>    
    <el-table-column
      prop="cus_phone"
      label="公司电话"
      width="200">
    </el-table-column>
    <el-table-column
      prop="cus_email"
      label="公司邮箱"
      width="200">
    </el-table-column>
     <el-table-column
      prop="cus_level"
      
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.cus_level === '一等' ? 'primary' : 'success'"
          disable-transitions>{{scope.row.cus_level}}</el-tag>
      </template>
    </el-table-column>

  </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      customer: [{
        cus_id: 1001,
        cus_name: '马云',
        cus_company: '阿里巴巴',
        cus_phone: '110',
        cus_email: 'asdffd',
        cus_level: '一等'
      }, {
        cus_id: 1001,
        cus_name: '马云',
        cus_company: '阿里巴巴',
        cus_phone: '110',
        cus_email: 'asdffd',
        cus_level: '二等'
      }]
    }
  }
}
</script>

<style>

</style>
